import axios from 'axios';

export const sendEmail = async (params: any = {}): Promise<void> => {
	const API_URL = 'https://api.brevo.com/v3/smtp/email';

	return new Promise((resolve: any) => {
		axios
			.post(
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
			)
			.then(() => {
				resolve('enviado com sucesso');
			})
			.catch((error) => {
				resolve(
					'Erro ao enviar e-mail:' + error?.response?.data ||
						error?.message ||
						''
				);
			});
	});
};
