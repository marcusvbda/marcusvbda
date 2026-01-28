const bcrypt = require('bcrypt');

export default async function (prisma: any) {
	// Set a longer statement timeout for TRUNCATE operations (5 minutes)
	await prisma.$executeRawUnsafe(
		`SET statement_timeout = '300s';`
	);
	
	await prisma.$executeRawUnsafe(
		`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`
	);
	const username = process.env.ROOT_ADMIN_USER;
	const password = await bcrypt.hash(process.env.ROOT_ADMIN_PASSWORD, 10);

	return await prisma.user.createMany({
		data: [{ username, password }],
	});
}
