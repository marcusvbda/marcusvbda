'use client';

import { ReactNode } from 'react';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/language-context';
import Image from 'next/image';

export default function Content({ content }: any): ReactNode {
	const { language } = useLanguage();
	const about = content?.about?.[language];
	const hero = content?.hero?.[language];

	return (
		<section id="about" className="section-padding bg-muted/30">
			<div className="max-width-content">
				<div className="text-center mb-16 animate-fade-in">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						{about?.title?.value}
					</h2>
					<p className="text-lg text-muted-foreground">
						{about?.subtitle?.value}
					</p>
				</div>

				<div className="grid md:grid-cols-5 gap-12 items-center">
					{/* Image */}
					<div className="md:col-span-2 animate-fade-in">
						<Card className="overflow-hidden hover-lift">
							{about?.image?.value && (
								<Image
									src={about.image.value}
									alt={hero?.name || 'About me'}
									width={600}
									height={600}
									className="w-full h-full object-cover grayscale"
								/>
							)}
						</Card>
					</div>

					{/* Content */}
					<div
						className="md:col-span-3 space-y-6 animate-fade-in"
						style={{ animationDelay: '0.2s' }}
					>
						{(about?.description?.value || '')
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
