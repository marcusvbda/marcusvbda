import About from '@/components/client/about';
import Hero from '@/components/client/hero';
import { Contacts } from '@/components/Contacts';
import { Education } from '@/components/Education';
import { Experiences } from '@/components/Experiences';
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
