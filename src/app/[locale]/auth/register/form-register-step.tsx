'use client';

import { Button } from '@/components/ui/button';
import {
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { Label } from '@radix-ui/react-label';
import { Loader2 } from 'lucide-react';
import { useRouter } from '@/i18n/navigation';
import { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useT } from '@/i18n/translate';
import { logout, storeUser } from '@/actions/auth';

export default function FormRegisterStep({ email, codeResult }: any) {
	const [loading, setLoading] = useState(false);
	const { toast } = useToast();
	const router = useRouter();
	const t = useT('RegisterPage');

	const registerSchema = z
		.object({
			fullName: z.string().min(1, t('Full name is required')),
			nickName: z.string().min(1, t('Nickname is required')),
			password: z.string().min(1, t('Password is required')),
			confirmPassword: z.string().min(1, t('Confirm your password')),
		})
		.refine((form: any) => form.password === form.confirmPassword, {
			message: t('Passwords must match'),
			path: ['confirmPassword'],
		});

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm({
		resolver: zodResolver(registerSchema),
	});

	useEffect(() => {
		logout();
	}, []);

	const onSubmit = useCallback(
		async (form: any) => {
			setLoading(true);
			try {
				const res = await storeUser({
					...form,
					email,
					codeResult,
				});
				if (!res.success) throw new Error();
			} catch (error) {
				toast({
					title: t('Error'),
					description: t('Error creating user'),
				});
				setLoading(false);
			} finally {
				toast({
					title: t('Account created successfully!'),
					description: t('Now you can login') + '. ' + t('Enjoy it!'),
				});
				router.push('/auth/login');
			}
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[codeResult, email],
	);

	return (
		<>
			<CardHeader className="text-center">
				<CardTitle className="text-xl">{t('Create an account')}</CardTitle>
				<CardDescription>{t('Start your 30-day free trial')}.</CardDescription>
			</CardHeader>
			<CardContent>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="grid gap-6">
						<div className="grid gap-6">
							<div className="grid gap-2">
								<Label htmlFor="email">{t('Full name')}</Label>
								<div className="flex flex-col gap-1">
									<Input
										{...register('fullName')}
										id="fullName"
										maxLength={255}
									/>
									{errors.fullName && (
										<p className="text-red-500 text-xs">{`${errors.fullName.message}`}</p>
									)}
								</div>
							</div>
							<div className="grid gap-2">
								<Label htmlFor="email">
									{t('How would you like to be called?')}
								</Label>
								<div className="flex flex-col gap-1">
									<Input
										{...register('nickName')}
										id="nickName"
										maxLength={255}
									/>
									{errors.nickName && (
										<p className="text-red-500 text-xs">{`${errors.nickName.message}`}</p>
									)}
								</div>
							</div>
							<div className="grid gap-2">
								<Label htmlFor="email">{t('Password')}</Label>
								<div className="flex flex-col gap-1">
									<Input
										{...register('password')}
										id="password"
										maxLength={50}
										type="password"
									/>
									{errors.password && (
										<p className="text-red-500 text-xs">{`${errors.password.message}`}</p>
									)}
								</div>
							</div>
							<div className="grid gap-2">
								<Label htmlFor="email">{t('Confirm your password')}</Label>
								<div className="flex flex-col gap-1">
									<Input
										{...register('confirmPassword')}
										id="confirmPassword"
										maxLength={50}
										type="password"
									/>
									{errors.confirmPassword && (
										<p className="text-red-500 text-xs">{`${errors.confirmPassword.message}`}</p>
									)}
								</div>
							</div>
							<Button
								type="submit"
								className="w-full"
								disabled={isSubmitting || loading}
							>
								{isSubmitting || loading ? (
									<Loader2 className="ml-1 animate-spin" />
								) : (
									t('Finish registration')
								)}
							</Button>
						</div>
					</div>
				</form>
			</CardContent>
		</>
	);
}
