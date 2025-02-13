'use client';

import { Button } from '@/components/ui/button';
import {
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { authRoutes } from '@/constants/routes';
import { useFetch } from '@/hooks/use-fetch';
import { zodResolver } from '@hookform/resolvers/zod';
import { Label } from '@radix-ui/react-label';
import { Loader2 } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import crypto from 'crypto';

export default function FormCodeCheckStep({ onSubmit, email }: any) {
	const locale = useLocale();
	const [sent, setSent] = useState(false);
	const [base, setBase] = useState('');
	const [isSending, setIsSending] = useState(false);
	const t = useTranslations('RegisterPage');
	const { fetcher } = useFetch();

	const checkCodeHandle = async (code: string) => {
		return new Promise((resolve) => {
			fetcher(
				{
					route: authRoutes.validateCode,
					method: 'POST',
					body: { email, base, code },
				},
				{
					onSuccess: resolve,
				},
			);
		});
	};

	const registerSchema = z.object({
		code: z.string().min(1, t('code_required')),
	});

	const {
		register,
		handleSubmit,
		setError,
		formState: { errors, isSubmitting },
	} = useForm({
		resolver: zodResolver(registerSchema),
	});

	const sendCodeToEmail = useCallback(() => {
		setIsSending(true);
		const _base = crypto.randomBytes(15).toString('hex').slice(0, 15);
		setBase(_base);
		fetcher(
			{
				route: authRoutes.sendCodeConfirmation,
				method: 'POST',
				body: {
					base: _base,
					email,
					locale,
				},
			},
			{
				onFinally: () => {
					setSent(true);
					setIsSending(false);
				},
			},
		);
	}, [email]);

	const onSubmitHandle = async (form: any) => {
		const isValid = await checkCodeHandle(form.code);
		if (!isValid) {
			setError('code', { type: 'manual', message: t('invalid_code') });
			return;
		}

		onSubmit({
			typed: form.code,
			base,
		});
	};

	return (
		<>
			<CardHeader className="text-center">
				<CardTitle className="text-xl">{t('email_validation')}</CardTitle>
				<CardDescription>{t('code_check_description')}</CardDescription>
			</CardHeader>
			<CardContent>
				<form onSubmit={handleSubmit(onSubmitHandle)}>
					<div className="grid gap-6">
						<div className="grid gap-6">
							<div className="grid gap-2">
								<Label htmlFor="email">Email</Label>
								<div className="flex flex-col gap-1">
									<Input value={email} disabled />
								</div>
							</div>
							{sent ? (
								<>
									<div className="grid gap-2">
										<Label htmlFor="email">{t('code')}</Label>
										<div className="flex flex-col gap-1">
											<Input
												{...register('code')}
												id="code"
												placeholder=""
												maxLength={6}
												className="uppercase"
											/>
											{errors.code && (
												<p className="text-red-500 text-xs">{`${errors.code.message}`}</p>
											)}
										</div>
									</div>
									<Button
										type="submit"
										className="w-full"
										disabled={isSubmitting}
									>
										{t('validate_code')}
										{isSubmitting && <Loader2 className="ml-1 animate-spin" />}
									</Button>
								</>
							) : (
								<Button
									type="button"
									className="w-full"
									disabled={isSending}
									onClick={sendCodeToEmail}
								>
									{t('receive_code')}
									{isSending && <Loader2 className="ml-1 animate-spin" />}
								</Button>
							)}
						</div>
					</div>
				</form>
			</CardContent>
		</>
	);
}
