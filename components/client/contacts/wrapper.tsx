import { getComponentFields } from '@/server/cms';
import { use } from 'react';
import Content from './content';

export default function Wrapper() {
	const { info, contact } = use(getComponentFields(['info', 'contact']));

	return <Content content={{ info, contact }} />;
}
