'use client';

import { useTranslations } from 'next-intl';

export const useT = (index: string) => {
	const translate = useTranslations(index);

	return (text: string, params: any = {}): string => {
		const value = translate(text, params);
		if (`${index}.${text}` === value) {
			return text.replace(/{(.*?)}/g, (_, key) => params[key] || `{${key}}`);
		}
		return value;
	};
};
