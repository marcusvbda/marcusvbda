import { AppSidebar } from '@/components/admin/app-sidebar';
import BreadCrumb from '@/components/admin/bread-crumb';
import ProtectedPage from '@/components/admin/protected-page';
import {
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
} from '@/components/ui/sidebar';
import { Separator } from '@radix-ui/react-separator';
import { ReactNode } from 'react';

export default function AdminLayout({ children }: { children: ReactNode }) {
	return (
		<ProtectedPage>
			<SidebarProvider>
				<AppSidebar />
				<SidebarInset>
					<header className="flex h-16 shrink-0 items-center gap-2 dark:bg-muted">
						<div className="flex items-center gap-2 px-4">
							<SidebarTrigger className="-ml-1" />
							<Separator orientation="vertical" className="mr-2 h-4" />
							<BreadCrumb />
						</div>
					</header>
					<div className="flex flex-1 flex-col gap-4 p-4 pt-0 dark:bg-muted">
						{children}
					</div>
				</SidebarInset>
			</SidebarProvider>
		</ProtectedPage>
	);
}
