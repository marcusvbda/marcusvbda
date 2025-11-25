'use client';

import { ReactNode, useState } from 'react';
import { useBreadcrumb } from '@/store/admin/use-breadcrumb';
import Resource from '@/components/admin/resource';
import { ListIcon } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { JsonEditor } from 'json-edit-react';
import { CardItem } from '@/components/admin/resource/item';
import {
	Field,
	FieldContent,
	FieldError,
	FieldLabel,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { z } from 'zod';

export default function FieldPageContentClient({ component }: any): ReactNode {
	const [language, setLanguage] = useState('en');

	useBreadcrumb([
		{ href: '/admin/components', label: 'Components' },
		{ label: `Component (${component?.name})` },
		{ label: 'Fields' },
	]);

	return (
		<Resource
			entity="Field"
			icon={<ListIcon className="size-10" />}
			label="Field"
			pluralLabel="Fields"
			description={`Define fields in ${language} of "${component?.name}" to consume it in your application.`}
			filterBy="id,name,value"
			itemLabel="name"
			defaultFilter={{
				componentId: Number(component?.id),
				language,
			}}
			validateForm={{
				name: z.string().min(1, 'Name is required'),
				language: z.string().min(1, 'Language is required'),
				value: z.string().optional(),
				valueJson: z.object({}).optional(),
			}}
			beforeList={
				<Tabs defaultValue={language}>
					<TabsList>
						<TabsTrigger
							value="pt"
							onClick={() => setLanguage('pt')}
							className="cursor-pointer"
						>
							PT
						</TabsTrigger>
						<TabsTrigger
							value="en"
							onClick={() => setLanguage('en')}
							className="cursor-pointer"
						>
							EN
						</TabsTrigger>
					</TabsList>
				</Tabs>
			}
			initialState={{
				componentId: Number(component?.id),
				name: '',
				language: language,
				value: '',
				valueJson: {},
			}}
			fields={({ error, pending, formValues, setFormValues }: any) => {
				let fields = [];
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

				fields.push(
					<Field>
						<FieldContent>
							<FieldLabel>Language</FieldLabel>
							<Select
								value={formValues?.language}
								onValueChange={(value: any) =>
									setFormValues((prev: any) => ({
										...prev,
										language: value,
									}))
								}
							>
								<SelectTrigger>
									<SelectValue placeholder="Select language" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="en">English</SelectItem>
									<SelectItem value="pt">Portuguese</SelectItem>
								</SelectContent>
							</Select>
							<FieldError>{error?.language?.[0] as any}</FieldError>
						</FieldContent>
					</Field>
				);

				fields.push(
					<Field>
						<FieldContent>
							<FieldLabel>Value</FieldLabel>
							<Textarea
								className="border resize-none rounded-lg p-2 text-sm"
								aria-invalid={Boolean(error?.value?.[0])}
								value={formValues?.value || ''}
								onChange={(e: any) =>
									setFormValues((prev: any) => ({
										...prev,
										value: e.target.value,
									}))
								}
								disabled={pending}
								rows={5}
							/>
							<FieldError>{error?.value?.[0] as any}</FieldError>
						</FieldContent>
					</Field>
				);

				fields.push(
					<Field>
						<FieldContent>
							<FieldLabel>Value JSON</FieldLabel>
							<JsonEditor
								data={formValues?.valueJson || {}}
								setData={(e: any) => {
									setFormValues((prev: any) => ({
										...prev,
										valueJson: e,
									}));
								}}
								className="w-full max-w-full!"
							/>
							<FieldError>{error?.value?.[0] as any}</FieldError>
						</FieldContent>
					</Field>
				);
				return fields;
			}}
			renderItem={(cx: any) => {
				const { row, setVisible } = cx;
				return (
					<CardItem
						row={row}
						itemLabel="name"
						onClick={(e: any) => {
							e.preventDefault();
							e.stopPropagation();
							setVisible(true);
						}}
					>
						<div className="text-sm text-muted-foreground truncate w-full max-w-full overflow-hidden text-center">
							{row?.value || JSON.stringify(row?.valueJson)}
						</div>
					</CardItem>
				);
			}}
		/>
	);
}
