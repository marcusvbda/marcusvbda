import { About } from '@/components/About';
import { Contacts } from '@/components/Contacts';
import { Education } from '@/components/Education';
import { Experiences } from '@/components/Experiences';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';

export default function Home() {
	return (
		<>
			<Hero />
			<About />
			<Experiences />
			<Projects />
			<Education />
			<Skills />
			<Contacts />
		</>
	);
}
