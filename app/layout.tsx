import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { data } from '@/data';
import GlobalContextProvider from '@/contexts/global-context';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
	display: 'swap',
	preload: true,
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
	display: 'swap',
	preload: true,
});

export async function generateMetadata(): Promise<Metadata> {
	const title = 'Marcus Vinicius Bassalobre de Assis';
	const description = 'Software Engineer';

	return {
		title,
		description,
		keywords: data?.keywords?.split(',') || [],
		authors: [{ name: title }],
		openGraph: {
			title: `${title} - ${description}`,
			description,
			type: 'website',
		},
		twitter: {
			card: 'summary_large_image',
			title: `${title} - ${description}`,
			description,
		},
	};
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				suppressHydrationWarning
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<GlobalContextProvider>{children}</GlobalContextProvider>
			</body>
		</html>
	);
}
