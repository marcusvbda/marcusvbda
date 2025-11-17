'use client';

import { ReactNode, useState } from 'react';
import { useBreadcrumb } from '@/store/admin/use-breadcrumb';
import { Card, CardHeader } from '@/components/ui/card';
import { PlusIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
	Sheet,
	SheetTrigger,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
} from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';

export default function ComponentsPage(): ReactNode {
	useBreadcrumb([
		{ href: '/admin', label: 'Home' },
		{ label: 'CMS' },
		{ label: 'Components' },
	]);

	return (
		<div className="flex flex-col gap-6">
			<div className="flex flex-col gap-2">
				<h1 className="scroll-m-20 text-4xl font-semibold tracking-tight sm:text-3xl xl:text-4xl">
					Components
				</h1>
				<p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
					Define your components to organize fields and consume it in your
					application.
				</p>
				<div className="mt-4 flex flex-col gap-1">
					<h2 className="text-xl font-medium tracking-tight">
						Total of <span className="text-primary">543</span> Components
					</h2>
					<p className="text-muted-foreground text-sm">
						Showing <span className="font-medium">12</span> of{' '}
						<span className="font-medium">123</span> components filtered
					</p>
				</div>
			</div>

			<div className="flex items-center justify-between gap-4">
				<Input placeholder={'Search ...'} className="w-full max-w-xs" />
			</div>

			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				<NewResource />
				<ResourceItem id="comp_01HGE8..." />
				<ResourceItem id="comp_01HGE8..." />
				<ResourceItem id="comp_01HGE8..." />
				<ResourceItem id="comp_01HGE8..." />
				<ResourceItem id="comp_01HGE8..." />
				<ResourceItem id="comp_01HGE8..." />
				<ResourceItem id="comp_01HGE8..." />
				<ResourceItem id="comp_01HGE8..." />
				<ResourceItem id="comp_01HGE8..." />
				<ResourceItem id="comp_01HGE8..." />
			</div>

			<div className="flex w-full items-center justify-center">
				<Button>Show more items</Button>
			</div>
		</div>
	);
}

interface ResourceItemProps {
	name?: string;
	description?: string;
	id?: string;
}

const ResourceItem = ({
	name = 'Component Name',
	description = 'Short description of the component.',
	id = 'comp_01HGE8...',
}: ResourceItemProps) => {
	return (
		<Sheet>
			<SheetTrigger className="w-full text-left">
				<Card className="relative h-32 max-h-32 cursor-pointer transition-all duration-300 hover:border-primary hover:shadow-lg">
					<span className="absolute right-2 top-2 text-xs font-mono text-muted-foreground">
						{id}
					</span>
					<CardHeader className="flex h-full flex-col items-center justify-center p-4">
						<h4 className="text-center text-lg font-semibold">{name}</h4>
						<p className="text-center text-sm text-muted-foreground">
							{description}
						</p>
					</CardHeader>
				</Card>
			</SheetTrigger>
			<SheetContent
				className="max-w-full md:max-w-1/2"
				// onInteractOutside={(event) => event.preventDefault()}
			>
				<SheetHeader>
					<SheetTitle>Are you absolutely sure?</SheetTitle>
					<SheetDescription>
						This action cannot be undone. This will permanently delete your
						account and remove your data from our servers.
					</SheetDescription>
				</SheetHeader>
			</SheetContent>
		</Sheet>
	);
};

const NewResource = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Sheet open={isOpen} onOpenChange={setIsOpen}>
			<SheetTrigger>
				<Card className="group h-32 max-h-32 cursor-pointer border-2 border-dotted bg-transparent shadow-none duration-300 transition-all hover:border-solid">
					<CardHeader className="flex h-full items-center justify-center">
						<PlusIcon className="size-6 opacity-30 transition-opacity group-hover:opacity-100" />
						<h4 className="text-lg opacity-30 transition-opacity group-hover:opacity-100">
							Create new
						</h4>
					</CardHeader>
				</Card>
			</SheetTrigger>
			<SheetContent
				className="max-w-full md:max-w-1/2"
				// onInteractOutside={(event) => event.preventDefault()}
			>
				<SheetHeader>
					<SheetTitle>Create new component</SheetTitle>
					<SheetDescription>
						Fill properly the fields below to create a new component.
					</SheetDescription>
				</SheetHeader>
				<div className="py-4">
					<p>Formulário de criação de componente aqui...</p>
					<Button onClick={() => setIsOpen(false)} className="mt-4">
						Save
					</Button>
				</div>
			</SheetContent>
		</Sheet>
	);
};
