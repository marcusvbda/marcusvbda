import { Skeleton } from '@/components/ui/skeleton';
import { Suspense } from 'react';
import ServerComponent from './server-component';

export default function Skills() {
	return (
		<Suspense fallback={<Fallback />}>
			<ServerComponent />
		</Suspense>
	);
}

const Fallback = () => {
	return (
		<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
			{[...Array(4)].map((_, i) => (
				<div key={i} className="flex flex-col space-y-3">
					<Skeleton className="h-8 w-3/4" />
					<div className="flex flex-wrap gap-2">
						<Skeleton className="h-6 w-20" />
						<Skeleton className="h-6 w-24" />
						<Skeleton className="h-6 w-16" />
					</div>
				</div>
			))}
		</div>
	);
};
