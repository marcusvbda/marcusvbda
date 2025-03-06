'use client';

import { Link } from '@/i18n/navigation';
import { GalleryVerticalEnd } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { useT } from '@/i18n/translate';
import FormForgot from './form-forgot';

export default function ForgotPassword() {
	const t = useT('ForgotPasswordPage');

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
						<CardTitle className="text-xl">{t('Forgot password')}</CardTitle>
						<CardDescription>
							{t('Enter your email to receive a password reset link')}
						</CardDescription>
					</CardHeader>
					<CardContent>
						<FormForgot />
					</CardContent>
				</Card>
				<div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary">
					<div className="text-center text-sm">
						{t('Or, return to')}{' '}
						<Link
							prefetch={false}
							href="/auth/login"
							className="underline underline-offset-4"
						>
							{t('login')}
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
