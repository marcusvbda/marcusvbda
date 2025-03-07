'use client';

import { AppSidebar } from '@/components/app-sidebar';
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import {
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
} from '@/components/ui/sidebar';
import { Link } from '@/i18n/navigation';
import { useT } from '@/i18n/translate';
import { cn } from '@/lib/utils';
import { Separator } from '@radix-ui/react-separator';
import { Fragment } from 'react';

export default function AdminTemplate({
	children,
	user,
	title = '',
	description = '',
	breadcrumbItems = [],
}: any) {
	const t = useT('Pages');

	return (
		<SidebarProvider>
			<AppSidebar user={user} />
			<SidebarInset>
				<header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
					<div className="flex items-center gap-2 px-4">
						<SidebarTrigger className="-ml-1" />
						<Separator orientation="vertical" className="mr-2 h-4" />
						<Breadcrumb>
							<BreadcrumbList>
								{breadcrumbItems.map((item: any, key: number) => (
									<Fragment key={key}>
										<BreadcrumbItem className="hidden md:block">
											{item?.url ? (
												<Link
													href={item.url}
													className={cn(
														'transition-colors hover:text-foreground',
													)}
												>
													{t(item.title)}
												</Link>
											) : (
												<BreadcrumbPage>{t(item.title)}</BreadcrumbPage>
											)}
										</BreadcrumbItem>
										{key < breadcrumbItems.length - 1 && (
											<BreadcrumbSeparator />
										)}
									</Fragment>
								))}
							</BreadcrumbList>
						</Breadcrumb>
					</div>
				</header>
				<main className="flex flex-1 flex-col gap-4 p-4 pt-0">
					<div className="px-4 py-6">
						<div className="flex flex-col">
							{title && (
								<h2 className="text-xl font-semibold tracking-tight">
									{t(title)}
								</h2>
							)}
							{description && (
								<p className="text-muted-foreground text-sm">
									{t(description)}
								</p>
							)}
							<div className="mt-4">{children}</div>
						</div>
					</div>
				</main>
			</SidebarInset>
		</SidebarProvider>
	);
}
