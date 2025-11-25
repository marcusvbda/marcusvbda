import { getComponentFields } from '@/server/cms';
import { use } from 'react';
import Content from './content';

export default function Wrapper() {
	const { footer, info } = use(getComponentFields(['footer', 'info']));
	return <Content content={{ footer, info }} />;
}
