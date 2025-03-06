'use client';

import { useMemo, useState } from 'react';
import { Button } from './ui/button';
import { Menu, MoveRight, X } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { useTheme } from 'next-themes';
import { useLocale } from 'next-intl';
import { useT } from '@/i18n/translate';

export default function Header() {
	const t = useT('LandingPage');
	const { setTheme, theme } = useTheme();
	const locale = useLocale();

	const changePageLanguage = (locale: string) => {
		const url = window.location.href;
		const urlParts = url.split('/');
		urlParts[3] = locale;
		const newUrl = urlParts.join('/');
		window.location.href = newUrl;
	};

	const navigationItems: any = useMemo(() => {
		return [
			{
				title: t('Home'),
				href: '/',
				description: '',
			},
			{
				title: t('Restricted area'),
				href: '/admin',
				description: '',
			},
			{
				title: t('Set to {theme} mode', {
					theme: theme === 'dark' ? 'light' : 'dark',
				}),
				onClick: () => setTheme(theme === 'dark' ? 'light' : 'dark'),
				description: '',
			},
			{
				title: t('Change language to {locale}', {
					locale: locale === 'en' ? 'pt-BR' : 'en',
				}),
				onClick: () => changePageLanguage(locale === 'en' ? 'pt-BR' : 'en'),
				description: '',
			},
		];
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [theme]);

	const [isOpen, setOpen] = useState(false);
	return (
		<header className="w-full z-40 fixed top-0 left-0 bg-background">
			<div className="container relative mx-auto min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-2 items-center px-4 md:px-4">
				<div className="flex lg:justify-center">
					<p className="font-semibold">TWBlocks</p>
				</div>
				<div className="justify-end items-center gap-4 lg:flex hidden flex-row">
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
											<span className="text-sm">{item.title}</span>
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
