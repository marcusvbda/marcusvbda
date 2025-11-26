'use client';

import { ReactNode, useState } from 'react';
import { useLanguage } from '@/contexts/language-context';
import { createCheckoutSession } from '@/server/stripe';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Coffee, Heart, Sparkles } from 'lucide-react';

export default function Content({ content }: any): ReactNode {
	const { language } = useLanguage();

	const [amount, setAmount] = useState<number>(10);
	const [customAmount, setCustomAmount] = useState<string>('');
	const [message, setMessage] = useState<string>('');
	const [isLoading, setIsLoading] = useState(false);

	const quickAmounts = [5, 10, 20, 50, 100];

	const handleAmountSelect = (value: number) => {
		setAmount(value);
		setCustomAmount('');
	};

	const handleDonate = async () => {
		if (amount < 100) {
			alert('O valor mínimo é R$ 1,00');
			return;
		}

		setIsLoading(true);
		try {
			const result = await createCheckoutSession(
				amount,
				message.trim() || undefined
			);
			if (result.success && result.url) {
				window.open(result.url);
			} else {
				console.error('Error creating checkout session:', result.error);
				alert('Erro ao criar sessão de pagamento. Tente novamente.');
			}
		} catch (error) {
			console.error('Error:', error);
			alert('Erro ao processar doação. Tente novamente.');
		} finally {
			setIsLoading(false);
		}
	};

	const displayAmount = (amount / 100).toFixed(2);

	return (
		<section id="donate" className="section-padding bg-muted/30">
			<div className="max-width-content">
				<div className="text-center mb-16 animate-fade-in">
					<div className="inline-flex items-center justify-center mb-6">
						<div className="relative">
							<div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse" />
							<div className="relative bg-primary/10 rounded-full p-4">
								<Coffee className="w-12 h-12 text-primary" />
							</div>
						</div>
					</div>
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						Ajude um programador a comprar um cafezinho
						<Sparkles className="inline-block w-8 h-8 text-primary ml-2" />
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						Seu apoio ajuda a manter este projeto vivo e a continuar criando
						conteúdo de qualidade. Qualquer valor faz a diferença!
					</p>
				</div>

				<div className="max-w-2xl mx-auto">
					<Card className="shadow-lg border-2">
						<CardHeader className="text-center pb-4">
							<CardTitle className="text-2xl flex items-center justify-center gap-2">
								<Heart className="w-6 h-6 text-primary fill-primary" />
								Faça sua doação
							</CardTitle>
						</CardHeader>
						<CardContent className="space-y-6">
							{/* Seleção de Valor */}
							<div className="space-y-3">
								<Label className="text-base font-semibold">
									Escolha o valor da doação
								</Label>
								<div className="grid grid-cols-3 md:grid-cols-5 gap-3">
									{quickAmounts.map((value) => (
										<Button
											key={value}
											variant={
												amount === value * 100 && !customAmount
													? 'default'
													: 'outline'
											}
											className="h-12 font-semibold"
											onClick={() => handleAmountSelect(value * 100)}
										>
											R$ {value}
										</Button>
									))}
								</div>
								{amount >= 100 && (
									<div className="pt-2 p-3 bg-primary/5 rounded-lg border border-primary/20">
										<p className="text-sm text-center">
											<span className="font-semibold text-primary">
												Valor selecionado: R$ {displayAmount}
											</span>
										</p>
									</div>
								)}
							</div>

							{/* Mensagem */}
							<div className="space-y-3">
								<Label htmlFor="message" className="text-base font-semibold">
									Deixe uma mensagem (opcional)
									<span className="text-muted-foreground font-normal text-sm ml-2">
										- Sua mensagem será enviada junto com a doação
									</span>
								</Label>
								<Textarea
									id="message"
									placeholder="Ex: Obrigado pelo conteúdo incrível! Continue assim! ☕"
									value={message}
									onChange={(e) => setMessage(e.target.value)}
									className="min-h-[100px] resize-none"
									maxLength={500}
								/>
								<p className="text-xs text-muted-foreground text-right">
									{message.length}/500 caracteres
								</p>
							</div>

							{amount >= 100 && (
								<>
									{/* Botão de Doação */}
									<Button
										className="w-full h-14 text-lg font-semibold"
										onClick={handleDonate}
										disabled={isLoading || amount < 100}
										size="lg"
									>
										{isLoading ? (
											<>
												<span className="animate-spin mr-2">⏳</span>
												Processando...
											</>
										) : (
											<>
												<Coffee className="w-5 h-5 mr-2" />
												Doar R$ {displayAmount}
											</>
										)}
									</Button>
								</>
							)}

							{amount < 100 && (
								<p className="text-sm text-destructive text-center">
									O valor mínimo para doação é R$ 1,00
								</p>
							)}

							<p className="text-xs text-center text-muted-foreground pt-2">
								Pagamento seguro processado pelo Stripe
							</p>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
}
