'use client';

import { useLanguage } from '@/contexts/language-context';
import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Content({ content }: any) {
	const { language } = useLanguage();
	const currentYear = new Date().getFullYear();
	const t = content?.footer?.[language];
	const info = content?.info?.[language];

	const socialLinks = [
		{
			icon: Mail,
			href: `mailto:${info?.email}`,
			label: 'Email',
		},
		{
			icon: Linkedin,
			href: `https://${info?.linkedin}`,
			label: 'Linkedin',
		},
		{
			icon: Github,
			href: `https://${info?.github}`,
			label: 'Github',
		},
	];

	return (
		<footer className="border-t bg-card">
			<div className="max-width-content section-padding py-12!">
				<div className="flex flex-col md:flex-row items-center justify-between gap-6">
					<div className="text-center md:text-left">
						<p className="font-bold text-lg mb-1">{info?.name}</p>
						<p className="text-sm text-muted-foreground">{t?.builtWith}</p>
					</div>

					<div className="flex items-center gap-4">
						{socialLinks.map((link) => {
							const Icon = link.icon;
							return (
								<Link
									key={`social_${link.label}`}
									href={link.href as any}
									target={link.href.startsWith('http') ? '_blank' : undefined}
									rel={
										link.href.startsWith('http')
											? 'noopener noreferrer'
											: undefined
									}
									aria-label={link.label}
									className="inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors bg-accent/10"
								>
									<Icon className="h-5 w-5 text-accent" />
								</Link>
							);
						})}
					</div>
				</div>

				<div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
					© {currentYear} {info?.name}. {t?.rights}.
				</div>
			</div>
		</footer>
	);
}
