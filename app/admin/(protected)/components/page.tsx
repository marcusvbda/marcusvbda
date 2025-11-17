'use client';

import { ReactNode } from 'react';
import { useBreadcrumb } from '@/store/admin/use-breadcrumb';
import ResourceIndex from '@/components/admin/resource-index';
import { Card, CardHeader } from '@/components/ui/card';
import { PlusIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';

export default function ComponentsPage(): ReactNode {
	useBreadcrumb([
		{ href: '/admin', label: 'Home' },
		{ label: 'CMS' },
		{ label: 'Components' },
	]);

	return (
		<ResourceIndex
			title="Components"
			subtitle="Define your components to organize fields on it and consume in your application"
		>
			<div className="flex flex-col w-full gap-4">
				<div className="flex justify-start">
					<Input
						placeholder={'Search ...'}
						className="w-full md:max-w-xs ml-auto text-xl! py-6"
					/>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-4 gap-2">
					<Card>
						<CardHeader className="flex h-full items-center justify-center cursor-pointer">
							<h4 className="text-lg font-semibold">Component 1</h4>
						</CardHeader>
					</Card>
					<Card className="group border-2 border-dotted shadow-none bg-transparent duration-300 transition-all cursor-pointer hover:border-2 hover:border-solid">
						<CardHeader className="flex h-full items-center justify-center">
							<PlusIcon className="size-6 opacity-30 transition-opacity group-hover:opacity-100" />
							<h4 className="text-lg opacity-30 transition-opacity group-hover:opacity-100">
								Create new
							</h4>
						</CardHeader>
					</Card>
				</div>
			</div>
		</ResourceIndex>
	);
}
