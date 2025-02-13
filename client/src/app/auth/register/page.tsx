'use client';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import FormMainStep from './form-main-step';
import FormCodeCheckStep from './form-code-check-step';
import FormRegisterStep from './form-register-step';

export default function RegisterPage() {
	const t = useTranslations('RegisterPage');
	const [email, setEmail] = useState('');
	const [codeResult, setCodeResult] = useState<any>(null);
	const [step, setStep] = useState('main');

	return (
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
				{t('already_have_account')}{' '}
				<Link prefetch={false} href="/auth/login">
					{t('login')}.
				</Link>
			</div>
		</div>
	);
}
