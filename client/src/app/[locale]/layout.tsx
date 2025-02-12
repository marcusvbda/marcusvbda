import { Inter } from 'next/font/google';
import { Metadata } from 'next';
import './globals.scss';
import { ThemeProvider } from '@/components/theme-provider';
import { getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] });
export const metadata: Metadata = {};

export default async function RootLayout({
	children,
	params: { locale },
}: any) {
	if (!routing.locales.includes(locale as any)) {
		return notFound();
	}

	const messages = await getMessages();

	return (
		<html>
			<body suppressHydrationWarning className={inter.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<NextIntlClientProvider messages={messages}>
						{children}
					</NextIntlClientProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
