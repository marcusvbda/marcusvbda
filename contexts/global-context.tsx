'use client';

import { ThemeProvider } from '@/contexts/theme-context';
import { LanguageProvider } from '@/contexts/language-context';
import { useTheme } from 'next-themes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { Toaster } from 'sonner';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { ReactNode } from 'react';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			refetchOnReconnect: false,
			retry: false,
			staleTime: 1000 * 60 * 5,
			gcTime: 1000 * 60 * 30,
		},
	},
});

export default function GlobalContextProvider({
	children,
}: {
	children: ReactNode;
}) {
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
