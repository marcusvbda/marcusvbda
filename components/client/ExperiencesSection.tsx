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
		company: 'Investidor10',
		roleKey: 'exp_investidor10_role',
		roleEn: 'Senior AI-First Software Engineer',
		periodKey: 'exp_investidor10_period',
		periodEn: 'Nov 2023 – Present',
		locationKey: 'exp_investidor10_location',
		locationEn: 'Remote (Based in Dublin)',
		descKey: 'exp_investidor10_description',
		descEn:
			"• Led the modernisation and migration of one of the company's most critical financial products, transforming a Laravel monolith into a modern offline-first architecture using Next.js.\n• Defined caching strategies, data synchronisation, and offline-first workflows to significantly improve user experience on a high-traffic investment platform serving thousands of simultaneous users.\n• Architected and implemented scalable microservices, queue-based messaging systems, real-time data pipelines, and advanced performance optimisation workflows.\n• Contributed directly to an approximately 15% increase in paid user conversion following the launch of the redesigned portfolio experience.\n• Maximised team efficiency through practical AI-assisted engineering workflows using Cursor and LLMs, reducing delivery time and mitigating human error.",
	},
	{
		id: 'bria',
		company: 'BRIA – Brazil Ireland Association',
		roleKey: 'exp_bria_role',
		roleEn: 'Volunteer Technology Project Manager',
		periodKey: 'exp_bria_period',
		periodEn: 'Jan 2026 – Present',
		locationKey: 'exp_bria_location',
		locationEn: 'Dublin, Ireland',
		descKey: 'exp_bria_description',
		descEn:
			"• Coordinates the development and maintenance of the association's websites, landing pages, and digital platforms.\n• Supports technical planning, product roadmap organisation, and technology delivery execution.\n• Mentors volunteer developers, guiding architectural decisions and engineering best practices.",
	},
	{
		id: 'vega',
		company: 'Vega Checkout',
		roleKey: 'exp_vega_role',
		roleEn: 'Senior Software Engineer',
		periodKey: 'exp_vega_period',
		periodEn: 'Jan 2024 – Jul 2025',
		locationKey: 'exp_vega_location',
		locationEn: 'Remote',
		descKey: 'exp_vega_description',
		descEn:
			'• Maintained and optimised scalable, resilient payment flows integrated with multiple market-leading payment gateways for high-volume e-commerce operations.\n• Improved transaction reliability and overall platform stability under peak traffic scenarios.\n• Supported engineering team growth through rigorous code reviews, best practice dissemination, and individual mentorship.\n• Developed robust Laravel applications for the e-commerce ecosystem and digital marketing automation pipelines.',
	},
	{
		id: 'diwe',
		company: 'DIWE',
		roleKey: 'exp_diwe_role',
		roleEn: 'Senior Full Stack Software Engineer',
		periodKey: 'exp_diwe_period',
		periodEn: 'Jun 2021 – Apr 2024',
		locationKey: 'exp_diwe_location',
		locationEn: 'Remote',
		descKey: 'exp_diwe_description',
		descEn:
			'• Delivered scalable enterprise systems for major corporations including Gerdau, Unimed, and Saint-Gobain across healthcare and heavy industry sectors.\n• Operated across multiple technical ecosystems (PHP, Node.js, Java, TypeScript, Python), navigating stack diversity with confidence and adaptability.\n• Actively contributed to corporate architecture discussions and the planning of new modules and microservices.',
	},
	{
		id: 'otimize',
		company: 'Payt (formerly Otimize)',
		roleKey: 'exp_otimize_role',
		roleEn: 'Senior Software Engineer / Tech Lead',
		periodKey: 'exp_otimize_period',
		periodEn: 'Oct 2018 – Oct 2023',
		locationKey: 'exp_otimize_location',
		locationEn: 'Remote',
		descKey: 'exp_otimize_description',
		descEn:
			"• Joined as the company's first software engineer, solely responsible for defining the engineering foundations and initial platform architecture from zero.\n• Built and scaled payment and e-commerce platforms from the ground up, which grew to process millions in monthly transactions.\n• Designed and implemented robust anti-fraud systems, webhook-based architectures, queue systems, and asynchronous processing workflows.\n• Architected scalable microservices and complex, secure integrations with multiple payment gateways.\n• Provided technical leadership and mentored the development team as the engineering organisation scaled.",
	},
	{
		id: 'copysupply',
		company: 'Copy Supply',
		roleKey: 'exp_copysupply_role',
		roleEn: 'Full Stack Developer',
		periodKey: 'exp_copysupply_period',
		periodEn: '2017 – 2018',
		locationKey: 'exp_copysupply_location',
		locationEn: 'São Paulo, Brazil',
		descKey: 'exp_copysupply_description',
		descEn:
			'• Built web platforms and enterprise applications focused on full stack development and database-driven systems.',
	},
	{
		id: 'aliveit',
		company: 'Alive IT',
		roleKey: 'exp_aliveit_role',
		roleEn: 'Full Stack Developer',
		periodKey: 'exp_aliveit_period',
		periodEn: '2014 – 2017',
		locationKey: 'exp_aliveit_location',
		locationEn: 'Marília, São Paulo, Brazil',
		descKey: 'exp_aliveit_description',
		descEn:
			'• Built web platforms, CRM systems and enterprise applications across multiple industries.\n• Focused on full stack development, APIs and database-driven systems.',
	},
	{
		id: 'guess',
		company: 'Guess Soluções em Tecnologia',
		roleKey: 'exp_guess_role',
		roleEn: 'Delphi Developer Intern',
		periodKey: 'exp_guess_period',
		periodEn: '2013 – 2014',
		locationKey: 'exp_guess_location',
		locationEn: 'Marília, Brazil',
		descKey: 'exp_guess_description',
		descEn: '• Early career experience in technology and software development.',
	},
	{
		id: 'masterel',
		company: 'Mastersel',
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
	'bria',
	'vega',
	'diwe',
	'otimize',
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
