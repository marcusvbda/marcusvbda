import { Tool } from "../types";
import db from '@/lib/db';

const personalInfoTool: Tool = {
    getPersonalInfo: {
        description: "Get the current user's personal information.",
        outputSchema: {
            type: "object",
            properties: { type: "json", data: "{}" }
        },
        handler: async () => {
            const components = [
                'hero',
                'info',
                'about',
                'experience',
                'skills',
                'education',
            ];

            const comps = await (db as any)?.component.findMany({
                where: {
                    name: { in: components },
                },
                include: {
                    fields: true,
                },
            });
            return { type: "json", data: comps }
        },
    }
}

export default personalInfoTool;