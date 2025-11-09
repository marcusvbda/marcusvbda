import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Linkedin, MapPin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Contact = () => {
	const { t } = useLanguage();

	const contactMethods = [
		{
			icon: Mail,
			label: 'Email',
			value: 'bassalobre.vinicius@gmail.com',
			href: 'mailto:bassalobre.vinicius@gmail.com',
		},
		{
			icon: Linkedin,
			label: 'Linkedin',
			value: 'mvbassalobre',
			href: 'https://linkedin.com/in/mvbassalobre',
		},
		{
			icon: MapPin,
			label: t('contact.location'),
			value: t('contact.locationValue'),
			href: null,
		},
		{
			icon: Github,
			label: 'Github',
			value: 'github.com/marcusvbda',
			href: 'https://github.com/marcusvbda',
		},
	];

	return (
		<section id="contact" className="section-padding bg-muted/30">
			<div className="max-width-content max-w-4xl">
				<div className="text-center mb-16 animate-fade-in">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						{t('contact.title')}
					</h2>
					<p className="text-lg text-muted-foreground mb-4">
						{t('contact.subtitle')}
					</p>
					<p className="text-muted-foreground max-w-2xl mx-auto">
						{t('contact.description')}
					</p>
				</div>

				<div className="grid md:grid-cols-4 gap-6">
					{contactMethods.map((method, index) => {
						const Icon = method.icon;
						return (
							<Card
								key={method.label}
								className="hover-lift animate-fade-in"
								style={{ animationDelay: `${index * 0.1}s` }}
							>
								<CardContent className="pt-6">
									<div className="text-center space-y-4">
										<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10">
											<Icon className="h-6 w-6 text-accent" />
										</div>
										<div className="space-y-1">
											<p className="font-semibold">{method.label}</p>
											{method.href ? (
												<Button
													variant="link"
													asChild
													className="text-muted-foreground hover:text-accent h-auto p-0"
												>
													<a
														href={method.href}
														target={
															method.href.startsWith('http')
																? '_blank'
																: undefined
														}
														rel={
															method.href.startsWith('http')
																? 'noopener noreferrer'
																: undefined
														}
													>
														{method.value}
													</a>
												</Button>
											) : (
												<p className="text-sm text-muted-foreground">
													{method.value}
												</p>
											)}
										</div>
									</div>
								</CardContent>
							</Card>
						);
					})}
				</div>
			</div>
		</section>
	);
};
