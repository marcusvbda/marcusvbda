'use client';
import { authRoutes } from '@/constants/routes';
import { Loader2 } from 'lucide-react';
import { notFound, useRouter } from 'next/navigation';
import { useEffect } from 'react';
export const enabledProviders = ['google'];

const getGoogleUser = async (accessToken: string) => {
	const response = await fetch(
		'https://www.googleapis.com/oauth2/v2/userinfo',
		{
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		},
	);

	const result: any = await response.json();
	if (!result?.id) return null;

	return {
		email: result.email,
		fullName: result.name,
		nickName: result.given_name,
		avatar: result.picture,
	};
};

export default function OAuth({ params, searchParams }: any) {
	const { provider } = params;
	const { token } = searchParams;
	const { receiveProviderUser } = authRoutes;
	const router = useRouter();

	useEffect(() => {
		const init = async () => {
			if (!enabledProviders.includes(provider)) return notFound();

			const actions: any = {
				google: getGoogleUser,
			};

			const action = actions[provider];
			if (!action) return notFound();

			const userInfo = await action(token);
			if (!userInfo) return notFound();

			const response = await fetch(receiveProviderUser, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(userInfo),
			});

			if (response.status !== 200) return notFound();

			const result = await response.json();

			console.log('efetuar login provider', result);

			router.push('/admin');
		};

		init();
	});

	return (
		<div className="w-full flex items-center justify-center py-10">
			<Loader2 className="ml-1 animate-spin" />
		</div>
	);
}
