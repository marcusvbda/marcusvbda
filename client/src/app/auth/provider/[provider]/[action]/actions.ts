'use server';

export const redirectGithub = (origin: string) => {
	let authUrl = new URL('https://github.com/login/oauth/authorize');
	authUrl.searchParams.set('client_id', process.env.GITHUB_CLIENT_ID!);
	authUrl.searchParams.set(
		'redirect_uri',
		origin.replace('redirect', 'callback'),
	);
	return authUrl.toString();
};

export const callbackGithub = async (origin: string, code: string) => {
	try {
		const tokenUrl = 'https://github.com/login/oauth/access_token';
		const tokenResponse = await fetch(tokenUrl, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: new URLSearchParams({
				client_id: process.env.GITHUB_CLIENT_ID!,
				client_secret: process.env.GITHUB_CLIENT_SECRET!,
				redirect_uri: origin,
				code,
			}),
		});

		if (!tokenResponse.ok) return 'error';

		const tokenData = await tokenResponse.json();
		if (!tokenData.access_token) return 'error';

		const response = await fetch('https://api.github.com/user', {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${tokenData.access_token}`,
				Accept: 'application/json',
				'User-Agent': 'marcusvbda',
			},
		});

		if (!response.ok) return 'error';

		const result = await response.json();
		return {
			email: result.email,
			fullName: result.name,
			nickName: result.login,
			avatar: result.avatar_url,
		};
	} catch (er: any) {
		console.log(er);
		return 'error';
	}
};

export const redirectGoogle = (origin: string) => {
	let authUrl = new URL('https://accounts.google.com/o/oauth2/v2/auth');
	authUrl.searchParams.set('client_id', process.env.GOOGLE_CLIENT_ID!);
	authUrl.searchParams.set('redirect_uri', origin);
	authUrl.searchParams.set('response_type', 'code');
	authUrl.searchParams.set('scope', 'openid email profile');
	authUrl.searchParams.set('access_type', 'offline');
	return authUrl.toString();
};

export const callbackGoogle = async (origin: string, code: string) => {
	try {
		const tokenUrl = 'https://oauth2.googleapis.com/token';
		const tokenResponse = await fetch(tokenUrl, {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: new URLSearchParams({
				client_id: process.env.GOOGLE_CLIENT_ID!,
				client_secret: process.env.GOOGLE_CLIENT_SECRET!,
				redirect_uri: origin,
				grant_type: 'authorization_code',
				code,
			}),
		});

		if (!tokenResponse.ok) return 'error';

		const tokenData = await tokenResponse.json();
		if (!tokenData.access_token) return 'error';

		const response = await fetch('https://api.github.com/user', {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${tokenData.access_token}`,
				Accept: 'application/json',
				'User-Agent': 'marcusvbda',
			},
		});

		if (!response.ok) return 'error';

		const result = await response.json();
		return {
			email: result.email,
			fullName: result.name,
			nickName: result.login,
			avatar: result.avatar_url,
		};
	} catch (er: any) {
		console.log(er);
		return 'error';
	}
};
