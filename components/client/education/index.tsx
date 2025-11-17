import { Skeleton } from '@/components/ui/skeleton';
import { Suspense } from 'react';
import Wrapper from './wrapper';

export default function Education() {
	return (
		<Suspense fallback={<Fallback />}>
			<Wrapper />
		</Suspense>
	);
}

const Fallback = () => {
	return (
		<div className="space-y-8">
			{[...Array(3)].map((_, i) => (
				<div key={i} className="flex flex-col space-y-3 rounded-xl border p-6">
					<Skeleton className="h-6 w-1/2" />
					<Skeleton className="h-4 w-5/6" />
				</div>
			))}
		</div>
	);
};
