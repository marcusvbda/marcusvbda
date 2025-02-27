'use server';
import crypto from 'crypto';
import bcrypt from 'bcrypt';
import { sendEmail } from '@/lib/mailer';
import User from '@/models/User.model';

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
