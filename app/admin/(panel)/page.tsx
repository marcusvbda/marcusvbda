'use client';

import { useSession } from '@/contexts/SessionContext';
import { signOut } from '@/server/user';
import { ReactNode } from 'react';

export default function AdminPage(): ReactNode {
	const { session } = useSession();

	return (
		<div className="flex flex-col gap-2">
			<p>user : {session?.user?.username}</p>
			<button onClick={signOut}>Logout</button>
		</div>
	);
}
