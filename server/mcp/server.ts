import personalInfoTool from "./tools/personalInfo";
import { Tool } from "./types";

const mcpServer = {
    tools: {
        ...personalInfoTool
    },
    getTool: (toolName: string) => {
        return mcpServer.tools[toolName];
    },
    getToolList: () => {
        return Object.keys(mcpServer.tools).map((toolName: string) => {
            const tool = mcpServer.tools[toolName];
            return {
                type: "function",
                function: {
                    name: toolName,
                    description: tool.description,
                    parameters: tool.inputSchema || {
                        type: "object",
                        properties: {}
                    }
                },
            }
        });
    }
}

export default mcpServer;