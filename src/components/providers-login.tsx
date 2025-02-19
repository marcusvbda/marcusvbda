'use client';
import Link from 'next/link';
import { Button } from './ui/button';
import { useTranslations } from 'next-intl';
import { enabledOAuthProviders } from '@/constants/providers';

export default function ProvidersLogin() {
	const t = useTranslations('RegisterPage');

	return (
		<div className="flex flex-col gap-4">
			{enabledOAuthProviders.includes('x') && (
				<Link
					href={'/auth/providers/{provider}/{action}'
						.replace('{provider}', 'x')
						.replace('{action}', 'redirect')}
				>
					<Button variant="outline" className="w-full">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							width="24"
							height="24"
						>
							<path
								d="M3 3l18 18M21 3L3 21"
								stroke="currentColor"
								strokeWidth="2"
								fill="none"
							/>
						</svg>
						{t('register_with', { provider: 'X' })}
					</Button>
				</Link>
			)}
			{enabledOAuthProviders.includes('github') && (
				<Link
					href={'/auth/providers/{provider}/{action}'
						.replace('{provider}', 'github')
						.replace('{action}', 'redirect')}
				>
					<Button variant="outline" className="w-full">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							width="24"
							height="24"
						>
							<path
								d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.111.828-.258.828-.574v-2.118c-3.338.728-4.035-1.614-4.035-1.614-.546-1.384-1.334-1.754-1.334-1.754-1.09-.744.083-.729.083-.729 1.205.085 1.839 1.238 1.839 1.238 1.07 1.834 2.809 1.302 3.493.993.107-.775.418-1.303.76-1.604-2.665-.304-5.467-1.332-5.467-5.926 0-1.307.468-2.374 1.238-3.21-.124-.304-.536-1.533.117-3.194 0 0 1.008-.323 3.299 1.27a11.445 11.445 0 0 1 3.003-.404c1.02 0 2.043.138 3.003.404 2.292-1.593 3.299-1.27 3.299-1.27.653 1.661.242 2.89.118 3.194.77.836 1.238 1.903 1.238 3.21 0 4.596-2.806 5.62-5.476 5.922.429.368.825 1.094.825 2.188v3.269c0 .318.224.687.834.573C20.567 21.8 24 17.302 24 12c0-6.627-5.373-12-12-12z"
								fill="currentColor"
							/>
						</svg>
						{t('register_with', { provider: 'Github' })}
					</Button>
				</Link>
			)}
			{enabledOAuthProviders.includes('apple') && (
				<Link
					href={'/auth/providers/{provider}/{action}'
						.replace('{provider}', 'apple')
						.replace('{action}', 'redirect')}
				>
					<Button variant="outline" className="w-full">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
							<path
								d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
								fill="currentColor"
							/>
						</svg>
						{t('register_with', { provider: 'Apple' })}
					</Button>
				</Link>
			)}
			{enabledOAuthProviders.includes('google') && (
				<Link
					href={'/auth/providers/{provider}/{action}'
						.replace('{provider}', 'google')
						.replace('{action}', 'redirect')}
				>
					<Button variant="outline" className="w-full">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
							<path
								d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
								fill="currentColor"
							/>
						</svg>
						{t('register_with', { provider: 'Google' })}
					</Button>
				</Link>
			)}
		</div>
	);
}
