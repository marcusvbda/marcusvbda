import Hero from '@/components/client/hero';
import About from '@/components/client/about';
import Experiences from '@/components/client/experiences';
import Projects from '@/components/client/projects';
import Education from '@/components/client/education';
import Skills from '@/components/client/skills';
import Contacts from '@/components/client/contacts';

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
