import { Inter } from 'next/font/google';
import { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import './globals.scss';
import { ThemeProvider } from '@/components/theme-provider';
import { getLocale, getMessages } from 'next-intl/server';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });
export const metadata: Metadata = {};

export default async function RootLayout({ children }: any) {
	const originalConsoleError = console.error;

	//ignore intl warnings
	console.error = (...args) => {
		if (
			/MISSING_MESSAGE/.test(args[0]) ||
			/INVALID_MESSAGE/.test(args[0]) ||
			/INVALID_TAG/.test(args[0])
		) {
			return;
		}
		originalConsoleError(...args);
	};

	const locale = await getLocale();
	const messages = await getMessages();

	return (
		<html>
			<body suppressHydrationWarning className={inter.className} lang={locale}>
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
				<Toaster />
			</body>
		</html>
	);
}
