import { ReactNode } from 'react';
import Header from '@/components/lp-header';
import Hero from '@/components/lp-hero';
import Features from '@/components/lp-features';
import Cases from '@/components/lp-cases';
import Pricing from '@/components/lp-pricing';
import CTA from '@/components/lp-cta';
import Contacts from '@/components/lp-contacts';
import Footer from '@/components/lp-footer';
import Testimonials from '@/components/lp-testimonials';

export default function Home(): ReactNode {
	return (
		<>
			<Header />
			<Hero />
			<CTA />
			<Features />
			<Cases />
			<Testimonials />
			<Pricing />
			<Contacts />
			<Footer />
		</>
	);
}
