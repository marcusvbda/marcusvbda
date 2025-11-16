import { Skeleton } from '@/components/ui/skeleton';

function SectionSkeleton({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<section className={`section-padding animate-pulse ${className}`}>
			<div className="max-width-content">{children}</div>
		</section>
	);
}

function SectionHeaderSkeleton() {
	return (
		<div className="text-center mb-16 space-y-4">
			<Skeleton className="h-10 w-1/3 mx-auto" />
			<Skeleton className="h-6 w-1/2 mx-auto" />
		</div>
	);
}

export default function Loading() {
	return (
		<>
			{/* Hero Skeleton */}
			<SectionSkeleton>
				<div className="grid md:grid-cols-2 gap-12 items-center">
					<div className="space-y-6">
						<div className="space-y-3">
							<Skeleton className="h-4 w-1/4" />
							<Skeleton className="h-12 w-3/4" />
							<Skeleton className="h-8 w-1/2" />
							<Skeleton className="h-4 w-1/3" />
						</div>
						<div className="space-y-2">
							<Skeleton className="h-4 w-full" />
							<Skeleton className="h-4 w-full" />
							<Skeleton className="h-4 w-5/6" />
						</div>
						<div className="flex justify-center md:justify-start flex-wrap gap-4 pt-4">
							<Skeleton className="h-12 w-32 rounded-md" />
							<Skeleton className="h-12 w-32 rounded-md" />
							<Skeleton className="h-12 w-32 rounded-md" />
							<Skeleton className="h-12 w-32 rounded-md" />
						</div>
					</div>
					<div className="relative w-full max-w-md mx-auto">
						<Skeleton className="w-full h-96 rounded-3xl" />
					</div>
				</div>
			</SectionSkeleton>

			{/* About Skeleton */}
			<SectionSkeleton className="bg-muted/30">
				<SectionHeaderSkeleton />
				<div className="grid md:grid-cols-5 gap-12 items-center">
					<div className="md:col-span-2">
						<Skeleton className="w-full aspect-square rounded-lg" />
					</div>
					<div className="md:col-span-3 space-y-4">
						<Skeleton className="h-5 w-full" />
						<Skeleton className="h-5 w-full" />
						<Skeleton className="h-5 w-11/12" />
						<Skeleton className="h-5 w-full" />
						<Skeleton className="h-5 w-3/4" />
					</div>
				</div>
			</SectionSkeleton>

			{/* Experiences Skeleton */}
			<SectionSkeleton>
				<SectionHeaderSkeleton />
				<div className="space-y-8">
					{[...Array(2)].map((_, i) => (
						<Skeleton key={i} className="h-48 w-full rounded-lg" />
					))}
				</div>
			</SectionSkeleton>

			{/* Projects Skeleton */}
			<SectionSkeleton className="bg-muted/30">
				<SectionHeaderSkeleton />
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{[...Array(3)].map((_, i) => (
						<Skeleton key={i} className="h-80 w-full rounded-lg" />
					))}
				</div>
			</SectionSkeleton>

			{/* Skills Skeleton */}
			<SectionSkeleton>
				<SectionHeaderSkeleton />
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
					{[...Array(4)].map((_, i) => (
						<Skeleton key={i} className="h-40 w-full rounded-lg" />
					))}
				</div>
			</SectionSkeleton>
		</>
	);
}
