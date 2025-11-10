'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';

export const Education = () => {
	const { t } = useLanguage();

	return (
		<section id="education" className="section-padding">
			<div className="max-width-content">
				<div className="text-center mb-16 animate-fade-in">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						{t('education.title')}
					</h2>
				</div>

				<div className="space-y-8 grid">
					{Object.keys(t('education.items') || []).map((item, index) => (
						<Card
							key={`edu_${item}`}
							className="hover-lift animate-fade-in"
							style={{ animationDelay: `${index * 0.1}s` }}
						>
							<CardHeader>
								<div className="flex items-start justify-between gap-4">
									<div className="space-y-1 flex-1">
										<CardTitle className="text-2xl flex items-center gap-2">
											{t(`education.items.${item}.title`)}
										</CardTitle>
										<p className="text-sm text-muted-foreground">
											{t(`education.items.${item}.description`)}
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
};
