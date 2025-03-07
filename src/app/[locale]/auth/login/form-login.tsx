'use client';

import ClientComponent from '@/components/client-component';
import ProvidersLogin from '@/components/providers-login';
import { Button } from '@/components/ui/button';

import { Input } from '@/components/ui/input';
import { useT } from '@/i18n/translate';
import { Label } from '@radix-ui/react-label';
import { Link, useRouter } from '@/i18n/navigation';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Loader2 } from 'lucide-react';
import { login, logout } from '@/actions/auth';
import { useToast } from '@/hooks/use-toast';
import { useEffect, useState } from 'react';

export default function FormLogin() {
	const router = useRouter();
	const t = useT('LoginPage');
	const { toast } = useToast();
	const [loading, setLoading] = useState(false);

	const loginSchema = z.object({
		email: z.string().email(t('Invalid email')),
		password: z.string().min(1, t('Password is required')),
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
			const res: any = await login(form);

			if (!res.success) {
				toast({
					title: t('Oops'),
					description: t('Invalid email or password'),
				});
				return;
			}

			toast({
				title: t('Welcome'),
				description: t('Welcome back {nickName}', {
					nickName: res?.user?.nickName || '',
				}),
			});
		} catch (error) {
			toast({
				title: t('Error'),
				description: t('Something went wrong, please try again later.'),
			});
			setLoading(false);
		} finally {
			router.push('/admin');
		}
	};

	useEffect(() => {
		logout();
	}, []);

	return (
		<ClientComponent>
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
						<div className="grid gap-2">
							<div className="flex items-center">
								<Label htmlFor="password">{t('Password')}</Label>
								<Link
									href="/auth/forgot-password"
									className="ml-auto text-sm underline-offset-4 hover:underline"
								>
									{t('Forgot your password?')}
								</Link>
							</div>
							<Input id="password" type="password" {...register('password')} />
							{errors.password && (
								<p className="text-red-500 text-xs">{`${errors.password.message}`}</p>
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
								t('Login')
							)}
						</Button>
					</div>
					<div className="text-center text-sm">
						{t('Don`t have an account?')}{' '}
						<Link
							prefetch={false}
							href="/auth/register"
							className="underline underline-offset-4"
						>
							{t('Register')}
						</Link>
					</div>
				</div>
			</form>
		</ClientComponent>
	);
}
