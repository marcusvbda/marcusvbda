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
		labelEn: 'Backend & Platform',
		skillsKey: null,
		skillsEn: 'PHP, Node.js, Laravel, NestJS, PostgreSQL, Redis',
	},
	{
		id: 'frontend',
		labelKey: 'skills_frontend_label',
		labelEn: 'Frontend (supporting)',
		skillsKey: null,
		skillsEn: 'React, Next.js, TypeScript, Tailwind CSS',
	},
	{
		id: 'architecture',
		labelKey: 'skills_architecture_label',
		labelEn: 'Architecture & Systems',
		skillsKey: 'skills_architecture_skills',
		skillsEn:
			'Distributed Systems, Microservices, REST APIs, System Design, Scalability, High-Availability Systems, Performance Optimization',
	},
	{
		id: 'cloud',
		labelKey: 'skills_cloud_label',
		labelEn: 'Cloud & DevOps',
		skillsKey: null,
		skillsEn: 'AWS, Docker, CI/CD, Vercel',
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
										{skillsText.split(',').map((skill: string, j: number) => (
											<Badge
												key={`skill_${category.id}_${j}`}
												variant="secondary"
											>
												{skill.trim()}
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
