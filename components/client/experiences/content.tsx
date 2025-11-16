'use client';

import { Briefcase } from 'lucide-react';
import { ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/language-context';

export default function Content({ content }: any): ReactNode {
	const { language } = useLanguage();
	const experience = content?.experience?.[language];

	return (
		<section id="experience" className="section-padding">
			<div className="max-width-content">
				<div className="text-center mb-16 animate-fade-in">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						{experience?.title}
					</h2>
					<p className="text-lg text-muted-foreground">
						{experience?.subtitle}
					</p>
				</div>

				<div className="space-y-8 grid">
					{Object.keys(experience?.companies || []).map((exp, index) => (
						<Card
							key={`xp_${exp}`}
							className="hover-lift animate-fade-in"
							style={{ animationDelay: `${index * 0.1}s` }}
						>
							<CardHeader>
								<div className="flex items-start justify-between gap-4">
									<div className="space-y-1 flex-1">
										<CardTitle className="text-2xl flex items-center gap-2">
											<Briefcase className="h-5 w-5 text-accent" />
											{experience?.companies?.[exp]?.company}
										</CardTitle>
										<p className="text-lg font-semibold text-accent">
											{experience?.companies?.[exp]?.role}
										</p>
										<p className="text-sm text-muted-foreground">
											{experience?.companies?.[exp]?.period}
										</p>
									</div>
								</div>
							</CardHeader>
							<CardContent className="space-y-4">
								<p className="text-muted-foreground leading-relaxed">
									{experience?.companies?.[exp]?.description}
								</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
