import { Inter } from 'next/font/google';
import { Metadata } from 'next';
import './globals.scss';

const inter = Inter({ subsets: ['latin'] });
export const metadata: Metadata = {};

export default async function RootLayout({ children }: any) {
	return (
		<html>
			<body suppressHydrationWarning className={inter.className}>
				{children}
			</body>
		</html>
	);
}
