'use server';
import db from '@/lib/db';
import type {
	PaginatedResponse,
	FilterConfig,
	OrderByConfig,
	ResourceItem,
} from '../types';

interface PaginatedFetchOptions {
	page: number;
	perPage: number;
	orderBy: OrderByConfig;
	filter: FilterConfig;
	defaultFilter?: FilterConfig;
}

export const paginatedFetch = async (
	modelName: string,
	{ page, perPage, orderBy, filter, defaultFilter = {} }: PaginatedFetchOptions
): Promise<PaginatedResponse> => {
	const model = (db as Record<string, any>)?.[modelName];
	if (!model) {
		throw new Error(`Model not found: ${modelName}`);
	}

	if (!model.findMany || !model.count) {
		throw new Error(`Invalid model: ${modelName} - missing required methods`);
	}

	const skip = (page - 1) * perPage;

	let where: Record<string, unknown> = {};

	if (filter && Object.keys(filter).length > 0) {
		const orConditions = Object.entries(filter)
			.map(([key, value]) => {
				if (
					typeof value === 'object' &&
					value !== null &&
					!Array.isArray(value)
				) {
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
						mode: 'insensitive' as const,
					},
				};
			})
			.filter(
				(
					condition
				): condition is Record<string, unknown> & { id: { equals: number } } =>
					condition !== undefined
			);

		if (orConditions.length > 0) {
			where = { OR: orConditions };
		}
	}

	if (defaultFilter && Object.keys(defaultFilter).length > 0) {
		where = { ...where, ...defaultFilter };
	}

	try {
		const [data, total, totalResult] = await Promise.all([
			model.findMany({
				skip,
				take: perPage,
				orderBy: orderBy,
				where,
			}) as Promise<ResourceItem[]>,
			model.count({ where: defaultFilter }) as Promise<number>,
			model.count({ where }) as Promise<number>,
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
	} catch (error) {
		console.error(`Error fetching ${modelName}:`, error);
		throw new Error(
			`Failed to fetch ${modelName}: ${
				error instanceof Error ? error.message : 'Unknown error'
			}`
		);
	}
};

export const updateOrCreate = async (
	modelName: string,
	payload: ResourceItem
): Promise<{
	item?: ResourceItem;
	success: boolean;
	message: string;
}> => {
	try {
		const model = (db as Record<string, any>)?.[modelName];
		if (!model) {
			throw new Error(`Model not found: ${modelName}`);
		}

		if (!model.update || !model.create) {
			throw new Error(`Invalid model: ${modelName} - missing required methods`);
		}

		const { id, ...data } = payload;
		let item: ResourceItem;
		let message: string;

		if (id) {
			item = (await model.update({
				where: { id },
				data,
			})) as ResourceItem;
			message = 'Updated successfully';
		} else {
			item = (await model.create({
				data,
			})) as ResourceItem;
			message = 'Created successfully';
		}

		return {
			item,
			success: true,
			message,
		};
	} catch (error) {
		console.error(`Error updating/creating ${modelName}:`, error);
		const errorMessage =
			error instanceof Error ? error.message : 'Something went wrong';
		return {
			success: false,
			message: errorMessage,
		};
	}
};

export const deleteItem = async (
	id: number | string,
	modelName: string
): Promise<{
	success: boolean;
	message: string;
}> => {
	try {
		const model = (db as Record<string, any>)?.[modelName];
		if (!model) {
			throw new Error(`Model not found: ${modelName}`);
		}

		if (!model.delete) {
			throw new Error(`Invalid model: ${modelName} - missing delete method`);
		}

		await model.delete({ where: { id } });

		return {
			success: true,
			message: 'Deleted successfully',
		};
	} catch (error) {
		console.error(`Error deleting ${modelName} with id ${id}:`, error);
		const errorMessage =
			error instanceof Error ? error.message : 'Something went wrong';
		return {
			success: false,
			message: errorMessage,
		};
	}
};
