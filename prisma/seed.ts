import { PrismaClient, Prisma } from '@prisma/client';
import init from './seeds/init';

const prisma = new PrismaClient();

export async function main() {
	await Promise.all([init(prisma)]);
}

main();
