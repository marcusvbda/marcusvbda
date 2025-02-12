import en from './en';
import ptBr from './ptBr';

const locales = {
	en,
	'pt-br': ptBr,
	get(value: string, locale: string, params: any = {}) {
		const text = (locales as any)[locale][value] || `${locale}.${value}`;
		return text.replace(
			/{(.*?)}/g,
			(_: any, key: any) => params[key] || `{${key}}`
		);
	},
};
export default locales;
