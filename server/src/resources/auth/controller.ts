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
		const key = `${base}-${email}-${process.env.SECRET_KEY!}`;
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
	async oauthProviderRedirect(req: any, res: any) {
		const { provider } = req.params;
		const actions: any = {
			google: controller.oAuthGoogleRedirect,
			apple: controller.oAuthAppleRedirect,
		};

		if (!actions[provider]) {
			return res.status(400).json({ error: 'Unsupported provider' });
		}

		return actions[provider](req, res);
	},
	makeProviderCallbackRoute(req: any, provider: string) {
		return `${req.protocol}://${req.get(
			'host'
		)}/api/auth/oauth-provider-callback/{provider}`;
	},
	oAuthAppleRedirect(req: any, res: any) {
		const authUrl = new URL('https://appleid.apple.com/auth/authorize');
		authUrl.searchParams.set('client_id', process.env.APPLE_CLIENT_ID!);
		authUrl.searchParams.set(
			'redirect_uri',
			controller.makeProviderCallbackRoute(req, 'apple')
		);
		authUrl.searchParams.set('response_type', 'code');
		authUrl.searchParams.set('scope', 'email');
		authUrl.searchParams.set('state', crypto.randomBytes(16).toString('hex'));
		return res.redirect(authUrl.toString());
	},
	oAuthGitHubRedirect(req: any, res: any) {
		let authUrl = new URL('https://github.com/login/oauth/authorize');
		authUrl.searchParams.set('client_id', process.env.GITHUB_CLIENT_ID!);
		authUrl.searchParams.set(
			'redirect_uri',
			controller.makeProviderCallbackRoute(req, 'github')
		);
		return res.redirect(authUrl.toString());
	},
	oAuthXRedirect(req: any, res: any) {
		let authUrl = new URL('https://twitter.com/i/oauth2/authorize');
		authUrl.searchParams.set('response_type', 'code');
		authUrl.searchParams.set('client_id', process.env.X_CLIENT_ID!);
		authUrl.searchParams.set(
			'redirect_uri',
			controller.makeProviderCallbackRoute(req, 'x')
		);
		authUrl.searchParams.set('scope', 'tweet.read users.read offline.access');
		return res.redirect(authUrl.toString());
	},
	oAuthGoogleRedirect(req: any, res: any) {
		let authUrl = new URL('https://accounts.google.com/o/oauth2/v2/auth');
		authUrl.searchParams.set('client_id', process.env.GOOGLE_CLIENT_ID!);
		authUrl.searchParams.set(
			'redirect_uri',
			controller.makeProviderCallbackRoute(req, 'google')
		);
		authUrl.searchParams.set('response_type', 'code');
		authUrl.searchParams.set('scope', 'openid email profile');
		authUrl.searchParams.set('access_type', 'offline');
		return res.redirect(authUrl.toString());
	},
	async oauthProviderCallback(req: any, res: any) {
		const { provider } = req.params;
		const actions: any = {
			google: controller.oAuthGoogleCallback,
		};

		if (!actions[provider]) {
			return res.status(400).json({ error: 'Unsupported provider' });
		}

		return actions[provider](req, res);
	},
	async oAuthGoogleCallback(req: any, res: any) {
		const { code } = req.query;

		if (!code) {
			return res.status(400).json({ error: 'Missing authorization code' });
		}

		const tokenUrl = 'https://oauth2.googleapis.com/token';
		const params = new URLSearchParams({
			client_id: process.env.GOOGLE_CLIENT_ID!,
			client_secret: process.env.GOOGLE_CLIENT_SECRET!,
			redirect_uri: controller.makeProviderCallbackRoute(req, 'google'),
			grant_type: 'authorization_code',
			code,
		});

		const tokenResponse = await fetch(tokenUrl, {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: params,
		});

		const tokenData = await tokenResponse.json();

		if (!tokenData.access_token) {
			return res
				.status(400)
				.json({ error: 'Failed to get access token', details: tokenData });
		}

		tokenData.access_token;

		let authUrl = new URL(
			`${process.env.APP_CLIENT_URI}/auth/login-provider/google`
		);
		authUrl.searchParams.set('token', tokenData.access_token);
		return res.redirect(authUrl.toString());
	},
	async oAuthAppleCallback(req: any, res: any) {
		const { code, state } = req.query;

		if (!code || !state) {
			return res
				.status(400)
				.json({ error: 'Missing authorization code or state' });
		}

		const tokenUrl = 'https://appleid.apple.com/auth/token';
		const params = new URLSearchParams({
			client_id: process.env.APPLE_CLIENT_ID!,
			client_secret: process.env.APPLE_CLIENT_SECRET!,
			redirect_uri: controller.makeProviderCallbackRoute(req, 'apple'),
			grant_type: 'authorization_code',
			code,
		});

		const tokenResponse = await fetch(tokenUrl, {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: params,
		});

		const tokenData = await tokenResponse.json();

		if (!tokenData.access_token) {
			return res
				.status(400)
				.json({ error: 'Failed to get access token', details: tokenData });
		}

		let authUrl = new URL(
			`${process.env.APP_CLIENT_URI}/auth/login-provider/apple`
		);
		authUrl.searchParams.set('token', tokenData.access_token);
		return res.redirect(authUrl.toString());
	},
	async oAuthGitHubCallback(req: any, res: any) {
		const { code } = req.query;

		if (!code) {
			return res.status(400).json({ error: 'Missing authorization code' });
		}

		const tokenUrl = 'https://github.com/login/oauth/access_token';
		const params = new URLSearchParams({
			client_id: process.env.GITHUB_CLIENT_ID!,
			client_secret: process.env.GITHUB_CLIENT_SECRET!,
			redirect_uri: controller.makeProviderCallbackRoute(req, 'github'),
			code,
		});

		const tokenResponse = await fetch(tokenUrl, {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: params,
		});

		const tokenData = await tokenResponse.json();

		if (!tokenData.access_token) {
			return res
				.status(400)
				.json({ error: 'Failed to get access token', details: tokenData });
		}

		let authUrl = new URL(
			`${process.env.APP_CLIENT_URI}/auth/login-provider/github`
		);
		authUrl.searchParams.set('token', tokenData.access_token);
		return res.redirect(authUrl.toString());
	},
	async oAuthXCallback(req: any, res: any) {
		const { code } = req.query;

		if (!code) {
			return res.status(400).json({ error: 'Missing authorization code' });
		}

		const tokenUrl = 'https://api.twitter.com/oauth2/token';
		const params = new URLSearchParams({
			client_id: process.env.X_CLIENT_ID!,
			client_secret: process.env.X_CLIENT_SECRET!,
			code,
			redirect_uri: controller.makeProviderCallbackRoute(req, 'x'),
			grant_type: 'authorization_code',
		});

		const tokenResponse = await fetch(tokenUrl, {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: params,
		});

		const tokenData = await tokenResponse.json();

		if (!tokenData.access_token) {
			return res
				.status(400)
				.json({ error: 'Failed to get access token', details: tokenData });
		}

		let authUrl = new URL(
			`${process.env.APP_CLIENT_URI}/auth/login-provider/x`
		);
		authUrl.searchParams.set('token', tokenData.access_token);
		return res.redirect(authUrl.toString());
	},
};

export default controller;
