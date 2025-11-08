import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import profileImage from '@/assets/blue.png';

export const About = () => {
	const { t } = useLanguage();

	return (
		<section id="about" className="section-padding bg-muted/30">
			<div className="max-width-content">
				<div className="text-center mb-16 animate-fade-in">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						{t('about.title')}
					</h2>
					<p className="text-lg text-muted-foreground">{t('about.subtitle')}</p>
				</div>

				<div className="grid md:grid-cols-5 gap-12 items-center">
					{/* Image */}
					<div className="md:col-span-2 animate-fade-in">
						<Card className="overflow-hidden hover-lift">
							<img
								src={profileImage}
								alt="Marcus Vinicius Bassalobre"
								className="w-full h-full object-cover grayscale"
							/>
						</Card>
					</div>

					{/* Content */}
					<div
						className="md:col-span-3 space-y-6 animate-fade-in"
						style={{ animationDelay: '0.2s' }}
					>
						<p className="text-lg leading-relaxed text-muted-foreground">
							{t('about.p1')}
						</p>
						<p className="text-lg leading-relaxed text-muted-foreground">
							{t('about.p2')}
						</p>
						<p className="text-lg leading-relaxed text-muted-foreground">
							{t('about.p3')}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
