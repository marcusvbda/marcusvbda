import personInfoTool from "./tools/personalInfo";
import type { Tool, ToolDefinition, JsonRpcRequest, JsonRpcResponse, McpInitializeParams, McpInitializeResult, McpToolsListResult, McpToolsCallParams, McpToolsCallResult } from "./types.js";

class McpServer {
    private tools: Tool = {
        ...personInfoTool
    };

    setTools(tools: Tool): void {
        this.tools = tools;
    }

    private listTools(): ToolDefinition[] {
        return Object.values(this.tools);
    }

    private async executeTool(name: string, args: any): Promise<McpToolsCallResult> {
        const tool = this.tools[name];
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

    // MCP protocol methods
    async handleInitialize(params: McpInitializeParams): Promise<McpInitializeResult> {
        return {
            protocolVersion: params.protocolVersion || "2024-11-05",
            capabilities: {
                tools: {}
            },
            serverInfo: {
                name: "general-mcp-server",
                version: "1.0.0"
            }
        };
    }

    handleToolsList(): McpToolsListResult {
        const tools = this.listTools();
        return {
            tools: tools.map(tool => ({
                name: tool.name,
                description: tool.description,
                inputSchema: tool.inputSchema
            }))
        };
    }

    async handleToolsCall(params: McpToolsCallParams): Promise<McpToolsCallResult> {
        if (!params.name) {
            return {
                content: [
                    { type: "text", text: "Error: Missing tool name" }
                ],
                isError: true
            };
        }

        return await this.executeTool(params.name, params.arguments || {});
    }

    // JSON-RPC handler
    async handleJsonRpc(request: JsonRpcRequest): Promise<JsonRpcResponse> {
        try {
            let result: any;

            switch (request.method) {
                case "initialize":
                    result = await this.handleInitialize(request.params || {});
                    break;
                case "tools/list":
                    result = this.handleToolsList();
                    break;
                case "tools/call":
                    if (!request.params) {
                        throw new Error("Missing params for tools/call");
                    }
                    result = await this.handleToolsCall(request.params);
                    break;
                default:
                    throw new Error(`Unknown method: ${request.method}`);
            }

            return {
                jsonrpc: "2.0",
                id: request.id,
                result
            };
        } catch (error: any) {
            return {
                jsonrpc: "2.0",
                id: request.id,
                error: {
                    code: -32603,
                    message: error.message || "Internal error",
                    data: error
                }
            };
        }
    }
}

const mcpServer = new McpServer();
export default mcpServer;

