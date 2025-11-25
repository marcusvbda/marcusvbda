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
import {
	Field,
	FieldContent,
	FieldError,
	FieldLabel,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { z } from 'zod';

export default function ComponentsPage(): ReactNode {
	useBreadcrumb([{ href: '/admin', label: 'Home' }, { label: 'Components' }]);

	return (
		<Resource
			entity="Component"
			icon={<LayoutDashboard className="size-10" />}
			label="Component"
			pluralLabel="Components"
			description="Define your components to organize fields and consume it in your application."
			filterBy="id,name"
			itemLabel="name"
			beforeSave={({ formValues, error, setError }: any) => {
				const componentSchema = z.object({
					name: require('zod').string().min(1, 'Name is required'),
				});
				const validation = componentSchema.safeParse(formValues);
				if (!validation.success) {
					const zodErrors = validation.error.flatten().fieldErrors;
					setError(validation.error.flatten().fieldErrors);
					return;
				}
				setError({});
			}}
			initialState={{
				name: '',
			}}
			fields={({
				itemState,
				error,
				pending,
				formValues,
				setFormValues,
				setVisible,
			}: any) => {
				let fields = [];
				if (itemState?.id) {
					fields.push(
						<LinkComponent setVisible={setVisible} itemState={itemState} />
					);
				}
				fields.push(
					<Field>
						<FieldContent>
							<FieldLabel>Name</FieldLabel>
							<Input
								aria-invalid={Boolean(error?.name?.[0])}
								disabled={pending}
								value={formValues.name}
								onChange={(e: any) =>
									setFormValues((prev: any) => ({
										...prev,
										name: e.target.value,
									}))
								}
							/>
							<FieldError>{error?.name?.[0] as any}</FieldError>
						</FieldContent>
					</Field>
				);
				return fields;
			}}
		/>
	);
}

const LinkComponent = ({ setVisible, itemState }: any) => {
	const router = useRouter();

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
						setVisible(false);
						setTimeout(() => {
							router.push(`/admin/components/${itemState?.id}/fields`);
						}, 300);
					}}
				>
					<Button size="sm">Open</Button>
				</Link>
			</ItemActions>
		</Item>
	);
};
