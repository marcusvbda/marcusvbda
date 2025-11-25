import { getComponentFields } from '@/server/cms';
import { use } from 'react';
import Content from './content';

export default function Wrapper() {
	const { projects } = use(getComponentFields(['projects']));

	return <Content content={{ projects }} />;
}
