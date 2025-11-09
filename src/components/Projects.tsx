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
import investidor10Light from '@/assets/project-investidor10-light.jpeg';
import vegaLight from '@/assets/project-vega-light.jpeg';
import intelbras from '@/assets/project-intelbras.jpeg';
import parceiro from '@/assets/project-parceiro.jpeg';
import divercity from '@/assets/divercity.png';
import tom from '@/assets/tom.png';
import inteligenzia from '@/assets/inteligenzia.png';
import mudas from '@/assets/mudas.png';
import orazelo from '@/assets/orazelo.png';
import rh99 from '@/assets/rh99.png';
import unimed from '@/assets/unimed.png';

export const Projects = () => {
	const { t } = useLanguage();
	const [selectedProject, setSelectedProject] = useState<{
		id: string;
		image: string;
	} | null>(null);

	const handleCloseModal = () => {
		setSelectedProject(null);
	};

	const projects = [
		{ id: 'investidor10', image: investidor10Light },
		{ id: 'vega', image: vegaLight },
		{ id: 'intelbras', image: intelbras },
		{ id: 'parceiro', image: parceiro },
		{ id: 'divercity', image: divercity },
		{ id: 'tom', image: tom },
		{ id: 'inteligenzia', image: inteligenzia },
		{ id: 'mudascarvalho', image: mudas },
		{ id: 'orazelo', image: orazelo },
		{ id: 'rh99', image: rh99 },
		{ id: 'unimed', image: unimed },
	];

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
					{projects.map((project, index) => (
						<Card
							key={project.id}
							className="overflow-hidden hover-lift animate-fade-in cursor-pointer"
							onClick={() => {
								setSelectedProject(project);
							}}
							style={{ animationDelay: `${index * 0.1}s` }}
						>
							<div className="aspect-video overflow-hidden bg-muted">
								<img
									src={project.image}
									alt={t(`projects.items.${project.id}.title`)}
									className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
								/>
							</div>
							<CardHeader>
								<CardTitle className="text-xl">
									{t(`projects.items.${project.id}.title`)}
								</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								<p className="text-muted-foreground leading-relaxed">
									{t(`projects.items.${project.id}.description`)}
								</p>
								<div className="flex flex-wrap gap-2">
									{t(`projects.items.${project.id}.tech`)
										.split(', ')
										.map((tech) => (
											<Badge key={tech} variant="secondary">
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
									{t(`projects.items.${selectedProject.id}.title`)}
								</DialogTitle>
								<DialogDescription asChild>
									<div className="space-y-6 pt-4">
										<div className="aspect-video overflow-hidden rounded-lg">
											<img
												src={selectedProject.image}
												alt={t(`projects.items.${selectedProject.id}.title`)}
												className="w-full h-full object-cover"
											/>
										</div>
										<p className="text-muted-foreground leading-relaxed">
											{t(`projects.items.${selectedProject.id}.description`)}
										</p>
										<div className="flex flex-wrap gap-2">
											{t(`projects.items.${selectedProject.id}.tech`)
												.split(', ')
												.map((tech) => (
													<Badge key={tech} variant="secondary">
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
