// MCP Tool types (following official specification)
export type ToolParameterProperty = {
    type: string;
    description?: string;
    [key: string]: any;
}

export type ToolInputSchema = {
    type: "object";
    properties: {
        [key: string]: ToolParameterProperty;
    };
    required?: string[];
}

export type ToolDefinition = {
    name: string;
    description: string;
    inputSchema: ToolInputSchema;
    handler: (args: any) => Promise<ToolResult>;
}

export type Tool = {
    [key: string]: ToolDefinition;
}

export type ToolResult = {
    content: Array<{
        type: "text";
        text: string;
    }>;
    isError?: boolean;
}

// JSON-RPC types
export type JsonRpcRequest = {
    jsonrpc: "2.0";
    id: string | number | null;
    method: string;
    params?: any;
}

export type JsonRpcResponse = {
    jsonrpc: "2.0";
    id: string | number | null;
    result?: any;
    error?: {
        code: number;
        message: string;
        data?: any;
    };
}

// MCP protocol types
export type McpInitializeParams = {
    protocolVersion: string;
    capabilities?: Record<string, any>;
    clientInfo?: {
        name: string;
        version: string;
    };
}

export type McpInitializeResult = {
    protocolVersion: string;
    capabilities: {
        tools?: {};
    };
    serverInfo: {
        name: string;
        version: string;
    };
}

export type McpTool = {
    name: string;
    description: string;
    inputSchema: ToolInputSchema;
}

export type McpToolsListResult = {
    tools: McpTool[];
}

export type McpToolsCallParams = {
    name: string;
    arguments?: any;
}

export type McpToolsCallResult = {
    content: Array<{
        type: "text";
        text: string;
    }>;
    isError?: boolean;
}