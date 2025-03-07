'use client';

import ClientComponent from '@/components/client-component';
import { Button } from '@/components/ui/button';

import { useState } from 'react';
import ProfileForm from './profile-form';
import { useT } from '@/i18n/translate';
import PasswordForm from './password-form';
import AppearenceForm from './appearence-form';
import LanguageForm from './language-form';

const sidebarNavItems: any[] = [
	'Profile',
	'Language',
	'Password',
	'Appearance',
];

export default function FragmentSettings() {
	const [step, setStep] = useState('Profile');
	const t = useT('SettingsPage');

	return (
		<div className="flex flex-col md:flex-row gap-8">
			<aside className="w-full max-w-xl lg:w-48">
				<nav className="flex md:flex-col space-y-1 space-x-0 gap-1 flex-wrap">
					{sidebarNavItems.map((item: string, key: number) => (
						<Button
							key={key}
							className="w-full"
							variant={step === item ? 'default' : 'outline'}
							onClick={() => setStep(item)}
						>
							{t(item)}
						</Button>
					))}
				</nav>
			</aside>
			<ClientComponent>
				{step === 'Profile' && <ProfileForm />}
				{step === 'Language' && <LanguageForm />}
				{step === 'Password' && <PasswordForm />}
				{step === 'Appearance' && <AppearenceForm />}
			</ClientComponent>
		</div>
	);
}
