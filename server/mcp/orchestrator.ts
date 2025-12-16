"use server";

import OpenAI from "openai";
import type { ToolDefinition } from "./types";
import mcpServer from "./server";

type Message = {
    role: "system" | "user" | "assistant" | "tool";
    content?: string | null;
    name?: string;
    tool_call_id?: string;
    tool_calls?: ToolCall[];
}

type ToolCall = {
    id: string;
    type: "function";
    function: {
        name: string;
        arguments: string | object;
    };
}

type ParsedResponse =
    | { type: "json"; data: any }
    | { type: "text"; text: string }
    | { type: "error"; text: string };

const model = process.env.OPEN_AI_MODEL!;
const openaiClient = new OpenAI({
    apiKey: process.env.OPEN_AI_API_KEY!,
    baseURL: process.env.OEPN_AI_BASE_URL!
});

// You can adjust these as needed; make parameters if you want customization per call
const assistantDescriptionDefault = "Você é um assistente de IA que responde perguntas sobre o usuario. Seu nome é TARS - se for pedido JSON, responda APENAS o JSON, nada além disso.";
const maxIterationsDefault = 10;

async function askLLM(
    client: OpenAI,
    model: string,
    messages: Message[],
    tools: Omit<ToolDefinition, 'handler'>[]
): Promise<Message> {
    const response = await client.chat.completions.create({
        model,
        messages: messages as any,
        tools: tools.map((tool) => ({
            type: "function",
            function: {
                name: tool.name,
                description: tool.description,
                parameters: tool.inputSchema,
            },
        })),
        tool_choice: "auto",
    });
    return response.choices[0]?.message as Message;
}

function parseResponse(intent: any): ParsedResponse {
    let content = intent?.content;
    if (Array.isArray(content) && content.length > 0) {
        if (content[0]?.text) {
            content = content[0].text;
        } else if (content[0]?.type === 'text' && content[0]?.text) {
            content = content[0].text;
        } else {
            content = JSON.stringify(content);
        }
    }
    if (!content) {
        content = intent?.text || "No response";
    }
    if (typeof content === 'string') {
        const cleanedContent = content
            .replace(/^```json\s*/i, '')
            .replace(/^```\s*/, '')
            .replace(/\s*```$/g, '')
            .trim();
        try {
            const parsedContent = JSON.parse(cleanedContent);
            return { type: "json", data: parsedContent };
        } catch (e) {
            return { type: "text", text: content };
        }
    }
    if (typeof content === 'object' && content !== null) {
        return { type: "json", data: content };
    }
    return { type: "text", text: String(content) };
}

// Server Action: main orchestrator "ask" function
export async function askOrchestrator(prompt: string, options?: {
    model?: string,
    assistantDescription?: string,
    maxIterations?: number,
    history?: Message[]
}): Promise<ParsedResponse> {
    const modelToUse = options?.model ?? model;
    const assistantDescription = options?.assistantDescription ?? assistantDescriptionDefault;
    const maxIterations = options?.maxIterations ?? maxIterationsDefault;
    let history = options?.history ?? [];

    const toolsList = await mcpServer.handleToolsList();
    const tools = toolsList.tools;

    const messages: Message[] = [
        {
            role: "system",
            content: assistantDescription,
        },
        ...history,
        {
            role: "user",
            content: prompt,
        },
    ].filter((x): x is Message => x.content !== null && x.content !== undefined);

    let counterMaxIterations = maxIterations;
    let workingHistory = [...history];
    let messageStack = [...messages];
    while (counterMaxIterations > 0) {
        counterMaxIterations--;
        const intent = await askLLM(openaiClient, modelToUse, messageStack, tools);

        // Emulate previous history push logic if needed
        workingHistory.push(...messageStack);

        if (!intent?.tool_calls || intent.tool_calls.length === 0) {
            return parseResponse(intent);
        }
        messageStack.push(intent);
        const toolResults = [];
        for (const tool_call of intent.tool_calls) {
            const action: any = tool_call?.function;
            if (action?.name) {
                let parsedArgs = action.arguments;
                if (typeof action.arguments === 'string') {
                    try {
                        parsedArgs = JSON.parse(action.arguments);
                    } catch (e) {
                        parsedArgs = action.arguments;
                    }
                }

                const result = await mcpServer.handleToolsCall({
                    name: action.name,
                    arguments: parsedArgs
                });

                let resultText = '';
                if (result.content && result.content.length > 0) {
                    resultText = result.content[0].text || JSON.stringify(result.content);
                } else {
                    resultText = JSON.stringify(result);
                }
                toolResults.push({
                    tool_call_id: tool_call.id,
                    role: "tool" as const,
                    name: action.name,
                    content: resultText,
                });
            }
        }
        messageStack.push(...toolResults);
    }
    return { type: "error", text: "Maximum iterations reached" };
}

