'use client';

import { ReactNode } from 'react';
import { useBreadcrumb } from '@/store/admin/use-breadcrumb';
import Resource from '@/components/admin/resource';

export default function ComponentsPage(): ReactNode {
	useBreadcrumb([
		{ href: '/admin', label: 'Home' },
		{ label: 'CMS' },
		{ label: 'Components' },
	]);

	return (
		<Resource
			entity="Component"
			label="Component"
			pluralLabel="Components"
			description="Define your components to organize fields and consume it in your application."
			filterBy="id,name"
			itemLabel="name"
			fields={{
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
