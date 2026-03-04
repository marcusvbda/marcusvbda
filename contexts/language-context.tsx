'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	createContext,
	useContext,
	useState,
	useEffect,
	ReactNode,
} from 'react';

type Language = 'en' | 'pt';

import pt from '@/dictionaries/pt';
interface LanguageContextType {
	language: Language;
	setLanguage: (lang: Language) => void;
	t: any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
	undefined,
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
	const [mounted, setMounted] = useState(false);
	const [language, setLanguageState] = useState<Language>(() => {
		if (typeof window !== 'undefined') {
			const saved = localStorage && localStorage.getItem('language');
			return (saved as Language) || 'en';
		}
		return 'en';
	});

	useEffect(() => {
		localStorage.setItem('language', language);
		document.documentElement.lang = language;
	}, [language]);

	const setLanguage = (lang: Language) => {
		setLanguageState(lang);
	};

	const t = (text: string, fallback: any = null) => {
		if (language === 'pt') {
			return pt[text as keyof typeof pt] || fallback || text;
		}
		return fallback || text;
	};

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return;

	return (
		<LanguageContext.Provider value={{ language, setLanguage, t }}>
			{children}
		</LanguageContext.Provider>
	);
};

export const useLanguage = () => {
	const context = useContext(LanguageContext);
	if (!context) {
		throw new Error('useLanguage must be used within LanguageProvider');
	}
	return context;
};
