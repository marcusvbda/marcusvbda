import ClientComponent from '@/components/client-component';
import { DataTable } from '@/components/data-table';
import { Badge } from '@/components/ui/badge';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import {
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import { Progress } from '@radix-ui/react-progress';
import { Table } from 'lucide-react';

export default function Dashboard() {
	return (
		<ClientComponent>
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				<Card>
					<CardHeader className="pb-2">
						<CardDescription>Total Users</CardDescription>
						<CardTitle className="text-4xl">2,456</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="text-xs text-muted-foreground">
							+15% from last month
						</div>
					</CardContent>
					<CardFooter>
						<Progress value={15} aria-label="15% increase" />
					</CardFooter>
				</Card>
				<Card>
					<CardHeader className="pb-2">
						<CardDescription>Total Products</CardDescription>
						<CardTitle className="text-4xl">1,234</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="text-xs text-muted-foreground">
							+8% from last month
						</div>
					</CardContent>
					<CardFooter>
						<Progress value={8} aria-label="8% increase" />
					</CardFooter>
				</Card>
				<Card>
					<CardHeader className="pb-2">
						<CardDescription>Total Orders</CardDescription>
						<CardTitle className="text-4xl">789</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="text-xs text-muted-foreground">
							+12% from last month
						</div>
					</CardContent>
					<CardFooter>
						<Progress value={12} aria-label="12% increase" />
					</CardFooter>
				</Card>
				<Card>
					<CardHeader className="pb-2">
						<CardDescription>Total Revenue</CardDescription>
						<CardTitle className="text-4xl">$45,678</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="text-xs text-muted-foreground">
							+18% from last month
						</div>
					</CardContent>
					<CardFooter>
						<Progress value={18} aria-label="18% increase" />
					</CardFooter>
				</Card>
			</div>
			<div className="mt-4">
				<Card>
					<CardHeader className="px-7">
						<CardTitle>Recent Orders</CardTitle>
						<CardDescription>
							A summary of the latest orders in your store.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead>Order</TableHead>
									<TableHead>Customer</TableHead>
									<TableHead className="hidden md:table-cell">Status</TableHead>
									<TableHead className="hidden md:table-cell">Date</TableHead>
									<TableHead className="text-right">Amount</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								<TableRow>
									<TableCell className="font-medium">#3210</TableCell>
									<TableCell>Olivia Martin</TableCell>
									<TableCell className="hidden md:table-cell">
										<Badge variant="secondary">Shipped</Badge>
									</TableCell>
									<TableCell className="hidden md:table-cell">
										February 20, 2023
									</TableCell>
									<TableCell className="text-right">$42.25</TableCell>
								</TableRow>
								<TableRow>
									<TableCell className="font-medium">#3209</TableCell>
									<TableCell>Ava Johnson</TableCell>
									<TableCell className="hidden md:table-cell">
										<Badge variant="secondary">Paid</Badge>
									</TableCell>
									<TableCell className="hidden md:table-cell">
										January 5, 2023
									</TableCell>
									<TableCell className="text-right">$74.99</TableCell>
								</TableRow>
								<TableRow>
									<TableCell className="font-medium">#3204</TableCell>
									<TableCell>Michael Johnson</TableCell>
									<TableCell className="hidden md:table-cell">
										<Badge variant="outline">Unfulfilled</Badge>
									</TableCell>
									<TableCell className="hidden md:table-cell">
										August 3, 2022
									</TableCell>
									<TableCell className="text-right">$64.75</TableCell>
								</TableRow>
								<TableRow>
									<TableCell className="font-medium">#3203</TableCell>
									<TableCell>Lisa Anderson</TableCell>
									<TableCell className="hidden md:table-cell">
										<Badge variant="secondary">Shipped</Badge>
									</TableCell>
									<TableCell className="hidden md:table-cell">
										July 15, 2022
									</TableCell>
									<TableCell className="text-right">$34.50</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</CardContent>
				</Card>
			</div>
			<div className="mt-4">
				<DataTable />
			</div>
		</ClientComponent>
	);
}
