'use client';

import { ThemeProvider } from '@/contexts/ThemeContext';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { useTheme } from 'next-themes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { Toaster } from 'sonner';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { ReactNode } from 'react';

export default function GlobalContextProvider({
	children,
}: {
	children: ReactNode;
}) {
	const queryClient = new QueryClient();
	const { theme } = useTheme();

	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider
				attribute="class"
				defaultTheme="light"
				disableTransitionOnChange
			>
				<LanguageProvider>
					<TooltipProvider>
						<Toaster />
						<Sonner theme={theme === 'dark' ? 'dark' : 'light'} />
						{children}
					</TooltipProvider>
				</LanguageProvider>
			</ThemeProvider>
		</QueryClientProvider>
	);
}
