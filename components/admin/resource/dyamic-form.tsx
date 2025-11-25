import { Fragment, ReactNode, useState } from 'react';
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

export default function DynamicForm({
	header,
	onSaved,
	itemState,
	setVisible,
}: any): ReactNode {
	const [confirmationDeleteVisible, setConfirmationDeleteVisible] =
		useState(false);

	const {
		entity,
		fields,
		afterSave,
		validateForm,
		initialState: initialStateResource,
	} = useResource();
	const [error, setError] = useState<any>({});

	let initialState: any = itemState || initialStateResource || {};
	if (itemState?.id) {
		initialState.id = itemState.id;
	}

	const [formValues, setFormValues] = useState(initialState);

	const { mutate: storeMutate, isPending: isPendingStore } = useMutation({
		mutationFn: async ({ entity, formValues }: any) => {
			const result = await updateOrCreate(entity, formValues);
			return result;
		},
	});

	const handleStore = async () => {
		const componentSchema = z.object(validateForm || {});
		const validation = componentSchema.safeParse(formValues);
		let validationError = {};
		if (!validation.success) {
			validationError = validation.error.flatten().fieldErrors
			setError(validationError);
		} else {
			validationError = {};
			setError({});
		}

		if (validationError && Object.keys(validationError).length > 0) {
			return;
		}

		storeMutate(
			{ entity, formValues },
			{
				onSuccess: async (result: any) => {
					if (!result.success) {
						toast?.error(result.message);
						setError({});
						setFormValues(initialState);
						return;
					}
					if (afterSave) {
						await afterSave(result);
					}
					onSaved && onSaved();
					setError({});
					setFormValues(initialState);
					toast?.[result.success ? 'success' : 'error'](result.message);
				},
				onError: (error: any) => {
					toast?.error(error.message);
					setError({});
					setFormValues(initialState);
				},
			}
		);
	};

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

	const listFields = fields
		? fields({
			itemState,
			error,
			pending: isPendingStore || isPendingDelete,
			formValues,
			setFormValues,
			setVisible,
		})
		: [];

	return (
		<div className="w-full flex flex-col">
			{header}
			<form
				onSubmit={(e: any) => {
					e.preventDefault();
					handleStore();
				}}
				className="w-full flex flex-col gap-6 py-6"
			>
				<div className="flex flex-col gap-6">
					{listFields.map((field: any, key: any) => {
						return <Fragment key={key}>{field}</Fragment>;
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
									disabled={isPendingStore || isPendingDelete}
								>
									{(isPendingStore || isPendingDelete) && <Spinner className="size-3" />}
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
						disabled={isPendingStore || isPendingDelete}
					>
						{(isPendingStore || isPendingDelete) && <Spinner className="size-3" />}
						Save
					</Button>
				</div>
			</form>
		</div>
	);
}
