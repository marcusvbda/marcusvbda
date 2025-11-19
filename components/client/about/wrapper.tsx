import { getComponentContent, getComponentFields } from '@/server/cms';
import { use } from 'react';
import Content from './content';

export default function Wrapper() {
	const about = use(getComponentContent('about'));
	const hero = use(getComponentFields('hero'));

	return <Content content={{ about, hero }} />;
}
