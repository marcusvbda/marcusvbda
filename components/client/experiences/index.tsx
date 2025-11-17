import { Skeleton } from '@/components/ui/skeleton';
import { Suspense } from 'react';
import Wrapper from './wrapper';

export default function Experiences() {
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
				<div key={i} className="flex items-center space-x-4">
					<Skeleton className="h-12 w-12 rounded-full" />
					<div className="space-y-2">
						<Skeleton className="h-4 w-[250px]" />
						<Skeleton className="h-4 w-[200px]" />
					</div>
				</div>
			))}
		</div>
	);
};
