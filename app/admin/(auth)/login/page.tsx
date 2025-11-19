import FormLogin from '@/components/admin/form-login';
import { getCurrentSession } from '@/server/user';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react';

export default async function LoginPage({
	searchParams,
}: any): Promise<ReactNode> {
	const session = await getCurrentSession();
	const redirectTo = (await searchParams).redirect;
	if (session?.id && session?.user?.id) {
		return redirect(redirectTo || '/admin');
	}
	return <FormLogin redirectTo={redirectTo || '/admin'} />;
}
