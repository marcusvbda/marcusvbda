import DownloadCV from '@/components/client/hero/donwload-cv';
import { getComponentFields } from '@/server/cms';
import { use } from 'react';

export default function Wrapper() {
	const { hero, info, about, experience, skills, education } = use(
		getComponentFields([
			'hero',
			'info',
			'about',
			'experience',
			'skills',
			'education',
		])
	);
	return (
		<DownloadCV
			content={{ hero, info, about, experience, skills, education }}
		/>
	);
}
