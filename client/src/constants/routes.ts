export const authRoutes = {
	checkEmail: `${process.env.NEXT_PUBLIC_API_URL}/auth/check-email`,
	sendCodeConfirmation: `${process.env.NEXT_PUBLIC_API_URL}/auth/send-confirmation-code`,
	validateCode: `${process.env.NEXT_PUBLIC_API_URL}/auth/validate-code`,
};
