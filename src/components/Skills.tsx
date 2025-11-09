/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code2, Server, Wrench, Lightbulb } from 'lucide-react';

export const Skills = () => {
	const { t } = useLanguage();

	return (
		<section id="skills" className="section-padding">
			<div className="max-width-content">
				<div className="text-center mb-16 animate-fade-in">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						{t('skills.title')}
					</h2>
					<p className="text-lg text-muted-foreground">
						{t('skills.subtitle')}
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
					{Object.keys(t('skills.categories') || {}).map(
						(index: string, i: any) => {
							return (
								<Card
									key={index}
									className="hover-lift animate-fade-in"
									style={{ animationDelay: `${i * 0.1}s` }}
								>
									<CardHeader>
										<CardTitle className="flex items-center gap-2">
											{t(`skills.categories.${index}.label`)}
										</CardTitle>
									</CardHeader>
									<CardContent>
										<div className="flex flex-wrap gap-2">
											{(t(`skills.categories.${index}.skills`) || '')
												.split(',')
												.map((skill, i) => (
													<Badge
														key={`skill_${skill}_${i}`}
														variant="secondary"
													>
														{skill.trim()}
													</Badge>
												))}
										</div>
									</CardContent>
								</Card>
							);
						},
					)}
				</div>
			</div>
		</section>
	);
};
