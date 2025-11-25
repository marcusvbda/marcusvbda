import { getComponentFields } from '@/server/cms';
import { use } from 'react';
import Content from './content';

export default function Wrapper() {
	const { education } = use(getComponentFields(['education']));
	return <Content content={{ education }} />;
}
