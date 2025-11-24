'use server';

import db from '@/lib/db';
import { cacheLife, cacheTag, updateTag } from 'next/cache';

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
		acc[item.language][item.name] = {
			value: item.value,
			valueJson: item.valueJson,
		};
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
			await getComponentFields(componentName);
		}

		return {
			success: true,
			message: 'Cache cleared succesfully',
		};
	} catch (error) {
		return {
			success: false,
			message: 'Something went wrong',
		};
	}
};
