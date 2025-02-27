'use server';
import crypto from 'crypto';
import bcrypt from 'bcrypt';
import { sendEmail } from '@/lib/mailer';
import User from '@/models/User.model';
import { cookies } from 'next/headers';
import { sessionCookieName } from '@/constants/providers';

export const checkEmail = async (email: string) => {
	const user = await User.findOne({ email });
	if (user) return false;
	return true;
};

export const generateConfirmationCode = async (base: string, email: string) => {
	const key = `${base}-${email}-${process.env.SECRET_KEY!}`;
	const hash = crypto.createHash('md5').update(key).digest('hex');
	return hash.substring(0, 6).toUpperCase();
};

export const sendCodeConfirmation = async (payload: any) => {
	const { base, email } = payload;
	const code = await generateConfirmationCode(base, email);
	const result = await sendEmail({
		to: [{ email }],
		subject: 'Confirm email',
		htmlContent: `<p>Seu código é : <strong>${code}</strong></p>`,
	});
	return result;
};

export const checkCode = async (payload: any) => {
	const { base, email, code } = payload;
	const oldCode = await generateConfirmationCode(base, email);
	return oldCode === code;
};

export const storeUser = async (payload: any) => {
	const { codeResult, email, fullName, nickName, password } = payload;
	const generatedCode = await generateConfirmationCode(codeResult.base, email);

	const oldUser = await User.findOne({ email });
	if (
		generatedCode !== codeResult.typed ||
		!email ||
		!fullName ||
		!nickName ||
		!password ||
		oldUser
	) {
		return { success: false };
	}

	// eslint-disable-next-line import/no-named-as-default-member
	const hashedPassword = await bcrypt.hash(
		password,
		Number(process.env.PASSWORD_SALT_ROUNDS),
	);
	const newUser = new User({
		email,
		fullName,
		nickName,
		password: hashedPassword,
	});
	await newUser.save();
	return { success: true };
};

export const receiveProviderUser = async (payload: any) => {
	const data = payload;
	const tempToken = crypto.randomBytes(16).toString('hex');
	const tempTokenDueDate: Date = new Date(Date.now() + 60 * 1000);
	const oldUser = await User.findOne({ email: data.email });

	if (oldUser) {
		oldUser.tempToken = tempToken;
		oldUser.tempTokenDueDate = tempTokenDueDate;
		await oldUser.save();
	} else {
		const newUser = new User({ ...data, tempToken, tempTokenDueDate });
		await newUser.save();
	}
	return {
		action: 'provider-login',
		token: { value: tempToken, dueDate: tempTokenDueDate },
	};
};

export const login = async (payload: any) => {
	const { email, password } = payload;
	const oldUser = await User.findOne({ email });

	if (!oldUser) return { success: false };

	// eslint-disable-next-line import/no-named-as-default-member
	const isPasswordValid = await bcrypt.compare(
		password,
		oldUser?.password || '',
	);

	if (!isPasswordValid) return { success: false };

	cookies().set({
		name: sessionCookieName,
		value: JSON.stringify({
			_id: oldUser._id.toString(),
			email: oldUser.email,
		}),
		httpOnly: true,
		secure: process.env.NODE_ENV === 'production',
		path: '/',
	});

	return { success: true, user: { nickName: oldUser.nickName } };
};

const cacheUser = new Map<string, { user: any; timestamp: number }>();
export const getLoggedUser = async (payload: any = null) => {
	try {
		const { _id, email } = payload
			? payload
			: JSON.parse(cookies().get(sessionCookieName)?.value || '{}');

		const cacheKey = `${_id}_${email}`;
		const cachedData = cacheUser.get(cacheKey);
		if (cachedData && Date.now() - cachedData.timestamp < 60000) {
			return { success: true, user: cachedData.user };
		}

		const user = await User.findOne({ email, _id });
		if (!user) {
			cookies().delete(sessionCookieName);
			return { success: false };
		}

		const safeReturn = {
			...user.toObject(),
			_id: user._id.toString(),
			password: '***********',
		};
		cacheUser.set(cacheKey, { user: safeReturn, timestamp: Date.now() });
		return { success: true, user: safeReturn };
	} catch (error) {
		return { success: false };
	}
};

export const logout = async () => {
	cookies().delete(sessionCookieName);
	return { success: true };
};
