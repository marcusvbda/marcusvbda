'use client';

import { ReactNode, useActionState, useEffect, useMemo, useState } from 'react';
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
import { paginatedFetch, updateOrCreate } from '@/server/resource';
import { Spinner } from '../ui/spinner';
import { LoadingSpinner } from '@/app/admin/loading';
import useDebounceState from '@/hooks/use-debounce-state';
import { Field, FieldContent, FieldError, FieldLabel } from '../ui/field';
import { Textarea } from '../ui/textarea';
import { toast } from 'sonner';

interface ICommon {
	label?: string;
	description?: string;
	required?: boolean;
	placeholder?: string;
}
interface IText {
	type: 'text' | 'number' | 'email' | 'url' | 'password';
}

interface ITextarea {
	type: 'textarea';
	rows?: number;
}

interface IFields {
	[key: string]: ICommon & (IText | ITextarea);
}

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
	createView?: ReactNode;
	editView?: any;
	fields: IFields;
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
	fields,
}: IProps): ReactNode {
	const [search, setSearch, searchState] = useDebounceState('', 500);

	const filter = useMemo(() => {
		if (!filterBy || !searchState) return {};
		return Object.fromEntries(
			filterBy.split(',').map((key) => [key, searchState])
		);
	}, [searchState, filterBy]);

	const {
		data,
		isLoading,
		isFetchingNextPage,
		fetchNextPage,
		hasNextPage,
		refetch,
		isRefetching,
	} = useInfiniteQuery({
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

			{isLoading || isRefetching ? (
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
						<NewResource
							onCreated={refetch}
							label={ComputedLabel}
							entity={entity}
							renderNew={renderNew}
							fields={fields}
						/>
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

const NewResource = ({
	onCreated,
	renderNew,
	entity,
	fields,
	label,
}: {
	onCreated: any;
	label: string;
	entity: string;
	renderNew: any;
	fields: IFields;
}) => {
	const [visible, setVisible] = useState(false);

	const initialState = Object.keys(fields).reduce((acc: any, key: any) => {
		const type = fields[key].type;
		if (type === 'number') {
			acc[key] = 0;
			return acc;
		}
		acc[key] = '';
		return acc;
	}, {});

	const [state, formAction, pending] = useActionState(
		async (_initialState: any, newState: FormData) =>
			(await updateOrCreate(newState, entity, fields)) as any,
		{
			error: {} as any,
			success: false,
			...initialState,
		}
	);

	useEffect(() => {
		if (state?.message) {
			toast?.[state?.message ? 'error' : 'success'](state?.message);
		}
		if (state?.success) {
			onCreated && onCreated();
			setVisible(false);
		}
		console.log(state);
	}, [state]);

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
				<form action={formAction} className="w-full flex flex-col gap-6 py-6">
					<div className="flex flex-col gap-6">
						{Object.keys(fields).map((key: any) => {
							const field = fields[key];
							return (
								<Field key={key}>
									{field?.label && <FieldLabel>{field?.label}</FieldLabel>}
									<FieldContent>
										{['text', 'number', 'email', 'url'].includes(
											field?.type
										) && (
											<Input
												aria-invalid={Boolean(state?.error?.[key]?.[0])}
												name={key}
												type={field?.type}
												defaultValue={state?.[key]}
												placeholder={field?.placeholder || ''}
												disabled={pending}
											/>
										)}
										{field?.type === 'textarea' && (
											<Textarea
												className="border resize-none rounded-lg p-2 text-sm"
												aria-invalid={Boolean(state?.error?.[key]?.[0])}
												name={key}
												defaultValue={state?.[key]}
												placeholder={field?.placeholder || ''}
												disabled={pending}
												rows={field?.rows || 5}
											/>
										)}
										<FieldError>{state?.error?.[key] as any}</FieldError>
									</FieldContent>
								</Field>
							);
						})}
						<Button
							type="submit"
							className="w-full flex items-center gap-2"
							disabled={pending}
						>
							{pending && <Spinner className="size-3" />}
							Save
						</Button>
					</div>
				</form>
			</SheetContent>
		</Sheet>
	);
};
