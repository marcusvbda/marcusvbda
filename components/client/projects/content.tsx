'use client';

/* eslint-disable @typescript-eslint/no-explicit-any */
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

export default function Content({ content }: any) {
	const { language } = useLanguage();
	const [selectedProject, setSelectedProject] = useState<string | null>(null);

	const handleCloseModal = () => {
		setSelectedProject(null);
	};

	return (
		<section id="projects" className="section-padding bg-muted/30">
			<div className="max-width-content">
				<div className="text-center mb-16 animate-fade-in">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						{content?.projects?.[language]?.title}
					</h2>
					<p className="text-lg text-muted-foreground">
						{content?.projects?.[language]?.subtitle}
					</p>
				</div>
				<div className="flex flex-wrap justify-center gap-8">
					{Object.keys(content?.projects?.[language]?.items || {}).map(
						(project: any, index) => (
							<Card
								key={index}
								className="overflow-hidden hover-lift animate-fade-in cursor-pointer w-full md:w-auto md:basis-[calc(33.333%-1.34rem)]"
								onClick={() => {
									setSelectedProject(project);
								}}
								style={{ animationDelay: `${index * 0.1}s` }}
							>
								<div className="aspect-video overflow-hidden bg-muted">
									<img
										loading="lazy"
										src={
											content?.projects?.[language]?.items?.[project]?.image ||
											'#'
										}
										alt={content?.projects?.[language]?.items?.[project]?.title}
										className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
									/>
								</div>
								<CardHeader>
									<CardTitle className="text-xl">
										{content?.projects?.[language]?.items?.[project]?.title}
									</CardTitle>
								</CardHeader>
								<CardContent className="space-y-4">
									<p className="text-muted-foreground leading-relaxed">
										{
											content?.projects?.[language]?.items?.[project]
												?.description
										}
									</p>
									<div className="flex flex-wrap gap-2">
										{(
											content?.projects?.[language]?.items?.[project]?.tech ||
											''
										)
											.split(', ')
											.map((tech: any, i: any) => (
												<Badge key={`tech_${tech}_${i}`} variant="secondary">
													{tech}
												</Badge>
											))}
									</div>
								</CardContent>
							</Card>
						)
					)}
				</div>

				{selectedProject && (
					<Dialog open={!!selectedProject} onOpenChange={handleCloseModal}>
						<DialogContent className="max-w-5xl">
							<DialogHeader>
								<DialogTitle className="text-2xl">
									{
										content?.projects?.[language]?.items?.[selectedProject]
											?.title
									}
								</DialogTitle>
								<DialogDescription asChild>
									<div className="space-y-6 pt-4">
										<div className="aspect-video overflow-hidden rounded-lg">
											<img
												loading="lazy"
												src={
													content?.projects?.[language]?.items?.[
														selectedProject
													]?.image || '#'
												}
												alt={
													content?.projects?.[language]?.items?.[
														selectedProject
													]?.title
												}
												className="w-full h-full object-cover"
											/>
										</div>
										<p className="text-muted-foreground leading-relaxed">
											{
												content?.projects?.[language]?.items?.[selectedProject]
													?.description
											}
										</p>
										<div className="flex flex-wrap gap-2">
											{(
												content?.projects?.[language]?.items?.[selectedProject]
													?.tech || ''
											)
												.split(', ')
												.map((tech: any, i: any) => (
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
}
