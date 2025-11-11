import { Spinner } from '@/components/ui/spinner';
import { ReactNode } from 'react';

export default function Loading(): ReactNode {
	return (
		<div className="w-full flex items-center justify-center py-10">
			<Spinner className="size-10 opacity-5" />
		</div>
	);
}
