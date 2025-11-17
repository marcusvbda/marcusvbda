import { Skeleton } from '@/components/ui/skeleton';
import { Suspense } from 'react';
import Wrapper from './wrapper';

export default function Hero() {
	return (
		<Suspense fallback={<Fallback />}>
			<Wrapper />
		</Suspense>
	);
}

const Fallback = () => {
	return (
		<section className="section-padding animate-pulse">
			<div className="max-width-content">
				<div className="grid md:grid-cols-2 gap-12 items-center">
					<div className="space-y-6">
						<div className="space-y-3">
							<Skeleton className="h-4 w-1/4" />
							<Skeleton className="h-12 w-3/4" />
							<Skeleton className="h-8 w-1/2" />
							<Skeleton className="h-4 w-1/3" />
						</div>
						<div className="space-y-2">
							<Skeleton className="h-4 w-full" />
							<Skeleton className="h-4 w-full" />
							<Skeleton className="h-4 w-5/6" />
						</div>
						<div className="flex justify-center md:justify-start flex-wrap gap-4 pt-4">
							<Skeleton className="h-12 w-32 rounded-md" />
							<Skeleton className="h-12 w-32 rounded-md" />
							<Skeleton className="h-12 w-32 rounded-md" />
							<Skeleton className="h-12 w-32 rounded-md" />
						</div>
					</div>
					<div className="relative w-full max-w-md mx-auto">
						<Skeleton className="w-full h-96 rounded-3xl" />
					</div>
				</div>
			</div>
		</section>
	);
};
