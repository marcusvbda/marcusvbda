'use client';

import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';
import { Card, CardHeader } from '@/components/ui/card';
import { useResource } from './context';
import { useActionState, useEffect, useState } from 'react';
import { toast } from 'sonner';
import { updateOrCreate } from './server/actions';
import DynamicForm from './dyamic-form';

interface ResourceItemProps {
	row: any;
}

export const ResourceItem = ({ row }: ResourceItemProps) => {
	const [visible, setVisible] = useState(false);

	const { label, itemLabel, renderItem, refetch } = useResource();

	const identifier = `#${row?.id && row?.id.toString().padStart(6, '0')}`;

	return (
		<Sheet open={visible} onOpenChange={setVisible}>
			<SheetTrigger asChild>
				{renderItem ? (
					renderItem(row)
				) : (
					<Card className="relative h-18 max-h-18 md:h-24 md:max-h-24 cursor-pointer transition-all duration-300 hover:border-primary hover:shadow-lg">
						<span className="absolute right-2 top-2 text-xs font-mono text-muted-foreground">
							{identifier}
						</span>
						<CardHeader className="flex h-full flex-col items-center justify-center p-4">
							<h4 className="text-center text-lg font-semibold">
								{row?.[itemLabel]}
							</h4>
						</CardHeader>
					</Card>
				)}
			</SheetTrigger>
			<SheetContent className="max-w-full md:max-w-1/2">
				<SheetHeader>
					<SheetTitle>
						Update {label.toLowerCase()} {identifier}
					</SheetTitle>
					<SheetDescription>
						Fill properly the fields below to update your {label.toLowerCase()}.
					</SheetDescription>
				</SheetHeader>
				<DynamicForm
					itemState={row}
					setVisible={setVisible}
					onSaved={() => {
						refetch();
						setVisible(false);
					}}
				/>
			</SheetContent>
		</Sheet>
	);
};
