import { getComponentContent } from '@/server/cms';
import { use } from 'react';
import Content from './content';

export default function Wrapper() {
	const nav = use(getComponentContent('nav'));
	const info = use(getComponentContent('info'));

	return <Content content={{ nav, info }} />;
}
