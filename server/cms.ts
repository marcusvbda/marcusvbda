'use server';

import db from '@/lib/db';
import { cacheLife, cacheTag, updateTag } from 'next/cache';

export const getComponentFields = async (components: string[]) => {
	'use cache';
	cacheLife('max');
	components.forEach((component) => cacheTag(component));

	const comps = await (db as any)?.component.findMany({
		where: {
			name: { in: components },
		},
		include: {
			fields: true,
		},
	});

	const result: Record<string, any> = {};

	comps?.forEach((comp: any) => {
		const fields = (comp.fields || []).reduce((acc: any, item: any) => {
			if (!acc[item.language]) acc[item.language] = {};
			acc[item.language][item.name] = {
				value: item.value,
				valueJson: item.valueJson,
			};
			return acc;
		}, {});
		result[comp.name] = fields;
	});

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
