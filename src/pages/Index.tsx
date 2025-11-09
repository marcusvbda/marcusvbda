import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { Education } from '@/components/Education';

const Index = () => {
	return (
		<div className="min-h-screen">
			<Navbar />
			<main>
				<Hero />
				<About />
				<Experience />
				<Projects />
				<Education />
				<Skills />
				<Contact />
			</main>
			<Footer />
		</div>
	);
};

export default Index;
