import Navbar from '@/components/client/navbar';
import { Footer } from '@/components/Footer';

export default function ClientLayout({ children }: any) {
	return (
		<div className="min-h-screen">
			<Navbar />
			<main>{children}</main>
			<Footer />
		</div>
	);
}
