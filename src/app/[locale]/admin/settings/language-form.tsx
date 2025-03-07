'use client';

import { Label } from '@/components/ui/label';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';

import { useT } from '@/i18n/translate';
import { useLocale } from 'next-intl';

const changePageLanguage = (locale: string) => {
	const url = window.location.href;
	const urlParts = url.split('/');
	urlParts[3] = locale;
	const newUrl = urlParts.join('/');
	window.location.href = newUrl;
};

export default function LanguageForm() {
	const t = useT('SettingsPage');
	const locale = useLocale();

	return (
		<div className="space-y-6 flex-1">
			<div className="grid gap-2">
				<Label htmlFor="name">{t('Language')}</Label>
				<Select
					defaultValue={locale}
					onValueChange={(value) => changePageLanguage(value)}
				>
					<SelectTrigger>
						<SelectValue placeholder={t('Theme')} />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="en">{t('English')}</SelectItem>
						<SelectItem value="pt-br">{t('Brazilian portuguese')}</SelectItem>
					</SelectContent>
				</Select>
			</div>
		</div>
	);
}
