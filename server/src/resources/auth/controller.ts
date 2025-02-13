import locales from '../../locales';
import { sendEmail } from '../../lib/mailer';
import { User } from './models';
import crypto from 'crypto';
import bcrypt from 'bcrypt';

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
		const { base, email, locale } = req.body;
		const code = controller.generateConfirmationCode(base, email);
		const result = await sendEmail({
			to: [{ email }],
			subject: 'Confirm email',
			htmlContent: locales.get('messageCheckCode', locale, { code }),
		});
		return res.json(result);
	},
	async validateCode(req: any, res: any) {
		const { base, email, code } = req.body;
		const oldCode = controller.generateConfirmationCode(base, email);
		return res.json(oldCode === code);
	},
	async storeUser(req: any, res: any) {
		const { codeResult, email, fullName, nickName, password } = req.body;
		const generatedCode = controller.generateConfirmationCode(
			codeResult.base,
			email
		);

		const oldUser = await User.findOne({ email });
		if (
			generatedCode !== codeResult.typed ||
			!email ||
			!fullName ||
			!nickName ||
			!password ||
			oldUser
		) {
			return res.status(400).json({ success: false });
		}

		const hashedPassword = await bcrypt.hash(
			process.env.ADMIN_PASSWORD,
			Number(process.env.PASSWORD_SALT_ROUNDS)
		);

		const newUser = new User({
			email,
			fullName,
			nickName,
			password: hashedPassword,
		});
		await newUser.save();

		return res.json({ success: true });
	},
};

export default controller;
