import { getLocale } from 'next-intl/server';

export const getMessages = async (locale: string) => {
	try {
		const messages = await require(`../../messages/${locale}.json`);
		return messages;
	} catch (error) {
		return {};
	}
};

export const getServerTranslations = async (index: string, locale?: string) => {
	if (!locale) locale = await getLocale();
	const messages = await getMessages(locale);

	return (text: string, params: any = {}): string => {
		const value = messages?.[index]?.[text] || text;
		return value.replaceAll(
			/{(.*?)}/g,
			(_: any, key: any) => params[key] || `{${key}}`,
		);
	};
};
