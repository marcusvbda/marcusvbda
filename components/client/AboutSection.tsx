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
							"Senior Software Engineer with 15+ years of experience designing, scaling, and optimising backend systems for fintech, SaaS, and high-traffic platforms.",
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
							'Senior Software Engineer with 15+ years of experience designing, scaling, and optimising backend systems for fintech, SaaS, and high-traffic platforms.\n\nSpecialised in high-performance APIs, distributed systems, and cloud-native architectures, with a proven track record improving system performance, scaling platforms to millions of users, and reducing infrastructure costs through architecture and performance engineering.\n\nCore expertise across system architecture, high-traffic backend systems, performance engineering, microservices and distributed systems, cloud infrastructure (AWS), API design and scalability, and technical leadership and mentoring.\n\nBased in Dublin, Ireland and eligible to work in Ireland, including for the Critical Skills Employment Permit.',
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
