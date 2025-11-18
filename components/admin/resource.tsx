'use client';

import { ReactNode, useMemo, useState } from 'react';
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
import { cn } from '@/lib/utils';
import { useInfiniteQuery } from '@tanstack/react-query';
import { paginatedFetch } from '@/server/resource';
import { Spinner } from '../ui/spinner';
import { LoadingSpinner } from '@/app/admin/loading';
import useDebounceState from '@/hooks/use-debounce-state';

interface IProps {
	itemId?: string;
	itemLabel?: string;
	entity: string;
	label: string;
	pluralLabel?: string;
	description?: string;
	perPage?: number;
	filterBy?: string;
	orderBy?: any;
	filterPlaceholder?: string;
	renderNew?: any;
	renderItem?: any;
	className?: string;
	classNameList?: string;
}

export default function Resource({
	entity,
	label,
	pluralLabel,
	description,
	filterBy,
	filterPlaceholder = 'Search ...',
	itemLabel = 'name',
	renderItem,
	renderNew,
	perPage = 10,
	orderBy = { id: 'desc' },
	className = '',
	classNameList = '',
}: IProps): ReactNode {
	const [search, setSearch, searchState] = useDebounceState('', 500);

	const filter = useMemo(() => {
		if (!filterBy || !searchState) return {};
		return Object.fromEntries(
			filterBy.split(',').map((key) => [key, searchState])
		);
	}, [searchState, filterBy]);

	const { data, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } =
		useInfiniteQuery({
			queryKey: [entity, perPage, orderBy, filter],
			queryFn: async ({ pageParam = 1 }) =>
				await paginatedFetch(entity, {
					page: pageParam,
					perPage,
					orderBy,
					filter,
				}),
			initialPageParam: 1,
			getNextPageParam: (lastPage) => {
				if (lastPage.meta.page < lastPage.meta.totalPages) {
					return lastPage.meta.page + 1;
				}
				return undefined;
			},
		});

	const ComputedLabel = label;
	const ComputedPluralLabel = pluralLabel || `${label}s`;
	const total = data?.pages[0]?.meta?.total || 0;
	const allItems = data?.pages.flatMap((page) => page.items) || [];
	const totalFiltered = data?.pages[0]?.meta?.totalResult || 0;

	return (
		<div className={cn('flex flex-col gap-6', className)}>
			<div className="flex flex-col gap-2">
				<h1 className="scroll-m-20 text-4xl font-semibold tracking-tight sm:text-3xl xl:text-4xl">
					{ComputedLabel}
				</h1>
				{description && (
					<p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
						{description}
					</p>
				)}

				{filterBy && (
					<div className="flex items-center justify-between gap-4">
						<Input
							placeholder={filterPlaceholder}
							className="w-full max-w-xs ml-auto"
							value={search}
							onChange={(e) => setSearch(e.target.value)}
						/>
					</div>
				)}
			</div>

			{isLoading ? (
				<LoadingSpinner />
			) : (
				<>
					<div className="mt-4 flex flex-col gap-1">
						<h2 className="text-xl font-medium tracking-tight">
							Total of <span className="text-primary">{total}</span>{' '}
							{(total > 1 ? ComputedPluralLabel : ComputedLabel).toLowerCase()}
						</h2>
						<p className="text-muted-foreground text-sm">
							Showing <span className="font-medium">{allItems.length}</span> of{' '}
							<span className="font-medium">{totalFiltered}</span>{' '}
							{(totalFiltered > 1
								? ComputedPluralLabel
								: ComputedLabel
							).toLowerCase()}{' '}
							filtered
						</p>
					</div>
					<div
						className={cn(
							'grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
							classNameList
						)}
					>
						<NewResource renderNew={renderNew} />
						{allItems.map((x: any, key: number) => (
							<ResourceItem
								key={key}
								renderItem={renderItem}
								row={x}
								itemLabel={itemLabel}
							/>
						))}
					</div>

					{hasNextPage && (
						<div
							className="flex w-full items-center justify-center"
							onClick={() => fetchNextPage()}
						>
							<Button className="flex items-center gap-2">
								{isFetchingNextPage && <Spinner />}
								Show more
							</Button>
						</div>
					)}
				</>
			)}
		</div>
	);
}

interface ResourceItemProps {
	row?: any;
	renderItem?: any;
	itemLabel: string;
	itemDescription?: string;
}

const ResourceItem = ({ row, renderItem, itemLabel }: ResourceItemProps) => {
	return (
		<Sheet>
			<SheetTrigger className="w-full text-left">
				{renderItem ? (
					renderItem(row)
				) : (
					<Card className="relative h-32 max-h-32 cursor-pointer transition-all duration-300 hover:border-primary hover:shadow-lg">
						<span className="absolute right-2 top-2 text-xs font-mono text-muted-foreground">
							#{row?.id && row?.id.toString().padStart(6, '0')}
						</span>
						<CardHeader className="flex h-full flex-col items-center justify-center p-4">
							<h4 className="text-center text-lg font-semibold">
								{row?.[itemLabel]}
							</h4>
						</CardHeader>
					</Card>
				)}
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

const NewResource = ({ renderNew }: { renderNew: any }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Sheet open={isOpen} onOpenChange={setIsOpen}>
			<SheetTrigger>
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
