import { getComponentContent } from '@/server/cms';
import { use } from 'react';
import Content from './content';

export default function ServerComponent() {
	const about = use(getComponentContent('about'));
	const hero = use(getComponentContent('hero'));

	return <Content content={{ about, hero }} />;
}
