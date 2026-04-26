'use client';

/* eslint-disable @typescript-eslint/no-explicit-any */
import { RenderDocument } from '@/components/client/hero/render-document';
import { useLanguage } from '@/contexts/language-context';
import { usePDF } from '@react-pdf/renderer';
import { useEffect, useMemo } from 'react';

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
		skillsKey: 'skills_backend_skills',
	},
	{
		id: 'cloud',
		labelKey: 'skills_cloud_label',
		skillsKey: 'skills_cloud_skills',
	},
	{
		id: 'data',
		labelKey: 'skills_data_label',
		skillsKey: 'skills_data_skills',
	},
	{
		id: 'frontend',
		labelKey: 'skills_frontend_label',
		skillsKey: 'skills_frontend_skills',
	},
];

const EXPERIENCE_PDF = [
	{
		id: 'investidor10',
		companyKey: 'exp_investidor10_company',
		roleKey: 'exp_investidor10_role',
		periodKey: 'exp_investidor10_period',
		locationKey: 'exp_investidor10_location',
		techStackKey: 'exp_investidor10_techStack',
		descKey: 'exp_investidor10_description',
		displayPriority: 1,
	},
	{
		id: 'talentsieve',
		companyKey: 'exp_talentsieve_company',
		roleKey: 'exp_talentsieve_role',
		periodKey: 'exp_talentsieve_period',
		locationKey: 'exp_talentsieve_location',
		techStackKey: 'exp_talentsieve_techStack',
		descKey: 'exp_talentsieve_description',
		displayPriority: 2,
	},
	{
		id: 'bria',
		companyKey: 'exp_bria_company',
		roleKey: 'exp_bria_role',
		periodKey: 'exp_bria_period',
		locationKey: 'exp_bria_location',
		techStackKey: 'exp_bria_techStack',
		descKey: 'exp_bria_description',
		displayPriority: 3,
	},
	{
		id: 'vega',
		companyKey: 'exp_vega_company',
		roleKey: 'exp_vega_role',
		periodKey: 'exp_vega_period',
		locationKey: 'exp_vega_location',
		techStackKey: 'exp_vega_techStack',
		descKey: 'exp_vega_description',
		displayPriority: 4,
	},
	{
		id: 'diwe',
		companyKey: 'exp_diwe_company',
		roleKey: 'exp_diwe_role',
		periodKey: 'exp_diwe_period',
		locationKey: 'exp_diwe_location',
		techStackKey: 'exp_diwe_techStack',
		descKey: 'exp_diwe_description',
		displayPriority: 5,
	},
	{
		id: 'unimar',
		companyKey: 'exp_unimar_company',
		roleKey: 'exp_unimar_role',
		periodKey: 'exp_unimar_period',
		locationKey: 'exp_unimar_location',
		techStackKey: 'exp_unimar_techStack',
		descKey: 'exp_unimar_description',
		displayPriority: 6,
	},
	{
		id: 'copysupply',
		companyKey: 'exp_copysupply_company',
		roleKey: 'exp_copysupply_role',
		periodKey: 'exp_copysupply_period',
		locationKey: 'exp_copysupply_location',
		techStackKey: 'exp_copysupply_techStack',
		descKey: 'exp_copysupply_description',
		displayPriority: 7,
	},
	{
		id: 'aliveit',
		companyKey: 'exp_aliveit_company',
		roleKey: 'exp_aliveit_role',
		periodKey: 'exp_aliveit_period',
		locationKey: 'exp_aliveit_location',
		techStackKey: 'exp_aliveit_techStack',
		descKey: 'exp_aliveit_description',
		displayPriority: 8,
	},
	{
		id: 'guess',
		companyKey: 'exp_guess_company',
		roleKey: 'exp_guess_role',
		periodKey: 'exp_guess_period',
		locationKey: 'exp_guess_location',
		techStackKey: 'exp_guess_techStack',
		descKey: 'exp_guess_description',
		displayPriority: 9,
	},
	{
		id: 'masterel',
		companyKey: 'exp_masterel_company',
		roleKey: 'exp_masterel_role',
		periodKey: 'exp_masterel_period',
		locationKey: 'exp_masterel_location',
		techStackKey: 'exp_masterel_techStack',
		descKey: 'exp_masterel_description',
		displayPriority: 10,
	},
];

function buildPdfPayload(t: (key: string, fallback?: any) => string) {
	const info = {
		name: { value: t('info_name') },
		role: { value: t('cv_title', t('exp_investidor10_role')) },
		location: { value: t('contactLocationValue') },
		email: { value: t('info_email') },
		phone: { value: t('contactPhoneValue') },
		site: { value: t('info_site') },
		linkedin: { value: t('info_linkedin') },
		github: { value: t('info_github') },
	};
	const about = {
		title: { value: t('About me') },
		description: {
			value: t('aboutDescription'),
		},
	};
	const education = {
		items: {
			valueJson: Object.fromEntries(
				EDUCATION_PDF.map((e) => [
					e.id,
					{
						title: t(e.titleKey),
						description: t(e.descKey),
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
						label: t(s.labelKey),
						skills: s.skillsKey ? t(s.skillsKey) : '',
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
						company: t(e.companyKey),
						role: t(e.roleKey),
						period: t(e.periodKey),
						location: e.locationKey ? t(e.locationKey) : '',
						techStack: t(e.techStackKey),
						description: t(e.descKey),
						displayPriority: e.displayPriority,
					},
				]),
			),
		},
	};
	const sections = {
		summary: t('Summary', t('About me')),
		experience: t('Experience'),
		education: t('Education'),
		skills: t('Skills & Technologies'),
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
		const fileName = `${t('info_name')} - ${language}.pdf`;
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
					{t('Error generating PDF. Please try again.')}
				</p>
			</div>
		);
	}

	return (
		<div className="flex min-h-screen items-center justify-center p-4">
			<p className="text-muted-foreground">
				{instance.loading
					? t('Generating your CV...')
					: t('Starting download...')}
			</p>
		</div>
	);
}
