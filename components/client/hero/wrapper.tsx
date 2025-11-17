import { getComponentContent } from '@/server/cms';
import { use } from 'react';
import Content from './content';

export default function Wrapper() {
	const hero = use(getComponentContent('hero'));
	const info = use(getComponentContent('info'));
	const about = use(getComponentContent('about'));
	const experience = use(getComponentContent('experience'));
	const skills = use(getComponentContent('skills'));
	const education = use(getComponentContent('education'));

	return (
		<Content content={{ hero, info, about, experience, skills, education }} />
	);
}
