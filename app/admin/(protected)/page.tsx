'use client';

import { useBreadcrumb } from '@/store/admin/use-breadcrumb';
import { Globe2Icon, LayoutDashboard } from 'lucide-react';
import Link from 'next/link';
import { ReactNode } from 'react';

export default function AdminPage(): ReactNode {
	useBreadcrumb([{ href: '/admin', label: 'Home' }]);

	return (
		<div className="flex flex-col gap-12">
			<div className="flex flex-col gap-2">
				<h1 className="scroll-m-20 text-xl md:text-4xl font-semibold tracking-tight sm:text-3xl xl:text-4xl flex items-center gap-2">
					<LayoutDashboard className='size-10' />
					Components & Fields
				</h1>
				<div className='flex items-center gap-2 flex-wrap'>
					<Link href="/admin/components" className="text-muted-foreground text-[1.05rem] text-balance sm:text-base underline">
						Manage my components and fields
					</Link>
					<span className='text-muted-foreground'>|</span>
					<Link href="/admin/cache" className="text-muted-foreground text-[1.05rem] text-balance sm:text-base underline">
						Manage my component's cache
					</Link>
				</div>
			</div>

			<div className="flex flex-col gap-2">
				<h1 className="scroll-m-20 text-xl md:text-4xl font-semibold tracking-tight sm:text-3xl xl:text-4xl flex items-center gap-2">
					<Globe2Icon className='size-10' />
					Main Site
				</h1>
				<div className='flex items-center gap-2 flex-wrap'>
					<Link href="/" className="text-muted-foreground text-[1.05rem] text-balance sm:text-base underline">
						Check the main website
					</Link>
				</div>
			</div>
		</div>
	);
}
