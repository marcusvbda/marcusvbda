'use client';

import { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export default function Portal({
	children,
	to,
}: {
	children: ReactNode;
	to: string;
}): ReactNode {
	const [visible, setVisible] = useState(false);
	useEffect(() => {
		setVisible(true);
	}, []);

	if (!visible) return null;

	const targetElement = document.querySelector(to);

	if (!targetElement) {
		return null;
	}

	return createPortal(children, targetElement);
}
