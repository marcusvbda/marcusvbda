'use client';

import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/language-context';
import { motion, type Variants } from 'framer-motion';

const EDUCATION: Array<{
	id: string;
	titleKey: string;
	titleEn: string;
	descKey: string;
	descEn: string;
}> = [
	{
		id: 'unimar',
		titleKey: 'edu_unimar_title',
		titleEn: 'BSc in Systems Analysis and Development',
		descKey: 'edu_unimar_description',
		descEn: 'Universidade de Marília, Brazil.',
	},
	{
		id: 'harvardX',
		titleKey: 'edu_harvardX_title',
		titleEn: "CS50's Introduction to Computer Science",
		descKey: 'edu_harvardX_description',
		descEn: 'Harvard University (2025).',
	},
	{
		id: 'deepLearning',
		titleKey: 'edu_deepLearning_title',
		titleEn: 'Supervised Machine Learning',
		descKey: 'edu_deepLearning_description',
		descEn: 'Stanford Online / DeepLearning.AI (2025).',
	},
	{
		id: 'futureLearning',
		titleKey: 'edu_futureLearning_title',
		titleEn: 'Advanced English',
		descKey: 'edu_futureLearning_description',
		descEn: 'Future Learning Ireland (Dublin, 2025).',
	},
];

const containerVariants: Variants = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.12 },
	},
};

const cardVariants: Variants = {
	hidden: { opacity: 0, x: -40 },
	visible: {
		opacity: 1,
		x: 0,
		transition: { duration: 0.55, ease: 'easeOut' },
	},
};

export default function Content() {
	const { t } = useLanguage();

	return (
		<section id="education" className="section-padding">
			<div className="max-width-content">
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 32 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.6, ease: 'easeOut' }}
				>
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						{t('Education')}
					</h2>
				</motion.div>

				<motion.div
					className="space-y-8 grid"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.1 }}
				>
					{EDUCATION.map((item) => (
						<motion.div key={`edu_${item.id}`} variants={cardVariants}>
							<motion.div
								whileHover={{ scale: 1.01, x: 6 }}
								transition={{ type: 'spring', stiffness: 250, damping: 22 }}
							>
								<Card>
									<CardHeader>
										<div className="flex items-start justify-between gap-4">
											<div className="space-y-1 flex-1">
												<CardTitle className="text-2xl flex items-center gap-2">
													{t(item.titleKey, item.titleEn)}
												</CardTitle>
												<p className="text-sm text-muted-foreground">
													{t(item.descKey, item.descEn)}
												</p>
											</div>
										</div>
									</CardHeader>
								</Card>
							</motion.div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
