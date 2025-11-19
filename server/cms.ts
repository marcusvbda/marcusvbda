'use server';

import { translations } from '@/lib/translations';
import { PrismaClient } from '@prisma/client';
import { cacheLife, cacheTag, updateTag } from 'next/cache';
import { success } from 'zod';

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
	try {
		const prisma = new PrismaClient();
		const comp = await prisma.component.findUnique({
			where: { id },
		});
		const componentName = comp?.name;
		if (componentName) {
			await updateTag(componentName);
			await getComponentFields(componentName)
		}

		return {
			success: true,
			message: "Cache cleared succesfully"
		}
	} catch (error) {
		return {
			success: false,
			message: "Something went wrong"
		}
	}

};
