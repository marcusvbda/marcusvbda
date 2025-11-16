'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { Badge } from '@/components/ui/badge';
import { Github, Link, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/language-context';

export default function Content({ content }: any) {
	const { language } = useLanguage();

	const contactMethods = [
		{
			icon: Mail,
			label: 'Email',
			value: content?.info?.[language]?.email,
			href: `mailto:${content?.info?.[language]?.email}`,
		},
		{
			icon: Linkedin,
			label: 'Linkedin',
			value: (content?.info?.[language]?.linkedin || '#').split('/').pop(),
			href: 'https://'.concat(content?.info?.[language]?.linkedin),
		},
		{
			icon: MapPin,
			label: content?.info?.[language]?.location,
			value: content?.info?.[language]?.location,
			href: null,
		},
		{
			icon: Github,
			label: 'Github',
			value: (content?.info?.[language]?.github || '#').split('/').pop(),
			href: 'https://'.concat(content?.info?.[language]?.github || '#'),
		},
		{
			icon: Phone,
			label: content?.contact?.[language]?.phone,
			value: content?.info?.[language]?.phone,
			href: null,
		},
	];

	return (
		<section id="contact" className="section-padding bg-muted/30">
			<div className="max-width-content max-w-4xl">
				<div className="text-center mb-16 animate-fade-in">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						{content?.contact?.[language]?.title}
					</h2>
					<p className="text-lg text-muted-foreground mb-4">
						{content?.contact?.[language]?.subtitle}
					</p>
					<p className="text-muted-foreground max-w-2xl mx-auto">
						{content?.contact?.[language]?.description}
					</p>
				</div>

				<div className="space-y-6">
					<div className="flex flex-wrap justify-center gap-6">
						{contactMethods.map((method, index) => {
							const Icon = method.icon;
							return (
								<Card
									key={`card_${method.label}`}
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
													<a
														href={method.href}
														target={
															method.href.startsWith('http')
																? '_blank'
																: undefined
														}
													>
														{method.value}
													</a>
												) : (
													<>
														{(method.value || '')
															.split(',')
															.map((x: any, i: any) => (
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
