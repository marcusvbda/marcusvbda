'use server';
import Stripe from 'stripe';

const getStripeInstance = () => {
	return new Stripe(process.env.STRIPE_SECRET_KEY!, {
		apiVersion: '2025-11-17.clover',
		typescript: true,
	});
};

export const createCheckoutSession = async (
	amount: number,
	message?: string
) => {
	try {
		const stripe = getStripeInstance();
		const currency = 'brl';
		const session = await stripe.checkout.sessions.create({
			payment_method_types: ['card'],
			mode: 'payment',
			success_url: `${process.env.STRIPE_CALLBACK_URL}/{CHECKOUT_SESSION_ID}`,
			line_items: [
				{
					price_data: {
						currency,
						unit_amount: amount,
						product_data: {
							name: 'Doação - Cafezinho',
							description: message || 'Obrigado pelo seu apoio!',
						},
					},
					quantity: 1,
				},
			],
			payment_method_options: {
				card: {
					request_three_d_secure: 'automatic',
				},
			},
			metadata: message
				? {
						donation_message: message,
				  }
				: undefined,
		});

		return { success: true, sessionId: session.id, url: session.url };
	} catch (error) {
		console.error('Error creating checkout session:', error);
		return {
			success: false,
			error: error instanceof Error ? error.message : 'Unknown error',
		};
	}
};

export const retrieveCheckoutSession = async (sessionId: string) => {
	try {
		if (
			!sessionId ||
			typeof sessionId !== 'string' ||
			sessionId.trim() === ''
		) {
			return {
				success: false,
				error: 'Session ID is required and must be a valid string',
			};
		}

		const stripe = getStripeInstance();
		const session = await stripe.checkout.sessions.retrieve(sessionId, {
			expand: ['line_items', 'customer', 'payment_intent'],
		});

		return { success: true, session };
	} catch (error) {
		console.error('Error retrieving checkout session:', error);
		return {
			success: false,
			error: error instanceof Error ? error.message : 'Unknown error',
		};
	}
};
