'use client';

import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/language-context';

export default function Content({ content }: any) {
	const { language } = useLanguage();
	const education = content?.education?.[language];
	const items = education?.items?.valueJson || {};

	return (
		<section id="education" className="section-padding">
			<div className="max-width-content">
				<div className="text-center mb-16 animate-fade-in">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						{education?.title?.value}
					</h2>
				</div>

				<div className="space-y-8 grid">
					{Object.keys(items || {}).map((item, index) => (
						<Card
							key={`edu_${index}`}
							className="hover-lift animate-fade-in"
							style={{ animationDelay: `${index * 0.1}s` }}
						>
							<CardHeader>
								<div className="flex items-start justify-between gap-4">
									<div className="space-y-1 flex-1">
										<CardTitle className="text-2xl flex items-center gap-2">
											{items?.[item]?.title}
										</CardTitle>
										<p className="text-sm text-muted-foreground">
											{items?.[item]?.description}
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
