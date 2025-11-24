'use client';

import { ReactNode } from 'react';
import { useBreadcrumb } from '@/store/admin/use-breadcrumb';
import Resource from '@/components/admin/resource';
import { LayoutDashboard } from 'lucide-react';
import {
	Item,
	ItemActions,
	ItemContent,
	ItemDescription,
	ItemTitle,
} from '@/components/ui/item';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function ComponentsPage(): ReactNode {
	useBreadcrumb([{ href: '/admin', label: 'Home' }, { label: 'Components' }]);
	const router = useRouter();

	return (
		<Resource
			entity="Component"
			icon={<LayoutDashboard className="size-10" />}
			label="Component"
			pluralLabel="Components"
			description="Define your components to organize fields and consume it in your application."
			filterBy="id,name"
			itemLabel="name"
			fields={{
				fieldsLink: {
					type: 'custom',
					render: ({ setDrawerVisible, item }: any) => {
						if (!item?.id) return null;
						return (
							<Item variant="outline">
								<ItemContent>
									<ItemTitle>Fields</ItemTitle>
									<ItemDescription>Check the component fields</ItemDescription>
								</ItemContent>
								<ItemActions>
									<Link
										href="#"
										onClick={(e: any) => {
											e.preventDefault();
											setDrawerVisible(false);
											setTimeout(() => {
												router.push(`/admin/components/${item?.id}/fields`);
											}, 500);
										}}
									>
										<Button size="sm">Open</Button>
									</Link>
								</ItemActions>
							</Item>
						);
					},
				},
				name: {
					id: 'name',
					type: 'text',
					label: 'Name',
					placeholder: 'Component name',
					required: true,
					render: ({ component }: any) => {
						return component;
					},
				},
			}}
		/>
	);
}
