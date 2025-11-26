import { retrieveCheckoutSession } from '@/server/stripe';
import { CheckCircle2, Heart } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { notFound } from 'next/navigation';

interface PageProps {
	params: {
		session_id: string;
	};
}

export default async function PaymentCallbackPage({ params }: PageProps) {
	const { session_id } = await params;
	if (!session_id) return notFound();

	const result = await retrieveCheckoutSession(session_id);

	if (!result.success || !result.session) return notFound();

	const session = result.session;
	const amount = session.amount_total
		? (session.amount_total / 100).toFixed(2)
		: '0.00';
	const currency = session.currency?.toUpperCase() || 'BRL';
	const paymentStatus = session.payment_status;

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
						Obrigado pela sua doação!
						<Heart className="inline-block w-8 h-8 text-primary ml-2 fill-primary" />
					</h1>

					{/* Mensagem */}
					<p className="text-lg text-muted-foreground mb-12">
						Sua generosidade faz toda a diferença. Agradecemos muito pelo seu
						apoio!
					</p>

					{/* Detalhes da doação */}
					<div className="bg-card border rounded-lg p-8 mb-8 shadow-sm">
						<h2 className="text-2xl font-semibold mb-6">Detalhes da Doação</h2>

						<div className="space-y-4 text-left">
							<div className="flex justify-between items-center py-3 border-b">
								<span className="text-muted-foreground">
									Status do Pagamento:
								</span>
								<span
									className={`font-semibold ${
										paymentStatus === 'paid'
											? 'text-green-600'
											: 'text-yellow-600'
									}`}
								>
									{paymentStatus === 'paid' ? 'Pago' : 'Pendente'}
								</span>
							</div>

							<div className="flex justify-between items-center py-3 border-b">
								<span className="text-muted-foreground">Valor:</span>
								<span className="font-bold text-xl">
									{new Intl.NumberFormat('pt-BR', {
										style: 'currency',
										currency: currency,
									}).format(Number(amount))}
								</span>
							</div>

							{session.customer_email && (
								<div className="flex justify-between items-center py-3 border-b">
									<span className="text-muted-foreground">Email:</span>
									<span className="font-medium">{session.customer_email}</span>
								</div>
							)}
						</div>
					</div>

					{/* Botão para voltar */}
					<Link href="/">
						<Button size="lg" className="btn btn-primary">
							Voltar para a página inicial
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
}
