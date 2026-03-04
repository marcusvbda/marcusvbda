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
	{
		id: 'unimar',
		titleKey: 'edu_unimar_title',
		titleEn: 'BSc in Systems Analysis and Development',
		descKey: 'edu_unimar_description',
		descEn: 'Universidade de Marília, Brazil.',
	},
	{
		id: 'harvardX',
		titleKey: 'edu_harvardX_title',
		titleEn: "CS50's Introduction to Computer Science",
		descKey: 'edu_harvardX_description',
		descEn: 'Harvard University (2025).',
	},
	{
		id: 'deepLearning',
		titleKey: 'edu_deepLearning_title',
		titleEn: 'Supervised Machine Learning',
		descKey: 'edu_deepLearning_description',
		descEn: 'Stanford Online / DeepLearning.AI (2025).',
	},
	{
		id: 'futureLearning',
		titleKey: 'edu_futureLearning_title',
		titleEn: 'Advanced English',
		descKey: 'edu_futureLearning_description',
		descEn: 'Future Learning Ireland (Dublin, 2025).',
	},
];

const SKILLS_PDF = [
	{
		id: 'backend',
		labelKey: 'skills_backend_label',
		labelEn: 'Backend',
		skillsKey: 'skills_backend_skills',
		skillsEn: 'PHP 8+ (Laravel), Node.js (NestJS, Express), Python, Go.',
	},
	{
		id: 'cloud',
		labelKey: 'skills_cloud_label',
		labelEn: 'Cloud & Platform',
		skillsKey: 'skills_cloud_skills',
		skillsEn:
			'AWS (EC2, S3, RDS, Lambda), Docker, CI/CD Pipelines, Microservices.',
	},
	{
		id: 'data',
		labelKey: 'skills_data_label',
		labelEn: 'Data & Performance',
		skillsKey: 'skills_data_skills',
		skillsEn:
			'PostgreSQL, Redis (Advanced Caching), Query Optimization, ElasticSearch.',
	},
	{
		id: 'frontend',
		labelKey: 'skills_frontend_label',
		labelEn: 'Frontend & UI',
		skillsKey: 'skills_frontend_skills',
		skillsEn:
			'React, Next.js, TypeScript, Tailwind CSS, State Management (Context API).',
	},
	{
		id: 'ai',
		labelKey: 'skills_ai_label',
		labelEn: 'AI & Innovation',
		skillsKey: 'skills_ai_skills',
		skillsEn:
			'LLM Integration (OpenAI API), Vector Databases, Behavioral Data Analysis.',
	},
];

const EXPERIENCE_PDF = [
	{
		id: 'investidor10',
		company: 'Investidor10 (Fintech)',
		roleKey: 'exp_investidor10_role',
		roleEn: 'Senior Software Engineer',
		periodKey: 'exp_investidor10_period',
		periodEn: 'Nov 2023 – Present',
		locationKey: 'exp_investidor10_location',
		locationEn: 'Remote (Based in Dublin)',
		techStack: 'PHP, Laravel, Node.js, Redis, PostgreSQL',
		descKey: 'exp_investidor10_description',
		descEn:
			'• Performance Engineering: Optimised API throughput and database queries, achieving 60% latency reduction and significant cloud infrastructure cost savings through advanced Redis caching strategies.\n• Financial Systems: Architected and launched the new Income Tax system (IR 2024), implementing robust request-handling and State Management (Context API), resulting in 40% higher user retention in the module.\n• Scalability: Led backend evolution of the Carteira platform, supporting 1M+ users with high transactional data volume.',
		displayPriority: 1,
	},
	{
		id: 'talentsieve',
		company: 'TalentSieve (AI SaaS)',
		roleKey: 'exp_talentsieve_role',
		roleEn: 'Founder & Lead Engineer',
		periodKey: 'exp_talentsieve_period',
		periodEn: 'Jan 2025 – Present',
		locationKey: 'exp_talentsieve_location',
		locationEn: 'Own Project',
		techStack: 'NestJS, Next.js, AWS, TypeScript',
		descKey: 'exp_talentsieve_description',
		descEn:
			'• Architected an AI Co-Pilot for Recruitment in compliance with EU AI Act and GDPR.\n• Developed a multimodal chat engine for candidate triage that generates automatic ROI dashboards, reducing estimated time-to-hire by 70%.\n• Built full infrastructure using NestJS, Next.js and AWS, with focus on AI explainability ("Human-in-the-loop").',
		displayPriority: 2,
	},
	{
		id: 'vega',
		company: 'Vega Checkout / Payt',
		roleKey: 'exp_vega_role',
		roleEn: 'Senior Software Engineer / Tech Lead',
		periodKey: 'exp_vega_period',
		periodEn: 'Jan 2020 – Oct 2023',
		locationKey: 'exp_vega_location',
		locationEn: 'Joinville, Brazil',
		techStack: 'PHP, Laravel, Node.js, AWS, Docker',
		descKey: 'exp_vega_description',
		descEn:
			'• Developed high-conversion checkout engine processing millions of euros monthly.\n• Mentored team of 10+ developers, implementing rigorous Code Review and CI/CD standards, reducing production bugs by 35%.\n• Refactored legacy monolithic systems into scalable microservices using Laravel and AWS.',
		displayPriority: 3,
	},
	{
		id: 'diwe',
		company: 'DIWE',
		roleKey: 'exp_diwe_role',
		roleEn: 'Senior Software Engineer',
		periodKey: 'exp_diwe_period',
		periodEn: 'Oct 2018 – Dec 2019',
		locationKey: 'exp_diwe_location',
		locationEn: 'Rio de Janeiro, Brazil',
		techStack: 'PHP, Laravel, MySQL',
		descKey: 'exp_diwe_description',
		descEn:
			'• Lead developer of a University Management System, later acquired due to its operational efficiency and automated workflow engine.',
		displayPriority: 4,
	},
];

function buildPdfPayload(t: (key: string, fallback: string) => string) {
	const info = {
		name: { value: INFO.name },
		role: { value: t('exp_investidor10_role', 'Senior Software Engineer') },
		location: { value: t('contactLocationValue', 'Dublin, Ireland') },
		email: { value: INFO.email },
		phone: { value: t('contactPhoneValue', '+353-81-881-8967') },
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
					{
						title: t(e.titleKey, e.titleEn),
						description: t(e.descKey, e.descEn),
					},
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
					{t(
						'Error generating PDF. Please try again.',
						'Error generating PDF. Please try again.',
					)}
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
