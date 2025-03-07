'use server';

import { getLoggedUser } from '@/actions/auth';
import { sessionCookieName } from '@/constants/providers';
import { redirect } from '@/i18n/navigation';
import { AuthContextProvider } from '@/providers/AuthProvider';
import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';
import { Children, cloneElement } from 'react';

export default async function Protected({ children, roles = '*' }: any) {
	const session = JSON.parse(cookies().get(sessionCookieName)?.value || '{}');
	const locale = cookies().get('NEXT_LOCALE')?.value || 'en';

	if (!session?._id) {
		return redirect({ href: '/auth/login', locale } as any);
	}

	const foundUser = await getLoggedUser(session);
	if (!foundUser?.success) {
		return redirect({ href: '/auth/login', locale } as any);
	}

	if (roles !== '*') {
		if (!foundUser.user.roles.includes(roles)) {
			return notFound();
		}
	}

	return (
		<AuthContextProvider user={foundUser?.user}>
			{cloneElement(children, {
				user: foundUser?.user,
				children: Children.toArray(children.props?.children || []).map(
					(child: any) => cloneElement(child, { user: foundUser?.user }),
				),
			})}
		</AuthContextProvider>
	);
}
