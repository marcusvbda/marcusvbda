import { data } from '@/data';

export const pt = {
	info: data?.info?.pt || {},
	hero: {
		greeting: 'Olá, eu sou',
		avatar: data?.info?.pt?.avatar || '',
		name: data?.info?.pt?.name || '',
		role: data?.info?.pt?.role || '',
		location: data?.info?.pt?.location || '',
		bio: data?.bio?.pt || '',
		cta: 'Entre em contato',
		scrollDown: 'Role para explorar',
		checkCv: 'Veja meu CV',
	},
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
