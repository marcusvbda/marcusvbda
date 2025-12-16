'use client';

import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/contexts/language-context';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { MessageCircle, X, Maximize2, Minimize2, Send } from 'lucide-react';
import TypingIndicator from './typingIndicator';
import { askOrchestrator } from '@/server/mcp/orchestrator';

interface Message {
	id: string;
	text: string;
	sender: 'user' | 'bot';
	timestamp: Date;
}

const translations = {
	en: {
		title: 'Chat with me',
		placeholder: 'Type your message...',
		send: 'Send',
		quickQuestions: 'Quick questions',
		quickQuestion1: 'What is your experience?',
		quickQuestion2: 'What technologies do you use?',
		quickQuestion3: 'How can I contact you?',
		quickQuestion4: 'Tell me about your projects',
		close: 'Close',
		minimize: 'Minimize',
		maximize: 'Maximize',
		hello: 'Hello! How can I help you?',
	},
	pt: {
		hello: 'Olá! Como posso ajudá-lo?',
		title: 'Conversar comigo',
		placeholder: 'Digite sua mensagem...',
		send: 'Enviar',
		quickQuestions: 'Perguntas rápidas',
		quickQuestion1: 'Qual é sua experiência?',
		quickQuestion2: 'Quais tecnologias você usa?',
		quickQuestion3: 'Como posso entrar em contato?',
		quickQuestion4: 'Conte-me sobre seus projetos',
		close: 'Fechar',
		minimize: 'Minimizar',
		maximize: 'Maximizar',
	},
};

