import { Skeleton } from '@/components/ui/skeleton';
import { Suspense } from 'react';
import Wrapper from './wrapper';

export default function About() {
	return (
		<Suspense fallback={<Fallback />}>
			<Wrapper />
		</Suspense>
	);
}

const Fallback = () => {
	return (
		<section className="section-padding bg-muted/30 animate-pulse">
			<div className="max-width-content">
				<div className="text-center mb-16 space-y-4">
					<Skeleton className="h-10 w-1/3 mx-auto" />
					<Skeleton className="h-6 w-1/2 mx-auto" />
				</div>

				<div className="grid md:grid-cols-5 gap-12 items-center">
					<div className="md:col-span-2">
						<Skeleton className="w-full aspect-square rounded-lg" />
					</div>
					<div className="md:col-span-3 space-y-4">
						<Skeleton className="h-5 w-full" />
						<Skeleton className="h-5 w-full" />
						<Skeleton className="h-5 w-11/12" />
						<Skeleton className="h-5 w-full" />
						<Skeleton className="h-5 w-3/4" />
					</div>
				</div>
			</div>
		</section>
	);
};
