'use server';
import { cookies } from 'next/headers';
import crypto from 'crypto';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const loginById = async (userId: number) => {
	const foundUser = await prisma.user.findUnique({
		where: {
			id: userId,
		},
	});

	if (!foundUser) {
		return { success: false, message: 'User not found' };
	}

	await loginUser(foundUser);

	return { success: true };
};

export const loginUser = async (user: any) => {
	const cookieStore = await cookies();

	const token = crypto
		.createHash('md5')
		.update(`${new Date().getTime()}-${crypto.randomUUID()}`)
		.digest('hex');

	const maxAge = 60 * 60 * 24 * 7;

	const newDuete = new Date(Date.now() + maxAge * 1000);

	await prisma.token.deleteMany({
		where: {
			dueDate: {
				lt: newDuete,
			},
		},
	});

	await prisma.token.create({
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

	const token = await prisma.token.findUnique({
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
		await prisma.token.delete({
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
		await prisma.token.delete({
			where: {
				id: session.id,
			},
		});
	}

	const cookieStore = await cookies();
	cookieStore.delete('session');
};
