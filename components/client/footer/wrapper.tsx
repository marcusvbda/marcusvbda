import { getComponentContent } from '@/server/cms';
import { use } from 'react';
import Content from './content';

export default function Wrapper() {
	const footer = use(getComponentContent('footer'));
	const info = use(getComponentContent('info'));

	return <Content content={{ footer, info }} />;
}
