'use client';

import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
} from '@/components/ui/breadcrumb';
import Portal from '@/components/ui/portal';
import { useSession } from '@/contexts/session-context';
import { signOut } from '@/server/user';
import { ReactNode } from 'react';

export default function AdminPage(): ReactNode {
	const { session } = useSession();

	return (
		<div className="flex flex-col gap-2">
			<Portal to="#breadcrumb-portal-section">
				<Breadcrumb>
					<BreadcrumbList>
						<BreadcrumbItem className="hidden md:block">
							<BreadcrumbLink href="/admin">Home</BreadcrumbLink>
						</BreadcrumbItem>
						{/* <BreadcrumbSeparator className="hidden md:block" />
						<BreadcrumbItem>
							<BreadcrumbPage>Data Fetching</BreadcrumbPage>
						</BreadcrumbItem> */}
					</BreadcrumbList>
				</Breadcrumb>
			</Portal>
			<p>user : {session?.user?.username}</p>
			<button onClick={signOut}>Logout</button>
		</div>
	);
}
