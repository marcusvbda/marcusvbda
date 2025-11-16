'use client';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

export const LanguageSwitcher = () => {
	const { language, setLanguage } = useLanguage();

	return (
		<div className="flex items-center gap-1 p-1 bg-muted rounded-lg">
			<Button
				variant={language === 'en' ? 'secondary' : 'ghost'}
				size="sm"
				onClick={() => setLanguage('en')}
				className="text-xs h-7 px-3"
			>
				EN
			</Button>
			<Button
				variant={language === 'pt' ? 'secondary' : 'ghost'}
				size="sm"
				onClick={() => setLanguage('pt')}
				className="text-xs h-7 px-3"
			>
				PT
			</Button>
		</div>
	);
};
