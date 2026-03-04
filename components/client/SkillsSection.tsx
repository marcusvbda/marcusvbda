'use client';

import { useLanguage } from '@/contexts/language-context';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SKILLS_CATEGORIES: Array<{
	id: string;
	labelKey: string;
	labelEn: string;
	skillsKey: string | null;
	skillsEn: string;
}> = [
	{
		id: 'backend',
		labelKey: 'skills_backend_label',
		labelEn: 'Backend',
		skillsKey: 'skills_backend_skills',
		skillsEn: 'PHP 8+ (Laravel), Node.js (NestJS, Express), Python, Go.',
	},
	{
		id: 'cloud',
		labelKey: 'skills_cloud_label',
		labelEn: 'Cloud & Platform',
		skillsKey: 'skills_cloud_skills',
		skillsEn: 'AWS (EC2, S3, RDS, Lambda), Docker, CI/CD Pipelines, Microservices.',
	},
	{
		id: 'data',
		labelKey: 'skills_data_label',
		labelEn: 'Data & Performance',
		skillsKey: 'skills_data_skills',
		skillsEn:
			'PostgreSQL, Redis (Advanced Caching), Query Optimization, ElasticSearch.',
	},
	{
		id: 'frontend',
		labelKey: 'skills_frontend_label',
		labelEn: 'Frontend & UI',
		skillsKey: 'skills_frontend_skills',
		skillsEn:
			'React, Next.js, TypeScript, Tailwind CSS, State Management (Context API).',
	},
	{
		id: 'ai',
		labelKey: 'skills_ai_label',
		labelEn: 'AI & Innovation',
		skillsKey: 'skills_ai_skills',
		skillsEn:
			'LLM Integration (OpenAI API), Vector Databases, Behavioral Data Analysis.',
	},
];

export default function Skills() {
	const { t } = useLanguage();

	return (
		<section id="skills" className="section-padding">
			<div className="max-width-content">
				<div className="text-center mb-16 animate-fade-in">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						{t('Skills & Technologies', 'Skills & Technologies')}
					</h2>
					<p className="text-lg text-muted-foreground">
						{t('Technical Expertise', 'Technical Expertise')}
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
					{SKILLS_CATEGORIES.map((category, i) => {
						const skillsText = category.skillsKey
							? t(category.skillsKey, category.skillsEn)
							: category.skillsEn;
						return (
							<Card
								key={category.id}
								className="hover-lift animate-fade-in"
								style={{ animationDelay: `${i * 0.1}s` }}
							>
								<CardHeader>
									<CardTitle className="flex items-center gap-2">
										{t(category.labelKey, category.labelEn)}
									</CardTitle>
								</CardHeader>
								<CardContent>
									<div className="flex flex-wrap gap-2">
										{skillsText
												.split(/[,·]/)
												.map((s: string) => s.trim())
												.filter(Boolean)
												.map((skill: string, j: number) => (
													<Badge
														key={`skill_${category.id}_${j}`}
														variant="secondary"
													>
														{skill}
													</Badge>
												))}
									</div>
								</CardContent>
							</Card>
						);
					})}
				</div>
			</div>
		</section>
	);
}
