import { getComponentContent } from '@/server/cms';
import { use } from 'react';
import Content from './content';

export default function Wrapper() {
	const info = use(getComponentContent('info'));
	const contact = use(getComponentContent('contact'));

	return <Content content={{ info, contact }} />;
}
