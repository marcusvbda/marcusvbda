'use client';

import { ArrowDown, Mail, Linkedin, Github, Download } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import { Button } from '@/components/ui/button';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { data } from '@/data';
import { ReactNode, useEffect, useState } from 'react';
import Link from 'next/link';
import { RenderDocument } from './render-document';

export default function Content({ content }: any): ReactNode {
	const [client, setClient] = useState(false);
	const { language } = useLanguage();

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
								{content?.hero?.[language]?.greetings}
							</p>
							<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
								{content?.hero?.[language]?.name}
							</h1>
							<h2 className="text-2xl md:text-3xl font-semibold text-accent">
								{content?.hero?.[language]?.role}
							</h2>
							<p className="text-sm text-muted-foreground flex items-center gap-2">
								<span className="inline-block w-2 h-2 bg-accent rounded-full animate-pulse" />
								{content?.hero?.[language]?.location}
							</p>
						</div>

						<p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
							{content?.hero?.[language]?.bio}
						</p>

						<div className="flex justify-center md:justify-start flex-wrap gap-4 pt-4">
							<Button
								size="lg"
								variant="outline"
								onClick={scrollToContact}
								className="w-full md:w-auto"
							>
								<Mail className="mr-2 h-4 w-4" />
								{content?.hero?.[language]?.cta}
							</Button>
							<Button
								size="lg"
								variant="outline"
								asChild
								className="w-full md:w-auto"
							>
								<Link
									href={'https://'.concat(content?.info?.[language]?.linkedin)}
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
								className="w-full md:w-auto"
							>
								<Link
									href={'https://'.concat(content?.info?.[language]?.github)}
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
											data={data}
											lang={language}
											sections={{
												summary: content?.about?.[language]?.title,
												experience: content?.experience?.[language]?.title,
												education: content?.education?.[language]?.title,
												skills: content?.skills?.[language]?.title,
											}}
										/>
									}
									fileName={`${content?.info?.[language]?.name} - ${language}`}
								>
									{() => (
										<Button
											size="lg"
											variant="outline"
											asChild
											className="bg-accent hover:bg-accent/90 w-full md:w-auto"
										>
											<span className="text-white">
												<Download className="mr-2 h-4 w-4" />
												{content?.hero?.[language]?.checkCv}
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
								{content?.hero?.[language]?.scrollDown}
							</Link>
						</div>
					</div>

					{/* Profile Image */}
					<div
						className="relative animate-fade-in"
						style={{ animationDelay: '0.2s' }}
					>
						<div className="relative w-full max-w-md mx-auto">
							<div className="absolute inset-0 bg-linear-to-br from-accent/20 to-secondary/20 rounded-3xl blur-2xl" />
							<img
								loading="lazy"
								src={content?.hero?.[language]?.avatar}
								alt="Marcus Vinicius Bassalobre de Assis"
								className="relative rounded-3xl object-cover w-full h-full shadow-2xl hover-lift"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
