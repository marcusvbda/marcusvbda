import { PrismaClient, Prisma } from '@prisma/client';
import init from './seeds/init';
import createContent from './seeds/createContent';

const prisma = new PrismaClient();

export async function main() {
	await Promise.all([
		init(prisma),
		createContent(prisma)
	]);
}

main();
