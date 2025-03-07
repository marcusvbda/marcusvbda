'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useT } from '@/i18n/translate';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export default function PasswordForm() {
	const [loading, setLoading] = useState(false);
	const t = useT('SettingsPage');

	const loginSchema = z
		.object({
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
		resolver: zodResolver(loginSchema),
	});

	const onSubmit = async (form: any) => {
		setLoading(true);
		console.log(form);
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	};

	return (
		<form className="space-y-6 flex-1" onSubmit={handleSubmit(onSubmit)}>
			<div className="grid gap-2">
				<Label htmlFor="password">{t('Password')}</Label>
				<Input id="password" type="password" {...register('password')} />
				{errors.password && (
					<p className="text-red-500 text-xs">{`${errors.password.message}`}</p>
				)}
			</div>

			<div className="grid gap-2">
				<Label htmlFor="confirmPassword">{t('Confirm your password')}</Label>
				<Input
					id="confirmPassword"
					type="password"
					{...register('confirmPassword')}
				/>
				{errors.confirmPassword && (
					<p className="text-red-500 text-xs">{`${errors.confirmPassword.message}`}</p>
				)}
			</div>

			<div className="flex items-center gap-4">
				<Button
					type="submit"
					className="w-full"
					disabled={isSubmitting || loading}
				>
					{isSubmitting || loading ? (
						<Loader2 className="ml-1 animate-spin" />
					) : (
						t('Change password')
					)}
				</Button>
			</div>
		</form>
	);
}
