'use client';

import { Button } from '@/components/ui/button';
import {
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { Label } from '@radix-ui/react-label';
import { Loader2 } from 'lucide-react';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import crypto from 'crypto';
import { checkCode, sendCodeConfirmation } from './actions';
import { useT } from '@/i18n/translate';

export default function FormCodeCheckStep({ onSubmit, email }: any) {
	const [sent, setSent] = useState(false);
	const [base, setBase] = useState('');
	const [isSending, setIsSending] = useState(false);
	const t = useT('RegisterPage');

	const registerSchema = z.object({
		code: z.string().min(1, t('Code is required')),
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
		sendCodeConfirmation({
			base: _base,
			email,
		}).then(() => {
			setSent(true);
			setIsSending(false);
		});
	}, [email]);

	const onSubmitHandle = async (form: any) => {
		const isValid = await checkCode({ code: form.code, email, base });
		if (!isValid) {
			setError('code', { type: 'manual', message: t('Invalid code') });
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
				<CardTitle className="text-xl">{t('Email validation')}</CardTitle>
				<CardDescription>
					{t('We are going to send a verification code in your email')}.
				</CardDescription>
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
										<Label htmlFor="email">{t('Code')}</Label>
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
										{t('Validate code')}
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
									{t('Receive code')}
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
