'use server';
import { cookies } from 'next/headers';
import crypto from 'crypto';
import db from '@/lib/db'
import bcrypt from 'bcrypt';
import { z } from 'zod';

export const loginByUserName = async (prevState: any, formData: FormData) => {
	const schema = z.object({
		username: z.string().min(1, 'Username is required'),
		password: z.string().min(1, 'Password is required'),
	});
	const dataToValidate = Object.fromEntries(formData.entries());
	const validation = schema.safeParse(dataToValidate);

	if (!validation.success) {
		return {
			error: validation.error.flatten().fieldErrors,
			success: false,
			username: formData.get('username'),
			password: formData.get('password'),
		};
	}

	const { username, password } = validation.data;

	const foundUser = await db.user.findUnique({
		where: {
			username,
		},
	});

	if (!foundUser) {
		return {
			success: false,
			error: { password: ['Invalid username or password'] },
			username,
			password,
		};
	}

	const passwordMatch = await bcrypt.compare(password, foundUser.password);

	if (!passwordMatch) {
		return {
			error: { password: ['Invalid username or password'] },
			success: false,
			username,
			password,
		};
	}

	await loginUser(foundUser);
	return { success: true, error: {} };
};

export const loginUser = async (user: any) => {
	const cookieStore = await cookies();

	const token = crypto
		.createHash('md5')
		.update(`${new Date().getTime()}-${crypto.randomUUID()}`)
		.digest('hex');

	const maxAge = 60 * 60 * 24 * 7;

	const newDuete = new Date(Date.now() + maxAge * 1000);

	await db.token.deleteMany({
		where: {
			dueDate: {
				lt: newDuete,
			},
		},
	});

	await db.token.create({
		data: {
			token,
			dueDate: newDuete,
			userId: user?.id,
		},
	});

	cookieStore.set('session', token, {
		httpOnly: true,
		secure: process.env.NODE_ENV === 'production',
		maxAge,
		path: '/',
	});

	return true;
};

export const getCurrentSession = async () => {
	const cookieStore = await cookies();
	const session = cookieStore.get('session')?.value || '';

	if (!session) {
		return null;
	}

	const token = await db.token.findUnique({
		where: {
			token: session,
		},
		include: {
			user: true,
		},
	});

	if (!token) {
		return null;
	}

	if (token.dueDate < new Date()) {
		await db.token.delete({
			where: {
				id: token.id,
			},
		});
		return null;
	}

	return token;
};

export const signOut = async () => {
	const session = await getCurrentSession();
	if (session) {
		await db.token.delete({
			where: {
				id: session.id,
			},
		});
	}

	const cookieStore = await cookies();
	cookieStore.delete('session');
};
