import { Button } from '@/components/ui/button';
import { ReactNode } from 'react';

export default function Home(): ReactNode {
	return (
		<div>
			<h1 className="text-red-500">Hello teste!</h1>
			<Button>Click me</Button>
		</div>
	);
}
