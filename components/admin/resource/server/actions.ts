'use server';
import db from '@/lib/db';
import z from 'zod';

interface IPaginatedFetchResponse {
	items: any[];
	meta: {
		total: number;
		totalResult: number;
		page: number;
		perPage: number;
		totalPages: number;
	};
}

export const paginatedFetch = async (
	modelName: string,
	{ page, perPage, orderBy, filter, defaultFilter = {} }: any
): Promise<IPaginatedFetchResponse> => {
	const model = (db as any)?.[modelName];
	if (!model) {
		throw new Error(`Model not found ${modelName}`);
	}
	const skip = (page - 1) * perPage;

	let where: any = {};
	if (filter && Object.keys(filter).length > 0) {
		const orConditions = Object.entries(filter)
			.map(([key, value]) => {
				if (typeof value === 'object' && value !== null) {
					return { [key]: value };
				}
				if (key === 'id') {
					const numericValue = Number(String(value || '').replace(/\D/g, ''));
					if (isNaN(numericValue)) {
						return undefined;
					}
					return {
						id: {
							equals: numericValue,
						},
					};
				}
				return {
					[key]: {
						contains: String(value),
						mode: 'insensitive',
					},
				};
			})
			.filter(Boolean);

		where = { OR: orConditions };
	}

	if (defaultFilter && Object.keys(defaultFilter).length > 0) {
		where = { ...where, AND: defaultFilter };
	}
	const [data, total, totalResult] = await Promise.all([
		model.findMany({
			skip,
			take: perPage,
			orderBy: orderBy,
			where,
		}),
		model.count({ where: defaultFilter }),
		model.count({ where }),
	]);

	return {
		items: data,
		meta: {
			total,
			totalResult,
			page,
			perPage,
			totalPages: Math.ceil(totalResult / perPage),
		},
	};
};

export const updateOrCreate = async (modelName: string, payload: any) => {
	try {
		const model = (db as any)?.[modelName];
		let message = 'Created successfully';
		let item;
		if (payload.id) {
			item = await model.update({
				where: {
					id: payload.id,
				},
				data: payload,
			});
			message = 'Updated successfully';
		} else {
			item = await model.create({
				data: payload,
			});
		}
		return {
			item,
			success: true,
			message,
		};
	} catch (error) {
		console.log(error);
		return {
			success: false,
			message: 'Something went wrong',
		};
	}
};

export const deleteItem = async (id: any, modelName: string) => {
	try {
		const model = (db as any)?.[modelName];
		await model.delete({ where: { id } });
		return {
			success: true,
			message: 'Deleted successfully',
		};
	} catch (error) {
		return {
			success: false,
			message: 'Something went wrong',
		};
	}
};
