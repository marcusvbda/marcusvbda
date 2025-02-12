import axios from 'axios';

interface EmailParams {
	[key: string]: any;
}

export const sendEmail = async (
	params: EmailParams = {}
): Promise<{ success: boolean; message: string }> => {
	const API_URL = 'https://api.brevo.com/v3/smtp/email';

	try {
		await axios.post(
			API_URL,
			{
				...params,
				sender: {
					name: process.env.SENDINBLUE_SENDER_NAME,
					email: process.env.SENDINBLUE_SENDER_EMAIL,
				},
			},
			{
				headers: {
					'api-key': process.env.SENDINBLUE_API_KEY || '',
					'Content-Type': 'application/json',
				},
			}
		);
		return { success: true, message: 'successfully sent' };
	} catch (error: any) {
		const errorMessage =
			error?.response?.data || error?.message || 'Erro desconhecido';
		return { success: false, message: errorMessage };
	}
};
