import { Skeleton } from '@/components/ui/skeleton';
import { Suspense } from 'react';
import Wrapper from './wrapper';

export default function Projects() {
	return (
		<Suspense fallback={<Fallback />}>
			<Wrapper />
		</Suspense>
	);
}

const Fallback = () => {
	return (
		<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
			{[...Array(4)].map((_, i) => (
				<div key={i} className="flex flex-col space-y-3">
					<Skeleton className="h-[180px] w-full rounded-xl" />
					<div className="space-y-2">
						<Skeleton className="h-4 w-full" />
						<Skeleton className="h-4 w-5/6" />
					</div>
				</div>
			))}
		</div>
	);
};
