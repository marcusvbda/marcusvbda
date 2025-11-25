import { getComponentFields } from '@/server/cms';
import { use } from 'react';
import Content from './content';

export default function Wrapper() {
	const { experience } = use(getComponentFields(['experience']));
	return <Content content={{ experience }} />;
}
