const bcrypt = require('bcrypt');

export default async function (prisma: any) {
	await prisma.$queryRaw`TRUNCATE TABLE "User" CASCADE`;
	const username = process.env.ROOT_ADMIN_USER;
	const password = await bcrypt.hash(process.env.ROOT_ADMIN_PASSWORD, 10);

	return await prisma.user.createMany({
		data: [{ username, password }],
	});
}
