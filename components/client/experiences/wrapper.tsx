import { getComponentContent } from '@/server/cms';
import { use } from 'react';
import Content from './content';

export default function Wrapper() {
	const experience = use(getComponentContent('experience'));

	return <Content content={{ experience }} />;
}
