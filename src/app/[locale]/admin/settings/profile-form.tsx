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

export default function ProfileForm() {
	const [loading, setLoading] = useState(false);
	const t = useT('SettingsPage');

	const loginSchema = z.object({
		fullName: z.string().min(1, t('Full nume is required')),
		nickName: z.string().min(1, t('Nickname is required')),
		email: z.string().email(t('Invalid email')),
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
				<Label htmlFor="email">{t('Full name')}</Label>
				<Input id="fullName" {...register('fullName')} />
				{errors.fullName && (
					<p className="text-red-500 text-xs">{`${errors.fullName.message}`}</p>
				)}
			</div>

			<div className="grid gap-2">
				<Label htmlFor="email">{t('Nickname')}</Label>
				<Input id="nickName" {...register('nickName')} />
				{errors.nickName && (
					<p className="text-red-500 text-xs">{`${errors.nickName.message}`}</p>
				)}
			</div>

			<div className="grid gap-2">
				<Label htmlFor="email">Email</Label>
				<Input
					id="email"
					type="email"
					{...register('email')}
					placeholder="m@example.com"
				/>
				{errors.email && (
					<p className="text-red-500 text-xs">{`${errors.email.message}`}</p>
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
						t('Save changes')
					)}
				</Button>
			</div>
		</form>
	);
}
