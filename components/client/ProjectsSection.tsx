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
	descKey: string;
	tech: string;
}> = [
	{
		id: 'investidor10',
		image: '/companies/i10.jpeg',
		titleKey: 'proj_investidor10_title',
		descKey: 'proj_investidor10_description',
		tech: 'Laravel, React, Next.js, TypeScript, Tailwind CSS, AWS, Redis, Vercel, MySQL',
	},

	{
		id: 'bria',
		image: '/companies/bria.png',
		titleKey: 'proj_bria_title',
		descKey: 'proj_bria_description',
		tech: 'Next.js, Render, Supabase, Tailwind CSS',
	},
	{
		id: 'divercity',
		image: '/companies/divercity.png',
		titleKey: 'proj_divercity_title',
		descKey: 'proj_divercity_description',
		tech: 'WordPress, Tailwind CSS, MySQL, PHP',
	},
	{
		id: 'vega',
		image: '/companies/vega.jpeg',
		titleKey: 'proj_vega_title',
		descKey: 'proj_vega_description',
		tech: 'Laravel, PHP, Alpine.js, Livewire, Tailwind CSS, MySQL',
	},
	{
		id: 'intelbras',
		image: '/companies/intelbras.jpeg',
		titleKey: 'proj_intelbras_title',
		descKey: 'proj_intelbras_description',
		tech: 'React, Node.js, MongoDB, AWS',
	},
	{
		id: 'parceiro',
		image: '/companies/pdc.jpeg',
		titleKey: 'proj_parceiro_title',
		descKey: 'proj_parceiro_description',
		tech: 'React, WordPress, Laravel, MySQL, Redis, Docker',
	},

	{
		id: 'tom',
		image: '/companies/tom.png',
		titleKey: 'proj_tom_title',
		descKey: 'proj_tom_description',
		tech: 'Laravel, FilamentPHP, MySQL, Tailwind CSS',
	},
	{
		id: 'inteligenzia',
		image: '/companies/inteligenzia.png',
		titleKey: 'proj_inteligenzia_title',
		descKey: 'proj_inteligenzia_description',
		tech: 'Laravel, FilamentPHP, MySQL, Tailwind CSS',
	},
	{
		id: 'mudascarvalho',
		image: '/companies/mudas.png',
		titleKey: 'proj_mudascarvalho_title',
		descKey: 'proj_mudascarvalho_description',
		tech: 'Next.js, React, TypeScript, Tailwind CSS, Vercel',
	},
	{
		id: 'orazelo',
		image: '/companies/orazelo.png',
		titleKey: 'proj_orazelo_title',
		descKey: 'proj_orazelo_description',
		tech: 'React Native, TypeScript, Node.js, Firebase',
	},
	{
		id: 'rh99',
		image: '/companies/rh99.png',
		titleKey: 'proj_rh99_title',
		descKey: 'proj_rh99_description',
		tech: 'Nuxt.js, Vue.js, TypeScript',
	},
	{
		id: 'unimed',
		image: '/companies/unimed.png',
		titleKey: 'proj_unimed_title',
		descKey: 'proj_unimed_description',
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
										alt={t(project.titleKey)}
										fill
										className="object-cover transition-transform duration-500 hover:scale-110"
									/>
								</div>
								<CardHeader>
									<CardTitle className="text-xl">
										{t(project.titleKey)}
									</CardTitle>
								</CardHeader>
								<CardContent className="space-y-4">
									<p className="text-muted-foreground leading-relaxed">
										{t(project.descKey)}
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
												{t(p.titleKey)}
											</DialogTitle>
											<DialogDescription asChild>
												<div className="space-y-6 pt-4">
													<div className="aspect-video overflow-hidden rounded-lg relative">
														<Image
															src={p.image}
															alt={t(p.titleKey)}
															fill
															className="object-cover"
														/>
													</div>
													<p className="text-muted-foreground leading-relaxed">
														{t(p.descKey)}
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
