'use client';

import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/language-context';

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
		titleEn: 'Bachelor in Systems Analysis and Development',
		descKey: 'edu_unimar_description',
		descEn: 'Universidade de Marília • Brazil, São Paulo • 2013 - 2016',
	},
	{
		id: 'deepLearning',
		titleKey: 'edu_deepLearning_title',
		titleEn: 'Supervised Machine Learning: Regression and Classification',
		descKey: 'edu_deepLearning_description',
		descEn:
			'DeepLearning.AI & Stanford University • Online • 2025 • Applied AI for automation, data workflows, and engineering productivity',
	},
	{
		id: 'harvardX',
		titleKey: 'edu_harvardX_title',
		titleEn: "CS50's Introduction to Computer Science",
		descKey: 'edu_harvardX_description',
		descEn: 'Harvard University • Online • 2025',
	},
	{
		id: 'futureLearning',
		titleKey: 'edu_futureLearning_title',
		titleEn: 'Advanced English Course',
		descKey: 'edu_futureLearning_description',
		descEn: 'Future Learning • Ireland • 2025',
	},
	{
		id: 'times',
		titleKey: 'edu_times_title',
		titleEn: 'Professional English Course',
		descKey: 'edu_times_description',
		descEn: 'Times • Brazil • 2023 - 2024',
	},
];

export default function Content() {
	const { t } = useLanguage();

	return (
		<section id="education" className="section-padding">
			<div className="max-width-content">
				<div className="text-center mb-16 animate-fade-in">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						{t('Education')}
					</h2>
				</div>

				<div className="space-y-8 grid">
					{EDUCATION.map((item, index) => (
						<Card
							key={`edu_${item.id}`}
							className="hover-lift animate-fade-in"
							style={{ animationDelay: `${index * 0.1}s` }}
						>
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
					))}
				</div>
			</div>
		</section>
	);
}
