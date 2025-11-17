'use client';

import * as React from 'react';
import { BoxIcon, Globe, LayoutDashboard } from 'lucide-react';

import {
	Sidebar,
	SidebarContent,
	SidebarHeader,
	SidebarMenu,
} from '@/components/ui/sidebar';
import { useSession } from '@/contexts/session-context';
import { NavUser } from './nav-user';
import { NavMain } from './nav-main';

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	const { session } = useSession();

	const data = {
		user: {
			name: session?.user?.username,
			email: 'administrador',
			avatar: '/avatars/shadcn.jpg',
		},
		items: {
			Site: [
				{
					title: 'Home Page',
					url: '/',
					icon: Globe,
				},
			],
			Admin: [
				{
					title: 'Dashboard',
					url: '/admin',
					icon: LayoutDashboard,
				},
			],
			CMS: [
				{
					title: 'Components',
					url: '/admin/components',
					icon: BoxIcon,
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
