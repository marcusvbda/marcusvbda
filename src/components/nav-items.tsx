'use client';

import {
	SidebarGroup,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
} from '@/components/ui/sidebar';
import { Link } from '@/i18n/navigation';
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from '@radix-ui/react-collapsible';
import { ChevronRight } from 'lucide-react';

export function NavItems({ items, label }: any) {
	return (
		<SidebarGroup className="group-data-[collapsible=icon]:hidden">
			<SidebarGroupLabel>{label}</SidebarGroupLabel>
			<SidebarMenu>
				{items.map((item: any) =>
					item?.items ? (
						<Collapsible
							key={item.title}
							asChild
							defaultOpen={item.isActive}
							className="group/collapsible"
						>
							<SidebarMenuItem>
								<CollapsibleTrigger asChild>
									<SidebarMenuButton tooltip={item.title}>
										{item.icon && <item.icon />}
										<span>{item.title}</span>
										<ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
									</SidebarMenuButton>
								</CollapsibleTrigger>
								<CollapsibleContent>
									<SidebarMenuSub>
										{item.items?.map((subItem: any) => (
											<SidebarMenuSubItem key={subItem.title}>
												<SidebarMenuSubButton asChild>
													<a href={subItem.url}>
														<span>{subItem.title}</span>
													</a>
												</SidebarMenuSubButton>
											</SidebarMenuSubItem>
										))}
									</SidebarMenuSub>
								</CollapsibleContent>
							</SidebarMenuItem>
						</Collapsible>
					) : (
						<SidebarMenuItem key={item.title}>
							<SidebarMenuButton asChild>
								<Link href={item.url} prefetch={false}>
									<item.icon />
									<span>{item.title}</span>
								</Link>
							</SidebarMenuButton>
						</SidebarMenuItem>
					),
				)}
			</SidebarMenu>
		</SidebarGroup>
	);
}
