'use client';

import { useState } from 'react';
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';
import { Card, CardHeader } from '@/components/ui/card';
import { PlusIcon } from 'lucide-react';
import { useResource } from './context';
import DynamicForm from './dyamic-form';

export const NewResource = () => {
	const { label, renderNew, refetch } = useResource();
	const [visible, setVisible] = useState(false);

	return (
		<Sheet open={visible} onOpenChange={setVisible}>
			<SheetTrigger asChild>
				{renderNew ? (
					renderNew()
				) : (
					<Card className="group h-32 max-h-32 cursor-pointer border-2 border-dotted bg-transparent shadow-none duration-300 transition-all hover:border-solid">
						<CardHeader className="flex h-full items-center justify-center">
							<PlusIcon className="size-6 opacity-30 transition-opacity group-hover:opacity-100" />
							<h4 className="text-lg opacity-30 transition-opacity group-hover:opacity-100">
								Create new
							</h4>
						</CardHeader>
					</Card>
				)}
			</SheetTrigger>
			<SheetContent className="max-w-full md:max-w-1/2">
				<SheetHeader>
					<SheetTitle>Create new {label.toLowerCase()}</SheetTitle>
					<SheetDescription>
						Fill properly the fields below to create a new {label.toLowerCase()}
						.
					</SheetDescription>
				</SheetHeader>
				<DynamicForm
					onSaved={() => {
						refetch();
						setVisible(false);
					}}
				/>
			</SheetContent>
		</Sheet>
	);
};
