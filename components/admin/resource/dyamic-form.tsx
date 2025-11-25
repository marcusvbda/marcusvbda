import {
	Fragment,
	ReactNode,
	useState,
	useCallback,
	useMemo,
	useRef,
} from 'react';
import { useResource } from './context';
import { deleteItem, updateOrCreate } from './server/actions';
import { toast } from 'sonner';
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
import { z } from 'zod';
import type { ResourceItem, FieldContext } from './types';

interface DynamicFormProps {
	header?: ReactNode;
	onSaved?: () => void;
	itemState?: ResourceItem | null;
	setVisible: (visible: boolean) => void;
}

export default function DynamicForm({
	header,
	onSaved,
	itemState,
	setVisible,
}: DynamicFormProps): ReactNode {
	const [confirmationDeleteVisible, setConfirmationDeleteVisible] =
		useState(false);
	const [confirmationSaveVisible, setConfirmationSaveVisible] = useState(false);

	const {
		entity,
		fields,
		afterSave,
		validateForm,
		initialState: initialStateResource,
		serverActions,
	} = useResource();
	const [error, setError] = useState<Record<string, string[]>>({});

	const initialState = useMemo(() => {
		const base = itemState || initialStateResource || {};
		if (itemState?.id) {
			return { ...base, id: itemState.id };
		}
		return base;
	}, [itemState, initialStateResource]);

	const [formValues, setFormValues] =
		useState<Record<string, unknown>>(initialState);

	const updateOrCreateAction = serverActions?.updateOrCreate || updateOrCreate;
	const deleteItemAction = serverActions?.deleteItem || deleteItem;

	const { mutate: storeMutate, isPending: isPendingStore } = useMutation({
		mutationFn: async ({
			entity,
			formValues,
		}: {
			entity: string;
			formValues: Record<string, unknown>;
		}) => {
			const result = await updateOrCreateAction(
				entity,
				formValues as ResourceItem
			);
			return result;
		},
	});

	const handleStore = useCallback(async () => {
		if (!validateForm || Object.keys(validateForm).length === 0) {
			// No validation, proceed directly
			storeMutate(
				{ entity, formValues },
				{
					onSuccess: async (result) => {
						if (!result.success) {
							toast?.error(result.message);
							setError({});
							setFormValues(initialState);
							return;
						}
						if (afterSave) {
							await afterSave(result);
						}
						onSaved?.();
						setError({});
						setFormValues(initialState);
						toast?.[result.success ? 'success' : 'error'](result.message);
					},
					onError: (error: Error) => {
						toast?.error(error.message || 'An error occurred');
						setError({});
						setFormValues(initialState);
					},
				}
			);
			return;
		}

		const componentSchema = z.object(validateForm);
		const validation = componentSchema.safeParse(
			formValues as Record<string, unknown>
		);

		if (!validation.success) {
			const validationError = validation.error.flatten().fieldErrors as Record<
				string,
				string[]
			>;
			setError(validationError);
			return;
		}

		setError({});
		storeMutate(
			{ entity, formValues },
			{
				onSuccess: async (result) => {
					if (!result.success) {
						toast?.error(result.message);
						setError({});
						setFormValues(initialState);
						return;
					}
					if (afterSave) {
						await afterSave(result);
					}
					onSaved?.();
					setError({});
					setFormValues(initialState);
					toast?.[result.success ? 'success' : 'error'](result.message);
				},
				onError: (error: Error) => {
					toast?.error(error.message || 'An error occurred');
					setError({});
					setFormValues(initialState);
				},
			}
		);
	}, [
		validateForm,
		formValues,
		entity,
		initialState,
		storeMutate,
		afterSave,
		onSaved,
	]);

	const { mutate: deleteMutate, isPending: isPendingDelete } = useMutation({
		mutationFn: async ({
			id,
			modelName,
		}: {
			id: number | string;
			modelName: string;
		}) => {
			const result = await deleteItemAction(id, modelName);
			return result;
		},
	});

	const deleteHandler = useCallback(
		async (event: React.MouseEvent<HTMLButtonElement>) => {
			event.preventDefault();
			if (!itemState?.id) return;

			deleteMutate(
				{ id: itemState.id, modelName: entity },
				{
					onSuccess: (result) => {
						toast?.[result.success ? 'success' : 'error'](result.message);
						onSaved?.();
					},
					onError: (error: Error) => {
						toast?.error(error.message || 'An error occurred');
					},
				}
			);
		},
		[itemState?.id, entity, deleteMutate, onSaved]
	);

	const fieldContext: FieldContext = useMemo(
		() => ({
			itemState: itemState || null,
			error,
			pending: isPendingStore || isPendingDelete,
			formValues,
			setFormValues,
			setVisible,
		}),
		[itemState, error, isPendingStore, isPendingDelete, formValues, setVisible]
	);

	const listFields = useMemo(
		() => (fields ? fields(fieldContext) : []),
		[fields, fieldContext]
	);

	return (
		<div className="w-full flex flex-col">
			{header}
			<form
				className="w-full flex flex-col gap-6 py-6"
				onSubmit={(e: any) => e.preventDefault()}
			>
				<div className="flex flex-col gap-6">
					{listFields.map((field, index) => {
						return <Fragment key={index}>{field}</Fragment>;
					})}
				</div>
				<div className="w-full gap-2 flex items-center flex-row">
					{itemState?.id && (
						<AlertDialog
							open={confirmationDeleteVisible}
							onOpenChange={setConfirmationDeleteVisible}
						>
							<AlertDialogTrigger asChild>
								<Button
									type="button"
									variant="destructive"
									disabled={isPendingDelete}
								>
									{isPendingDelete && <Spinner className="size-3" />}
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
					<AlertDialog
						open={confirmationSaveVisible}
						onOpenChange={setConfirmationSaveVisible}
					>
						<AlertDialogTrigger asChild>
							<Button type="button" className="flex items-center gap-2 ml-auto">
								Save
							</Button>
						</AlertDialogTrigger>
						<AlertDialogContent>
							<AlertDialogHeader>
								<AlertDialogTitle>
									Saving {`${entity.toLowerCase()}`}...
								</AlertDialogTitle>
								<AlertDialogDescription>
									{`Are you sure you want to save this ${entity.toLowerCase()}?`}
								</AlertDialogDescription>
							</AlertDialogHeader>
							<AlertDialogFooter>
								<AlertDialogCancel
									disabled={isPendingStore}
									onClick={() => setConfirmationSaveVisible(false)}
								>
									Cancel
								</AlertDialogCancel>
								<AlertDialogAction
									disabled={isPendingStore}
									className="flex items-center gap-2"
									type="submit"
									onClick={(e: any) => {
										e.preventDefault();
										handleStore();
									}}
								>
									{isPendingStore && <Spinner className="size-3" />}
									Confirm
								</AlertDialogAction>
							</AlertDialogFooter>
						</AlertDialogContent>
					</AlertDialog>
				</div>
			</form>
		</div>
	);
}
