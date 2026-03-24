'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/language-context';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { motion, AnimatePresence, type Variants } from 'framer-motion';

const PROJECTS: Array<{
	id: string;
	image: string;
	titleKey: string;
	titleEn: string;
	descKey: string;
	descEn: string;
	tech: string;
}> = [
	{
		id: 'talentsieve',
		image: '/companies/seive.jpeg',
		titleKey: 'proj_talentsieve_title',
		titleEn: 'TalentSieve (AI SaaS)',
		descKey: 'proj_talentsieve_description',
		descEn:
			'AI Co-Pilot for Recruitment in compliance with EU AI Act and GDPR. Multimodal chat engine for candidate triage with automatic ROI dashboards. Infrastructure with NestJS, Next.js and AWS, focus on AI explainability ("Human-in-the-loop").',
		tech: 'NestJS, Next.js, AWS, TypeScript',
	},
	{
		id: 'investidor10',
		image: '/companies/i10.jpeg',
		titleKey: 'proj_investidor10_title',
		titleEn: 'Investidor10 Platform',
		descKey: 'proj_investidor10_description',
		descEn:
			"Complete redesign and rebuild of Brazil's leading investment research platform. Implemented modern architecture with SSR, optimized performance achieving 95+ Lighthouse scores, and built a comprehensive design system.",
		tech: 'React, Next.js, TypeScript, Tailwind CSS, Vercel',
	},
	{
		id: 'vega',
		image: '/companies/vega.jpeg',
		titleKey: 'proj_vega_title',
		titleEn: 'Vega Checkout Analytics',
		descKey: 'proj_vega_description',
		descEn:
			'Real-time analytics dashboard for e-commerce conversion tracking. Features advanced data visualization, funnel analysis, and automated reporting with sub-second query performance.',
		tech: 'React, TypeScript, Laravel, PostgreSQL, Chart.js',
	},
	{
		id: 'intelbras',
		image: '/companies/intelbras.jpeg',
		titleKey: 'proj_intelbras_title',
		titleEn: 'Intelbras Solar Platform',
		descKey: 'proj_intelbras_description',
		descEn:
			'Educational and sales platform for renewable energy solutions. Created interactive tools for solar panel sizing, ROI calculations, and lead generation with seamless CRM integration.',
		tech: 'React, Node.js, MongoDB, AWS',
	},
	{
		id: 'parceiro',
		image: '/companies/pdc.jpeg',
		titleKey: 'proj_parceiro_title',
		titleEn: 'Parceiro da Construção',
		descKey: 'proj_parceiro_description',
		descEn:
			'B2B marketplace and learning platform connecting construction professionals. Built course management system, certification tracking, and professional networking features serving 300k+ users.',
		tech: 'React, WordPress, Laravel, MySQL, Redis, Docker',
	},
	{
		id: 'divercity',
		image: '/companies/divercity.png',
		titleKey: 'proj_divercity_title',
		titleEn: 'Divercity Park',
		descKey: 'proj_divercity_description',
		descEn:
			"Institutional website for a children's entertainment venue located in a shopping mall. Showcases attractions, events, pricing, and contact information with a playful and family-friendly design focused on accessibility and visual appeal.",
		tech: 'WordPress, Tailwind CSS, MySQL, PHP',
	},
	{
		id: 'tom',
		image: '/companies/tom.png',
		titleKey: 'proj_tom_title',
		titleEn: 'Tom Incorporadora Platform',
		descKey: 'proj_tom_description',
		descEn:
			'Administrative web app developed for a real estate company to manage client interactions and project information. Includes dashboards, document management, and communication tools designed for efficiency and usability.',
		tech: 'Laravel, FilamentPHP, MySQL, Tailwind CSS',
	},
	{
		id: 'inteligenzia',
		image: '/companies/inteligenzia.png',
		titleKey: 'proj_inteligenzia_title',
		titleEn: 'Inteligenzia Client Portal',
		descKey: 'proj_inteligenzia_description',
		descEn:
			'Client portal developed for Inteligenzia, the leading B2B marketing agency in Brazil and Latin America. Designed to centralize project management, performance reports, and communication between clients and the agency, improving transparency and collaboration.',
		tech: 'Laravel, FilamentPHP, MySQL, Tailwind CSS',
	},
	{
		id: 'mudascarvalho',
		image: '/companies/mudas.png',
		titleKey: 'proj_mudascarvalho_title',
		titleEn: 'Mudas Carvalho Website',
		descKey: 'proj_mudascarvalho_description',
		descEn:
			"Institutional website for a family-owned plant nursery located in the countryside of São Paulo. Highlights the company's history, available seedlings, and sustainable cultivation practices through a clean, nature-inspired design.",
		tech: 'Next.js, React, TypeScript, Tailwind CSS, Vercel',
	},
	{
		id: 'orazelo',
		image: '/companies/orazelo.png',
		titleKey: 'proj_orazelo_title',
		titleEn: 'Orazelo App',
		descKey: 'proj_orazelo_description',
		descEn:
			'Mental health and self-knowledge app developed for Christians, available on Google Play and the App Store. The platform offers guided reflections, spiritual content, and personal growth tools, combining faith-based insights with modern UX design.',
		tech: 'React Native, TypeScript, Node.js, Firebase',
	},
	{
		id: 'rh99',
		image: '/companies/rh99.png',
		titleKey: 'proj_rh99_title',
		titleEn: 'RH99 Platform',
		descKey: 'proj_rh99_description',
		descEn:
			'Professional social network connecting HR specialists and managers. Designed to foster collaboration, knowledge sharing, and recruitment opportunities through interactive profiles, posts, and discussion features.',
		tech: 'Nuxt.js, Vue.js, TypeScript',
	},
	{
		id: 'unimed',
		image: '/companies/unimed.png',
		titleKey: 'proj_unimed_title',
		titleEn: 'Unimed SJRP Portal',
		descKey: 'proj_unimed_description',
		descEn:
			'Institutional and service portal developed for Unimed São José do Rio Preto. Centralizes information for clients, healthcare professionals, and partners, offering online services, plan details, and an optimized user experience for accessibility and reliability.',
		tech: 'Next.js, React, TypeScript, Node.js, AWS',
	},
];

