'use client';

import { useBreadcrumb } from '@/store/admin/use-breadcrumb';
import { ReactNode } from 'react';

export default function AdminPage(): ReactNode {
	useBreadcrumb([{ href: '/admin', label: 'Home' }]);

	return (
		<div className="flex flex-col gap-2">
			<h1>Home</h1>
		</div>
	);
}
