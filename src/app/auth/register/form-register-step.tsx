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
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { storeUser } from './actions';

export default function FormRegisterStep({ email, codeResult }: any) {
	const { toast } = useToast();
	const router = useRouter();
	const t = useTranslations('RegisterPage');

	const registerSchema = z
		.object({
			fullName: z.string().min(1, t('fullNameRequired')),
			nickName: z.string().min(1, t('nickNameRequired')),
			password: z.string().min(1, t('passwordRequired')),
			confirmPassword: z.string().min(1, t('confirmPasswordRequired')),
		})
		.refine((form: any) => form.password === form.confirmPassword, {
			message: t('passwordsMustMatch'),
			path: ['confirmPassword'],
		});

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm({
		resolver: zodResolver(registerSchema),
	});

	const onSubmit = useCallback(
		async (form: any) => {
			storeUser({
				...form,
				email,
				codeResult,
			}).then(() => {
				toast({
					title: t('accountCreated'),
					description: t('accountCreatedDesc'),
				});
				router.push('/auth/login');
			});
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[codeResult, email],
	);

	return (
		<>
			<CardHeader className="text-center">
				<CardTitle className="text-xl">{t('create_account')}</CardTitle>
				<CardDescription>{t('register_description')}</CardDescription>
			</CardHeader>
			<CardContent>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="grid gap-6">
						<div className="grid gap-6">
							<div className="grid gap-2">
								<Label htmlFor="email">{t('fullName')}</Label>
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
								<Label htmlFor="email">{t('nickName')}</Label>
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
								<Label htmlFor="email">{t('password')}</Label>
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
								<Label htmlFor="email">{t('confirmPassword')}</Label>
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
							<Button type="submit" className="w-full" disabled={isSubmitting}>
								{t('finish')}
								{isSubmitting && <Loader2 className="ml-1 animate-spin" />}
							</Button>
						</div>
					</div>
				</form>
			</CardContent>
		</>
	);
}
