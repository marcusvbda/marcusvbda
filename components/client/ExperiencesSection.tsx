'use client';

import { Briefcase } from 'lucide-react';
import { ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/language-context';
import { motion, type Variants } from 'framer-motion';

const EXPERIENCES: Array<{
	id: string;
	company: string;
	roleKey: string;
	roleEn: string;
	periodKey: string;
	periodEn: string;
	locationKey?: string;
	locationEn?: string;
	descKey: string;
		descEn: string;
}> = [
	{
		id: 'investidor10',
		company: 'Investidor10 (Fintech)',
		roleKey: 'exp_investidor10_role',
		roleEn: 'Senior Software Engineer',
		periodKey: 'exp_investidor10_period',
		periodEn: 'Nov 2023 – Present',
		locationKey: 'exp_investidor10_location',
		locationEn: 'Remote (Based in Dublin)',
		descKey: 'exp_investidor10_description',
		descEn:
			'• Reduced API latency by 60% through advanced Redis caching strategies and database query optimisation.\n• Designed backend architecture improvements to support high-volume financial data processing.\n• Architected and launched the Income Tax system (IR 2024) with scalable request handling and state management.\n• Improved engagement in the tax module by 40% through performance and UX improvements.\n• Contributed to backend evolution of the Carteira investment platform, scaling infrastructure to support over 1M users.',
	},
	{
		id: 'talentsieve',
		company: 'TalentSieve (AI SaaS)',
		roleKey: 'exp_talentsieve_role',
		roleEn: 'Founder & Lead Engineer',
		periodKey: 'exp_talentsieve_period',
		periodEn: 'Jan 2025 – Present',
		locationKey: 'exp_talentsieve_location',
		locationEn: 'Own Project',
		descKey: 'exp_talentsieve_description',
		descEn:
			'• Designed and built an AI-powered recruitment co-pilot focused on candidate triage and hiring analytics.\n• Architected a full-stack SaaS platform using NestJS, Next.js and AWS.\n• Developed a multimodal AI chat engine for candidate screening and workflow automation.\n• Built automated ROI and hiring performance dashboards.\n• Designed system architecture compliant with the EU AI Act and GDPR, including a human-in-the-loop explainability model.',
	},
	{
		id: 'vega',
		company: 'Vega Checkout / Payt',
		roleKey: 'exp_vega_role',
		roleEn: 'Senior Software Engineer / Tech Lead',
		periodKey: 'exp_vega_period',
		periodEn: 'Jan 2020 – Oct 2023',
		descKey: 'exp_vega_description',
		descEn:
			'• Built and scaled a high-conversion checkout platform processing millions of euros monthly.\n• Designed and implemented scalable payment backend systems.\n• Led refactor of legacy monolithic systems into microservices architecture.\n• Mentored 10+ developers and established strong code review and CI/CD practices.\n• Reduced production incidents by 35% through improved engineering processes and reliability work.',
	},
	{
		id: 'diwe',
		company: 'DIWE',
		roleKey: 'exp_diwe_role',
		roleEn: 'Senior Software Engineer',
		periodKey: 'exp_diwe_period',
		periodEn: 'Oct 2018 – Dec 2019',
		descKey: 'exp_diwe_description',
		descEn:
			'• Lead developer of a University Management System later acquired due to its operational efficiency.\n• Designed backend architecture for automated academic workflows and scalable administrative modules.\n• Delivered performance improvements and system automation that significantly increased operational efficiency.',
	},
];

const containerVariants: Variants = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.12 },
	},
};

const cardVariants: Variants = {
	hidden: { opacity: 0, y: 40 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.55, ease: 'easeOut' },
	},
};

export default function Experiences(): ReactNode {
	const { t } = useLanguage();

	return (
		<section id="experience" className="section-padding">
			<div className="max-width-content">
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 32 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.6, ease: 'easeOut' }}
				>
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						{t('Experience')}
					</h2>
					<p className="text-lg text-muted-foreground">
						{t('Career Journey', 'Career Journey')}
					</p>
				</motion.div>

				<motion.div
					className="space-y-8 grid"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.1 }}
				>
					{EXPERIENCES.map((exp) => (
						<motion.div key={`xp_${exp.id}`} variants={cardVariants}>
							<motion.div
								whileHover={{ scale: 1.01, y: -3 }}
								transition={{ type: 'spring', stiffness: 250, damping: 22 }}
							>
								<Card>
									<CardHeader>
										<div className="flex items-start justify-between gap-4">
											<div className="space-y-1 flex-1">
												<CardTitle className="text-2xl flex items-center gap-2">
													<Briefcase className="h-5 w-5 text-accent" />
													{exp.company}
												</CardTitle>
												<p className="text-lg font-semibold text-accent">
													{t(exp.roleKey, exp.roleEn)}
												</p>
												<p className="text-sm text-muted-foreground">
													{t(exp.periodKey, exp.periodEn)}
													{exp.locationKey && exp.locationEn && (
														<>
															{' · '}
															{t(exp.locationKey, exp.locationEn)}
														</>
													)}
												</p>
											</div>
										</div>
									</CardHeader>
									<CardContent className="space-y-4">
										<p className="text-muted-foreground leading-relaxed whitespace-pre-line">
											{t(exp.descKey, exp.descEn)}
										</p>
									</CardContent>
								</Card>
							</motion.div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
