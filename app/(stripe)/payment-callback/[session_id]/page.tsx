import { notFound } from 'next/navigation';
import DonateSuccess from '@/components/client/donate/donate-success';

interface PageProps {
	params: {
		session_id: string;
	};
}

export default async function PaymentCallbackPage({ params }: PageProps) {
	const { session_id } = await params;
	if (!session_id) return notFound();

	return <DonateSuccess session_id={session_id} />;
}
