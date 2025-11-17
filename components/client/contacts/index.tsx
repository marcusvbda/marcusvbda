import { Skeleton } from '@/components/ui/skeleton';
import React, { Suspense } from 'react';
import Wrapper from './wrapper';

export default function Contacts() {
	return (
		<Suspense fallback={<Fallback />}>
			<Wrapper />
		</Suspense>
	);
}

const Fallback = () => {
	return (
		<section id="contact" className="section-padding bg-muted/30">
			<div className="max-width-content max-w-4xl">
				<div className="text-center mb-16 flex flex-col items-center space-y-4">
					<Skeleton className="h-10 w-1/3" />
					<Skeleton className="h-6 w-1/2" />
					<Skeleton className="h-5 w-4/5" />
				</div>
				<div className="space-y-6">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{[...Array(3)].map((_, i) => (
							<Skeleton key={i} className="h-40 w-full rounded-xl" />
						))}
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:w-2/3 mx-auto">
						{[...Array(2)].map((_, i) => (
							<Skeleton key={i} className="h-40 w-full rounded-xl" />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