export default function ChatbotContent() {
	const { language } = useLanguage();
	const [isOpen, setIsOpen] = useState(false);
	const [isFullscreen, setIsFullscreen] = useState(false);
	const [messages, setMessages] = useState<Message[]>([]);
	const [inputValue, setInputValue] = useState('');
	const [isTyping, setIsTyping] = useState(false);
	const messagesEndRef = useRef<HTMLDivElement>(null);
	const inputRef = useRef<HTMLInputElement>(null);

	const t = translations[language];

	useEffect(() => {
		if (isOpen && messagesEndRef.current) {
			messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	}, [messages, isOpen]);

	useEffect(() => {
		if (isOpen && inputRef.current) {
			inputRef.current.focus();
		}
	}, [isOpen]);

	const handleSendMessage = async (text: string) => {
		if (!text.trim()) return;

		const userMessage: Message = {
			id: Date.now().toString(),
			text: text.trim(),
			sender: 'user',
			timestamp: new Date(),
		};

		setMessages((prev) => [...prev, userMessage]);
		setInputValue('');

		setIsTyping(true);

		const response = await askOrchestrator(text.trim());
		console.log(response);
		setIsTyping(false);

		// setTimeout(() => {
		// 	const botMessage: Message = {
		// 		id: (Date.now() + 1).toString(),
		// 		text:
		// 			language === 'pt'
		// 				? 'Obrigado pela sua mensagem! Esta funcionalidade será implementada em breve.'
		// 				: 'Thank you for your message! This feature will be implemented soon.',
		// 		sender: 'bot',
		// 		timestamp: new Date(),
		// 	};
		// 	setMessages((prev) => [...prev, botMessage]);
		// }, 500);
	};

	const handleQuickQuestion = (question: string) => {
		handleSendMessage(question);
	};

	const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter' && !e.shiftKey) {
			e.preventDefault();
			handleSendMessage(inputValue);
		}
	};

	const toggleFullscreen = () => {
		setIsFullscreen(!isFullscreen);
	};

	return (
		<>
			{!isOpen && (
				<Button
					onClick={() => setIsOpen(true)}
					className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
					size="icon"
					aria-label={t.title}
				>
					<MessageCircle className="h-6 w-6" />
				</Button>
			)}

			{isOpen && (
				<div
					className={`fixed z-50 transition-all duration-300 ${
						isFullscreen
							? 'inset-0 md:inset-4 lg:inset-8'
							: 'bottom-4 right-4 md:bottom-6 md:right-6 w-[calc(100vw-2rem)] md:w-96 h-[calc(100vh-8rem)] md:h-[600px] max-h-[600px]'
					}`}
				>
					<Card className="flex flex-col h-full shadow-2xl border-2">
						{/* Header */}
						<div className="flex items-center justify-between p-4 border-b bg-muted/50">
							<div className="flex items-center gap-2">
								<MessageCircle className="h-5 w-5 text-primary" />
								<h3 className="font-semibold text-lg">{t.title}</h3>
							</div>
							<div className="flex items-center gap-2">
								<Button
									variant="ghost"
									size="icon"
									onClick={toggleFullscreen}
									className="h-8 w-8"
									aria-label={isFullscreen ? t.minimize : t.maximize}
								>
									{isFullscreen ? (
										<Minimize2 className="h-4 w-4" />
									) : (
										<Maximize2 className="h-4 w-4" />
									)}
								</Button>
								<Button
									variant="ghost"
									size="icon"
									onClick={() => setIsOpen(false)}
									className="h-8 w-8"
									aria-label={t.close}
								>
									<X className="h-4 w-4" />
								</Button>
							</div>
						</div>

						<div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background">
							{messages.length === 0 && (
								<div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground">
									<MessageCircle className="h-12 w-12 mb-4 opacity-50" />
									<p className="text-sm">{t.hello}</p>
								</div>
							)}

							{messages.map((message) => (
								<div
									key={message.id}
									className={`flex ${
										message.sender === 'user' ? 'justify-end' : 'justify-start'
									}`}
								>
									<div
										className={`max-w-[80%] md:max-w-[70%] rounded-lg px-4 py-2 ${
											message.sender === 'user'
												? 'bg-primary text-primary-foreground'
												: 'bg-muted text-foreground'
										}`}
									>
										<p className="text-sm whitespace-pre-wrap wrap-break-word">
											{message.text}
										</p>
										<span
											className={`text-xs mt-1 block ${
												message.sender === 'user'
													? 'text-primary-foreground/70'
													: 'text-muted-foreground'
											}`}
										>
											{message.timestamp.toLocaleTimeString([], {
												hour: '2-digit',
												minute: '2-digit',
											})}
										</span>
									</div>
								</div>
							))}
							{isTyping && (
								<div className="flex justify-start items-center">
									<TypingIndicator
										className="opacity-25"
										iconClass="size-2 bg-primary"
									/>
								</div>
							)}
							<div ref={messagesEndRef} />
						</div>

						{messages.length === 0 && (
							<div className="px-3 md:px-4 pt-2 pb-2 border-t bg-muted/30">
								<p className="text-xs font-medium text-muted-foreground mb-2 px-1">
									{t.quickQuestions}
								</p>
								<div className="flex flex-wrap gap-1.5 md:gap-2">
									{[
										t.quickQuestion1,
										t.quickQuestion2,
										t.quickQuestion3,
										t.quickQuestion4,
									].map((question: string, index: number) => (
										<Button
											variant="outline"
											size="sm"
											key={index}
											onClick={() => handleQuickQuestion(question)}
											className="text-xs h-7 md:h-8 px-2 md:px-3 flex-1 min-w-[calc(50%-0.375rem)] md:flex-initial md:min-w-0 hover:text-white"
										>
											<span className="truncate">{question}</span>
										</Button>
									))}
								</div>
							</div>
						)}

						<div className="p-3 md:p-4 border-t bg-background">
							<div className="flex gap-2">
								<Input
									ref={inputRef}
									value={inputValue}
									onChange={(e) => setInputValue(e.target.value)}
									onKeyPress={handleKeyPress}
									placeholder={t.placeholder}
									className="flex-1 text-sm md:text-base"
								/>
								<Button
									onClick={() => handleSendMessage(inputValue)}
									disabled={!inputValue.trim()}
									size="icon"
									className="shrink-0 h-9 w-9 md:h-10 md:w-10"
									aria-label={t.send}
								>
									<Send className="h-4 w-4" />
								</Button>
							</div>
						</div>
					</Card>
				</div>
			)}
		</>
	);
}
