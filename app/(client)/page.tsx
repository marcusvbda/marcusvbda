import dynamic from 'next/dynamic';
import Hero from '@/components/client/hero';

// Lazy load components below the fold for better performance
const About = dynamic(() => import('@/components/client/about'), {
	loading: () => (
		<div className="section-padding bg-muted/30 animate-pulse min-h-[400px]" />
	),
});

const Experiences = dynamic(() => import('@/components/client/experiences'), {
	loading: () => (
		<div className="section-padding animate-pulse min-h-[400px]" />
	),
});

const Projects = dynamic(() => import('@/components/client/projects'), {
	loading: () => (
		<div className="section-padding bg-muted/30 animate-pulse min-h-[400px]" />
	),
});

const Education = dynamic(() => import('@/components/client/education'), {
	loading: () => (
		<div className="section-padding animate-pulse min-h-[400px]" />
	),
});

const Skills = dynamic(() => import('@/components/client/skills'), {
	loading: () => (
		<div className="section-padding bg-muted/30 animate-pulse min-h-[400px]" />
	),
});

const Contacts = dynamic(() => import('@/components/client/contacts'), {
	loading: () => (
		<div className="section-padding animate-pulse min-h-[400px]" />
	),
});

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
