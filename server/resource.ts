'use server';
import { PrismaClient } from '@prisma/client';

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
	{ page, perPage, orderBy, filter }: any
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
					},
				};
			})
			.filter(Boolean);

		where = { OR: orConditions };
	}

	const [data, total, totalResult] = await Promise.all([
		model.findMany({
			skip,
			take: perPage,
			orderBy: orderBy,
			where,
		}),
		model.count(),
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

// export const createOrganization = async (
// 	initialState: any,
// 	formData: FormData,
// ) => {
// 	const schema = z.object({
// 		name: z
// 			.string()
// 			.min(1, 'Organization name is required')
// 			.max(100, 'Name is too long'),
// 		slug: z
// 			.string()
// 			.min(1, 'Organization slug is required')
// 			.max(100, 'Name is too long')
// 			.regex(
// 				/^[a-z0-9-]+$/,
// 				'Slug can only contain lowercase letters, numbers, and hyphens',
// 			)
// 			.transform((val) => val.toLowerCase())
// 			.refine(
// 				async (val: string) => {
// 					const res = await auth.api.checkOrganizationSlug({
// 						body: {
// 							slug: val,
// 						},
// 					});
// 					return res?.status;
// 				},
// 				{ message: 'Slug must be unique' },
// 			),
// 	});

// 	const fields = {
// 		name: (formData.get('name') as string).trim(),
// 		slug: (formData.get('slug') as string).trim(),
// 	};

// 	const validatedFields = await schema.safeParseAsync(fields);

// 	if (!validatedFields.success) {
// 		return {
// 			success: false,
// 			errors: validatedFields.error.flatten().fieldErrors,
// 			fields,
// 		};
// 	}

// 	const requestHeaders = await headers();

// 	const session = await auth.api.getSession({
// 		query: {
// 			disableCookieCache: true,
// 		},
// 		headers: requestHeaders,
// 	});

// 	const org = await auth.api.createOrganization({
// 		body: {
// 			...fields,
// 			userId: session?.user?.id,
// 			keepCurrentActiveOrganization: true,
// 		},
// 		headers: requestHeaders,
// 	});

// 	return {
// 		success: true,
// 		orgId: org?.id,
// 		message: 'Created successfully',
// 	};
// };

// const [state, formAction, pending] = useActionState(createOrganization, {
// 	name: '',
// 	slug: '',
// });

// <form action={formAction} className="space-y-4" id="form-create-organization">
// 	<Field>
// 		<FieldLabel>Organization name</FieldLabel>
// 		<FieldContent>
// 			<Input
// 				name="name"
// 				placeholder="Acme, Inc."
// 				aria-invalid={!!state?.errors?.name}
// 				defaultValue={state?.fields?.name}
// 			/>
// 			<FieldError>{state?.errors?.name as any}</FieldError>
// 		</FieldContent>
// 	</Field>
// 	<Field>
// 		<FieldLabel>Organization slug</FieldLabel>
// 		<FieldContent>
// 			<Input
// 				name="slug"
// 				placeholder="acme-inc"
// 				aria-invalid={!!state?.errors?.slug}
// 				defaultValue={state?.fields?.slug}
// 			/>
// 			<FieldError>{state?.errors?.slug as any}</FieldError>
// 		</FieldContent>
// 	</Field>
// 	<TransactionBtn
// 		loading={pending}
// 		type="submit"
// 		form="form-create-organization"
// 	>
// 		Create Organization
// 	</TransactionBtn>
// </form>;
