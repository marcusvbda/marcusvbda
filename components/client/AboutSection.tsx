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
							'Full stack engineer building payment, fintech, and investment products end to end, and AI agents that run in production.',
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
							'Full stack engineer with 13+ years building payment, fintech, and investment products end to end, and today AI agents that run in production.',
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
