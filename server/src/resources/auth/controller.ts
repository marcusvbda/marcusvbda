import { User } from './models';
const crypto = require('crypto');

const controller = {
	async checkEmail(req: any, res: any) {
		const { email } = req.query;
		if (!email) return res.status(400).json({ error: 'Email is required' });
		const user = await User.findOne({ email });
		if (user) return res.json(false);
		return res.json(true);
	},
	generateConfirmationCode(base: string, email: string) {
		const key = `${base}-${email}-${process.env.SECRET_KEY}`;
		const hash = crypto.createHash('md5').update(key).digest('hex');
		return hash.substring(0, 6).toUpperCase();
	},
	async sendConfirmationCode(req: any, res: any) {
		const { base, email } = req.body;
		const code = controller.generateConfirmationCode(base, email);
		console.log(`Send code ${code} to email`);
		return res.json(true);
	},
	async validateCode(req: any, res: any) {
		const { base, email, code } = req.body;
		const oldCode = controller.generateConfirmationCode(base, email);
		return res.json(oldCode === code);
	},
};

export default controller;
