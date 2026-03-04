'use client';

import { Briefcase } from 'lucide-react';
import { ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/language-context';

const EXPERIENCES: Array<{
	id: string;
	company: string;
	roleKey: string;
	roleEn: string;
	periodKey: string;
	periodEn: string;
	descKey: string;
	descEn: string;
}> = [
	{
		id: 'investidor10',
		company: 'Investidor10',
		roleKey: 'exp_investidor10_role',
		roleEn: 'Senior Software Engineer',
		periodKey: 'exp_investidor10_period',
		periodEn: 'Nov 2023 - Present',
		descKey: 'exp_investidor10_description',
		descEn:
			"• Led backend and platform architecture decisions for Carteira, one of Latin America's largest investment portfolio platforms, supporting 1M+ users and high-volume financial transactions.\n• Designed and implemented scalable microservices architecture focused on performance, reliability, and long-term maintainability to support rapid platform growth.\n• Worked closely with product, business, and stakeholders to translate complex requirements into robust technical solutions.\n• Improved system performance by 60% through code optimization, caching strategies, and database query improvements.",
	},
	{
		id: 'vega',
		company: 'Vega Checkout',
		roleKey: 'exp_vega_role',
		roleEn: 'Senior Software Engineer',
		periodKey: 'exp_vega_period',
		periodEn: 'Jan 2024 - Jul 2024',
		descKey: 'exp_vega_description',
		descEn:
			"• Led backend architecture decisions for Vega Checkout, one of Brazil's leading payment platforms, processing millions of transactions monthly with 99.9% uptime.\n• Designed and implemented scalable payment gateway integrations with multiple providers (Stripe, PagSeguro, MercadoPago, and others) using REST APIs and webhook handlers.\n• Worked closely with product and business stakeholders to translate payment processing requirements into reliable, maintainable solutions.\n• Improved system stability and performance to handle critical financial transactions at scale.",
	},
	{
		id: 'otimize',
		company: 'Otimize / Payt',
		roleKey: 'exp_otimize_role',
		roleEn: 'Senior Software Engineer',
		periodKey: 'exp_otimize_period',
		periodEn: 'Oct 2018 - Oct 2023',
		descKey: 'exp_otimize_description',
		descEn:
			'• Led backend and platform architecture from the ground up for PrintI, the top B2B platform for online printing in Brazil, later evolving into Payt, a leading digital checkout platform.\n• Designed and implemented scalable SaaS solutions focused on performance, reliability, and maintainability, with the platform generating BRL 11M+ in transactions during the first year.\n• Worked closely with business stakeholders to translate complex requirements into technical solutions supporting rapid business growth.\n• Established technical foundations and long-term system architecture for high-traffic e-commerce and payment processing.',
	},
	{
		id: 'diwe',
		company: 'DIWE',
		roleKey: 'exp_diwe_role',
		roleEn: 'Senior Software Engineer',
		periodKey: 'exp_diwe_period',
		periodEn: 'Jun 2021 - Apr 2024',
		descKey: 'exp_diwe_description',
		descEn:
			'• Led technical decisions for multi-brand enterprise platforms, including the St Gobain Partner Portal, a training platform serving 300,000+ active users.\n• Designed and implemented scalable systems for enterprise clients (St Gobain, UNIMED, Quartzolit, Intelbras) focused on performance and long-term maintainability.\n• Worked closely with clients and internal stakeholders to translate complex business requirements into robust technical solutions.\n• Improved system scalability and performance for high-traffic educational and marketing platforms.',
	},
	{
		id: 'unimar',
		company: 'Universidade de Marília',
		roleKey: 'exp_unimar_role',
		roleEn: 'Senior Software Engineer (Software Owner)',
		periodKey: 'exp_unimar_period',
		periodEn: '2017 - Sep 2023',
		descKey: 'exp_unimar_description',
		descEn:
			"• Led end-to-end architecture and development of a custom CRM system managing student enrollment for online courses, deployed across 90 E-learning campuses in Brazil.\n• Designed and implemented scalable systems focused on reliability and maintainability, supporting critical enrollment and lead management processes.\n• Worked closely with university stakeholders to translate enrollment and CRM requirements into robust technical solutions.\n• Improved operational efficiency through system automation, eventually leading to the system's acquisition by the university.",
	},
	{
		id: 'copySupply',
		company: 'Copy Supply',
		roleKey: 'exp_copySupply_role',
		roleEn: 'Software Engineer',
		periodKey: 'exp_copySupply_period',
		periodEn: 'Dec 2017 - Oct 2018',
		descKey: 'exp_copySupply_description',
		descEn: '• Contributed to commercial automation and internal systems development.',
	},
	{
		id: 'aliveIt',
		company: 'Alive IT',
		roleKey: 'exp_aliveIt_role',
		roleEn: 'Software Engineer',
		periodKey: 'exp_aliveIt_period',
		periodEn: '2014 - Dec 2017',
		descKey: 'exp_aliveIt_description',
		descEn: '• Contributed to commercial automation and internal systems development.',
	},
	{
		id: 'mastersel',
		company: 'Mastersel',
		roleKey: 'exp_mastersel_role',
		roleEn: 'Software Engineer',
		periodKey: 'exp_mastersel_period',
		periodEn: '2010 - 2013',
		descKey: 'exp_mastersel_description',
		descEn: '• Contributed to commercial automation and internal systems development.',
	},
];

export default function Experiences(): ReactNode {
	const { t } = useLanguage();

	return (
		<section id="experience" className="section-padding">
			<div className="max-width-content">
				<div className="text-center mb-16 animate-fade-in">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						{t('Experience')}
					</h2>
					<p className="text-lg text-muted-foreground">
						{t('Career Journey', 'Career Journey')}
					</p>
				</div>

				<div className="space-y-8 grid">
					{EXPERIENCES.map((exp, index) => (
						<Card
							key={`xp_${exp.id}`}
							className="hover-lift animate-fade-in"
							style={{ animationDelay: `${index * 0.1}s` }}
						>
							<CardHeader>
								<div className="flex items-start justify-between gap-4">
									<div className="space-y-1 flex-1">
										<CardTitle className="text-2xl flex items-center gap-2">
											<Briefcase className="h-5 w-5 text-accent" />
											{exp.company}
										</CardTitle>
										<p className="text-lg font-semibold text-accent">
											{t(exp.roleKey, exp.roleEn)}
										</p>
										<p className="text-sm text-muted-foreground">
											{t(exp.periodKey, exp.periodEn)}
										</p>
									</div>
								</div>
							</CardHeader>
							<CardContent className="space-y-4">
								<p className="text-muted-foreground leading-relaxed whitespace-pre-line">
									{t(exp.descKey, exp.descEn)}
								</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
