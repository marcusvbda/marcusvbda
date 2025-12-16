import Footer from '@/components/client/footer';
import Navbar from '@/components/client/navbar';
import Chatbot from '@/components/client/chatbot';

export default function ClientLayout({ children }: any) {
	return (
		<div className="min-h-screen">
			<Navbar />
			<main>{children}</main>
			<Footer />
			<Chatbot />
		</div>
	);
}
