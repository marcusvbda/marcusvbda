'use client';

import { ArrowDown, Mail, Linkedin, Github, Download } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import { Button } from '@/components/ui/button';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { ReactNode, useEffect, useState } from 'react';
import Link from 'next/link';
import { RenderDocument } from './render-document';
import Image from 'next/image';

export default function Content({ content }: any): ReactNode {
	const [client, setClient] = useState(false);
	const { language } = useLanguage();
	const hero = content?.hero?.[language];
	const info = content?.info?.[language];
	const about = content?.about?.[language];
	const education = content?.education?.[language];
	const skills = content?.skills?.[language];
	const experience = content?.experience?.[language];
	const projects = content?.projects?.[language];

	const scrollToContact = () => {
		const element = document.querySelector('#contact');
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	useEffect(() => {
		setClient(true);
	}, []);

	return (
		<section
			id="hero"
			className="min-h-screen flex items-center justify-center section-padding pt-24 md:pt-32"
		>
			<div className="max-width-content w-full">
				<div className="grid md:grid-cols-2 gap-12 items-center">
					{/* Text Content */}
					<div className="space-y-6 animate-fade-in">
						<div className="space-y-2">
							<p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
								{hero?.greeting?.value}
							</p>
							<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
								{hero?.name?.value}
							</h1>
							<h2 className="text-2xl md:text-3xl font-semibold text-accent">
								{hero?.role?.value}
							</h2>
							<p className="text-sm text-muted-foreground flex items-center gap-2">
								<span className="inline-block w-2 h-2 bg-accent rounded-full animate-pulse" />
								{hero?.location?.value}
							</p>
						</div>

						<p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
							{hero?.bio?.value}
						</p>

						<div className="flex justify-center md:justify-start flex-wrap gap-4 pt-4">
							<Button
								size="lg"
								variant="outline"
								onClick={scrollToContact}
								className="w-full md:w-auto hover:text-white"
							>
								<Mail className="mr-2 h-4 w-4" />
								{hero?.cta?.value}
							</Button>
							<Button
								size="lg"
								variant="outline"
								asChild
								className="w-full md:w-auto hover:text-white"
							>
								<Link
									href={'https://'.concat(info?.linkedin?.value) as any}
									target="_blank"
									rel="noopener noreferrer"
								>
									<Linkedin className="mr-2 h-4 w-4" />
									Linkedin
								</Link>
							</Button>
							<Button
								size="lg"
								variant="outline"
								asChild
								className="w-full md:w-auto hover:text-white"
							>
								<Link
									href={'https://'.concat(info?.github?.value) as any}
									target="_blank"
									rel="noopener noreferrer"
								>
									<Github className="mr-2 h-4 w-4" />
									Github
								</Link>
							</Button>
							{client && (
								<PDFDownloadLink
									className="w-full"
									document={
										<RenderDocument
											about={about}
											info={info}
											education={education}
											skills={skills}
											experience={experience}
											projects={projects}
											sections={{
												summary: about?.title?.value,
												experience: experience?.title?.value,
												education: education?.title?.value,
												skills: skills?.title?.value,
											}}
										/>
									}
									fileName={`${info?.name?.value} - ${language}`}
								>
									{() => (
										<Button
											size="lg"
											variant="outline"
											asChild
											className="bg-accent hover:bg-accent/90 w-full md:w-auto hover:text-white"
										>
											<span className="text-white">
												<Download className="mr-2 h-4 w-4" />
												{hero?.checkCv?.value}
											</span>
										</Button>
									)}
								</PDFDownloadLink>
							)}
						</div>

						<div className="pt-8 animate-bounce flex justify-center md:justify-start">
							<Link
								href="#about"
								onClick={(e) => {
									e.preventDefault();
									const element = document.querySelector('#about');
									if (element) {
										element.scrollIntoView({ behavior: 'smooth' });
									}
								}}
								className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
							>
								<ArrowDown className="h-4 w-4" />
								{hero?.scrollDown?.value}
							</Link>
						</div>
					</div>

					{/* Profile Image */}
					<div
						className="relative animate-fade-in"
						style={{ animationDelay: '0.2s' }}
					>
						<div className="relative w-full max-w-md mx-auto hidden md:grid">
							<div className="absolute inset-0 bg-linear-to-br from-accent/20 to-secondary/20 rounded-3xl blur-2xl" />
							{hero?.avatar && (
								<Image
									src={hero.avatar?.value}
									alt="Marcus Vinicius Bassalobre de Assis"
									width={400}
									height={400}
									priority
									className="relative rounded-3xl object-cover w-full h-full shadow-2xl hover-lift"
								/>
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
