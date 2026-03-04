'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Github, Link2Icon, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import Link from 'next/link';

const EMAIL = 'bassalobre.vinicius@gmail.com';
const LINKEDIN_URL = 'https://linkedin.com/in/mvbassalobre';
const GITHUB_URL = 'https://github.com/marcusvbda';

export default function ContactsSection() {
	const { t } = useLanguage();

	const contactMethods = [
		{
			icon: Mail,
			label: t('Email', 'Email'),
			value: EMAIL,
			href: `mailto:${EMAIL}`,
		},
		{
			icon: Linkedin,
			label: 'Linkedin',
			value: 'mvbassalobre',
			href: LINKEDIN_URL,
		},
		{
			icon: MapPin,
			label: t('Location', 'Location'),
			value: t('contactLocationValue', 'Dublin, Ireland'),
			href: null,
		},
		{
			icon: Github,
			label: 'Github',
			value: 'marcusvbda',
			href: GITHUB_URL,
		},
		{
			icon: Phone,
			label: t('Phone', 'Phone'),
			value: t(
				'contactPhoneValue',
				'+353 81 881 8967',
			),
			href: null,
		},
	];

	return (
		<section id="contact" className="section-padding bg-muted/30">
			<div className="max-width-content max-w-4xl">
				<div className="text-center mb-16 animate-fade-in">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						{t('Get in Touch', 'Get in Touch')}
					</h2>
					<p className="text-lg text-muted-foreground mb-4">
						{t("Let's Build Something Great", "Let's Build Something Great")}
					</p>
					<p className="text-muted-foreground max-w-2xl mx-auto">
						{t(
							'contactDescription',
							"I'm always interested in hearing about new opportunities, innovative projects, or just having a chat about technology and software engineering.",
						)}
					</p>
				</div>

				<div className="space-y-6">
					<div className="flex flex-wrap justify-center gap-6">
						{contactMethods.map((method, index) => {
							const Icon = method.icon;
							return (
								<Card
									key={`card_${method.label}_${index}`}
									className="hover-lift animate-fade-in w-full sm:w-auto sm:basis-[calc(50%-0.75rem)] md:basis-[calc(33.33%-1rem)] lg:basis-[calc(25%-1.125rem)]"
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
													<Link
														href={method.href || ('#' as any)}
														className="text-sm text-muted-foreground flex items-center gap-2 justify-center"
														target={
															method.href.startsWith('http')
																? '_blank'
																: undefined
														}
													>
														<Link2Icon className="size-4" />
														{method.value}
													</Link>
												) : (
													<>
														{(method.value || '')
															.split(',')
															.map((x: string, i: number) => (
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
}
