'use client';

import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

import { useT } from '@/i18n/translate';
import { useTheme } from 'next-themes';

export default function AppearenceForm() {
	const t = useT('SettingsPage');

	const { setTheme, theme } = useTheme();

	return (
		<div className="space-y-6 flex-1">
			<div className="grid gap-2">
				<Label htmlFor="name">{t('Theme')}</Label>
				<RadioGroup
					defaultValue={theme}
					onValueChange={(value) => setTheme(value)}
				>
					<div className="flex items-center space-x-2">
						<RadioGroupItem value="light" id="r1" />
						<Label htmlFor="r1">{t('Light')}</Label>
					</div>
					<div className="flex items-center space-x-2">
						<RadioGroupItem value="dark" id="r2" />
						<Label htmlFor="r2">{t('Dark')}</Label>
					</div>
					<div className="flex items-center space-x-2">
						<RadioGroupItem value="system" id="r3" />
						<Label htmlFor="r3">{t('System')}</Label>
					</div>
				</RadioGroup>
			</div>
		</div>
	);
}
