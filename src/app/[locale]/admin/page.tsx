import AdminTemplate from '@/components/admin-template';
import Protected from '@/components/protected';
import Dashboard from './dashboard';

export default function AdminPage() {
	return (
		<Protected>
			<AdminTemplate>
				<Dashboard />
			</AdminTemplate>
		</Protected>
	);
}
