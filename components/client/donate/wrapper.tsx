import { getComponentFields } from '@/server/cms';
import { use } from 'react';
import Content from './content';

export default function Wrapper() {
	const { donate } = use(getComponentFields(['donate']));
	return <Content content={{ donate }} />;
}
