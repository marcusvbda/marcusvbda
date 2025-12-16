import { Tool } from "../types";

const personInfoTool: Tool = {
    user: {
        name: "user",
        description: "Get the current user's name.",
        inputSchema: {
            type: "object",
            properties: {}
        },
        handler: async () => {
            return {
                content: [
                    { type: "text", text: 'Vinicius' }
                ]
            }
        }
    }
}

export default personInfoTool;