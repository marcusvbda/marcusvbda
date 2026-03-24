'use client';

import { ArrowDown, Mail, Linkedin, Github, Download } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import { Button } from '@/components/ui/button';
import { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';

const containerVariants: Variants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.12,
		},
	},
};

const itemVariants: Variants = {
	hidden: { opacity: 0, y: 24 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: 'easeOut' },
	},
};

const imageVariants: Variants = {
	hidden: { opacity: 0, x: 60, scale: 0.95 },
	visible: {
		opacity: 1,
		x: 0,
		scale: 1,
		transition: { duration: 0.8, ease: 'easeOut', delay: 0.2 },
	},
};

export default function Hero({ content }: any): ReactNode {
	const { t } = useLanguage();

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
					<motion.div
						className="space-y-6"
						variants={containerVariants}
						initial="hidden"
						animate="visible"
					>
						<motion.div className="space-y-2" variants={itemVariants}>
							<p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
								{t("Hi, I'm")}
							</p>
							<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
								Marcus Vinicius Bassalobre de Assis
							</h1>
							<h2 className="text-2xl md:text-3xl font-semibold text-accent">
								Senior Software Engineer
							</h2>
							<p className="text-sm text-muted-foreground flex items-center gap-2">
								<span className="inline-block w-2 h-2 bg-accent rounded-full animate-pulse" />
								{t('location', 'Dublin, Ireland')}
							</p>
						</motion.div>

						<motion.p
							className="text-lg text-muted-foreground leading-relaxed max-w-xl"
							variants={itemVariants}
						>
							{t(
								'bio',
								"Senior Software Engineer with 15+ years of experience designing, scaling, and optimising backend systems for fintech, SaaS, and high-traffic platforms, with a strong focus on high-performance APIs, distributed systems, and cloud-native architectures.",
							)}
						</motion.p>

						<motion.div
							className="flex justify-center md:justify-start flex-wrap gap-4 pt-4"
							variants={itemVariants}
						>
							<Button
								size="lg"
								variant="outline"
								onClick={scrollToContact}
								className="w-full md:w-auto hover:text-white"
							>
								<Mail className="mr-2 h-4 w-4" />
								{t('cta', 'Get in touch')}
							</Button>
							<Button
								size="lg"
								variant="outline"
								asChild
								className="w-full md:w-auto hover:text-white"
							>
								<Link
									href={'https://linkedin.com/in/mvbassalobre'}
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
									href={'https://github.com/marcusvbda'}
									target="_blank"
									rel="noopener noreferrer"
								>
									<Github className="mr-2 h-4 w-4" />
									Github
								</Link>
							</Button>
							<Link
								href={`/download-cv` as any}
								target="_blank"
								rel="noopener noreferrer"
							>
								<Button
									size="lg"
									variant="outline"
									asChild
									className="bg-accent hover:bg-accent/90 w-full md:w-auto hover:text-white"
								>
									<span className="text-white">
										<Download className="mr-2 h-4 w-4" />
										{t('checkCv', 'Check my CV')}
									</span>
								</Button>
							</Link>
						</motion.div>

						<motion.div
							className="pt-8 flex justify-center md:justify-start"
							variants={itemVariants}
						>
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
								<motion.span
									animate={{ y: [0, 6, 0] }}
									transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
									className="inline-flex"
								>
									<ArrowDown className="h-4 w-4" />
								</motion.span>
								{t('Scroll down to explore')}
							</Link>
						</motion.div>
					</motion.div>

					{/* Profile Image */}
					<motion.div
						className="relative"
						variants={imageVariants}
						initial="hidden"
						animate="visible"
					>
						<div className="relative w-full max-w-md mx-auto hidden md:grid">
							<div className="absolute inset-0 bg-linear-to-br from-accent/20 to-secondary/20 rounded-3xl blur-2xl" />
							<motion.div
								whileHover={{ scale: 1.03, y: -6 }}
								transition={{ type: 'spring', stiffness: 200, damping: 20 }}
							>
								<Image
									src={'/assets/mac.png'}
									alt="Marcus Vinicius Bassalobre de Assis"
									width={400}
									height={400}
									priority
									className="relative rounded-3xl object-cover w-full h-full shadow-2xl"
								/>
							</motion.div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
