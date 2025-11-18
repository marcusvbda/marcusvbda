'use client';

import { ReactNode } from 'react';
import { useBreadcrumb } from '@/store/admin/use-breadcrumb';
import { useParams } from 'next/navigation';
import Resource from '@/components/admin/resource';

export default function ComponentsPage(): ReactNode {
	const params = useParams();
	const { id } = params;
	const compIdentifier = `#${id && id.toString().padStart(6, '0')}`;

	useBreadcrumb([
		{ href: '/admin', label: 'Home' },
		{ label: 'CMS' },
		{ href: '/admin/components', label: 'Components' },
		{ label: compIdentifier },
		{ label: "Component's fields" },
	]);

	return (
		<Resource
			entity="Component"
			label="Field"
			pluralLabel="Fields"
			description={`Define fields of component ${compIdentifier} to consume it in your application.`}
			filterBy="id,name"
			itemLabel="name"
			defaultFilter={{ componentId: id }}
			fields={{
				name: {
					type: 'text',
					label: 'Name',
					placeholder: 'Field name',
					required: true,
				},
			}}
		/>
	);
}
