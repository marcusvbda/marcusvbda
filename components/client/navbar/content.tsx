'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/language-context';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './theme-toggle';
import { LanguageSwitcher } from './language-switcher';
import { useIsMobile } from '@/hooks/use-mobile';

export default function Content({ content }: any) {
	const { language } = useLanguage();
	const isMobile = useIsMobile();
	const [isOpen, setIsOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const navContent = content?.nav?.[language] || {};
	const navItems = Object.keys(navContent)
		.filter((key) => key !== 'language')
		.map((key) => ({
			label: navContent[key],
			href: `#${key}`,
		}));

	const scrollToSection = (href: string) => {
		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
			setIsOpen(false);
		}
	};

	return (
		<nav
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/95 backdrop-blur-md ${
				isScrolled || isMobile
					? `*:bg-background/95 ${
							isScrolled ? 'backdrop-blur-md shadow-sm' : ''
					  }`
					: 'bg-transparent'
			}`}
		>
			<div className="max-width-content section-padding py-4!">
				<div className="flex items-center justify-between">
					<Link
						href="#hero"
						onClick={(e) => {
							e.preventDefault();
							scrollToSection('#hero');
						}}
						className="text-xl font-bold text-foreground hover:text-accent transition-colors"
					>
						<img
							loading="lazy"
							src={`/assets/logo.png`}
							alt="logo"
							className="w-32 md:w-52 dark:invert"
						/>
					</Link>

					<div className="hidden md:flex items-center gap-8">
						{navItems.map((item) => (
							<Link
								key={`nav_${item.label}`}
								href={item.href}
								onClick={(e) => {
									e.preventDefault();
									scrollToSection(item.href);
								}}
								className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
							>
								{item.label}
							</Link>
						))}
						<ThemeToggle />
						<LanguageSwitcher />
					</div>

					{/* Mobile Menu Button */}
					<div className="md:hidden flex items-center gap-2">
						<ThemeToggle />
						<Button
							variant="ghost"
							size="icon"
							onClick={() => setIsOpen(!isOpen)}
							aria-label="Toggle menu"
						>
							{isOpen ? (
								<X className="h-5 w-5" />
							) : (
								<Menu className="h-5 w-5" />
							)}
						</Button>
						<div className="border-l h-6" />
						<LanguageSwitcher />
					</div>
				</div>

				{/* Mobile Navigation */}
				{isOpen && (
					<div className="md:hidden pt-4 pb-2 animate-fade-in">
						<div className="flex flex-col gap-4">
							{navItems.map((item) => (
								<Link
									key={`nav_${item.label}`}
									href={item.href}
									onClick={(e) => {
										e.preventDefault();
										scrollToSection(item.href);
									}}
									className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
								>
									{item.label}
								</Link>
							))}
							<div className="border-t pt-4" />
						</div>
					</div>
				)}
			</div>
		</nav>
	);
}
