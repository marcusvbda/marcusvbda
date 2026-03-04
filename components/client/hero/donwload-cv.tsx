'use client';

/* eslint-disable @typescript-eslint/no-explicit-any */
import { RenderDocument } from '@/components/client/hero/render-document';
import { useLanguage } from '@/contexts/language-context';
import { usePDF } from '@react-pdf/renderer';
import { useEffect, useMemo } from 'react';

const INFO = {
	name: 'Marcus Vinicius Bassalobre de Assis',
	email: 'bassalobre.vinicius@gmail.com',
	site: 'mvbassalobre.com',
	linkedin: 'linkedin.com/in/mvbassalobre',
	github: 'github.com/marcusvbda',
};

const EDUCATION_PDF = [
	{ id: 'unimar', titleKey: 'edu_unimar_title', titleEn: 'Bachelor in Systems Analysis and Development', descKey: 'edu_unimar_description', descEn: 'Universidade de Marília • Brazil, São Paulo • 2013 - 2016' },
	{ id: 'deepLearning', titleKey: 'edu_deepLearning_title', titleEn: 'Supervised Machine Learning: Regression and Classification', descKey: 'edu_deepLearning_description', descEn: 'DeepLearning.AI & Stanford University • Online • 2025 • Applied AI for automation, data workflows, and engineering productivity' },
	{ id: 'harvardX', titleKey: 'edu_harvardX_title', titleEn: "CS50's Introduction to Computer Science", descKey: 'edu_harvardX_description', descEn: 'Harvard University • Online • 2025' },
	{ id: 'futureLearning', titleKey: 'edu_futureLearning_title', titleEn: 'Advanced English Course', descKey: 'edu_futureLearning_description', descEn: 'Future Learning • Ireland • 2025' },
	{ id: 'times', titleKey: 'edu_times_title', titleEn: 'Professional English Course', descKey: 'edu_times_description', descEn: 'Times • Brazil • 2023 - 2024' },
];

const SKILLS_PDF = [
	{ id: 'backend', labelKey: 'skills_backend_label', labelEn: 'Backend & Platform', skillsKey: null, skillsEn: 'PHP, Node.js, Laravel, NestJS, PostgreSQL, Redis' },
	{ id: 'frontend', labelKey: 'skills_frontend_label', labelEn: 'Frontend (supporting)', skillsKey: null, skillsEn: 'React, Next.js, TypeScript, Tailwind CSS' },
	{ id: 'architecture', labelKey: 'skills_architecture_label', labelEn: 'Architecture & Systems', skillsKey: 'skills_architecture_skills', skillsEn: 'Distributed Systems, Microservices, REST APIs, System Design, Scalability, High-Availability Systems, Performance Optimization' },
	{ id: 'cloud', labelKey: 'skills_cloud_label', labelEn: 'Cloud & DevOps', skillsKey: null, skillsEn: 'AWS, Docker, CI/CD, Vercel' },
];

