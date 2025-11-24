import { ReactNode, useActionState, useEffect, useMemo, useState } from 'react';
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
import { useRouter } from 'next/navigation';
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
		let cFields = Object.assign({}, fields);
		if (itemState) {
			cFields.id = {
				type: 'number',
				required: true,
				hidden: true,
			};
		}
		return cFields;
	}, [itemState]);

	const initialState = itemState
		? itemState
		: Object.keys(computedFields).reduce((acc: any, key: any) => {
				const type = computedFields[key].type;
				if (type === 'link') return acc;
				if (type === 'number') {
					acc[key] = computedFields?.[key] || 0;
					return acc;
				}
				acc[key] == computedFields?.[key] || '';
				return acc;
		  }, {});

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

	const router = useRouter();

	const renderedForm = (
		<>
			{header}
			<form action={formAction} className="w-full flex flex-col gap-6 py-6">
				<div className="flex flex-col gap-6">
					{itemState?.id && (
						<input
							type="hidden"
							name="id"
							value={itemState?.id}
							className="hidden"
						/>
					)}
					{Object.keys(computedFields).map((key: any) => {
						const field = computedFields[key];
						return (
							<Field key={key}>
								<FieldContent>
									{['link'].includes(field?.type) && (
										<>
											{!itemState?.id &&
											(field?.href || '').includes('[id]') ? (
												<></>
											) : (
												<Item variant="outline">
													<ItemContent>
														<ItemTitle>{field?.label}</ItemTitle>
														<ItemDescription>
															{field?.description}
														</ItemDescription>
													</ItemContent>
													<ItemActions>
														<Link
															href="#"
															onClick={(e: any) => {
																e.preventDefault();
																setVisible(false);
																setTimeout(() => {
																	router.push(
																		(field?.href || '').replaceAll(
																			'[id]',
																			itemState?.id
																		)
																	);
																}, 500);
															}}
														>
															<Button size="sm">Open</Button>
														</Link>
													</ItemActions>
												</Item>
											)}
										</>
									)}

									{['text', 'number', 'email', 'url'].includes(field?.type) && (
										<>
											{field?.label && <FieldLabel>{field?.label}</FieldLabel>}
											<Input
												aria-invalid={Boolean(state?.error?.[key]?.[0])}
												name={key}
												type={field?.type}
												defaultValue={state?.[key] || ''}
												placeholder={field?.placeholder || ''}
												disabled={pending}
												hidden={field?.hidden}
											/>
										</>
									)}
									{field?.type === 'textarea' && (
										<>
											{field?.label && <FieldLabel>{field?.label}</FieldLabel>}
											<Textarea
												className="border resize-none rounded-lg p-2 text-sm"
												aria-invalid={Boolean(state?.error?.[key]?.[0])}
												name={key}
												defaultValue={state?.[key] || ''}
												placeholder={field?.placeholder || ''}
												disabled={pending}
												hidden={field?.hidden}
												rows={field?.rows || 5}
											/>
										</>
									)}
									{field?.type === 'radio' && (
										<>
											{field?.label && <FieldLabel>{field?.label}</FieldLabel>}
											<div className="flex flex-col gap-2 w-full">
												{(field?.options || []).map((op: any, opKey: any) => (
													<label
														key={opKey}
														className="flex items-center gap-2 text-xs text-muted-foreground"
													>
														<input
															type="radio"
															name={key}
															checked={state?.[key] === op.value}
														/>
														{op.label}
													</label>
												))}
											</div>
										</>
									)}
									{field?.type === 'select' && (
										<>
											{field?.label && <FieldLabel>{field?.label}</FieldLabel>}
											<Select
												state={state}
												index={key}
												field={field}
												pending={pending}
											/>
										</>
									)}
									{field?.type === 'custom' && (
										<>
											{field?.render &&
												field?.render({ state, pending, field })}
										</>
									)}
									{field?.type === 'json' && (
										<>
											{field?.label && <FieldLabel>{field?.label}</FieldLabel>}
											<JsonEditor
												name={key}
												defaultValue={state?.[key] || ''}
											/>
										</>
									)}
									<FieldError>{state?.error?.[key] as any}</FieldError>
								</FieldContent>
							</Field>
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
