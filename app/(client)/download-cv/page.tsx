import Loading from '@/app/admin/loading';
import { Suspense } from 'react';
import Wrapper from './wrapper';

export default function Hero() {
	return (
		<Suspense fallback={<Loading />}>
			<Wrapper />
		</Suspense>
	);
}
