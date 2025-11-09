import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Linkedin, MapPin, Github, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Contact = () => {
	const { t } = useLanguage();

	const contactMethods = [
		{
			icon: Mail,
			label: 'Email',
			value: t('info.email'),
			href: `mailto:${t('info.email')}`,
		},
		{
			icon: Linkedin,
			label: 'Linkedin',
			value: (t('info.linkedin') || '#').split('/').pop(),
			href: t('info.linkedin'),
		},
		{
			icon: MapPin,
			label: t('contact.location'),
			value: t('info.location'),
			href: null,
		},
		{
			icon: Github,
			label: 'Github',
			value: (t('info.github') || '#').split('/').pop(),
			href: t('info.github') || '#',
		},
		{
			icon: Phone,
			label: t('contact.phone'),
			value: t('info.phone'),
			href: null,
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

				<div className="space-y-6">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{contactMethods.slice(0, 3).map((method, index) => {
							const Icon = method.icon;
							return (
								<Card
									key={`card_${method.label}`}
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
													<>
														{(method.value || '').split(',').map((x, i) => (
															<p
																key={`method_${method.label}_${i}`}
																className="text-sm text-muted-foreground"
															>
																{x}
															</p>
														))}
													</>
												)}
											</div>
										</div>
									</CardContent>
								</Card>
							);
						})}
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:w-2/3 mx-auto">
						{contactMethods.slice(3).map((method, index) => {
							const Icon = method.icon;
							return (
								<Card
									key={`card_${method.label}`}
									className="hover-lift animate-fade-in"
									style={{ animationDelay: `${(index + 3) * 0.1}s` }}
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
													<>
														{(method.value || '').split(',').map((x, i) => (
															<p
																key={`method_${method.label}_${i}`}
																className="text-sm text-muted-foreground"
															>
																{x}
															</p>
														))}
													</>
												)}
											</div>
										</div>
									</CardContent>
								</Card>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};