const containerVariants: Variants = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.08 },
	},
};

const cardVariants: Variants = {
	hidden: { opacity: 0, scale: 0.92, y: 24 },
	visible: {
		opacity: 1,
		scale: 1,
		y: 0,
		transition: { duration: 0.5, ease: 'easeOut' },
	},
};

export default function Projects() {
	const { t } = useLanguage();
	const [selectedProject, setSelectedProject] = useState<string | null>(null);

	const handleCloseModal = () => {
		setSelectedProject(null);
	};

	return (
		<section id="projects" className="section-padding bg-muted/30">
			<div className="max-width-content">
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 32 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.6, ease: 'easeOut' }}
				>
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						{t('Featured Projects', 'Featured Projects')}
					</h2>
					<p className="text-lg text-muted-foreground">
						{t("What I've Built", "What I've Built")}
					</p>
				</motion.div>

				<motion.div
					className="flex flex-wrap justify-center gap-8"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.05 }}
				>
					{PROJECTS.map((project) => (
						<motion.div
							key={project.id}
							variants={cardVariants}
							className="w-full md:w-auto md:basis-[calc(33.333%-1.34rem)]"
							whileHover={{ scale: 1.03, y: -6 }}
							transition={{ type: 'spring', stiffness: 220, damping: 20 }}
						>
							<Card
								className="overflow-hidden cursor-pointer h-full"
								onClick={() => setSelectedProject(project.id)}
							>
								<div className="aspect-video overflow-hidden bg-muted relative">
									<Image
										src={project.image}
										alt={t(project.titleKey, project.titleEn)}
										fill
										className="object-cover transition-transform duration-500 hover:scale-110"
									/>
								</div>
								<CardHeader>
									<CardTitle className="text-xl">
										{t(project.titleKey, project.titleEn)}
									</CardTitle>
								</CardHeader>
								<CardContent className="space-y-4">
									<p className="text-muted-foreground leading-relaxed">
										{t(project.descKey, project.descEn)}
									</p>
									<div className="flex flex-wrap gap-2">
										{project.tech.split(', ').map((tech, i) => (
											<Badge key={`tech_${tech}_${i}`} variant="secondary">
												{tech}
											</Badge>
										))}
									</div>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</motion.div>

				<AnimatePresence>
					{selectedProject &&
						(() => {
							const p = PROJECTS.find((x) => x.id === selectedProject);
							if (!p) return null;
							return (
								<Dialog open onOpenChange={handleCloseModal}>
									<DialogContent className="max-w-5xl">
										<DialogHeader>
											<DialogTitle className="text-2xl">
												{t(p.titleKey, p.titleEn)}
											</DialogTitle>
											<DialogDescription asChild>
												<div className="space-y-6 pt-4">
													<div className="aspect-video overflow-hidden rounded-lg relative">
														<Image
															src={p.image}
															alt={t(p.titleKey, p.titleEn)}
															fill
															className="object-cover"
														/>
													</div>
													<p className="text-muted-foreground leading-relaxed">
														{t(p.descKey, p.descEn)}
													</p>
													<div className="flex flex-wrap gap-2">
														{p.tech.split(', ').map((tech, i) => (
															<Badge
																key={`tech_${tech}_${i}`}
																variant="secondary"
															>
																{tech}
															</Badge>
														))}
													</div>
												</div>
											</DialogDescription>
										</DialogHeader>
									</DialogContent>
								</Dialog>
							);
						})()}
				</AnimatePresence>
			</div>
		</section>
	);
}
