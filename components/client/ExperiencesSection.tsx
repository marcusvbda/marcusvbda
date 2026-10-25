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
	descKey?: string;
	descEn?: string;
}> = [
	{
		id: 'gravitylabs',
		company: 'Gravity Labs',
		roleKey: 'exp_gravitylabs_role',
		roleEn: 'Founder & AI Engineer',
		periodKey: 'exp_gravitylabs_period',
		periodEn: 'March 2024 – Present',
		descKey: 'exp_gravitylabs_description',
		descEn:
			"• Independent studio building AI agents and web products for small businesses.\n• Divercity Park: designed and run a WhatsApp AI agent in production. It answers prices, hours, and party questions with live data from the park's API, follows strict pricing guardrails, hands conversations to staff with a summary, and logs unanswered questions into a FAQ feedback loop.\n• Built the park's website (Next.js, Supabase, Vercel), including digital party-contract signing and advance tickets with QR validation.",
	},
	{
		id: 'investidor10',
		company: 'Investidor10',
		roleKey: 'exp_investidor10_role',
		roleEn: 'Senior Full Stack Engineer',
		periodKey: 'exp_investidor10_period',
		periodEn: 'November 2023 – Present',
		locationKey: 'exp_investidor10_location',
		locationEn: 'Rio de Janeiro, Brazil',
		descKey: 'exp_investidor10_description',
		descEn:
			"• Lead developer and owner of Carteira, the portfolio product serving 24,000+ users daily. Most senior engineer on the product: technical reference for architecture decisions and code review.\n• Built real-time updates (WebSockets, caching, Redis) and AI/MCP integrations for bots and intelligent insights.\n• Contributed to the migration of the product from a Laravel monolith to React 19, Next.js, and an offline-first React Native app.\n• Designed and developed the Income Tax product for Brazil's annual tax season.",
	},
	{
		id: 'bria',
		company: 'BRIA – Brazil Ireland Association',
		roleKey: 'exp_bria_role',
		roleEn: 'Software Engineer & Product Developer',
		periodKey: 'exp_bria_period',
		periodEn: 'January 2026 – Present',
		locationKey: 'exp_bria_location',
		locationEn: 'Dublin, Ireland',
		descKey: 'exp_bria_description',
		descEn:
			"• Software engineer and product developer for BRIA's website and internal tools, supporting its operations and community programmes.\n• Built the multilingual institutional website with Next.js and Strapi: responsive, SEO-friendly, with content the team manages without code.\n• Build internal tools and integrations for the association's operations and community initiatives.\n• Work directly with stakeholders to turn requirements into working software and iterate on real usage and feedback.",
	},
	{
		id: 'vega',
		company: 'Vega Checkout',
		roleKey: 'exp_vega_role',
		roleEn: 'Full Stack Engineer',
		periodKey: 'exp_vega_period',
		periodEn: 'January 2024 – July 2025',
		locationKey: 'exp_vega_location',
		locationEn: 'Barueri, São Paulo, Brazil',
		descKey: 'exp_vega_description',
		descEn:
			'• Completed the migration of the legacy ASP.NET MVC system to Laravel and Alpine.js after the acquisition by Monetizze.\n• Migrated the per-client configurable payment gateway layer, covering 50+ gateway options.\n• Maintained high-volume payment flows and integrations with multiple gateways, focusing on transaction reliability and platform stability.',
	},
	{
		id: 'diwe',
		company: 'DIWE',
		roleKey: 'exp_diwe_role',
		roleEn: 'Full Stack Engineer',
		periodKey: 'exp_diwe_period',
		periodEn: 'June 2021 – April 2024',
		locationKey: 'exp_diwe_location',
		locationEn: 'Joinville, Santa Catarina, Brazil',
		descKey: 'exp_diwe_description',
		descEn:
			'• Full stack engineer at an enterprise software consultancy serving large Brazilian organisations.\n• Delivered 10+ projects for clients including Unimed, Sonex, Quartzolit, Gerdau, Saint-Gobain, Adidas, Construtora Planeta, Branco, and Intelbras.\n• Designed and built Parceiro da Construção, a training and certification platform for the construction industry (online courses, automated assessments, digital certificates) with about 1,500 active users.\n• Contributed to architecture and system design decisions across multiple technology stacks.',
	},
	{
		id: 'otimize',
		company: 'Otimize / Payt',
		roleKey: 'exp_otimize_role',
		roleEn: 'Full Stack Engineer',
		periodKey: 'exp_otimize_period',
		periodEn: 'October 2018 – October 2023',
		locationKey: 'exp_otimize_location',
		locationEn: 'São Paulo, Brazil',
		descKey: 'exp_otimize_description',
		descEn:
			'• Full stack engineer on the core payment platform of a fintech startup, in a team of five developers.\n• Built transaction processing, retries, webhooks, payment provider integrations, and asynchronous queues.\n• Helped scale the platform from MVP to approximately R$6.5M (~US$1.3M) in peak monthly transaction volume.\n• Built anti-fraud workflows that, together with the post-sale and support process, cut fraud and chargeback cases by more than 60%.\n• Worked on microservices, APIs, and event-driven systems for high-volume transaction processing.',
	},
	{
		id: 'umar',
		company: 'Universidade de Marília',
		roleKey: 'exp_umar_role',
		roleEn: 'Software Owner (CRM Full Stack Developer)',
		periodKey: 'exp_umar_period',
		periodEn: 'October 2017 – September 2023',
		locationKey: 'exp_umar_location',
		locationEn: 'Marília, São Paulo, Brazil',
	},
	{
		id: 'copysupply',
		company: 'Copy Supply',
		roleKey: 'exp_copysupply_role',
		roleEn: 'Software Developer (ASP.NET MVC)',
		periodKey: 'exp_copysupply_period',
		periodEn: 'December 2017 – October 2018',
		locationKey: 'exp_copysupply_location',
		locationEn: 'São Paulo, Brazil',
	},
	{
		id: 'aliveit',
		company: 'alive it',
		roleKey: 'exp_aliveit_role',
		roleEn: 'Developer (PHP, C++, Firebird)',
		periodKey: 'exp_aliveit_period',
		periodEn: 'October 2014 – December 2017',
		locationKey: 'exp_aliveit_location',
		locationEn: 'Marília, São Paulo, Brazil',
	},
	{
		id: 'masterel',
		company: 'Mastersel',
		roleKey: 'exp_masterel_role',
		roleEn: 'C++ Developer',
		periodKey: 'exp_masterel_period',
		periodEn: 'October 2010 – October 2013',
		locationKey: 'exp_masterel_location',
		locationEn: 'Marília, São Paulo, Brazil',
	},
];

const RECENT_IDS = new Set([
	'gravitylabs',
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
											{exp.descKey && t(exp.descKey, exp.descEn)}
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
