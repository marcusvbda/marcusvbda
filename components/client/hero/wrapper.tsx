import { getComponentFields } from '@/server/cms';
import { use } from 'react';
import Content from './content';

export default function Wrapper() {
	const hero = use(getComponentFields('hero'));
	const info = use(getComponentFields('info'));
	const about = use(getComponentFields('about'));
	const experience = use(getComponentFields('experience'));
	const skills = use(getComponentFields('skills'));
	const education = use(getComponentFields('education'));
	return (
		<Content content={{ hero, info, about, experience, skills, education }} />
	);
}
