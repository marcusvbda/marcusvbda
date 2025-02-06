import { Inter } from 'next/font/google';
import { Metadata } from 'next';
import './globals.scss';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });
export const metadata: Metadata = {};

export default async function RootLayout({ children }: any) {
	return (
		<html>
			<body suppressHydrationWarning className={inter.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
