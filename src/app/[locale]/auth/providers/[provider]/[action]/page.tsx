'use client';
import { enabledOAuthProviders } from '@/constants/providers';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import {
	callbackGithub,
	callbackGoogle,
	redirectGithub,
	redirectGoogle,
} from './actions';
import { receiveProviderUser } from '@/app/auth/register/actions';

export default function OAuth({ params, searchParams }: any) {
	const { provider, action } = params;
	const { code } = searchParams;
	const [error, setError] = useState('');
	const router = useRouter();

	useEffect(() => {
		const origin = window.location.origin;
		const path = window.location.pathname;
		const originalUrl = `${origin}${path}`;

		const actions: any = {
			callback: async (receivedProvider: any) => {
				const handlers: any = {
					github: callbackGithub,
					google: callbackGoogle,
				};
				if (!code) return setError('no-redirect-code');
				const action = handlers[receivedProvider];
				if (!action) return setError('no-redirect-action');
				const userInfo = await action(originalUrl, code);
				if (userInfo === 'error') return setError('no-redirect-userinfo');

				receiveProviderUser(userInfo).then((user: any) => {
					console.log('logar com', user);
					router.push('/admin');
				});
			},
			redirect: async (receivedProvider: string) => {
				const handlers: any = {
					google: redirectGoogle,
					github: redirectGithub,
				};
				const action = handlers[receivedProvider];
				if (!action) return setError('no-callback-action');
				const redirectUrl = await action(originalUrl);
				router.push(redirectUrl);
			},
		};

		const handleAction = async (
			receivedProvider: string,
			receivedAction: string,
		) => {
			if (!enabledOAuthProviders.includes(receivedProvider)) {
				return setError('provider-disabled');
			}
			const action = actions[receivedAction];
			if (!action) return setError('no-handle-action');
			await action(receivedProvider);
		};

		handleAction(provider, action);
	});

	useEffect(() => {
		console.log(error);
	}, [error]);

	return (
		<div className="w-full flex items-center justify-center py-10">
			<Loader2 className="ml-1 animate-spin" />
		</div>
	);
}
