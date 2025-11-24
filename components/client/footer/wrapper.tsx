import { getComponentFields } from '@/server/cms';
import { use } from 'react';
import Content from './content';

export default function Wrapper() {
	const footer = use(getComponentFields('footer'));
	const info = use(getComponentFields('info'));

	return <Content content={{ footer, info }} />;
}
