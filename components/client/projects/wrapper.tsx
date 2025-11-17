import { getComponentContent } from '@/server/cms';
import { use } from 'react';
import Content from './content';

export default function Wrapper() {
	const projects = use(getComponentContent('projects'));

	return <Content content={{ projects }} />;
}
