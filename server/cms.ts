'use server';

import { translations } from '@/lib/translations';
import db from "@/lib/db";
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
	const comp = await (db as any)?.component.findUnique({
		where: {
			name: component,
		},
		include: {
			fields: true,
		},
	});

	const result = (comp?.fields || []).reduce((acc: any, item: any) => {
		if (!acc[item.language]) acc[item.language] = {};
		acc[item.language][item.name] = item.value;
		return acc;
	}, {});

	return result;
};

export const refreshCacheComponentById = async (id: number) => {
	try {
		const comp = await (db as any)?.component.findUnique({
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