const EXPERIENCE_PDF = [
	{ id: 'investidor10', company: 'Investidor10', roleKey: 'exp_investidor10_role', roleEn: 'Senior Software Engineer', periodKey: 'exp_investidor10_period', periodEn: 'Nov 2023 - Present', locationKey: 'exp_investidor10_location', locationEn: 'Rio de Janeiro, Brazil · Remote', techStack: 'PHP, NextJS, Node.js, Laravel, TypeScript, NestJS, AlpineJS, MCP, Tailwind, N8N, OpenAI, MySQL, Redis', descKey: 'exp_investidor10_description', descEn: "• Led backend and platform architecture decisions for Carteira, one of Latin America's largest investment portfolio platforms, supporting 1M+ users and high-volume financial transactions.\n• Designed and implemented scalable microservices architecture focused on performance, reliability, and long-term maintainability to support rapid platform growth.\n• Worked closely with product, business, and stakeholders to translate complex requirements into robust technical solutions.\n• Improved system performance by 60% through code optimization, caching strategies, and database query improvements.", displayPriority: 1 },
	{ id: 'vega', company: 'Vega Checkout', roleKey: 'exp_vega_role', roleEn: 'Senior Software Engineer', periodKey: 'exp_vega_period', periodEn: 'Jan 2024 - Jul 2024', locationKey: 'exp_vega_location', locationEn: 'Barueri, São Paulo, Brazil · Remote', techStack: 'PHP, AlpineJS, Node.js, Laravel, Tailwind, TypeScript, Mongo, MySQL, Redis', descKey: 'exp_vega_description', descEn: "• Led backend architecture decisions for Vega Checkout, one of Brazil's leading payment platforms, processing millions of transactions monthly with 99.9% uptime.\n• Designed and implemented scalable payment gateway integrations with multiple providers (Stripe, PagSeguro, MercadoPago, and others) using REST APIs and webhook handlers.\n• Worked closely with product and business stakeholders to translate payment processing requirements into reliable, maintainable solutions.\n• Improved system stability and performance to handle critical financial transactions at scale.", displayPriority: 2 },
	{ id: 'otimize', company: 'Otimize / Payt', roleKey: 'exp_otimize_role', roleEn: 'Senior Software Engineer', periodKey: 'exp_otimize_period', periodEn: 'Oct 2018 - Oct 2023', locationKey: 'exp_otimize_location', locationEn: 'São Paulo, Brazil · Remote', techStack: 'PHP, Node.js, Laravel, Bootstrap, TypeScript, MySQL, Vue.js', descKey: 'exp_otimize_description', descEn: '• Led backend and platform architecture from the ground up for PrintI, the top B2B platform for online printing in Brazil, later evolving into Payt, a leading digital checkout platform.\n• Designed and implemented scalable SaaS solutions focused on performance, reliability, and maintainability, with the platform generating BRL 11M+ in transactions during the first year.\n• Worked closely with business stakeholders to translate complex requirements into technical solutions supporting rapid business growth.\n• Established technical foundations and long-term system architecture for high-traffic e-commerce and payment processing.', displayPriority: 3 },
	{ id: 'diwe', company: 'DIWE', roleKey: 'exp_diwe_role', roleEn: 'Senior Software Engineer', periodKey: 'exp_diwe_period', periodEn: 'Jun 2021 - Apr 2024', locationKey: 'exp_diwe_location', locationEn: 'Joinville, Santa Catarina, Brazil · Remote', techStack: 'PHP, Node.js, Laravel, Bootstrap, TypeScript, MySQL, Vue.js', descKey: 'exp_diwe_description', descEn: '• Led technical decisions for multi-brand enterprise platforms, including the St Gobain Partner Portal, a training platform serving 300,000+ active users.\n• Designed and implemented scalable systems for enterprise clients (St Gobain, UNIMED, Quartzolit, Intelbras) focused on performance and long-term maintainability.\n• Worked closely with clients and internal stakeholders to translate complex business requirements into robust technical solutions.\n• Improved system scalability and performance for high-traffic educational and marketing platforms.', displayPriority: 4 },
	{ id: 'unimar', company: 'Universidade de Marília', roleKey: 'exp_unimar_role', roleEn: 'Senior Software Engineer (Software Owner)', periodKey: 'exp_unimar_period', periodEn: '2017 - Sep 2023', locationKey: 'exp_unimar_location', locationEn: 'Marília, São Paulo, Brazil · Remote', techStack: 'PHP, Laravel, MySQL, Vue.js', descKey: 'exp_unimar_description', descEn: "• Led end-to-end architecture and development of a custom CRM system managing student enrollment for online courses, deployed across 90 E-learning campuses in Brazil.\n• Designed and implemented scalable systems focused on reliability and maintainability, supporting critical enrollment and lead management processes.\n• Worked closely with university stakeholders to translate enrollment and CRM requirements into robust technical solutions.\n• Improved operational efficiency through system automation, eventually leading to the system's acquisition by the university.", displayPriority: 5 },
	{ id: 'copySupply', company: 'Copy Supply', roleKey: 'exp_copySupply_role', roleEn: 'Software Engineer', periodKey: 'exp_copySupply_period', periodEn: 'Dec 2017 - Oct 2018', locationKey: 'exp_copySupply_location', locationEn: 'São Paulo, Brazil · On-site', techStack: 'ASP.NET MVC, SQL Server, Vue.js', descKey: 'exp_copySupply_description', descEn: '• Contributed to commercial automation and internal systems development.', displayPriority: 6 },
	{ id: 'aliveIt', company: 'Alive IT', roleKey: 'exp_aliveIt_role', roleEn: 'Software Engineer', periodKey: 'exp_aliveIt_period', periodEn: '2014 - Dec 2017', locationKey: 'exp_aliveIt_location', locationEn: 'Marília, São Paulo, Brazil · On-site', techStack: 'PHP, Laravel, MySQL, Vue.js', descKey: 'exp_aliveIt_description', descEn: '• Contributed to commercial automation and internal systems development.', displayPriority: 7 },
	{ id: 'mastersel', company: 'Mastersel', roleKey: 'exp_mastersel_role', roleEn: 'Software Engineer', periodKey: 'exp_mastersel_period', periodEn: '2010 - 2013', locationKey: 'exp_mastersel_location', locationEn: 'Marília, São Paulo, Brazil · On-site', techStack: 'Delphi, C++, Firebird', descKey: 'exp_mastersel_description', descEn: '• Contributed to commercial automation and internal systems development.', displayPriority: 8 },
];

