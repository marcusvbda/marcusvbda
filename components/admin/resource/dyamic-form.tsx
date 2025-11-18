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

export default function DynamicForm({ onSaved, itemState }: any): ReactNode {
	const [deleting, setDeleting] = useState(false);
	const [confirmationDeleteVisible, setConfirmationDeleteVisible] =
		useState(false);
	const { entity, fields } = useResource();

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
				if (type === 'number') {
					acc[key] = computedFields?.[key] || 0;
					return acc;
				}
				acc[key] == computedFields?.[key] || '';
				return acc;
		  }, {});

	const [state, formAction, pending] = useActionState(
		async (_initialState: any, newState: FormData) =>
			(await updateOrCreate(newState, entity, computedFields)) as any,
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

	const deleteHandler = async (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		if (!itemState?.id) return;
		setDeleting(true);
		const result = await deleteItem(itemState.id, entity);
		if (result.message) {
			toast?.[result.success ? 'success' : 'error'](result.message);
		}
		if (result.success) onSaved();
		setDeleting(false);
	};

	return (
		<form action={formAction} className="w-full flex flex-col gap-6 py-6">
			<div className="flex flex-col gap-6">
				{Object.keys(computedFields).map((key: any) => {
					const field = computedFields[key];
					return (
						<Field key={key}>
							{field?.label && <FieldLabel>{field?.label}</FieldLabel>}
							<FieldContent>
								{['text', 'number', 'email', 'url'].includes(field?.type) && (
									<Input
										aria-invalid={Boolean(state?.error?.[key]?.[0])}
										name={key}
										type={field?.type}
										defaultValue={state?.[key]}
										placeholder={field?.placeholder || ''}
										disabled={pending}
										hidden={field?.hidden}
									/>
								)}
								{field?.type === 'textarea' && (
									<Textarea
										className="border resize-none rounded-lg p-2 text-sm"
										aria-invalid={Boolean(state?.error?.[key]?.[0])}
										name={key}
										defaultValue={state?.[key]}
										placeholder={field?.placeholder || ''}
										disabled={pending}
										hidden={field?.hidden}
										rows={field?.rows || 5}
									/>
								)}
								<FieldError>{state?.error?.[key] as any}</FieldError>
							</FieldContent>
						</Field>
					);
				})}
				<div className="w-full gap-2 flex items-center flex-col md:flex-row">
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
										onClick={() => setConfirmationDeleteVisible(false)}
									>
										Cancel
									</AlertDialogCancel>
									<AlertDialogAction
										onClick={deleteHandler}
										disabled={deleting}
										className="flex items-center gap-2"
									>
										{deleting && <Spinner className="size-3" />}
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
			</div>
		</form>
	);
}
