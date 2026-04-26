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
			"• Led backend development of Carteira, one of Latin America's largest investment portfolio platforms serving 65K+ investors.\n• Reduced API latency by 60% through Redis caching and query optimisation.\n• Architected the 2026 Annual Income Tax Return module improving user engagement by 40%.\n• Improved reliability and performance of critical financial data APIs.",
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
		id: 'bria',
		company: 'BRIA – Brazil Ireland Association',
		roleKey: 'exp_bria_role',
		roleEn: 'Lead Product Manager (Volunteer)',
		periodKey: 'exp_bria_period',
		periodEn: 'April 2026 – Present',
		locationKey: 'exp_bria_location',
		locationEn: 'Dublin, Ireland',
		descKey: 'exp_bria_description',
		descEn:
			'• Defining product strategy and stakeholder alignment for digital initiatives supporting the Brazilian community in Ireland.\n• Guiding cross-functional teams on feature prioritisation, UX improvements, and delivery of community solutions.\n• Bridging product thinking and technology to drive community engagement and digital experience.',
	},
	{
		id: 'vega',
		company: 'Vega Checkout / Payt (Otimize)',
		roleKey: 'exp_vega_role',
		roleEn: 'Senior Software Engineer / Tech Lead',
		periodKey: 'exp_vega_period',
		periodEn: 'Oct 2018 – Oct 2023',
		locationKey: 'exp_vega_location',
		locationEn: 'Brazil',
		descKey: 'exp_vega_description',
		descEn:
			'• Built and maintained backend services supporting high-volume fintech payment transactions processing millions of euros monthly.\n• Led migration from legacy monolithic architecture to scalable microservices.\n• Mentored 10+ developers and established strong code review and CI/CD practices.\n• Reduced production incidents by 35% through improved reliability and engineering standards.\n• Collaborated with product and engineering teams to deliver scalable checkout and analytics solutions.',
	},
	{
		id: 'diwe',
		company: 'DIWE',
		roleKey: 'exp_diwe_role',
		roleEn: 'Senior Software Engineer',
		periodKey: 'exp_diwe_period',
		periodEn: 'Jun 2021 – Jul 2024',
		locationKey: 'exp_diwe_location',
		locationEn: 'Joinville, Brazil (Remote)',
		descKey: 'exp_diwe_description',
		descEn:
			'• Lead engineer responsible for a university management platform, significantly improving academic and administrative workflows.\n• Designed backend architecture for automated student scheduling and administrative management.\n• Built scalable modules for student and institutional operations, improving efficiency across departments.\n• Collaborated with cross-functional teams to deliver reliable enterprise software serving thousands of users.',
	},
	{
		id: 'unimar',
		company: 'Universidade de Marília',
		roleKey: 'exp_unimar_role',
		roleEn: 'Software Owner — CRM Fullstack Developer',
		periodKey: 'exp_unimar_period',
		periodEn: '2017 – Sep 2023',
		locationKey: 'exp_unimar_location',
		locationEn: 'Marília, Brazil',
		descKey: 'exp_unimar_description',
		descEn:
			'• Built and maintained web platforms, CRM systems and enterprise applications across multiple industries.\n• Owned the full software lifecycle: architecture, backend APIs, database design, and user-facing features.\n• Delivered fullstack solutions serving students and institutional stakeholders.',
	},
	{
		id: 'aliveit',
		company: 'alive it',
		roleKey: 'exp_aliveit_role',
		roleEn: 'Developer',
		periodKey: 'exp_aliveit_period',
		periodEn: '2014 – Dec 2017',
		locationKey: 'exp_aliveit_location',
		locationEn: 'São Paulo, Brazil',
		descKey: 'exp_aliveit_description',
		descEn:
			'• Built web platforms, CRM systems and enterprise applications across multiple industries.\n• Focused on backend development, APIs and database-driven systems.',
	},
	{
		id: 'copysupply',
		company: 'Copy Supply',
		roleKey: 'exp_copysupply_role',
		roleEn: 'Software Developer',
		periodKey: 'exp_copysupply_period',
		periodEn: 'Dec 2017 – Oct 2018',
		locationKey: 'exp_copysupply_location',
		locationEn: 'São Paulo, Brazil',
		descKey: 'exp_copysupply_description',
		descEn:
			'• Built web platforms and enterprise applications focused on backend development and database-driven systems.',
	},
	{
		id: 'guess',
		company: 'Guess Soluções em Tecnologia',
		roleKey: 'exp_guess_role',
		roleEn: 'Software Engineering Intern',
		periodKey: 'exp_guess_period',
		periodEn: '2013 – 2014',
		locationKey: 'exp_guess_location',
		locationEn: 'Marília, Brazil',
		descKey: 'exp_guess_description',
		descEn: '• Early career experience in technology and software development.',
	},
	{
		id: 'masterel',
		company: 'Masterel',
		roleKey: 'exp_masterel_role',
		roleEn: 'C++ Developer',
		periodKey: 'exp_masterel_period',
		periodEn: '2010 – 2013',
		locationKey: 'exp_masterel_location',
		locationEn: 'Marília, Brazil',
		descKey: 'exp_masterel_description',
		descEn:
			'• Early career development of enterprise applications and software systems.',
	},
];

const RECENT_IDS = new Set([
	'investidor10',
	'talentsieve',
	'bria',
	'vega',
	'diwe',
]);

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

const listVariants: Variants = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.08 } },
};

const rowVariants: Variants = {
	hidden: { opacity: 0, x: -16 },
	visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

export default function Experiences(): ReactNode {
	const { t } = useLanguage();

	const recentExps = EXPERIENCES.filter((e) => RECENT_IDS.has(e.id));
	const earlierExps = EXPERIENCES.filter((e) => !RECENT_IDS.has(e.id));

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
					{recentExps.map((exp) => (
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

				<motion.div
					className="mt-12"
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.2 }}
					transition={{ duration: 0.5, ease: 'easeOut' }}
				>
					<h3 className="text-lg font-semibold text-muted-foreground mb-6 border-b border-border pb-2">
						{t('Earlier Experience', 'Earlier Experience')}
					</h3>
					<motion.div
						className="space-y-4"
						variants={listVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.1 }}
					>
						{earlierExps.map((exp) => (
							<motion.div
								key={`xp_${exp.id}`}
								variants={rowVariants}
								className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 py-3 border-b border-border/40 last:border-0"
							>
								<div>
									<span className="font-medium text-foreground">
										{exp.company}
									</span>
									<span className="text-muted-foreground">
										{' '}
										·{' '}
										<span className="text-accent text-sm">
											{t(exp.roleKey, exp.roleEn)}
										</span>
									</span>
								</div>
								<span className="text-sm text-muted-foreground whitespace-nowrap">
									{t(exp.periodKey, exp.periodEn)}
								</span>
							</motion.div>
						))}
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
