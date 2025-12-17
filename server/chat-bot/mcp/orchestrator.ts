import mcpServer from "./server";
import OpenAI from "openai";

export const askLLM = async (messageList: any) => {
    const client = new OpenAI({
        apiKey: process.env.OPEN_AI_API_KEY!,
        baseURL: process.env.OPEN_AI_BASE_URL!
    });

    const toolList = mcpServer.getToolList();

    let messages: any[] = messageList.map((message: any) => ({
        role: message.role,
        content: message.content,
    }))

    let counterMaxIterations = 10;
    while (counterMaxIterations >= 0) {
        counterMaxIterations--;
        const intent: any = await getLLMIntent(messages, toolList, client);
        if (!intent?.tool_calls || intent.tool_calls.length === 0) {
            return parseResponse(intent);
        }

        messages.push(intent);
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

                const result = await handleToolsCall(
                    action.name,
                    parsedArgs,
                );

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

        messages.push(...toolResults);
    }

    return messages;
}

const getLLMIntent = async (messages: any, tools: any, client: OpenAI) => {
    const response = await client.chat.completions.create({
        model: process.env.OPEN_AI_MODEL!,
        messages,
        tools,
        tool_choice: "auto",
    });

    if (!response.choices) {
        console.log(response);
    }
    return response.choices[0]?.message;
}

const parseResponse = (intent: any): any => {
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

const handleToolsCall = async (name: string, args: any): Promise<any> => {
    if (!name) {
        return {
            content: [
                { type: "text", text: "Error: Missing tool name" }
            ],
            isError: true
        };
    }

    return await executeTool(name, args || {});
}


const executeTool = async (toolName: string, args: any): Promise<any> => {
    const tool = mcpServer.getTool(toolName);

    if (!tool) {
        return {
            content: [
                { type: "text", text: `Error: Tool '${name}' not found` }
            ],
            isError: true
        };
    }

    try {
        const result = await tool.handler(args);
        return result;
    } catch (error: any) {
        return {
            content: [
                { type: "text", text: `Error executing tool: ${error.message || String(error)}` }
            ],
            isError: true
        };
    }
}