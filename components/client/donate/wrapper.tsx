import { getComponentFields } from '@/server/cms';
import { use } from 'react';
import Content from './content';

export default function Wrapper() {
	const { about } = use(getComponentFields(['about']));
	return <Content content={{ about }} />;
}
