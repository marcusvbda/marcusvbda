import { getComponentFields } from '@/server/cms';
import { use } from 'react';
import Content from './content';

export default function Wrapper() {
	const { about, hero } = use(getComponentFields(['about', 'hero']));
	return <Content content={{ about, hero }} />;
}
