export type Locale = (typeof locales)[number];

export const locales = ['en', 'pt-br'] as const;
export const defaultLocale: Locale = 'pt-br';
