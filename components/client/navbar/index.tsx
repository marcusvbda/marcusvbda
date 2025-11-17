import { Skeleton } from '@/components/ui/skeleton';
import { Suspense } from 'react';
import Wrapper from './wrapper';

export default function Navbar() {
	return (
		<Suspense fallback={<Fallback />}>
			<Wrapper />
		</Suspense>
	);
}

const Fallback = () => {
	return (
		<nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md shadow-sm">
			<div className="max-width-content section-padding py-4!">
				<div className="flex items-center justify-between">
					<Skeleton className="h-8 w-40" />
					<div className="hidden md:flex items-center gap-8">
						{[...Array(6)].map((_, i) => (
							<Skeleton key={i} className="h-5 w-20" />
						))}
						<Skeleton className="h-10 w-10 rounded-full" />
						<Skeleton className="h-10 w-24 rounded-md" />
					</div>
					<div className="md:hidden flex items-center gap-2">
						<Skeleton className="h-10 w-10 rounded-full" />
						<Skeleton className="h-10 w-10 rounded-full" />
						<div className="border-l h-6" />
						<Skeleton className="h-10 w-24 rounded-md" />
					</div>
				</div>
			</div>
		</nav>
	);
};
