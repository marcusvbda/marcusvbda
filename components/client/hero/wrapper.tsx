import { getComponentFields } from '@/server/cms';
import { use } from 'react';
import Content from './content';

export default function Wrapper() {
	const { hero, info } = use(getComponentFields(['hero', 'info']));
	return <Content content={{ hero, info }} />;
}
