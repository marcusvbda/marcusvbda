import Hero from '@/components/client/hero';
import SkillsSection from '@/components/client/SkillsSection';
import Experiences from '@/components/client/ExperiencesSection';
import Projects from '@/components/client/ProjectsSection';
import About from '@/components/client/AboutSection';
import EducationSection from '@/components/client/EducationSection';
import ContactsSection from '@/components/client/ContactsSection';

export default function Home() {
	return (
		<>
			<Hero />
			<About />
			<Experiences />
			<Projects />
			<EducationSection />
			<SkillsSection />
			<ContactsSection />
		</>
	);
}
