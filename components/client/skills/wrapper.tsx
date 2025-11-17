import { getComponentContent } from '@/server/cms';
import { use } from 'react';
import Content from './content';

export default function Wrapper() {
	const skills = use(getComponentContent('skills'));

	return <Content content={{ skills }} />;
}
