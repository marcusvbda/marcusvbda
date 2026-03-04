'use client';

import { ReactNode } from 'react';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/language-context';
import Image from 'next/image';

export default function About(): ReactNode {
	const { t } = useLanguage();

	return (
		<section id="about" className="section-padding bg-muted/30">
			<div className="max-width-content">
				<div className="text-center mb-16 animate-fade-in">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						{t('About me')}
					</h2>
					<p className="text-lg text-muted-foreground">
						{t(
							'about',
							"I'm a Senior Software Engineer with over 15 years of experience building and leading software development teams to deliver high-performance, scalable digital products.",
						)}
					</p>
				</div>

				<div className=" md:grid-cols-12 gap-12 items-center grid">
					{/* Image */}
					<div className="md:col-span-4 animate-fade-in hidden md:block">
						<Card className="overflow-hidden hover-lift">
							<Image
								src={'/assets/blue.png'}
								alt="About me"
								width={600}
								height={600}
								className="w-full h-full object-cover"
							/>
						</Card>
					</div>

					{/* Content */}
					<div
						className="md:col-span-8 space-y-6 animate-fade-in"
						style={{ animationDelay: '0.2s' }}
					>
						{t(
							'aboutDescription',
							'Senior Software Engineer with 15+ years of experience designing and scaling backend-heavy systems for fintech, SaaS, and high-traffic platforms.\n\nStrong focus on system architecture, scalability, performance, and reliability, with a track record of leading technical decisions impacting millions of users and high-volume financial transactions.\n\nExperienced in working closely with product and business stakeholders, translating complex requirements into robust, maintainable solutions. Recently applying AI as a practical engineering tool to enhance developer productivity and system automation.',
						)
							.split('\n')
							.map((x: string, key: number) => (
								<p
									key={`desc_${key}`}
									className="text-lg leading-relaxed text-muted-foreground"
								>
									{x}
								</p>
							))}
					</div>
				</div>
			</div>
		</section>
	);
}
