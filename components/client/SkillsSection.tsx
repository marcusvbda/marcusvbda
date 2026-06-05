'use client';

import { useLanguage } from '@/contexts/language-context';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion, type Variants } from 'framer-motion';

const SKILLS_CATEGORIES: Array<{
	id: string;
	labelKey: string;
	labelEn: string;
	skillsKey: string | null;
	skillsEn: string;
}> = [
	{
		id: 'arch',
		labelKey: 'skills_arch_label',
		labelEn: 'Architecture & Leadership',
		skillsKey: 'skills_arch_skills',
		skillsEn: 'Software Architecture · Distributed Systems · Payments · Microservices · Technical Leadership · System Design',
	},
	{
		id: 'backend',
		labelKey: 'skills_backend_label',
		labelEn: 'Backend',
		skillsKey: 'skills_backend_skills',
		skillsEn: 'Laravel · Node.js · NestJS · PHP · Python · Java',
	},
	{
		id: 'frontend',
		labelKey: 'skills_frontend_label',
		labelEn: 'Frontend & UI',
		skillsKey: 'skills_frontend_skills',
		skillsEn:
			'React · Next.js · Vue.js · Nuxt.js · TypeScript · Tailwind CSS · Alpine.js · Livewire',
	},
	{
		id: 'data',
		labelKey: 'skills_data_label',
		labelEn: 'Databases & Performance',
		skillsKey: 'skills_data_skills',
		skillsEn:
			'PostgreSQL · MySQL · MongoDB · Redis · Query Optimisation',
	},
	{
		id: 'cloud',
		labelKey: 'skills_cloud_label',
		labelEn: 'Cloud & Infrastructure',
		skillsKey: 'skills_cloud_skills',
		skillsEn: 'AWS · Vercel · Docker · CI/CD · GitFlow · Redis · Supabase',
	},
	{
		id: 'ai',
		labelKey: 'skills_ai_label',
		labelEn: 'AI-Assisted Development',
		skillsKey: 'skills_ai_skills',
		skillsEn:
			'Cursor · Claude Code · GitHub Copilot · OpenAI APIs · LLM Integration',
	},
];

const containerVariants: Variants = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.1 },
	},
};

const cardVariants: Variants = {
	hidden: { opacity: 0, y: 30, scale: 0.95 },
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: { duration: 0.5, ease: 'easeOut' },
	},
};

const badgeVariants: Variants = {
	hidden: { opacity: 0, scale: 0.8 },
	visible: { opacity: 1, scale: 1 },
};

export default function Skills() {
	const { t } = useLanguage();

	return (
		<section id="skills" className="section-padding">
			<div className="max-width-content">
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 32 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.6, ease: 'easeOut' }}
				>
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						{t('Skills & Technologies', 'Skills & Technologies')}
					</h2>
					<p className="text-lg text-muted-foreground">
						{t('Technical Expertise', 'Technical Expertise')}
					</p>
				</motion.div>

				<motion.div
					className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.1 }}
				>
					{SKILLS_CATEGORIES.map((category) => {
						const skillsText = category.skillsKey
							? t(category.skillsKey, category.skillsEn)
							: category.skillsEn;
						return (
							<motion.div
								key={category.id}
								variants={cardVariants}
								whileHover={{ scale: 1.04, y: -5 }}
								transition={{ type: 'spring', stiffness: 220, damping: 20 }}
							>
								<Card className="h-full">
									<CardHeader>
										<CardTitle className="flex items-center gap-2">
											{t(category.labelKey, category.labelEn)}
										</CardTitle>
									</CardHeader>
									<CardContent>
										<motion.div
											className="flex flex-wrap gap-2"
											variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
										>
											{skillsText
												.split(/[,·]/)
												.map((s: string) => s.trim())
												.filter(Boolean)
												.map((skill: string, j: number) => (
													<motion.div key={`skill_${category.id}_${j}`} variants={badgeVariants}>
														<Badge variant="secondary">
															{skill}
														</Badge>
													</motion.div>
												))}
										</motion.div>
									</CardContent>
								</Card>
							</motion.div>
						);
					})}
				</motion.div>
			</div>
		</section>
	);
}
