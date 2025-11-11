'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { loginByUserName } from '@/server/user';
import { Label } from '@radix-ui/react-label';
import { GalleryVerticalEnd } from 'lucide-react';
import { redirect, useSearchParams } from 'next/navigation';
import { ReactNode, useActionState, useEffect } from 'react';

export default function LoginPage(): ReactNode {
	const searchParams = useSearchParams();

	const [state, formAction, pending] = useActionState(loginByUserName as any, {
		error: {} as any,
		username: '',
		password: '',
		success: false,
	});

	useEffect(() => {
		if (state.success) {
			redirect(searchParams.get('redirect') || '/admin');
		}
	}, [state.success]);

	return (
		<div className="w-full flex items-center justify-center py-20 px-6">
			<div className="flex flex-col gap-6 w-full md:w-8/12 lg:w-3/12">
				<form action={formAction}>
					<div className="flex flex-col gap-6">
						<div className="flex flex-col items-center gap-2">
							<a
								href="#"
								className="flex flex-col items-center gap-2 font-medium"
							>
								<div className="flex h-8 w-8 items-center justify-center rounded-md">
									<GalleryVerticalEnd className="size-6" />
								</div>
								<span className="sr-only">Acme Inc.</span>
							</a>
							<h1 className="text-xl font-bold">Portfolio Admin</h1>
						</div>
						<div className="flex flex-col gap-6">
							<div className="grid gap-2">
								<Label>Username</Label>
								<Input
									aria-invalid={Boolean(state?.error?.username?.[0])}
									name="username"
									defaultValue={state.username}
									placeholder="Mr. white"
								/>
								{state?.error?.username && (
									<div className="flex items-center gap-2 text-destructive text-sm relative -top-3">
										{state?.error?.username?.[0]}
									</div>
								)}
							</div>
							<div className="grid gap-2">
								<Label>Password</Label>
								<Input
									aria-invalid={Boolean(state?.error?.password?.[0])}
									name="password"
									defaultValue={state.password}
									type="password"
									placeholder="*****"
								/>
								{state?.error?.password && (
									<div className="flex items-center gap-2 text-destructive text-sm relative -top-3">
										{state?.error?.password?.[0]}
									</div>
								)}
							</div>
							<Button type="submit" className="w-full">
								Login
							</Button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}
