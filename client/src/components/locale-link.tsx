'use client';

import { useLocale } from 'next-intl';
import { getLocale } from 'next-intl/server';
import Link from 'next/link';

export default function LocaleLink({ children, ...props }: any) {
	const locale = useLocale();

	const href = `/${locale}${props.href}`;
	return (
		<Link {...props} href={href}>
			{children}
		</Link>
	);
}
