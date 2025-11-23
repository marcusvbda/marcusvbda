'use server';

import db from "@/lib/db";

export const findEntityById = async (entity: string, id: any) => {
	return await (db as any)?.[entity]?.findUnique({
		where: { id: Number(id) },
	});
};
