import { getComponentFields } from '@/server/cms';
import { use } from 'react';
import Content from './content';
import { retrieveCheckoutSession } from '@/server/stripe';
import { notFound } from 'next/navigation';

interface WrapperProps {
	session_id: string;
}

export default function Wrapper({ session_id }: WrapperProps) {
	if (
		!session_id ||
		typeof session_id !== 'string' ||
		session_id.trim() === ''
	) {
		return notFound();
	}

	const result = use(retrieveCheckoutSession(session_id));

	if (!result.success || !result.session) return notFound();

	const session = result.session;
	const amount = session.amount_total
		? (session.amount_total / 100).toFixed(2)
		: '0.00';
	const currency = session.currency?.toUpperCase() || 'BRL';
	const paymentStatus = session.payment_status;
	const customerEmail = session.customer_email || null;

	const contentData = use(getComponentFields(['donate-success']));
	const donate = contentData['donate-success'];

	return (
		<Content
			content={{ donate }}
			customerEmail={customerEmail}
			amount={amount}
			currency={currency}
			paymentStatus={paymentStatus}
		/>
	);
}
