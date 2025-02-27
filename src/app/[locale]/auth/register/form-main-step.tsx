'use client';

import ProvidersLogin from '@/components/providers-login';
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
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { checkEmail } from './actions';
import { useT } from '@/i18n/translate';

export default function FormMainStep({ onSubmit }: any) {
	const t = useT('RegisterPage');

	const registerSchema = z.object({
		email: z
			.string()
			.email(t('Invalid email'))
			.refine(async (email: string) => await checkEmail(email), {
				message: t('Email already in use'),
			}),
	});

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm({
		resolver: zodResolver(registerSchema),
	});

	return (
		<>
			<CardHeader className="text-center">
				<CardTitle className="text-xl">{t('Create an account')}</CardTitle>
				<CardDescription>{t('Start your 30-day free trial')}.</CardDescription>
			</CardHeader>
			<CardContent>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="grid gap-6">
						<ProvidersLogin />
						<div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
							<span className="relative z-10 bg-background px-2 text-muted-foreground">
								{t('Or continue with')}
							</span>
						</div>
						<div className="grid gap-6">
							<div className="grid gap-2">
								<Label htmlFor="email">Email</Label>
								<div className="flex flex-col gap-1">
									<Input
										{...register('email')}
										id="email"
										placeholder="email@example.com"
										maxLength={255}
									/>
									{errors.email && (
										<p className="text-red-500 text-xs">{`${errors.email.message}`}</p>
									)}
								</div>
							</div>
							<Button type="submit" className="w-full" disabled={isSubmitting}>
								{t('Get started')}
								{isSubmitting && <Loader2 className="ml-1 animate-spin" />}
							</Button>
						</div>
					</div>
				</form>
			</CardContent>
		</>
	);
}
