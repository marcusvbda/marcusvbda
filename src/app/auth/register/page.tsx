'use client';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { useState } from 'react';
import FormMainStep from './form-main-step';
import FormCodeCheckStep from './form-code-check-step';
import FormRegisterStep from './form-register-step';
import { GalleryVerticalEnd } from 'lucide-react';
import { useT } from '@/i18n/translate';
import ClientComponent from '@/components/client-component';

export default function RegisterPage() {
	const t = useT('RegisterPage');
	const [email, setEmail] = useState('');
	const [codeResult, setCodeResult] = useState<any>(null);
	const [step, setStep] = useState('main');

	return (
		<ClientComponent>
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
					{step === 'main' && (
						<FormMainStep
							onSubmit={(x: any) => {
								setEmail(x.email);
								setStep('code-check');
							}}
						/>
					)}
					{step === 'code-check' && (
						<FormCodeCheckStep
							email={email}
							onSubmit={(code: string) => {
								setStep('register-form');
								setCodeResult(code);
							}}
						/>
					)}
					{step === 'register-form' && (
						<FormRegisterStep email={email} codeResult={codeResult} />
					)}
				</Card>
				<div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary  ">
					{t('Already have an account?')}{' '}
					<Link prefetch={false} href="/auth/login">
						{t('Login')}.
					</Link>
				</div>
			</div>
		</ClientComponent>
	);
}
