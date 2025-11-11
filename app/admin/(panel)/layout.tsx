import ProtectedPage from '@/components/admin/ProtectedPage';
import { ReactNode } from 'react';

export default function AdminLayout({ children }: { children: ReactNode }) {
	return <ProtectedPage>{children}</ProtectedPage>;
}
