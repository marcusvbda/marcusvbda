interface EmailParams {
	[key: string]: any;
}

export const sendEmail = async (
	params: EmailParams = {},
): Promise<{ success: boolean; message: string }> => {
	const API_URL = 'https://api.brevo.com/v3/smtp/email';

	try {
		const response = await fetch(API_URL, {
			method: 'POST',
			headers: {
				'api-key': process.env.SENDINBLUE_API_KEY || '',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				...params,
				sender: {
					name: process.env.SENDINBLUE_SENDER_NAME,
					email: process.env.SENDINBLUE_SENDER_EMAIL,
				},
			}),
		});

		if (!response.ok) {
			const errorData = await response.json();
			throw new Error(errorData.message || 'Erro desconhecido');
		}

		return { success: true, message: 'successfully sent' };
	} catch (error: any) {
		const errorMessage = error.message || 'Erro desconhecido';
		return { success: false, message: errorMessage };
	}
};
