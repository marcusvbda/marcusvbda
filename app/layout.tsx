import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { data } from '@/data';
import GlobalContextProvider from '@/contexts/global-context';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export async function generateMetadata(): Promise<Metadata> {
	const title = data?.info?.en?.name || '';
	const description = data?.bio?.en || '';
	const author = data?.info?.en?.name || '';
	const role = data?.info?.en?.role || '';

	return {
		title,
		description,
		keywords: data?.keywords?.split(',') || [],
		authors: [{ name: author }],
		openGraph: {
			title: `${title} - ${role}`,
			description,
			type: 'website',
		},
		twitter: {
			card: 'summary_large_image',
			title: `${title} - ${role}`,
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
