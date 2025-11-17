import { getComponentContent } from '@/server/cms';
import { use } from 'react';
import Content from './content';

export default function Wrapper() {
	const education = use(getComponentContent('education'));

	return <Content content={{ education }} />;
}
