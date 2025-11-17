import { Skeleton } from '@/components/ui/skeleton';
import { Suspense } from 'react';
import Wrapper from './wrapper';

export default function Footer() {
	return (
		<Suspense fallback={<Fallback />}>
			<Wrapper />
		</Suspense>
	);
}

const Fallback = () => {
	return (
		<footer className="border-t bg-card">
			<div className="max-width-content section-padding py-12!">
				<div className="flex flex-col md:flex-row items-center justify-between gap-6">
					<div className="flex flex-col items-center md:items-start space-y-2">
						<Skeleton className="h-6 w-64" />
						<Skeleton className="h-4 w-80" />
					</div>
					<div className="flex items-center gap-4">
						<Skeleton className="h-10 w-10 rounded-full" />
						<Skeleton className="h-10 w-10 rounded-full" />
						<Skeleton className="h-10 w-10 rounded-full" />
					</div>
				</div>
				<div className="mt-8 pt-6 border-t flex justify-center">
					<Skeleton className="h-4 w-96" />
				</div>
			</div>
		</footer>
	);
};
