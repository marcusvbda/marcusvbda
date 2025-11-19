'use client';

import { ReactNode, useState } from 'react';
import { useBreadcrumb } from '@/store/admin/use-breadcrumb';
import Resource from '@/components/admin/resource';
import { LayoutDashboard } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Spinner } from '@/components/ui/spinner';
import { useMutation } from '@tanstack/react-query';
import { refreshCacheComponentById } from '@/server/cms';
import { toast } from 'sonner';

export default function CachePage(): ReactNode {
	useBreadcrumb([
		{ href: '/admin', label: 'Home' },
		{ label: 'CMS' },
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
			<Card className="relative h-18 max-h-18 md:h-24 md:max-h-24 cursor-pointer transition-all duration-300 border-2 border-green-600 hover:border-green-600 hover:shadow-lg" >
				<CardContent className="h-full items-center p-4 gap-4 grid grid-cols-1 md:grid-cols-3">
					<span className="text-xs font-mono text-muted-foreground">
						{identifier}
					</span>
					<div>
						<h4 className="font-semibold gap-4">
							{row?.name}
						</h4>
					</div>
					<div>
						<h4 className="font-semibold gap-4 text-muted-foreground">
							{row?.value}
						</h4>
					</div>
				</CardContent>
			</Card >
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