import { Toaster } from '@/components/ui/toaster';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Index from './pages/Index';
import { useTheme } from 'next-themes';
import NotFound from './pages/NotFound';
import { data } from '@/../data';
import { ThemeProvider } from './contexts/ThemeProvider';

const queryClient = new QueryClient();

const App = () => <AppContent />;

function AppContent() {
	const { theme } = useTheme();

	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider
				attribute="class"
				defaultTheme="light"
				disableTransitionOnChange
			>
				<LanguageProvider>
					<HelmetProvider>
						<Helmet>
							<title>{data?.info?.en?.name || ''}</title>
							<meta name="description" content={data?.bio?.en || ''} />
							<meta name="author" content={data?.info?.en?.name || ''} />
							<meta
								property="og:title"
								content={`${data?.info?.en?.name || ''} - ${data?.info?.en?.role || ''}`}
							/>
							<meta property="og:description" content={data?.bio?.en || ''} />
							<meta name="keywords" content={data?.keywords || ''} />
						</Helmet>
						<TooltipProvider>
							<Toaster />
							<Sonner theme={theme === 'dark' ? 'dark' : 'light'} />
							<BrowserRouter>
								<Routes>
									<Route path="/" element={<Index />} />
									<Route path="*" element={<NotFound />} />
								</Routes>
							</BrowserRouter>
						</TooltipProvider>
					</HelmetProvider>
				</LanguageProvider>
			</ThemeProvider>
		</QueryClientProvider>
	);
}

export default App;
