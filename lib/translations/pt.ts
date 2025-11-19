import { data } from '@/data';

export const pt = {
	info: data?.info?.pt || {},
	about: {
		title: 'Sobre Mim',
		subtitle: 'Criando Experiências Digitais',
		description: data?.about?.pt || '',
		image: '/assets/blue.png',
	},
	experience: {
		title: 'Experiência',
		subtitle: 'Jornada Profissional',
		present: 'Atual',
		companies: data?.experiences?.pt || {},
	},
	projects: data?.projects?.pt || {},
	education: {
		title: 'Educação',
		items: data?.education?.pt || {},
	},
	skills: {
		title: 'Habilidades & Tecnologias',
		subtitle: 'Expertise Técnico',
		categories: data?.skills?.pt || {},
	},
	contact: {
		title: 'Entre em Contato',
		subtitle: 'Vamos Construir Algo Incrível',
		description:
			'Estou sempre interessado em ouvir sobre novas oportunidades, projetos inovadores ou simplesmente conversar sobre tecnologia e engenharia de software.',
		location: 'Localização',
		phone: 'Telefone',
		locationValue: 'Dublin, Irlanda',
	},
	footer: {
		rights: 'Todos os direitos reservados',
		builtWith: 'Desenvolvido com React, TypeScript & Tailwind CSS',
	},
};
