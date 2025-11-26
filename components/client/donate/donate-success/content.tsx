'use client';

import { ReactNode } from 'react';
import { useLanguage } from '@/contexts/language-context';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Heart } from 'lucide-react';
import Link from 'next/link';

interface ContentProps {
	customerEmail: string | null;
	amount: string;
	currency: string;
	paymentStatus: string;
	content: any;
}

export default function Content({
	customerEmail,
	amount,
	currency,
	paymentStatus,
	content,
}: ContentProps): ReactNode {
	const { language } = useLanguage();
	const donate = content?.donate?.[language];

	return (
		<div className="min-h-screen flex items-center justify-center bg-muted/30 section-padding">
			<div className="max-width-content">
				<div className="max-w-2xl mx-auto text-center animate-fade-in">
					{/* Ícone de sucesso */}
					<div className="mb-8 flex justify-center">
						<div className="relative">
							<div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse" />
							<div className="relative bg-primary/10 rounded-full p-6">
								<CheckCircle2 className="w-16 h-16 text-primary" />
							</div>
						</div>
					</div>

					{/* Título */}
					<h1 className="text-4xl md:text-5xl font-bold mb-4">
						{donate?.title?.value}
						<Heart className="inline-block w-8 h-8 text-primary ml-2 fill-primary" />
					</h1>

					{/* Mensagem */}
					<p className="text-lg text-muted-foreground mb-12">
						{donate?.subtitle?.value}
					</p>

					{/* Detalhes da doação */}
					<div className="bg-card border rounded-lg p-8 mb-8 shadow-sm">
						<h2 className="text-2xl font-semibold mb-6">
							{donate?.detailsTitle?.value}
						</h2>

						<div className="space-y-4 text-left">
							<div className="flex justify-between items-center py-3 border-b">
								<span className="text-muted-foreground">
									{donate?.detailsPaymentStatus?.value}
								</span>
								<span
									className={`font-semibold ${
										paymentStatus === 'paid'
											? 'text-green-600'
											: 'text-yellow-600'
									}`}
								>
									{paymentStatus === 'paid'
										? donate?.detailsPaymentStatusPaid?.value
										: donate?.detailsPaymentStatusPending?.value}
								</span>
							</div>

							<div className="flex justify-between items-center py-3 border-b">
								<span className="text-muted-foreground">
									{donate?.detailsValue?.value}
								</span>
								<span className="font-bold text-xl">
									{new Intl.NumberFormat('pt-BR', {
										style: 'currency',
										currency: currency,
									}).format(Number(amount))}
								</span>
							</div>

							{customerEmail && (
								<div className="flex justify-between items-center py-3 border-b">
									<span className="text-muted-foreground">
										{donate?.detailsEmail?.value}
									</span>
									<span className="font-medium">{customerEmail}</span>
								</div>
							)}
						</div>
					</div>

					{/* Botão para voltar */}
					<Button size="lg" className="btn btn-primary" asChild>
						<Link href="/">{donate?.buttonText?.value}</Link>
					</Button>
				</div>
			</div>
		</div>
	);
}
