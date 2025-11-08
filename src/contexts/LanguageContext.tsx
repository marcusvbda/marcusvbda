/* eslint-disable @typescript-eslint/no-explicit-any */
import { translations } from '@/lib/translations';
import React, {
	createContext,
	useContext,
	useState,
	useEffect,
	ReactNode,
} from 'react';

type Language = 'en' | 'pt';

interface LanguageContextType {
	language: Language;
	setLanguage: (lang: Language) => void;
	t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
	undefined,
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
	const [language, setLanguageState] = useState<Language>(() => {
		const saved = localStorage.getItem('language');
		return (saved as Language) || 'en';
	});

	useEffect(() => {
		localStorage.setItem('language', language);
		document.documentElement.lang = language;
	}, [language]);

	const setLanguage = (lang: Language) => {
		setLanguageState(lang);
	};

	const t = (key: string): string => {
		const keys = key.split('.');
		let value: any = translations[language];

		for (const k of keys) {
			value = value?.[k];
		}

		return value || key;
	};

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
