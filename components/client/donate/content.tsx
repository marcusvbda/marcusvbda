'use client';

import { ReactNode, useState } from 'react';
import { useLanguage } from '@/contexts/language-context';
import { createCheckoutSession } from '@/server/stripe';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Coffee, Heart, Sparkles } from 'lucide-react';
import { Spinner } from '@/components/ui/spinner';

export default function Content({ content }: any): ReactNode {
	const { language } = useLanguage();
	const donate = content?.donate?.[language];
	const [amount, setAmount] = useState<number>(10);
	const [customAmount, setCustomAmount] = useState<string>('');
	const [message, setMessage] = useState<string>('');
	const [isLoading, setIsLoading] = useState(false);

	const quickAmounts = [1, 5, 15, 20, 50];

	const handleAmountSelect = (value: number) => {
		setAmount(value);
		setCustomAmount('');
	};

	const handleDonate = async () => {
		if (amount < 100) {
			alert(donate?.minimumMessage?.value);
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
				alert(donate?.errorMessage?.value);
			}
		} catch (error) {
			console.error('Error:', error);
			alert(donate?.errorMessage?.value);
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
						{donate?.title?.value}
						<Sparkles className="inline-block w-8 h-8 text-primary ml-2" />
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						{donate?.subtitle?.value}
					</p>
				</div>

				<div className="max-w-2xl mx-auto">
					<Card className="shadow-lg border-2">
						<CardHeader className="text-center pb-4">
							<CardTitle className="text-2xl flex items-center justify-center gap-2">
								<Heart className="w-6 h-6 text-primary fill-primary" />
								{donate?.buttonText?.value}
							</CardTitle>
						</CardHeader>
						<CardContent className="space-y-6">
							{/* Seleção de Valor */}
							<div className="space-y-3">
								<Label className="text-base font-semibold">
									{donate?.selectAmountLabel?.value}
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
												{donate?.selectedAmountLabel?.value} R$ {displayAmount}
											</span>
										</p>
									</div>
								)}
							</div>

							{/* Mensagem */}
							<div className="space-y-3">
								<Label htmlFor="message" className="text-base font-semibold">
									{donate?.messageLabel?.value}
								</Label>
								<Textarea
									id="message"
									placeholder={donate?.messagePlaceholder?.value}
									value={message}
									onChange={(e) => setMessage(e.target.value)}
									className="min-h-[100px] resize-none"
									maxLength={500}
								/>
								<p className="text-xs text-muted-foreground text-right">
									{message.length}/500 {donate?.charactersLabel?.value}
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
											<Spinner className="size-3" />
										) : (
											<>
												<Coffee className="w-5 h-5 mr-2" />
												{donate?.buttonText?.value} R$ {displayAmount}
											</>
										)}
									</Button>
								</>
							)}

							{amount < 100 && (
								<p className="text-sm text-destructive text-center">
									{donate?.minimumMessage?.value}
								</p>
							)}
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
}
