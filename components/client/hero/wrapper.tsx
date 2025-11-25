import { getComponentFields } from '@/server/cms';
import { use } from 'react';
import Content from './content';

export default function Wrapper() {
	const { hero, info, about, experience, skills, education } = use(
		getComponentFields([
			'hero',
			'info',
			'about',
			'experience',
			'skills',
			'education',
		])
	);
	return (
		<Content content={{ hero, info, about, experience, skills, education }} />
	);
}
