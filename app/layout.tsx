import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import GlobalContextProvider from '@/contexts/global-context';
import Navbar from '@/components/client/navbar';
import Footer from '@/components/client/footer';

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

export const viewport = {
	width: 'device-width',
	initialScale: 1.0,
	minimumScale: 1.0,
	maximumScale: 1.0,
	userScalable: 'no',
};

export async function generateMetadata(): Promise<Metadata> {
	const title = 'Marcus Vinicius Bassalobre de Assis';
	const description = 'Software Engineer';

	return {
		title,
		description,
		keywords:
			'Software engineer, Fullstack, senior developer, React, Next.js, Laravel, TypeScript, Dublin, software architect',
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
				<GlobalContextProvider>
					<div className="min-h-screen">
						<Navbar />
						<main>{children}</main>
						<Footer />
					</div>
				</GlobalContextProvider>
			</body>
		</html>
	);
}
