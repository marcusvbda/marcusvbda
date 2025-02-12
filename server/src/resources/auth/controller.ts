import { User } from './models';

export default {
	async checkEmail(req: any, res: any) {
		const { email } = req.query;
		if (!email) return res.status(400).json({ error: 'Email is required' });
		const user = await User.findOne({ email });
		if (user) return res.json(false);
		return res.json(true);
	},
};