function buildPdfPayload(t: (key: string, fallback: string) => string) {
	const info = {
		name: { value: INFO.name },
		role: { value: t('exp_investidor10_role', 'Senior Software Engineer') },
		location: { value: t('contactLocationValue', 'Dublin, Ireland') },
		email: { value: INFO.email },
		phone: { value: t('contactPhoneValue', '+353-81-881-8967 (Ireland), +55 (14) 99676-6177 (Brazil)') },
		site: { value: INFO.site },
		linkedin: { value: INFO.linkedin },
		github: { value: INFO.github },
	};
	const about = {
		title: { value: t('About me', 'About me') },
		description: {
			value: t(
				'aboutDescription',
				'Senior Software Engineer with 15+ years of experience designing and scaling backend-heavy systems for fintech, SaaS, and high-traffic platforms.',
			),
		},
	};
	const education = {
		items: {
			valueJson: Object.fromEntries(
				EDUCATION_PDF.map((e) => [
					e.id,
					{ title: t(e.titleKey, e.titleEn), description: t(e.descKey, e.descEn) },
				]),
			),
		},
	};
	const skills = {
		categories: {
			valueJson: Object.fromEntries(
				SKILLS_PDF.map((s) => [
					s.id,
					{
						label: t(s.labelKey, s.labelEn),
						skills: s.skillsKey ? t(s.skillsKey, s.skillsEn) : s.skillsEn,
					},
				]),
			),
		},
	};
	const experience = {
		companies: {
			valueJson: Object.fromEntries(
				EXPERIENCE_PDF.map((e) => [
					e.id,
					{
						company: e.company,
						role: t(e.roleKey, e.roleEn),
						period: t(e.periodKey, e.periodEn),
						location: t(e.locationKey, e.locationEn),
						techStack: e.techStack,
						description: t(e.descKey, e.descEn),
						displayPriority: e.displayPriority,
					},
				]),
			),
		},
	};
	const sections = {
		summary: t('About me', 'About me'),
		experience: t('Experience', 'Experience'),
		education: t('Education', 'Education'),
		skills: t('Skills & Technologies', 'Skills & Technologies'),
	};
	return { info, about, education, skills, experience, sections };
}

export default function DownloadCV() {
	const { t, language } = useLanguage();
	const payload = useMemo(() => buildPdfPayload(t), [t]);

	const pdfDocument = useMemo(
		() => (
			<RenderDocument
				about={payload.about}
				info={payload.info}
				education={payload.education}
				skills={payload.skills}
				experience={payload.experience}
				language={language}
				relocationNote=""
				sections={payload.sections}
			/>
		),
		[payload, language],
	);

	const [instance] = usePDF({ document: pdfDocument });

	useEffect(() => {
		if (!instance.blob || instance.loading || instance.error) return;
		const fileName = `${INFO.name} - ${language}.pdf`;
		const url = URL.createObjectURL(instance.blob);
		const link = document.createElement('a');
		link.href = url;
		link.download = fileName;
		link.click();
		URL.revokeObjectURL(url);
		setTimeout(() => {
			window.close();
		}, 500);
	}, [instance.blob, instance.loading, instance.error, language]);

	if (instance.error) {
		return (
			<div className="flex min-h-screen items-center justify-center p-4">
				<p className="text-destructive">
					{t('Error generating PDF. Please try again.', 'Error generating PDF. Please try again.')}
				</p>
			</div>
		);
	}

	return (
		<div className="flex min-h-screen items-center justify-center p-4">
			<p className="text-muted-foreground">
				{instance.loading
					? t('Generating your CV...', 'Generating your CV...')
					: t('Starting download...', 'Starting download...')}
			</p>
		</div>
	);
}
