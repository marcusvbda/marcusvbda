import {
	Fragment,
	ReactNode,
	useActionState,
	useEffect,
	useMemo,
	useState,
} from 'react';
import { useResource } from './context';
import { deleteItem, updateOrCreate } from './server/actions';
import { toast } from 'sonner';
import {
	Field,
	FieldContent,
	FieldError,
	FieldLabel,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { useMutation } from '@tanstack/react-query';
import {
	Item,
	ItemActions,
	ItemContent,
	ItemDescription,
	ItemTitle,
} from '@/components/ui/item';
import Link from 'next/link';
import Select from './fields/Select';
import JsonEditor from './fields/JsonEditor';

export default function DynamicForm({
	header,
	onSaved,
	itemState,
	setVisible,
}: any): ReactNode {
	const [confirmationDeleteVisible, setConfirmationDeleteVisible] =
		useState(false);

	const { entity, fields, renderForm, afterSave } = useResource();

	const computedFields = useMemo(() => {
		let cFields: any = Object.keys(fields).reduce((acc: any, fieldKey: any) => {
			const field = fields[fieldKey];
			if (!field?.id) return acc;
			return { ...acc, [field.id]: field };
		}, {});

		if (itemState?.id) {
			cFields.id = {
				id: 'id',
				type: 'number',
				required: true,
				hidden: true,
			};
		}

		return cFields;
	}, [fields, itemState?.id]);

	let initialState: any = {};
	if (itemState && itemState.id) {
		initialState = Object.keys(computedFields).reduce((acc: any, key: any) => {
			const id = computedFields[key].id;
			if (!id) return acc;
			acc[id] = itemState[id] !== undefined ? itemState[id] : '';
			return acc;
		}, {});
	} else {
		initialState = Object.keys(computedFields).reduce((acc: any, key: any) => {
			const field = computedFields[key];
			const id = field.id;
			const type = field.type;
			const defaultValue = field?.defaultValue;
			if (!id) return acc;
			if (type === 'number') {
				acc[id] = defaultValue || 0;
			} else if (type === 'boolean') {
				acc[id] = defaultValue || false;
			} else if (type === 'json') {
				acc[id] = defaultValue || {};
			} else {
				acc[id] = defaultValue || '';
			}
			return acc;
		}, {});
	}

	const [formValues, setFormValues] = useState(initialState);

	const [state, formAction, pending] = useActionState(
		async (_initialState: any, newState: FormData) => {
			const result = await updateOrCreate(newState, entity, computedFields);
			if (afterSave) {
				await afterSave(result);
			}
			return result;
		},
		{
			error: {} as any,
			success: false,
			...initialState,
		}
	);

	useEffect(() => {
		if (state?.message) {
			toast?.[state?.success ? 'success' : 'error'](state?.message);
		}
		if (state?.success) {
			onSaved && onSaved();
		}
	}, [state, onSaved]);

	const { mutate: deleteMutate, isPending: isPendingDelete } = useMutation({
		mutationFn: async ({ id, modelName }: any) => {
			const result = await deleteItem(id, modelName);
			return result;
		},
	});

	const deleteHandler = async (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		if (!itemState?.id) return;

		deleteMutate({ id: itemState?.id, modelName: entity } as any, {
			onSuccess: (result: any) => {
				toast?.[result.success ? 'success' : 'error'](result.message);
				onSaved && onSaved();
			},
			onError: (error: any) => {
				toast?.error(error.message);
			},
		});
	};

	const defaultRender = (renderContext: any, field: any, component: any) => {
		if (field?.render) {
			return field?.render({ ...renderContext, ...field, component });
		}
		return component;
	};

	const renderedForm = (
		<>
			{header}
			<form action={formAction} className="w-full flex flex-col gap-6 py-6">
				<div className="flex flex-col gap-6">
					{itemState?.id && (
						<input
							type="hidden"
							name="id"
							defaultValue={itemState?.id}
							className="hidden"
						/>
					)}
					{Object.keys(fields).map((key: any) => {
						const field = fields[key];
						const renderContext = {
							state,
							formValues,
							pending,
							field,
							item: itemState,
							setDrawerVisible: setVisible,
						};
						return (
							<Fragment key={key}>
								{['text', 'number', 'email', 'url'].includes(field?.type) && (
									<>
										{defaultRender(
											renderContext,
											field,
											<Field key={key}>
												<FieldContent>
													{field?.label && (
														<FieldLabel>
															{field?.label} - {formValues?.[key]}
														</FieldLabel>
													)}
													<Input
														aria-invalid={Boolean(state?.error?.[key]?.[0])}
														name={key}
														type={field?.type}
														placeholder={field?.placeholder || ''}
														disabled={pending}
														hidden={field?.hidden}
														value={formValues?.[key] || ''}
														onChange={(e: any) =>
															setFormValues((prev: any) => ({
																...prev,
																[key]: e.target.value,
															}))
														}
													/>
													<FieldError>{state?.error?.[key] as any}</FieldError>
												</FieldContent>
											</Field>
										)}
									</>
								)}
								{field?.type === 'textarea' && (
									<>
										{defaultRender(
											renderContext,
											field,
											<>
												{field?.label && (
													<FieldLabel>{field?.label}</FieldLabel>
												)}
												<Field key={key}>
													<FieldContent>
														<Textarea
															className="border resize-none rounded-lg p-2 text-sm"
															aria-invalid={Boolean(state?.error?.[key]?.[0])}
															name={key}
															value={formValues?.[key] || ''}
															onChange={(e: any) =>
																setFormValues((prev: any) => ({
																	...prev,
																	[key]: e.target.value,
																}))
															}
															placeholder={field?.placeholder || ''}
															disabled={pending}
															hidden={field?.hidden}
															rows={field?.rows || 5}
														/>
														<FieldError>
															{state?.error?.[key] as any}
														</FieldError>
													</FieldContent>
												</Field>
											</>
										)}
									</>
								)}
								{field?.type === 'radio' && (
									<>
										{defaultRender(
											renderContext,
											field,
											<>
												<Field key={key}>
													<FieldContent>
														{field?.label && (
															<FieldLabel>{field?.label}</FieldLabel>
														)}
														<div className="flex flex-col gap-2 w-full">
															{(field?.options || []).map(
																(op: any, opKey: any) => (
																	<label
																		key={opKey}
																		className="flex items-center gap-2 text-xs text-muted-foreground"
																	>
																		<input
																			type="radio"
																			name={key}
																			value={formValues?.[key] || ''}
																			onChange={(e: any) =>
																				setFormValues((prev: any) => ({
																					...prev,
																					[key]: e.target.value,
																				}))
																			}
																		/>
																		{op.label}
																	</label>
																)
															)}
														</div>
													</FieldContent>
												</Field>
											</>
										)}
									</>
								)}
								{field?.type === 'select' && (
									<>
										{defaultRender(
											renderContext,
											field,
											<>
												<Field key={key}>
													<FieldContent>
														{field?.label && (
															<FieldLabel>{field?.label}</FieldLabel>
														)}
														<Select
															index={key}
															field={field}
															pending={pending}
															value={formValues?.[key] || ''}
															onChange={(e: any) =>
																setFormValues((prev: any) => ({
																	...prev,
																	[key]: e,
																}))
															}
														/>
														<FieldError>
															{state?.error?.[key] as any}
														</FieldError>
													</FieldContent>
												</Field>
											</>
										)}
									</>
								)}
								{field?.type === 'custom' && (
									<>{field?.render && field?.render(renderContext)}</>
								)}
								{field?.type === 'json' && (
									<>
										{defaultRender(
											renderContext,
											field,
											<>
												<Field key={key}>
													<FieldContent>
														{field?.label && (
															<FieldLabel>{field?.label}</FieldLabel>
														)}
														<JsonEditor
															name={key}
															value={state?.[key] || ''}
															onChange={(e: any) =>
																setFormValues((prev: any) => ({
																	...prev,
																	[key]: e,
																})) as any
															}
														/>
													</FieldContent>
												</Field>
											</>
										)}
									</>
								)}
							</Fragment>
						);
					})}
				</div>
				<div className="w-full gap-2 flex items-center flex-row">
					{itemState?.id && (
						<AlertDialog
							open={confirmationDeleteVisible}
							onOpenChange={setConfirmationDeleteVisible}
						>
							<AlertDialogTrigger asChild>
								<Button type="button" variant="destructive" disabled={pending}>
									Delete
								</Button>
							</AlertDialogTrigger>
							<AlertDialogContent>
								<AlertDialogHeader>
									<AlertDialogTitle>
										Deleting {`${entity.toLowerCase()}`}...
									</AlertDialogTitle>
									<AlertDialogDescription>
										{`Are you sure you want to delete this ${entity.toLowerCase()}?`}
									</AlertDialogDescription>
								</AlertDialogHeader>
								<AlertDialogFooter>
									<AlertDialogCancel
										disabled={isPendingDelete}
										onClick={() => setConfirmationDeleteVisible(false)}
									>
										Cancel
									</AlertDialogCancel>
									<AlertDialogAction
										onClick={deleteHandler}
										disabled={isPendingDelete}
										className="flex items-center gap-2"
									>
										{isPendingDelete && <Spinner className="size-3" />}
										Confirm
									</AlertDialogAction>
								</AlertDialogFooter>
							</AlertDialogContent>
						</AlertDialog>
					)}
					<Button
						type="submit"
						className="flex items-center gap-2 ml-auto"
						disabled={pending}
					>
						{pending && <Spinner className="size-3" />}
						Save
					</Button>
				</div>
			</form>
		</>
	);

	return (
		<div className="w-full flex flex-col">
			{renderForm
				? renderForm(renderedForm, {
						item: itemState,
						setDrawerVisible: setVisible,
				  })
				: renderedForm}
		</div>
	);
}
