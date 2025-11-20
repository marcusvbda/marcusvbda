import { getComponentFields } from '@/server/cms';
import { use } from 'react';
import Content from './content';

export default function Wrapper() {
	const nav = use(getComponentFields('navbar'));
	const info = use(getComponentFields('info'));

	return <Content content={{ nav, info }} />;
}
