'use client';

import { ReactNode, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { useInfiniteQuery } from '@tanstack/react-query';
import { Spinner } from '@/components/ui/spinner';
import { LoadingSpinner } from '@/app/admin/loading';
import { Button } from '@/components/ui/button';
import { ResourceProvider } from './context';
import { NewResource } from './new';
import { ResourceItem } from './item';
import { paginatedFetch } from './server/actions';
import useDebounceState from './hooks/use-debounce-state';

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
	fields?: (cx: any) => ReactNode[];
	defaultFilter?: any;
	afterSave?: any;
	validateForm?: any;
	icon?: ReactNode;
	beforeList?: any;
	hideNew?: boolean;
	initialState?: any;
}

export default function Resource({
	hideNew = false,
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
	fields = () => [],
	defaultFilter,
	afterSave,
	validateForm,
	icon,
	beforeList,
	initialState,
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
		queryKey: [entity, perPage, orderBy, filter, defaultFilter],
		queryFn: async ({ pageParam = 1 }) =>
			await paginatedFetch(entity, {
				page: pageParam,
				perPage,
				orderBy,
				filter,
				defaultFilter,
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

	const contextValue = {
		entity,
		label: ComputedLabel,
		pluralLabel: ComputedPluralLabel,
		itemLabel,
		fields,
		renderItem,
		afterSave,
		validateForm,
		renderNew,
		refetch,
		hideNew,
		initialState,
	};

	return (
		<ResourceProvider value={contextValue}>
			<div className={cn('flex flex-col gap-6', className)}>
				<div className="flex flex-col gap-2">
					<h1 className="scroll-m-20 text-4xl font-semibold tracking-tight sm:text-3xl xl:text-4xl flex items-center gap-2">
						{icon && icon}
						{pluralLabel}
					</h1>
					{description && (
						<p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
							{description}
						</p>
					)}
					{filterBy && (
						<div className="flex items-center justify-between gap-4 mt-4 w-full md:mt-0">
							<Input
								placeholder={filterPlaceholder}
								className="w-full md:max-w-xs ml-auto"
								value={search}
								onChange={(e) => setSearch(e.target.value)}
							/>
						</div>
					)}
				</div>
				{beforeList && beforeList}
				{isLoading || isRefetching ? (
					<LoadingSpinner />
				) : (
					<>
						<div className="mt-4 flex flex-col gap-1">
							<h2 className="text-xl font-medium tracking-tight">
								Total of <span className="text-primary">{total}</span>{' '}
								{(total > 1
									? ComputedPluralLabel
									: ComputedLabel
								).toLowerCase()}
							</h2>
							<p className="text-muted-foreground text-sm">
								Showing <span className="font-medium">{allItems.length}</span>{' '}
								of <span className="font-medium">{totalFiltered}</span>{' '}
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
							<NewResource />
							{allItems.map((x: any, key: number) => (
								<ResourceItem key={key} row={x} />
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
		</ResourceProvider>
	);
}
