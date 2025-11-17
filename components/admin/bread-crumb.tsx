'use client';

import { Fragment } from 'react/jsx-runtime';
import {
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
	Breadcrumb as BreadcrumRow,
} from '../ui/breadcrumb';
import { useBreadcrumbStore } from '@/store/admin/use-breadcrumb';

export default function BreadCrumb() {
	const { items } = useBreadcrumbStore();

	return (
		<BreadcrumRow>
			<BreadcrumbList>
				{(items || []).map((item: any, key: number) => (
					<Fragment key={`breadcrumb-item-${key}`}>
						{item?.href ? (
							<BreadcrumbItem>
								<BreadcrumbLink href={item.href || '#'}>
									{item.label}
								</BreadcrumbLink>
							</BreadcrumbItem>
						) : (
							<BreadcrumbItem>
								<BreadcrumbPage>{item.label}</BreadcrumbPage>
							</BreadcrumbItem>
						)}

						{key < items.length - 1 && <BreadcrumbSeparator />}
					</Fragment>
				))}
			</BreadcrumbList>
		</BreadcrumRow>
	);
}
