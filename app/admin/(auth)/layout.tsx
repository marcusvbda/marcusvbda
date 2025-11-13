import { ReactNode } from 'react';

export default function authLayout({
	children,
}: {
	children: ReactNode;
}): ReactNode {
	return <div className="bg-muted flex min-h-svh px-4">{children}</div>;
}
