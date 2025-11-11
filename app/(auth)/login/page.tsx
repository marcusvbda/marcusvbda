'use client';

import { loginById } from '@/server/user';
import { redirect, useSearchParams } from 'next/navigation';
import { ReactNode } from 'react';

export default function LoginPage(): ReactNode {
	const searchParams = useSearchParams();
	const redirectTo = searchParams.get('redirect') || '/admin';

	const handleLogin = async () => {
		const res = await loginById(1);
		if (res?.success) {
			return redirect(redirectTo);
		}
	};

	return <button onClick={handleLogin}>Login</button>;
}
