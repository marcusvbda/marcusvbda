'use client';

import { useMemo, useState } from 'react';
import { Button } from './ui/button';
import { Menu, MoveRight, X } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { useTheme } from 'next-themes';

export default function Header() {
	const { setTheme, theme } = useTheme();

	const navigationItems: any = useMemo(() => {
		return [
			{
				title: 'Home',
				href: '/',
				description: '',
			},
			{
				title: 'Restricted area',
				href: '/admin',
				description: '',
			},
			{
				title: `Set to ${theme === 'dark' ? 'light' : 'dark'} mode`,
				onClick: () => setTheme(theme === 'dark' ? 'light' : 'dark'),
				description: '',
			},
		];
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [theme]);

	const [isOpen, setOpen] = useState(false);
	return (
		<header className="w-full z-40 fixed top-0 left-0 bg-background">
			<div className="container relative mx-auto min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center px-4 md:px-4">
				<div className="justify-start items-center gap-4 lg:flex hidden flex-row">
					{navigationItems.map((item: any) =>
						item?.href ? (
							<Link key={item.title} href={item.href}>
								<Button variant="ghost">{item.title}</Button>
							</Link>
						) : (
							<Button key={item.title} variant="ghost" onClick={item.onClick}>
								{item.title}
							</Button>
						),
					)}
				</div>
				<div className="flex lg:justify-center">
					<p className="font-semibold">TWBlocks</p>
				</div>
				<div className="flex w-12 shrink lg:hidden items-end justify-end ml-auto">
					<Button variant="ghost" onClick={() => setOpen(!isOpen)}>
						{isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
					</Button>
					{isOpen && (
						<div className="absolute top-20 border-t flex flex-col w-full right-0 bg-background shadow-lg py-4 container gap-8">
							{navigationItems.map((item: any) => (
								<div key={item.title}>
									<div className="flex flex-col gap-2 px-4">
										<Link
											href={item?.href || '#'}
											className="flex justify-between items-center"
											onClick={(evt: any) => {
												if (item?.onClick) {
													evt.preventDefault();
													item.onClick();
												}
											}}
										>
											<span className="text-lg">{item.title}</span>
											<MoveRight className="w-4 h-4 stroke-1 text-muted-foreground" />
										</Link>
									</div>
								</div>
							))}
						</div>
					)}
				</div>
			</div>
		</header>
	);
}
