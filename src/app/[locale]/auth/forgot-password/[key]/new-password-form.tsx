'use client';

import ClientComponent from '@/components/client-component';
import { Button } from '@/components/ui/button';

import { Input } from '@/components/ui/input';
import { useT } from '@/i18n/translate';
import { Label } from '@radix-ui/react-label';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Loader2 } from 'lucide-react';
import { changeUserPassword, logout } from '@/actions/auth';
import { useToast } from '@/hooks/use-toast';
import { useEffect, useState } from 'react';
import { useRouter } from '@/i18n/navigation';

export default function NewPasswordForm({ code }: any) {
	const router = useRouter();
	const t = useT('ForgotPasswordPage');
	const { toast } = useToast();
	const [loading, setLoading] = useState(false);

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
		try {
			setLoading(true);
			const res: any = await changeUserPassword(form.password, code);

			if (!res.success) {
				toast({
					title: t('Oops'),
					description: t('Invalid email'),
				});
				return;
			}
		} catch (error) {
			toast({
				title: t('Error'),
				description: t('Something went wrong, please try again later.'),
			});
			setLoading(false);
		} finally {
			toast({
				title: t('All done!'),
				description: t('Your password has been changed, you can now log in'),
			});
			router.push('/auth/login');
		}
	};

	useEffect(() => {
		logout();
	}, []);

	return (
		<ClientComponent>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="grid gap-6">
					<div className="grid gap-6">
						<div className="grid gap-2">
							<Label htmlFor="email">{t('Password')}</Label>
							<Input
								id="password"
								type="password"
								{...register('password')}
								placeholder="******"
							/>
							{errors.password && (
								<p className="text-red-500 text-xs">{`${errors.password.message}`}</p>
							)}
						</div>
						<div className="grid gap-2">
							<Label htmlFor="email">{t('Confirm password')}</Label>
							<Input
								id="confirmPassword"
								type="password"
								{...register('confirmPassword')}
								placeholder="******"
							/>
							{errors.confirmPassword && (
								<p className="text-red-500 text-xs">{`${errors.confirmPassword.message}`}</p>
							)}
						</div>
						<Button
							type="submit"
							className="w-full"
							disabled={isSubmitting || loading}
						>
							{isSubmitting || loading ? (
								<Loader2 className="ml-1 animate-spin" />
							) : (
								t('Confirm password')
							)}
						</Button>
					</div>
				</div>
			</form>
		</ClientComponent>
	);
}
