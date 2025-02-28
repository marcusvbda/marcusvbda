'use client';

import { Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ClientComponent({
	children,
	loaderClassName = '',
}: any) {
	const [hyd, setHyd] = useState(false);
	useEffect(() => {
		setHyd(true);
	}, []);

	if (!hyd) {
		return (
			<div
				className={`w-full h-full flex items-center justify-center ${loaderClassName}`}
			>
				<Loader2 className="ml-1 animate-spin" />
			</div>
		);
	}
	return children;
}
