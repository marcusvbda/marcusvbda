'use client';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import FormMainStep from './form-main-step';
import FormCodeCheckStep from './form-code-check-step';

export default function RegisterPage() {
	const [form, setForm] = useState<any>({
		email: 'bassalobre.vinicius@gmail.com',
	});
	const [step, setStep] = useState('code-check');
	const t = useTranslations('RegisterPage');

	return (
		<div className={cn('flex flex-col gap-6')}>
			<Card>
				{step === 'main' && (
					<FormMainStep
						onSubmit={(x: any) => {
							setForm({ ...form, email: x.email });
							setStep('code-check');
						}}
					/>
				)}
				{step === 'code-check' && (
					<FormCodeCheckStep
						email={form.email}
						onSubmit={() => setStep('info-form')}
					/>
				)}
				{step === 'info-form' && <>preenche os dados</>}
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
