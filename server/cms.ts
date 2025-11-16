'use server';

import { translations } from '@/lib/translations';
import { cacheLife, cacheTag } from 'next/cache';

export const getComponentContent = async (component: string) => {
	'use cache';
	cacheLife('max');
	cacheTag(component);

	return {
		en: (translations as any)?.en?.[component],
		pt: (translations as any)?.pt?.[component],
	};
};
