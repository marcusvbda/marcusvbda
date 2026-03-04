'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/language-context';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './theme-toggle';
import { LanguageSwitcher } from './language-switcher';
import { useIsMobile } from '@/hooks/use-mobile';
import Image from 'next/image';

export default function Content() {
	const { t } = useLanguage();
	const isMobile = useIsMobile();
	const [isOpen, setIsOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		let ticking = false;
		const handleScroll = () => {
			if (!ticking) {
				window.requestAnimationFrame(() => {
					setIsScrolled(window.scrollY > 50);
					ticking = false;
				});
				ticking = true;
			}
		};
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

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
						<Image
							src="/assets/logo.png"
							alt="logo"
							width={208}
							height={52}
							priority
							className="w-32 md:w-52 dark:invert"
						/>
					</Link>

					<div className="hidden md:flex items-center gap-8">
						<Link
							href="#about"
							onClick={(e) => {
								e.preventDefault();
								scrollToSection('#about');
							}}
							className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
						>
							{t('About')}
						</Link>
						<Link
							href="#experience"
							onClick={(e) => {
								e.preventDefault();
								scrollToSection('#experience');
							}}
							className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
						>
							{t('Experience')}
						</Link>
						<Link
							href="#projects"
							onClick={(e) => {
								e.preventDefault();
								scrollToSection('#projects');
							}}
							className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
						>
							{t('Projects')}
						</Link>
						<Link
							href="#skills"
							onClick={(e) => {
								e.preventDefault();
								scrollToSection('#skills');
							}}
							className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
						>
							{t('Skills')}
						</Link>
						<Link
							href="#education"
							onClick={(e) => {
								e.preventDefault();
								scrollToSection('#education');
							}}
							className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
						>
							{t('Education')}
						</Link>
						<Link
							href="#contact"
							onClick={(e) => {
								e.preventDefault();
								scrollToSection('#contact');
							}}
							className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
						>
							{t('Contact')}
						</Link>
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
							<Link
								href="#about"
								onClick={(e) => {
									e.preventDefault();
									scrollToSection('#about');
								}}
								className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
							>
								{t('About')}
							</Link>
							<Link
								href="#experience"
								onClick={(e) => {
									e.preventDefault();
									scrollToSection('#experience');
								}}
								className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
							>
								{t('Experience')}
							</Link>
							<Link
								href="#projects"
								onClick={(e) => {
									e.preventDefault();
									scrollToSection('#projects');
								}}
								className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
							>
								{t('Projects')}
							</Link>
							<Link
								href="#skills"
								onClick={(e) => {
									e.preventDefault();
									scrollToSection('#skills');
								}}
								className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
							>
								{t('Skills')}
							</Link>
							<Link
								href="#education"
								onClick={(e) => {
									e.preventDefault();
									scrollToSection('#education');
								}}
								className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
							>
								{t('Education')}
							</Link>
							<Link
								href="#contact"
								onClick={(e) => {
									e.preventDefault();
									scrollToSection('#contact');
								}}
								className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
							>
								{t('Contact')}
							</Link>
							<div className="border-t pt-4" />
						</div>
					</div>
				)}
			</div>
		</nav>
	);
}
