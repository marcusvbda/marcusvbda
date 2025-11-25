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
import { useState, useMemo, memo, ReactNode } from 'react';
import DynamicForm from './dyamic-form';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import type { ResourceItem as ResourceItemType } from './types';

interface ResourceItemProps {
	row: ResourceItemType;
}

export const ResourceItem = memo(({ row }: ResourceItemProps) => {
	const [visible, setVisible] = useState(false);

	const { label, itemLabel, renderItem, refetch } = useResource();
	const identifier = useMemo(
		() => (row?.id ? `#${String(row.id).padStart(6, '0')}` : ''),
		[row?.id]
	);

	const handleRefetch = useMemo(
		() => () => {
			refetch();
			setVisible(false);
		},
		[refetch]
	);

	return (
		<>
			{renderItem && renderItem({ row, setVisible })}
			<Sheet open={visible} onOpenChange={setVisible}>
				{!renderItem && (
					<SheetTrigger asChild>
						<CardItem
							row={row}
							itemLabel={itemLabel}
							onClick={(e) => {
								e.preventDefault();
								e.stopPropagation();
								setVisible(true);
							}}
						/>
					</SheetTrigger>
				)}
				<SheetContent className="w-full md:w-1/2 max-w-full md:max-w-1/2 overflow-y-auto">
					<SheetHeader>
						<SheetTitle></SheetTitle>
					</SheetHeader>
					<DynamicForm
						header={
							<SheetHeader>
								<SheetTitle>
									Update {label.toLowerCase()} {identifier}
								</SheetTitle>
								<SheetDescription>
									Fill properly the fields below to update your{' '}
									{label.toLowerCase()}.
								</SheetDescription>
							</SheetHeader>
						}
						itemState={row}
						setVisible={setVisible}
						onSaved={handleRefetch}
					/>
				</SheetContent>
			</Sheet>
		</>
	);
});

ResourceItem.displayName = 'ResourceItem';

interface CardItemProps {
	className?: string;
	row: ResourceItemType;
	itemLabel: string;
	children?: ReactNode;
	onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const CardItem = memo(
	({
		className = '',
		row,
		itemLabel,
		children = null,
		onClick,
	}: CardItemProps) => {
		const identifier = useMemo(
			() => (row?.id ? `#${String(row.id).padStart(6, '0')}` : ''),
			[row?.id]
		);

		const itemValue = useMemo(
			() => (row?.[itemLabel] as string) || '',
			[row, itemLabel]
		);

		return (
			<Link href="#" onClick={onClick}>
				<Card
					className={cn(
						'relative h-18 max-h-18 md:h-24 md:max-h-24 cursor-pointer transition-all duration-300 hover:border-primary hover:shadow-lg',
						className
					)}
				>
					<span className="absolute right-2 top-2 text-xs font-mono text-muted-foreground">
						{identifier}
					</span>
					<CardHeader className="flex h-full flex-col items-center justify-center p-4">
						<h4 className="text-center text-lg font-semibold">{itemValue}</h4>
						{children && children}
					</CardHeader>
				</Card>
			</Link>
		);
	}
);

CardItem.displayName = 'CardItem';
