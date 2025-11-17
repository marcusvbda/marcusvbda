import { ReactNode } from 'react';

export default function ResourceIndex({
	title,
	secondaryTitle,
	secondarySubtitle,
	subtitle,
	children,
}: any): ReactNode {
	return (
		<div className="flex flex-col gap-2">
			{title && (
				<h1 className="scroll-m-20 text-4xl font-semibold tracking-tight sm:text-3xl xl:text-4xl">
					{title}
				</h1>
			)}
			{subtitle && (
				<p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
					{subtitle}
				</p>
			)}
			<div className="w-full flex-1 *:data-[slot=alert]:first:mt-0">
				{secondaryTitle && (
					<h2 className="font-heading [&amp;+]*:[code]:text-xl mt-10 scroll-m-28 text-xl font-medium tracking-tight first:mt-0 lg:mt-16 [&amp;+.steps]:!mt-0 [&amp;+.steps&gt;h3]:!mt-4 [&amp;+h3]:!mt-6 [&amp;+p]:!mt-4">
						{secondaryTitle}
					</h2>
				)}
				{secondarySubtitle && (
					<p className="leading-relaxed [&amp;:not(:first-child)]:mt-6">
						{secondarySubtitle}
					</p>
				)}
			</div>
			{children}
		</div>
	);
}
