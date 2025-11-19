'use client';

import { ReactNode, useState } from 'react';
import { useBreadcrumb } from '@/store/admin/use-breadcrumb';
import Resource from '@/components/admin/resource';
import { LayoutDashboard } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Spinner } from '@/components/ui/spinner';
import { useMutation } from '@tanstack/react-query';
import { refreshCacheComponentById } from '@/server/cms';
import { toast } from 'sonner';
import { CardItem } from '@/components/admin/resource/item';
import Link from 'next/link';

export default function CachePage(): ReactNode {
	useBreadcrumb([
		{ href: '/admin', label: 'Home' },
		{ label: 'Cache' },
	]);

	return (
		<Resource
			entity="Component"
			icon={<LayoutDashboard className='size-10' />}
			label="Component"
			pluralLabel="Cached Components"
			description="Manage your cached components."
			filterBy="id,name"
			itemLabel="name"
			hideNew={true}
			renderItem={(row: any) => <CacheItem row={row} />}
		/>
	);
}


const CacheItem = ({ row }: any) => {
	const identifier = `#${row?.id && row?.id.toString().padStart(6, '0')}`;
	const [visible, setVisible] = useState(false)
	const { mutate, isPending } = useMutation({
		mutationFn: async ({ id }: any) => {
			const result = await refreshCacheComponentById(id);
			return result;
		},
	});

	const refreshHandle = async (id: any) => {
		mutate({ id } as any, {
			onSuccess: (result: any) => {
				setVisible(false)
				toast?.[result.success ? 'success' : 'error'](result.message);
			},
			onError: (error: any) => {
				setVisible(false)
				toast?.error(error.message);
			},
		});
	};


	return <AlertDialog
		open={visible}
		onOpenChange={setVisible}
	>
		<AlertDialogTrigger asChild>
			<Link href="#" onClick={(e: any) => [e.preventDefault(), e.stopPropagation(), setVisible(true)]}>
				<CardItem row={row} itemLabel="name" className="border-green-600 hover:border-green-600" />

			</Link>
		</AlertDialogTrigger>
		<AlertDialogContent>
			<AlertDialogHeader>
				<AlertDialogTitle>
					Refresh cache of {`"${row?.name}"`}
				</AlertDialogTitle>
				<AlertDialogDescription>
					{`Are you sure you want to refresh cache of "${row?.name}" component?`}
				</AlertDialogDescription>
			</AlertDialogHeader>
			<AlertDialogFooter>
				<AlertDialogCancel
					disabled={isPending}
					onClick={() => setVisible(false)}
				>
					Cancel
				</AlertDialogCancel>
				<AlertDialogAction
					onClick={(e: any) => {
						e.preventDefault();
						e.stopPropagation();
						refreshHandle(row?.id);
					}}
					disabled={isPending}
					className="flex items-center gap-2"
				>
					{isPending && <Spinner className="size-3" />}
					Confirm
				</AlertDialogAction>
			</AlertDialogFooter>
		</AlertDialogContent>
	</AlertDialog>
}