'use server';

import { translations } from '@/lib/translations';
import { PrismaClient } from '@prisma/client';
import { cacheLife, cacheTag, updateTag } from 'next/cache';

export const getComponentContent = async (component: string) => {
	'use cache';
	cacheLife('max');
	cacheTag(component);

	return {
		en: (translations as any)?.en?.[component],
		pt: (translations as any)?.pt?.[component],
	};
};

export const getComponentFields = async (component: string) => {
	'use cache';
	cacheLife('max');
	cacheTag(component);
	const prisma = new PrismaClient();
	const comp = await prisma.component.findUnique({
		where: {
			name: component,
		},
		include: {
			fields: true,
		},
	});

	const result = (comp?.fields || []).reduce((acc: any, item: any) => {
		const [key, lang] = item.name.split('_');
		if (!acc[lang]) acc[lang] = {};
		acc[lang][key] = item.value;
		return acc;
	}, {});

	return result;
};


export const refreshCacheComponentById = async (id: number) => {
	const prisma = new PrismaClient();
	const comp = await prisma.component.findUnique({
		where: { id },
	});
	const componentName = comp?.name;
	if (componentName) {
		updateTag(componentName);
		getComponentFields(componentName)
	}
};