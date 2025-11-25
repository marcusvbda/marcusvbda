import { getComponentFields } from '@/server/cms';
import { use } from 'react';
import Content from './content';

export default function Wrapper() {
	const { navbar, info } = use(getComponentFields(['navbar', 'info']));
	return <Content content={{ nav: navbar, info }} />;
}
