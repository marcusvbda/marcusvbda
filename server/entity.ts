'use server';

import { PrismaClient } from "@prisma/client";

export const findEntityById = async (entity: string, id: any) => {
	const prisma = new PrismaClient();
	return await (prisma as any)?.[entity]?.findUnique({
		where: { id: Number(id) },
	});
};
