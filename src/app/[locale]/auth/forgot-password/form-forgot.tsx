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
import { logout, sendForgotPasswordEmail } from '@/actions/auth';
import { useToast } from '@/hooks/use-toast';
import { useEffect, useState } from 'react';
import { useRouter } from '@/i18n/navigation';
import { useLocale } from 'next-intl';

export default function FormForgot() {
	const router = useRouter();
	const locale = useLocale();
	const t = useT('ForgotPasswordPage');
	const { toast } = useToast();
	const [loading, setLoading] = useState(false);

	const loginSchema = z.object({
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
		try {
			setLoading(true);
			const res: any = await sendForgotPasswordEmail(form.email, locale);

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
				description: t(
					'A link has been sent to your email address, please check your inbox',
				),
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
						<Button
							type="submit"
							className="w-full"
							disabled={isSubmitting || loading}
						>
							{isSubmitting || loading ? (
								<Loader2 className="ml-1 animate-spin" />
							) : (
								t('Send reset password link')
							)}
						</Button>
					</div>
				</div>
			</form>
		</ClientComponent>
	);
}
