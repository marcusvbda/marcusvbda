import { getComponentContent } from '@/server/cms';
import { use } from 'react';
import Content from './content';

export default function ServerComponent() {
	const experience = use(getComponentContent('experience'));

	return <Content content={{ experience }} />;
}
