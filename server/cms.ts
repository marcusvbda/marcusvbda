'use server';

export const getPageContent = async (page: string) => {
	await new Promise((resolve) => setTimeout(resolve, 5000));
	return { page };
};
