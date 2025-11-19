'use client';

import { ReactNode } from 'react';
import { useBreadcrumb } from '@/store/admin/use-breadcrumb';
import Resource from '@/components/admin/resource';
import { LayoutDashboard } from 'lucide-react';

export default function ComponentsPage(): ReactNode {
	useBreadcrumb([
		{ href: '/admin', label: 'Home' },
		{ label: 'Components' },
	]);

	return (
		<Resource
			entity="Component"
			icon={<LayoutDashboard className='size-10' />}
			label="Component"
			pluralLabel="Components"
			description="Define your components to organize fields and consume it in your application."
			filterBy="id,name"
			itemLabel="name"
			fields={{
				fieldsLink: {
					type: 'link',
					description: "Check the component fields",
					label: 'Fields',
					href: '/admin/components/[id]/fields',
				},
				name: {
					type: 'text',
					label: 'Name',
					placeholder: 'Component name',
					required: true,
				},
			}}
		/>
	);
}
