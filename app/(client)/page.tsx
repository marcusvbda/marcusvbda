import About from '@/components/client/about';
import Contacts from '@/components/client/contacts';
import Education from '@/components/client/education';
import Experiences from '@/components/client/experiences';
import Hero from '@/components/client/hero';
import Projects from '@/components/client/projects';
import Skills from '@/components/client/skills';

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
