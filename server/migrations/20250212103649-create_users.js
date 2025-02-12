require('dotenv').config({
	path: '.env.local',
});

// const bcrypt = require('bcrypt');

module.exports = {
	async up(db, client) {
		// const hashedPassword = await bcrypt.hash(
		// 	process.env.ADMIN_PASSWORD,
		// 	Number(process.env.PASSWORD_SALT_ROUNDS)
		// );

		await db.createCollection('users');
		// await db.collection('users').insertOne({
		// 	name: 'Marcus Vinicius Bassalobre de Assis',
		// 	email: 'bassalobre.vinicius@gmail.com',
		// 	password: hashedPassword,
		// 	role: 'admin',
		// 	createdAt: new Date(),
		// });
	},
	async down(db, client) {
		await db.collection('users').drop();
	},
};
