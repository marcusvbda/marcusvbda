'use client';

import { ReactNode } from 'react';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/language-context';

export default function Content({ content }: any): ReactNode {
	const { language } = useLanguage();
	return (
		<section id="about" className="section-padding bg-muted/30">
			<div className="max-width-content">
				<div className="text-center mb-16 animate-fade-in">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						{content?.about?.[language]?.title}
					</h2>
					<p className="text-lg text-muted-foreground">
						{content?.about?.[language]?.subtitle}
					</p>
				</div>

				<div className="grid md:grid-cols-5 gap-12 items-center">
					{/* Image */}
					<div className="md:col-span-2 animate-fade-in">
						<Card className="overflow-hidden hover-lift">
							<img
								loading="lazy"
								src={content?.about?.[language]?.image}
								alt={content?.hero?.[language]?.name}
								className="w-full h-full object-cover grayscale"
							/>
						</Card>
					</div>

					{/* Content */}
					<div
						className="md:col-span-3 space-y-6 animate-fade-in"
						style={{ animationDelay: '0.2s' }}
					>
						{(content?.about?.[language]?.description || '')
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
