'use server';
import { PrismaClient } from '@prisma/client';
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
	const prisma = new PrismaClient();
	const model = (prisma as any)?.[modelName];
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

export const updateOrCreate = async (
	formData: FormData,
	modelName: string,
	formFields: any
) => {
	try {
		const zodSchema = z.object(
			Object.keys(formFields).reduce((acc: any, key: any) => {
				const field = formFields[key];
				if (field.type === 'link') return { ...acc };
				let rowZ: any;
				if (field.type === 'number') {
					rowZ = z.coerce.number();
				} else if (field.type === 'boolean') {
					rowZ = z.boolean();
				} else {
					rowZ = z.string();
				}

				if (field?.required) {
					if (field.type !== 'boolean') {
						rowZ = rowZ.min(1, `${key} is required`);
					}
				}

				return { ...acc, [key]: rowZ };
			}, {})
		);

		const fields = Object.keys(formFields).reduce((acc: any, key: any) => {
			return { ...acc, [key]: formData.get(key) };
		}, {});

		const validatedFields = await zodSchema.safeParseAsync(fields);

		if (!validatedFields.success) {
			return {
				success: false,
				error: validatedFields.error.flatten().fieldErrors,
				fields,
			};
		}

		const prisma = new PrismaClient();
		const model = (prisma as any)?.[modelName];

		let message = 'Created successfully';
		let item;
		if (validatedFields.data.id) {
			item = await model.update({
				where: {
					id: validatedFields.data.id,
				},
				data: validatedFields.data,
			});
			message = 'Updated successfully';
		} else {
			item = await model.create({
				data: validatedFields.data,
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
			error: 'Something went wrong',
		};
	}
};

export const deleteItem = async (id: any, modelName: string) => {
	try {
		const prisma = new PrismaClient();
		const model = (prisma as any)?.[modelName];
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
