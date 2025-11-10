'use client';

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';

export const Projects = () => {
	const { t } = useLanguage();
	const [selectedProject, setSelectedProject] = useState<string | null>(null);

	const handleCloseModal = () => {
		setSelectedProject(null);
	};

	return (
		<section id="projects" className="section-padding bg-muted/30">
			<div className="max-width-content">
				<div className="text-center mb-16 animate-fade-in">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						{t('projects.title')}
					</h2>
					<p className="text-lg text-muted-foreground">
						{t('projects.subtitle')}
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{Object.keys(t('projects.items') || {}).map((project: any, index) => (
						<Card
							key={index}
							className="overflow-hidden hover-lift animate-fade-in cursor-pointer"
							onClick={() => {
								setSelectedProject(project);
							}}
							style={{ animationDelay: `${index * 0.1}s` }}
						>
							<div className="aspect-video overflow-hidden bg-muted">
								<img
									loading="lazy"
									src={t(`projects.items.${project}.image`) || '#'}
									alt={t(`projects.items.${project}.title`)}
									className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
								/>
							</div>
							<CardHeader>
								<CardTitle className="text-xl">
									{t(`projects.items.${project}.title`)}
								</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								<p className="text-muted-foreground leading-relaxed">
									{t(`projects.items.${project}.description`)}
								</p>
								<div className="flex flex-wrap gap-2">
									{(t(`projects.items.${project}.tech`) || '')
										.split(', ')
										.map((tech, i) => (
											<Badge key={`tech_${tech}_${i}`} variant="secondary">
												{tech}
											</Badge>
										))}
								</div>
							</CardContent>
						</Card>
					))}
				</div>

				{selectedProject && (
					<Dialog open={!!selectedProject} onOpenChange={handleCloseModal}>
						<DialogContent className="max-w-5xl">
							<DialogHeader>
								<DialogTitle className="text-2xl">
									{t(`projects.items.${selectedProject}.title`)}
								</DialogTitle>
								<DialogDescription asChild>
									<div className="space-y-6 pt-4">
										<div className="aspect-video overflow-hidden rounded-lg">
											<img
												loading="lazy"
												src={
													t(`projects.items.${selectedProject}.image`) || '#'
												}
												alt={t(`projects.items.${selectedProject}.title`)}
												className="w-full h-full object-cover"
											/>
										</div>
										<p className="text-muted-foreground leading-relaxed">
											{t(`projects.items.${selectedProject}.description`)}
										</p>
										<div className="flex flex-wrap gap-2">
											{t(`projects.items.${selectedProject}.tech`)
												.split(', ')
												.map((tech, i) => (
													<Badge key={`tech_${tech}_${i}`} variant="secondary">
														{tech}
													</Badge>
												))}
										</div>
									</div>
								</DialogDescription>
							</DialogHeader>
						</DialogContent>
					</Dialog>
				)}
			</div>
		</section>
	);
};
