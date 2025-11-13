'use client';

import * as React from 'react';
import { Globe, LayoutDashboard } from 'lucide-react';

import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
	Sidebar,
	SidebarContent,
	SidebarHeader,
	SidebarMenu,
} from '@/components/ui/sidebar';
import { useSession } from '@/contexts/SessionContext';

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	const { session } = useSession();

	const data = {
		user: {
			name: session?.user?.username,
			email: 'administrador',
			avatar: '/avatars/shadcn.jpg',
		},
		items: {
			'Main Menu': [
				{
					title: 'Home Page',
					url: '/',
					icon: Globe,
				},
				{
					title: 'Admin Dashboard',
					url: '/admin',
					icon: LayoutDashboard,
				},
			],
		},
	};

	return (
		<Sidebar variant="inset" {...props}>
			<SidebarHeader>
				<SidebarMenu>
					<NavUser user={data.user} />
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent>
				{Object.keys(data.items || {}).map((group: any, key: number) => (
					<NavMain
						key={key}
						group={group}
						items={(data.items as any)[group] || []}
					/>
				))}
			</SidebarContent>
		</Sidebar>
	);
}
