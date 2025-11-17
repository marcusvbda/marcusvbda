'use client';

import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
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
			className="group hover:text-white"
			size="icon"
			onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
		>
			{theme === 'dark' && <Sun className="opacity-60" />}
			{theme === 'light' && <Moon className="opacity-60" />}
		</Button>
	);
}
