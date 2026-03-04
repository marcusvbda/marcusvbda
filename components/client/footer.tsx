'use client';

import { useLanguage } from '@/contexts/language-context';
import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
	const currentYear = new Date().getFullYear();
	const { t } = useLanguage();

	return (
		<footer className="border-t bg-card">
			<div className="max-width-content section-padding py-12!">
				<div className="flex flex-col md:flex-row items-center justify-between gap-6">
					<div className="text-center md:text-left">
						<p className="font-bold text-lg mb-1">
							Marcus Vinicius Bassalobre de Assis
						</p>
						<p className="text-sm text-muted-foreground">
							{t('Built with React, TypeScript & Tailwind CSS')}
						</p>
					</div>

					<div className="flex items-center gap-4">
						<Link
							href="https://linkedin.com/in/mvbassalobre"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Linkedin"
							className="inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors bg-accent/10"
						>
							<Linkedin className="h-5 w-5 text-accent" />
						</Link>
					</div>

					<div className="flex items-center gap-4">
						<Link
							href="https://linkedin.com/in/mvbassalobre"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Linkedin"
							className="inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors bg-accent/10"
						>
							<Linkedin className="h-5 w-5 text-accent" />
						</Link>
						<Link
							href="https://github.com/marcusvbda"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Github"
							className="inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors bg-accent/10"
						>
							<Github className="h-5 w-5 text-accent" />
						</Link>
						<Link
							href="mailto:bassalobre.vinicius@gmail.com"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Email"
							className="inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors bg-accent/10"
						>
							<Mail className="h-5 w-5 text-accent" />
						</Link>
					</div>
				</div>

				<div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
					© {currentYear} Marcus Vinicius Bassalobre de Assis.{' '}
					{t('All rights reserved')}.
				</div>
			</div>
		</footer>
	);
}
