import { SessionProvider } from '@/contexts/SessionContext';
import { getCurrentSession } from '@/server/user';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react';

export const getRedirectTo = async () => {
	try {
		const headersList = await headers();
		const pathname = headersList.get('x-current-path') || '';
		return encodeURIComponent(pathname);
	} catch (error) {
		return '/';
	}
};

export default async function ProtectedPage({
	children,
}: {
	children: ReactNode;
}) {
	const session = await getCurrentSession();
	const isChecked = Boolean(session?.id && session?.user?.id);
	if (!isChecked) {
		const redirectTo = await getRedirectTo();
		return redirect(`/login?redirect=${redirectTo}`);
	}

	return <SessionProvider session={session}>{children}</SessionProvider>;
}
