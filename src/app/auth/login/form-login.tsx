'use client';

import ClientComponent from '@/components/client-component';
import ProvidersLogin from '@/components/providers-login';
import { Button } from '@/components/ui/button';

import { Input } from '@/components/ui/input';
import { useT } from '@/i18n/translate';
import { Label } from '@radix-ui/react-label';
import Link from 'next/link';

export default function FormLogin() {
	const t = useT('LoginPage');

	return (
		<ClientComponent>
			<form>
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
								placeholder="m@example.com"
								required
							/>
						</div>
						<div className="grid gap-2">
							<div className="flex items-center">
								<Label htmlFor="password">{t('Password')}</Label>
								<a
									href="#"
									className="ml-auto text-sm underline-offset-4 hover:underline"
								>
									{t('Forgot your password?')}
								</a>
							</div>
							<Input id="password" type="password" required />
						</div>
						<Link href="/admin" prefetch={false}>
							<Button className="w-full">Login</Button>
						</Link>
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
