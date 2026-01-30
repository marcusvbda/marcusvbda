'use client';

import { RenderDocument } from '@/components/client/hero/render-document';
import { useLanguage } from '@/contexts/language-context';
import { usePDF } from '@react-pdf/renderer';
import { useEffect, useMemo } from 'react';

export default function DownloadCV({ content }: any) {
	const { language } = useLanguage();
	const hero = content?.hero?.[language];
	const info = content?.info?.[language];
	const about = content?.about?.[language];
	const education = content?.education?.[language];
	const skills = content?.skills?.[language];
	const experience = content?.experience?.[language];
	const projects = content?.projects?.[language];

	const pdfDocument = useMemo(
		() =>
			about && info ? (
				<RenderDocument
					about={about}
					info={info}
					education={education}
					skills={skills}
					experience={experience}
					projects={projects}
					language={language}
					relocationNote={hero?.relocationNote?.value || ''}
					sections={{
						summary: about?.title?.value,
						experience: experience?.title?.value,
						education: education?.title?.value,
						skills: skills?.title?.value,
					}}
				/>
			) : undefined,
		[
			about,
			info,
			education,
			skills,
			experience,
			projects,
			language,
			hero?.relocationNote?.value,
		],
	);

	const [instance] = usePDF({ document: pdfDocument });

	useEffect(() => {
		if (!instance.blob || instance.loading || instance.error) return;

		const fileName = `${info?.name?.value ?? 'CV'} - ${language}.pdf`;
		const url = URL.createObjectURL(instance.blob);
		const link = document.createElement('a');
		link.href = url;
		link.download = fileName;
		link.click();
		URL.revokeObjectURL(url);

		// Pequeno delay para o download iniciar antes de fechar
		setTimeout(() => {
			window.close();
		}, 500);
	}, [instance.blob, instance.loading, instance.error, info?.name?.value, language]);

	// Tela mínima enquanto gera o PDF
	if (instance.error) {
		return (
			<div className="flex min-h-screen items-center justify-center p-4">
				<p className="text-destructive">Erro ao gerar o PDF. Tente novamente.</p>
			</div>
		);
	}

	return (
		<div className="flex min-h-screen items-center justify-center p-4">
			<p className="text-muted-foreground">
				{instance.loading ? 'Gerando seu CV...' : 'Iniciando download...'}
			</p>
		</div>
	);
}
