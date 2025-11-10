'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from './ui/button';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
	const [visible, setVisible] = useState(false);
	const { setTheme, theme } = useTheme();

	useEffect(() => {
		setVisible(true);
	}, []);

	if (!visible) return;

	return (
		<Button
			variant="outline"
			size="icon"
			onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
		>
			{theme === 'dark' && <Sun className="opacity-60" />}
			{theme === 'light' && <Moon className="opacity-60" />}
		</Button>
	);
}
