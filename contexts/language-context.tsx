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

interface LanguageContextType {
	language: Language;
	setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
	undefined
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

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return;

	return (
		<LanguageContext.Provider value={{ language, setLanguage }}>
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
