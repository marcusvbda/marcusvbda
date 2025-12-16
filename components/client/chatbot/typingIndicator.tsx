import { cn } from '@/lib/utils';

export default function TypingIndicator({
	className,
	iconClass,
}: {
	className?: string;
	iconClass?: string;
}) {
	return (
		<div
			className={cn(
				'flex items-center space-x-2 animate-[bounce_800ms_ease-in-out_infinite]',
				className
			)}
		>
			<div
				className={cn(
					'rounded-full animate-[bounce_1s_ease-in-out_0.1s_infinite]',
					iconClass
				)}
			/>
			<div
				className={cn(
					'rounded-full animate-[bounce_1s_ease-in-out_0.2s_infinite]',
					iconClass
				)}
			/>
			<div
				className={cn(
					'rounded-full animate-[bounce_1s_ease-in-out_0.3s_infinite]',
					iconClass
				)}
			/>
		</div>
	);
}
