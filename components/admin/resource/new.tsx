'use client';

import { useState, useMemo, memo, useCallback } from 'react';
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

export const NewResource = memo(() => {
	const { label, renderNew, refetch, hideNew } = useResource();
	const [visible, setVisible] = useState(false);

	const handleSaved = useCallback(() => {
		refetch();
		setVisible(false);
	}, [refetch]);

	if (hideNew) return null;

	return (
		<Sheet open={visible} onOpenChange={setVisible}>
			<SheetTrigger asChild>
				{renderNew ? (
					renderNew()
				) : (
					<Card className="group h-18 max-h-18 md:h-24 md:max-h-24 cursor-pointer border-2 border-dotted bg-transparent shadow-none duration-300 transition-all hover:border-solid">
						<CardHeader className="flex h-full items-center justify-center">
							<PlusIcon className="size-6 opacity-30 transition-opacity group-hover:opacity-100" />
							<h4 className="opacity-30 transition-opacity group-hover:opacity-100">
								Create new
							</h4>
						</CardHeader>
					</Card>
				)}
			</SheetTrigger>
			<SheetContent className="w-full md:w-1/2 max-w-full md:max-w-1/2 overflow-y-auto">
				<SheetHeader>
					<SheetTitle></SheetTitle>
				</SheetHeader>
				<DynamicForm
					header={
						<SheetHeader>
							<SheetTitle>Create new {label.toLowerCase()}</SheetTitle>
							<SheetDescription>
								Fill properly the fields below to create a new{' '}
								{label.toLowerCase()}.
							</SheetDescription>
						</SheetHeader>
					}
					setVisible={setVisible}
					onSaved={handleSaved}
				/>
			</SheetContent>
		</Sheet>
	);
});

NewResource.displayName = 'NewResource';
