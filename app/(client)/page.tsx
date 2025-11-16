import { About } from '@/components/About';
import { Contacts } from '@/components/Contacts';
import { Education } from '@/components/Education';
import { Experiences } from '@/components/Experiences';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { getPageContent } from '@/server/cms';
import { cacheLife, cacheTag } from 'next/cache';

export default async function Home() {
	'use cache';
	cacheLife('max');
	cacheTag('home-page');

	// const content = await getPageContent('home');

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
