import { useLanguage } from '@/contexts/LanguageContext';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
	const { t } = useLanguage();
	const currentYear = new Date().getFullYear();

	const socialLinks = [
		{
			icon: Mail,
			href: 'mailto:bassalobre.vinicius@gmail.com',
			label: 'Email',
		},
		{
			icon: Linkedin,
			href: 'https://linkedin.com/in/mvbassalobre',
			label: 'Linkedin',
		},
	];

	return (
		<footer className="border-t bg-card">
			<div className="max-width-content section-padding !py-12">
				<div className="flex flex-col md:flex-row items-center justify-between gap-6">
					<div className="text-center md:text-left">
						<p className="font-bold text-lg mb-1">
							Marcus Vinicius Bassalobre de Assis
						</p>
						<p className="text-sm text-muted-foreground">
							{t('footer.builtWith')}
						</p>
					</div>

					<div className="flex items-center gap-4">
						{socialLinks.map((link) => {
							const Icon = link.icon;
							return (
								<a
									key={`social_${link.label}`}
									href={link.href}
									target={link.href.startsWith('http') ? '_blank' : undefined}
									rel={
										link.href.startsWith('http')
											? 'noopener noreferrer'
											: undefined
									}
									aria-label={link.label}
									className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-muted hover:bg-accent hover:text-accent-foreground transition-colors"
								>
									<Icon className="h-5 w-5" />
								</a>
							);
						})}
					</div>
				</div>

				<div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
					© {currentYear} Marcus Vinicius Bassalobre de Assis.{' '}
					{t('footer.rights')}.
				</div>
			</div>
		</footer>
	);
};
