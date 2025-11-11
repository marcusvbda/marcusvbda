import FormLogin from '@/components/admin/FormLogin';
import { getCurrentSession } from '@/server/user';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react';

export default async function LoginPage({
	searchParams,
}: any): Promise<ReactNode> {
	const session = await getCurrentSession();
	if (session?.id && session?.user?.id) {
		return redirect('/admin');
	}
	const redirectTo = (await searchParams).redirect;
	return <FormLogin redirectTo={redirectTo || '/admin'} />;
}
