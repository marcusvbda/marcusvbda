'use client';

import { Link } from '@/i18n/navigation';
import { GalleryVerticalEnd } from 'lucide-react';
import FormLogin from './form-login';
import { cn } from '@/lib/utils';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { useT } from '@/i18n/translate';

export default function LoginPage() {
	const t = useT('LoginPage');

	return (
		<>
			<Link
				href="/"
				prefetch={false}
				className="flex items-center gap-2 self-center font-medium"
			>
				<div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
					<GalleryVerticalEnd className="size-4" />
				</div>
				Acme Inc.
			</Link>
			<div className={cn('flex flex-col gap-6')}>
				<Card>
					<CardHeader className="text-center">
						<CardTitle className="text-xl">{t('Welcome back')}</CardTitle>
						<CardDescription>
							{t('Login with your Apple or Google account')}
						</CardDescription>
					</CardHeader>
					<CardContent>
						<FormLogin />
					</CardContent>
				</Card>
				<div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary">
					{t('By clicking continue, you agree to our')}{' '}
					<a href="#">{t('Terms of Service')}</a> {t('and')}{' '}
					<a href="#">{t('Privacy Policy')}</a>.
				</div>
			</div>
		</>
	);
}
