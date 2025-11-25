'use client';

import { ReactNode, useMemo, memo, useCallback } from 'react';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { useInfiniteQuery } from '@tanstack/react-query';
import { Spinner } from '@/components/ui/spinner';
import { LoadingSpinner } from '@/app/admin/loading';
import { Button } from '@/components/ui/button';
import { ResourceProvider } from './context';
import { NewResource } from './new';
import { ResourceItem } from './item';
import { paginatedFetch, updateOrCreate, deleteItem } from './server/actions';
import useDebounceState from './hooks/use-debounce-state';
import type { ResourceProps, FilterConfig, OrderByConfig } from './types';
import { X } from 'lucide-react';

function ResourceComponent({
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
	serverActions,
	debounceTime = 500,
	emptyState,
	loadingComponent,
	errorComponent,
}: ResourceProps): ReactNode {
	const {
		value: search,
		setValue: setSearch,
		debouncedValue: searchState,
	} = useDebounceState('', debounceTime);

	const actions = serverActions || {
		paginatedFetch,
		updateOrCreate,
		deleteItem,
	};

	const filter: FilterConfig = useMemo(() => {
		if (!filterBy || !searchState) return {};
		return Object.fromEntries(
			filterBy.split(',').map((key) => [key.trim(), searchState])
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
		error,
	} = useInfiniteQuery({
		queryKey: [entity, perPage, orderBy, filter, defaultFilter],
		queryFn: async ({ pageParam = 1 }) =>
			await actions.paginatedFetch(entity, {
				page: pageParam,
				perPage,
				orderBy: orderBy as OrderByConfig,
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
		staleTime: 30000, // Cache for 30 seconds
		gcTime: 300000, // Keep in cache for 5 minutes
	});

	const ComputedPluralLabel = pluralLabel || `${label}s`;
	const total = data?.pages[0]?.meta?.total || 0;
	const allItems = useMemo(
		() => data?.pages.flatMap((page) => page.items) || [],
		[data?.pages]
	);
	const totalFiltered = data?.pages[0]?.meta?.totalResult || 0;

	const handleRefetch = useCallback(() => {
		refetch();
	}, [refetch]);

	const contextValue = useMemo(
		() => ({
			entity,
			label,
			pluralLabel: ComputedPluralLabel,
			itemLabel,
			fields,
			renderItem,
			afterSave,
			validateForm,
			renderNew,
			refetch: handleRefetch,
			hideNew,
			initialState,
			serverActions: actions,
		}),
		[
			entity,
			label,
			ComputedPluralLabel,
			itemLabel,
			fields,
			renderItem,
			afterSave,
			validateForm,
			renderNew,
			handleRefetch,
			hideNew,
			initialState,
			actions,
		]
	);

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
							<div className="relative w-full md:max-w-xs ml-auto">
								<Input
									placeholder={filterPlaceholder}
									className="w-full pr-10"
									value={search}
									onChange={(e) => setSearch(e.target.value)}
								/>
								{search && (
									<Button
										type="button"
										variant="ghost"
										size="icon"
										className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7"
										onClick={() => setSearch('')}
									>
										<X className="h-4 w-4" />
									</Button>
								)}
							</div>
						</div>
					)}
				</div>
				{beforeList && beforeList}
				{error && errorComponent ? (
					errorComponent(error as Error)
				) : isLoading || isRefetching ? (
					loadingComponent || <LoadingSpinner />
				) : (
					<>
						<div className="mt-4 flex flex-col gap-1">
							<h2 className="text-xl font-medium tracking-tight">
								Total of <span className="text-primary">{total}</span>{' '}
								{(total > 1 ? ComputedPluralLabel : label).toLowerCase()}
							</h2>
							<p className="text-muted-foreground text-sm">
								Showing <span className="font-medium">{allItems.length}</span>{' '}
								of <span className="font-medium">{totalFiltered}</span>{' '}
								{(totalFiltered > 1
									? ComputedPluralLabel
									: label
								).toLowerCase()}{' '}
								filtered
							</p>
						</div>
						{allItems.length === 0 && emptyState ? (
							emptyState
						) : (
							<div
								className={cn(
									'grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
									classNameList
								)}
							>
								<NewResource />
								{allItems.map((row, index) => (
									<ResourceItem key={row.id || index} row={row} />
								))}
							</div>
						)}

						{hasNextPage && (
							<div className="flex w-full items-center justify-center">
								<Button
									className="flex items-center gap-2"
									onClick={() => fetchNextPage()}
									disabled={isFetchingNextPage}
								>
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

// Memoize the component to prevent unnecessary re-renders
export default memo(ResourceComponent);
