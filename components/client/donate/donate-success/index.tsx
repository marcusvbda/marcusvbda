import { Skeleton } from '@/components/ui/skeleton';
import { Suspense } from 'react';
import Wrapper from './wrapper';

interface DonateSuccessProps {
	session_id: string;
}

export default function DonateSuccess({ session_id }: DonateSuccessProps) {
	return (
		<Suspense fallback={<Fallback />}>
			<Wrapper session_id={session_id} />
		</Suspense>
	);
}

const Fallback = () => {
	return (
		<section className="section-padding bg-muted/30 animate-pulse">
			<div className="max-width-content">
				<Skeleton className="h-10 w-1/3 mx-auto" />
			</div>
		</section>
	);
};
