import { getComponentContent } from '@/server/cms';
import { use } from 'react';
import Content from './content';

export default function ServerComponent() {
	const skills = use(getComponentContent('skills'));

	return <Content content={{ skills }} />;
}
