const bcrypt = require('bcrypt');

export default async function (prisma: any) {
	await prisma.$executeRawUnsafe(
		`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`
	);
	const username = process.env.ROOT_ADMIN_USER;
	const password = await bcrypt.hash(process.env.ROOT_ADMIN_PASSWORD, 10);

	return await prisma.user.createMany({
		data: [{ username, password }],
	});
}
