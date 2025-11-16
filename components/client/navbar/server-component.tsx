import { getComponentContent } from '@/server/cms';
import { use } from 'react';
import Content from './content';

export default function ServerComponent() {
	const nav = use(getComponentContent('nav'));
	const info = use(getComponentContent('info'));

	return <Content content={{ nav, info }} />;
}
