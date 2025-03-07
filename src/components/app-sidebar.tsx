'use client';

import * as React from 'react';
import { GalleryVerticalEnd, LayoutDashboard } from 'lucide-react';

import { NavUser } from '@/components/nav-user';
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarRail,
} from '@/components/ui/sidebar';
import { TeamSwitcher } from './team-switch';
import { NavItems } from './nav-items';
import { useT } from '@/i18n/translate';

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	const t = useT('AdminSidebar');
	const { user } = props;
	const data = React.useMemo(() => {
		return {
			user: {
				fullName: user.fullName,
				name: user.nickName,
				email: user.email,
				avatar: user?.avatar,
			},
			teams: [
				{
					name: 'Acme Inc',
					logo: GalleryVerticalEnd,
					plan: 'Enterprise',
				},
			],

			main: [
				{
					title: 'Dashboard',
					url: '/admin',
					icon: LayoutDashboard,
					// items: [
					// 	{
					// 		title: 'General',
					// 		url: '#',
					// 	},
				},
			],
		};
	}, [user]);

	return (
		<Sidebar collapsible="icon" {...props}>
			<SidebarHeader>
				<TeamSwitcher teams={data.teams} />
			</SidebarHeader>
			<SidebarContent>
				<NavItems items={data.main} label={t('Main')} />
			</SidebarContent>
			<SidebarFooter>
				<NavUser user={data.user} />
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	);
}
