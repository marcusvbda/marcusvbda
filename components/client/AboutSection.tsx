'use client';

import { ReactNode } from 'react';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/language-context';
import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';

const sectionVariants: Variants = {
	hidden: { opacity: 0, y: 32 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const imageVariants: Variants = {
	hidden: { opacity: 0, x: -40 },
	visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut', delay: 0.15 } },
};

const contentVariants: Variants = {
	hidden: { opacity: 0, x: 40 },
	visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut', delay: 0.25 } },
};

export default function About(): ReactNode {
	const { t } = useLanguage();

	return (
		<section id="about" className="section-padding bg-muted/30">
			<div className="max-width-content">
				<motion.div
					className="text-center mb-16"
					variants={sectionVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
				>
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						{t('About me')}
					</h2>
					<p className="text-lg text-muted-foreground">
						{t(
							'about',
							"Senior Software Engineer with 15+ years of experience designing, scaling, and optimising backend systems for fintech, SaaS, and high-traffic platforms.",
						)}
					</p>
				</motion.div>

				<div className="md:grid-cols-12 gap-12 items-center grid">
					{/* Image */}
					<motion.div
						className="md:col-span-4 hidden md:block"
						variants={imageVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.3 }}
					>
						<motion.div whileHover={{ scale: 1.03, y: -4 }} transition={{ type: 'spring', stiffness: 200, damping: 20 }}>
							<Card className="overflow-hidden">
								<Image
									src={'/assets/blue.png'}
									alt="About me"
									width={600}
									height={600}
									className="w-full h-full object-cover"
								/>
							</Card>
						</motion.div>
					</motion.div>

					{/* Content */}
					<motion.div
						className="md:col-span-8 space-y-6"
						variants={contentVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.3 }}
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
					</motion.div>
				</div>
			</div>
		</section>
	);
}
