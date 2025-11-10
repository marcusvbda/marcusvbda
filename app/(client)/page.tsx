import { About } from '@/components/About';
import { Education } from '@/components/Education';
import { Experiences } from '@/components/Experiences';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { Contact } from 'lucide-react';

export default function Home() {
	return (
		<>
			<Hero />
			<About />
			<Experiences />
			<Projects />
			<Education />
			<Skills />
			<Contact />
		</>
	);
}
