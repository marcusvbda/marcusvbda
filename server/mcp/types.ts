export interface Message {
    role: 'user' | 'assistant' | 'system';
    content: string;
    timestamp: Date;
}

export interface Tool {
    [key: string]: {
        description: string;
        inputSchema?: any;
        outputSchema: any;
        handler: (input: any) => Promise<any>;
    }
}
