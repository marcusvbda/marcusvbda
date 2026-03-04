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
import en from '@/dictionaries/en';
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
		const dictionaries: Record<Language, Record<string, any>> = {
			en,
			pt,
		};

		const currentDict = dictionaries[language] || {};
		const currentValue = currentDict[text];
		if (currentValue !== undefined && currentValue !== null) {
			return currentValue;
		}

		const enValue = dictionaries.en[text];
		if (enValue !== undefined && enValue !== null) {
			return enValue;
		}

		if (fallback !== null && fallback !== undefined) {
			return fallback;
		}

		return text;
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
