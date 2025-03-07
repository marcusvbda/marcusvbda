import AdminTemplate from '@/components/admin-template';
import Protected from '@/components/protected';
import FragmentSettings from './fragments';

export default function SettingsPage() {
	return (
		<Protected>
			<AdminTemplate
				breadcrumbItems={[
					{ title: 'Dashboard', url: '/admin' },
					{ title: 'Settings' },
				]}
			>
				<FragmentSettings />
			</AdminTemplate>
		</Protected>
	);
}
