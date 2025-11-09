import { ArrowDown, Mail, Linkedin, Github, Download } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { data } from '@/data';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { RenderDocument } from './RenderDocument';

export const Hero = () => {
	const { t, language } = useLanguage();

	const scrollToContact = () => {
		const element = document.querySelector('#contact');
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

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
								{t('hero.greeting')}
							</p>
							<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
								{t('hero.name')}
							</h1>
							<h2 className="text-2xl md:text-3xl font-semibold text-accent">
								{t('hero.role')}
							</h2>
							<p className="text-sm text-muted-foreground flex items-center gap-2">
								<span className="inline-block w-2 h-2 bg-accent rounded-full animate-pulse" />
								{t('hero.location')}
							</p>
						</div>

						<p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
							{t('hero.bio')}
						</p>

						<div className="flex justify-center md:justify-start flex-wrap gap-4 pt-4">
							<Button
								size="lg"
								variant="outline"
								onClick={scrollToContact}
								className="w-full md:w-auto"
							>
								<Mail className="mr-2 h-4 w-4" />
								{t('hero.cta')}
							</Button>
							<Button
								size="lg"
								variant="outline"
								asChild
								className="w-full md:w-auto"
							>
								<a
									href="https://linkedin.com/in/mvbassalobre"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Linkedin className="mr-2 h-4 w-4" />
									Linkedin
								</a>
							</Button>
							<Button
								size="lg"
								variant="outline"
								asChild
								className="w-full md:w-auto"
							>
								<a
									href="https://github.com/marcusvbda"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Github className="mr-2 h-4 w-4" />
									Github
								</a>
							</Button>
							<PDFDownloadLink
								className="w-full"
								document={
									<RenderDocument
										data={data}
										lang={language}
										sections={{
											summary: t('about.title'),
											experience: t('experience.title'),
											education: t('education.title'),
											skills: t('skills.title'),
										}}
									/>
								}
								fileName={`${data.info.en.name} - ${language}`}
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
											{t('hero.checkCv')}
										</span>
									</Button>
								)}
							</PDFDownloadLink>
						</div>

						<div className="pt-8 animate-bounce flex justify-center md:justify-start">
							<a
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
								{t('hero.scrollDown')}
							</a>
						</div>
					</div>

					{/* Profile Image */}
					<div
						className="relative animate-fade-in"
						style={{ animationDelay: '0.2s' }}
					>
						<div className="relative w-full max-w-md mx-auto">
							<div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-3xl blur-2xl" />
							<img
								src={t('hero.avatar')}
								alt="Marcus Vinicius Bassalobre de Assis"
								className="relative rounded-3xl object-cover w-full h-full shadow-2xl hover-lift"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
