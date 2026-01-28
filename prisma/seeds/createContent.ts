export default async function (prisma: any) {
	await prisma.$executeRawUnsafe(
		`TRUNCATE TABLE "Field" RESTART IDENTITY CASCADE;`
	);
	await prisma.$executeRawUnsafe(
		`TRUNCATE TABLE "Component" RESTART IDENTITY CASCADE;`
	);

	await Promise.all([
		createNavbarContent(prisma),
		createHeroContent(prisma),
		createInfoContent(prisma),
		creatAboutContent(prisma),
		createFooterContent(prisma),
		createContactContent(prisma),
		createEducationContent(prisma),
		createSkillsContent(prisma),
		createExperiencesContent(prisma),
		createProjectsContent(prisma),
		createDonateContent(prisma),
		createDonateSuccessContent(prisma),
	]);
}

const createNavbarContent = async (prisma: any) => {
	await prisma.component.create({
		data: {
			name: 'navbar',
			fields: {
				createMany: {
					data: [
						{
							name: 'logo',
							language: 'en',
							value: '/assets/logo.png',
						},
						{
							name: 'about',
							language: 'en',
							value: 'About',
						},
						{
							name: 'experience',
							language: 'en',
							value: 'Experience',
						},
						{
							name: 'projects',
							language: 'en',
							value: 'Projects',
						},
						{
							name: 'skills',
							language: 'en',
							value: 'Skills',
						},
						{
							name: 'education',
							language: 'en',
							value: 'Education',
						},
						{
							name: 'charactersLabel',
							language: 'en',
							value: 'characters',
						},
						{
							name: 'contact',
							language: 'en',
							value: 'Contact',
						},
						{
							name: 'logo',
							language: 'pt',
							value: '/assets/logo.png',
						},
						{
							name: 'about',
							language: 'pt',
							value: 'Sobre',
						},
						{
							name: 'charactersLabel',
							language: 'pt',
							value: 'caracteres',
						},
						{
							name: 'experience',
							language: 'pt',
							value: 'Experiência',
						},
						{
							name: 'projects',
							language: 'pt',
							value: 'Projetos',
						},
						{
							name: 'skills',
							language: 'pt',
							value: 'Habilidades',
						},
						{
							name: 'education',
							language: 'pt',
							value: 'Educação',
						},
						{
							name: 'contact',
							language: 'pt',
							value: 'Contato',
						},
					],
				},
			},
		},
	});
};

const createHeroContent = async (prisma: any) => {
	await prisma.component.create({
		data: {
			name: 'hero',
			fields: {
				createMany: {
					data: [
						{
							name: 'greeting',
							language: 'en',
							value: "Hi, I'm",
						},
						{
							name: 'cta',
							language: 'en',
							value: 'Get in touch',
						},
						{
							name: 'scrollDown',
							language: 'en',
							value: 'Scroll down to explore',
						},
						{
							name: 'avatar',
							language: 'en',
							value: '/assets/mac.png',
						},
						{
							name: 'checkCv',
							language: 'en',
							value: 'Check my CV',
						},
						{
							name: 'name',
							language: 'en',
							value: 'Marcus Vinicius Bassalobre de Assis',
						},
						{
							name: 'role',
							language: 'en',
							value: 'Senior Software Engineer',
						},
						{
							name: 'location',
							language: 'en',
							value: 'Dublin, Ireland',
						},
						{
							name: 'bio',
							language: 'en',
							value:
								"I'm a Senior Software Engineer with over 15 years of experience building and leading software development teams to deliver high-performance, scalable digital products.",
						},
						{
							name: 'relocationNote',
							language: 'en',
							value:
								'Open to relocation and long-term international opportunities.',
						},
						{
							name: 'greeting',
							language: 'pt',
							value: 'Olá, sou',
						},
						{
							name: 'cta',
							language: 'pt',
							value: 'Entre em contato',
						},
						{
							name: 'scrollDown',
							language: 'pt',
							value: 'Deslize para baixo para explorar',
						},
						{
							name: 'avatar',
							language: 'pt',
							value: '/assets/mac.png',
						},
						{
							name: 'checkCv',
							language: 'pt',
							value: 'Veja meu CV',
						},
						{
							name: 'name',
							language: 'pt',
							value: 'Marcus Vinicius Bassalobre de Assis',
						},
						{
							name: 'role',
							language: 'pt',
							value: 'Engenheiro de Software Sênior',
						},
						{
							name: 'location',
							language: 'pt',
							value: 'Dublin, Irlanda',
						},
						{
							name: 'bio',
							language: 'pt',
							value:
								'Sou Engenheiro de Software Sênior com mais de 15 anos de experiência em desenvolvimento e liderança de equipes, entregando produtos digitais escaláveis e de alta performance.',
						},
					],
				},
			},
		},
	});
};

const createInfoContent = async (prisma: any) => {
	await prisma.component.create({
		data: {
			name: 'info',
			fields: {
				createMany: {
					data: [
						{
							name: 'avatar',
							language: 'en',
							value: '/assets/mac.png',
						},
						{
							name: 'name',
							language: 'en',
							value: 'Marcus Vinicius Bassalobre de Assis',
						},
						{
							name: 'role',
							language: 'en',
							value: 'Senior Software Engineer',
						},
						{
							name: 'email',
							language: 'en',
							value: 'bassalobre.vinicius@gmail.com',
						},
						{
							name: 'site',
							language: 'en',
							value: 'mvbassalobre.com',
						},
						{
							name: 'linkedin',
							language: 'en',
							value: 'linkedin.com/in/mvbassalobre',
						},
						{
							name: 'phone',
							language: 'en',
							value: '+353-81-881-8967 (Ireland), +55 (14) 99676-6177 (Brazil)',
						},
						{
							name: 'github',
							language: 'en',
							value: 'github.com/marcusvbda',
						},
						{
							name: 'location',
							language: 'en',
							value: 'Dublin, Ireland',
						},
						{
							name: 'avatar',
							language: 'pt',
							value: '/assets/mac.png',
						},
						{
							name: 'name',
							language: 'pt',
							value: 'Marcus Vinicius Bassalobre de Assis',
						},
						{
							name: 'role',
							language: 'pt',
							value: 'Engenheiro de Software Sênior',
						},
						{
							name: 'email',
							language: 'pt',
							value: 'bassalobre.vinicius@gmail.com',
						},
						{
							name: 'site',
							language: 'pt',
							value: 'mvbassalobre.com',
						},
						{
							name: 'linkedin',
							language: 'pt',
							value: 'linkedin.com/in/mvbassalobre',
						},
						{
							name: 'phone',
							language: 'pt',
							value: '+353-81-881-8967 (Irlanda), +55 (14) 99676-6177 (Brasil)',
						},
						{
							name: 'github',
							language: 'pt',
							value: 'github.com/marcusvbda',
						},
						{
							name: 'location',
							language: 'pt',
							value: 'Dublin, Irlanda',
						},
					],
				},
			},
		},
	});
};

const creatAboutContent = async (prisma: any) => {
	await prisma.component.create({
		data: {
			name: 'about',
			fields: {
				createMany: {
					data: [
						{
							name: 'title',
							language: 'en',
							value: 'About Me',
						},
						{
							name: 'subtitle',
							language: 'en',
							value: 'Crafting Digital Experiences',
						},
						{
							name: 'description',
							language: 'en',
							value:
								'Senior Software Engineer with 15+ years of experience designing and scaling backend-heavy systems for fintech, SaaS, and high-traffic platforms.\n\nStrong focus on system architecture, scalability, performance, and reliability, with a track record of leading technical decisions impacting millions of users and high-volume financial transactions.\n\nExperienced in working closely with product and business stakeholders, translating complex requirements into robust, maintainable solutions. Recently applying AI as a practical engineering tool to enhance developer productivity and system automation.',
						},
						{
							name: 'image',
							language: 'en',
							value: '/assets/blue.png',
						},
						{
							name: 'title',
							language: 'pt',
							value: 'Sobre Mim',
						},
						{
							name: 'subtitle',
							language: 'pt',
							value: 'Criando Experiências Digitais',
						},
						{
							name: 'description',
							language: 'pt',
							value:
								'Engenheiro de Software Sênior com 15+ anos de experiência projetando e escalando sistemas focados em backend para fintech, SaaS e plataformas de alto tráfego.\n\nForte foco em arquitetura de sistemas, escalabilidade, performance e confiabilidade, com histórico de liderar decisões técnicas que impactam milhões de usuários e transações financeiras de alto volume.\n\nExperiência em trabalhar próximo a stakeholders de produto e negócios, traduzindo requisitos complexos em soluções robustas e manuteníveis. Recentemente aplicando IA como ferramenta prática de engenharia para aumentar produtividade de desenvolvedores e automação de sistemas.',
						},
						{
							name: 'image',
							language: 'pt',
							value: '/assets/blue.png',
						},
					],
				},
			},
		},
	});
};

const createFooterContent = async (prisma: any) => {
	await prisma.component.create({
		data: {
			name: 'footer',
			fields: {
				createMany: {
					data: [
						{
							name: 'rights',
							language: 'en',
							value: 'All rights reserved',
						},
						{
							name: 'builtWith',
							language: 'en',
							value: 'Built with React, TypeScript & Tailwind CSS',
						},
						{
							name: 'rights',
							language: 'pt',
							value: 'Todos os direitos reservados',
						},
						{
							name: 'builtWith',
							language: 'pt',
							value: 'Desenvolvido com React, TypeScript & Tailwind CSS',
						},
					],
				},
			},
		},
	});
};

const createContactContent = async (prisma: any) => {
	await prisma.component.create({
		data: {
			name: 'contact',
			fields: {
				createMany: {
					data: [
						{
							name: 'title',
							language: 'en',
							value: 'Get in Touch',
						},
						{
							name: 'subtitle',
							language: 'en',
							value: "Let's Build Something Great",
						},
						{
							name: 'description',
							language: 'en',
							value:
								"I'm always interested in hearing about new opportunities, innovative projects, or just having a chat about technology and software engineering.",
						},
						{
							name: 'location',
							language: 'en',
							value: 'Location',
						},
						{
							name: 'phone',
							language: 'en',
							value: 'Phone',
						},
						{
							name: 'locationValue',
							language: 'en',
							value: 'Dublin, Ireland',
						},
						{
							name: 'title',
							language: 'pt',
							value: 'Entre em Contato',
						},
						{
							name: 'subtitle',
							language: 'pt',
							value: 'Vamos Construir Algo Incrível',
						},
						{
							name: 'description',
							language: 'pt',
							value:
								'Estou sempre interessado em ouvir sobre novas oportunidades, projetos inovadores ou simplesmente conversar sobre tecnologia e engenharia de software.',
						},
						{
							name: 'location',
							language: 'pt',
							value: 'Localização',
						},
						{
							name: 'phone',
							language: 'pt',
							value: 'Telefone',
						},
						{
							name: 'locationValue',
							language: 'pt',
							value: 'Dublin, Irlanda',
						},
					],
				},
			},
		},
	});
};

const createEducationContent = async (prisma: any) => {
	await prisma.component.create({
		data: {
			name: 'education',
			fields: {
				createMany: {
					data: [
						{
							name: 'title',
							language: 'en',
							value: 'Education',
						},
						{
							name: 'items',
							language: 'en',
							valueJson: {
								unimar: {
									title: 'Bachelor in Systems Analysis and Development',
									description:
										'Universidade de Marília • Brazil, São Paulo • 2013 - 2016',
								},
								deepLearning: {
									title:
										'Supervised Machine Learning: Regression and Classification',
									description:
										'DeepLearning.AI & Stanford University • Online • 2025 • Applied AI for automation, data workflows, and engineering productivity',
								},
								harvardX: {
									title: "CS50's Introduction to Computer Science",
									description: 'Harvard University • Online • 2025',
								},
								futureLearning: {
									title: 'Advanced English Course',
									description: 'Future Learning • Ireland • 2025',
								},
								times: {
									title: 'Professional English Course',
									description: 'Times • Brazil • 2023 - 2024',
								},
							},
						},
						{
							name: 'title',
							language: 'pt',
							value: 'Educação',
						},
						{
							name: 'items',
							language: 'pt',
							valueJson: {
								unimar: {
									title: 'Análise e Desenvolvimento de Sistemas',
									description:
										'Universidade de Marília • Brasil, São Paulo • 2013 - 2016',
								},
								deepLearning: {
									title:
										'Regressão e Classificação em Aprendizado de Máquina Supervisionado',
									description:
										'DeepLearning.AI & Stanford University • Online • 2025 • IA aplicada para automação, workflows de dados e produtividade em engenharia',
								},
								harvardX: {
									title: "CS50's Introduction to Computer Science",
									description: 'Harvard University • Online • 2025',
								},
								futureLearning: {
									title: 'Curso Avançado de Inglês',
									description: 'Future Learning • Irlanda • 2025',
								},
								times: {
									title: 'Curso Profissional de Inglês',
									description: 'Times • Online • 2023 - 2024',
								},
							},
						},
					],
				},
			},
		},
	});
};

const createSkillsContent = async (prisma: any) => {
	await prisma.component.create({
		data: {
			name: 'skills',
			fields: {
				createMany: {
					data: [
						{
							name: 'title',
							language: 'en',
							value: 'Skills & Technologies',
						},
						{
							name: 'subtitle',
							language: 'en',
							value: 'Technical Expertise',
						},
						{
							name: 'categories',
							language: 'en',
							valueJson: {
								backend: {
									label: 'Backend & Platform',
									skills: 'PHP, Node.js, Laravel, NestJS, PostgreSQL, Redis',
								},
								frontend: {
									label: 'Frontend (supporting)',
									skills: 'React, Next.js, TypeScript, Tailwind CSS',
								},
								architecture: {
									label: 'Architecture & Systems',
									skills:
										'Distributed Systems, Microservices, REST APIs, System Design, Scalability, High-Availability Systems, Performance Optimization',
								},
								cloud: {
									label: 'Cloud & DevOps',
									skills: 'AWS, Docker, CI/CD, Vercel',
								},
							},
						},
						{
							name: 'title',
							language: 'pt',
							value: 'Habilidades & Tecnologias',
						},
						{
							name: 'subtitle',
							language: 'pt',
							value: 'Expertise Técnico',
						},
						{
							name: 'categories',
							language: 'pt',
							valueJson: {
								backend: {
									label: 'Backend & Plataforma',
									skills: 'PHP, Node.js, Laravel, NestJS, PostgreSQL, Redis',
								},
								frontend: {
									label: 'Frontend (suporte)',
									skills: 'React, Next.js, TypeScript, Tailwind CSS',
								},
								cloud: {
									label: 'Cloud & DevOps',
									skills: 'AWS, Docker, CI/CD, Vercel',
								},
								architecture: {
									label: 'Arquitetura & Sistemas',
									skills:
										'Sistemas Distribuídos, Microserviços, REST APIs, Arquitetura de Sistemas, Escalabilidade, Sistemas de Alta Disponibilidade, Otimização de Performance',
								},
							},
						},
					],
				},
			},
		},
	});
};

const createExperiencesContent = async (prisma: any) => {
	await prisma.component.create({
		data: {
			name: 'experience',
			fields: {
				createMany: {
					data: [
						{
							name: 'title',
							language: 'en',
							value: 'Experience',
						},
						{
							name: 'subtitle',
							language: 'en',
							value: 'Career Journey',
						},
						{
							name: 'present',
							language: 'en',
							value: 'Present',
						},
						{
							name: 'companies',
							language: 'en',
							valueJson: {
								investidor10: {
									company: 'Investidor10',
									role: 'Senior Software Engineer',
									period: 'Nov 2023 - Present',
									location: 'Rio de Janeiro, Brazil · Remote',
									displayPriority: 1,
									techStack:
										'PHP, NextJS, Node.js, Laravel, TypesScript, NestJS, AlpineJS, MCP, Tailwind, N8N, OpenAI, MYSQL and Redis',
									description:
										"• Led backend and platform architecture decisions for Carteira, one of Latin America's largest investment portfolio platforms, supporting 1M+ users and high-volume financial transactions.\n• Designed and implemented scalable microservices architecture focused on performance, reliability, and long-term maintainability to support rapid platform growth.\n• Worked closely with product, business, and stakeholders to translate complex requirements into robust technical solutions.\n• Improved system performance by 60% through code optimization, caching strategies, and database query improvements.",
								},
								vega: {
									company: 'Vega Checkout',
									role: 'Senior Software Engineer',
									period: 'Jan 2024 - Jul 2024',
									location: 'Barueri, São Paulo, Brazil · Remote',
									displayPriority: 2,
									techStack:
										'PHP, AlpineJS, Node.js, Laravel, Tailwind, TypesScript, Mongo, MYSQL and Redis',
									description:
										"• Led backend architecture decisions for Vega Checkout, one of Brazil's leading payment platforms, processing millions of transactions monthly with 99.9% uptime.\n• Designed and implemented scalable payment gateway integrations with multiple providers (Stripe, PagSeguro, MercadoPago, and others) using REST APIs and webhook handlers.\n• Worked closely with product and business stakeholders to translate payment processing requirements into reliable, maintainable solutions.\n• Improved system stability and performance to handle critical financial transactions at scale.",
								},
								otimize: {
									company: 'Otimize / Payt',
									role: 'Senior Software Engineer',
									period: 'Oct 2018 - Oct 2023',
									location: 'São Paulo, Brazil · Remote',
									displayPriority: 3,
									techStack:
										'PHP, Node.js, Laravel, Bootstrap, TypesScript, MYSQL and Vue.js',
									description:
										'• Led backend and platform architecture from the ground up for PrintI, the top B2B platform for online printing in Brazil, later evolving into Payt, a leading digital checkout platform.\n• Designed and implemented scalable SaaS solutions focused on performance, reliability, and maintainability, with the platform generating BRL 11M+ in transactions during the first year.\n• Worked closely with business stakeholders to translate complex requirements into technical solutions supporting rapid business growth.\n• Established technical foundations and long-term system architecture for high-traffic e-commerce and payment processing.',
								},
								diwe: {
									company: 'DIWE',
									role: 'Senior Software Engineer',
									period: 'Jun 2021 - Apr 2024',
									location: 'Joinville, Santa Catarina, Brazil · Remote',
									techStack:
										'PHP, Node.js, Laravel, Bootstrap, TypesScript, MYSQL and Vue.js',
									displayPriority: 4,
									description:
										'• Led technical decisions for multi-brand enterprise platforms, including the St Gobain Partner Portal, a training platform serving 300,000+ active users.\n• Designed and implemented scalable systems for enterprise clients (St Gobain, UNIMED, Quartzolit, Intelbras) focused on performance and long-term maintainability.\n• Worked closely with clients and internal stakeholders to translate complex business requirements into robust technical solutions.\n• Improved system scalability and performance for high-traffic educational and marketing platforms.',
								},
								unimar: {
									company: 'Universidade de Marília',
									role: 'Senior Software Engineer (Software Owner)',
									period: '2017 - Sep 2023',
									location: 'Marília, São Paulo, Brazil · Remote',
									techStack: 'PHP, Laravel, MYSQL and Vue.js',
									displayPriority: 5,
									description:
										"• Led end-to-end architecture and development of a custom CRM system managing student enrollment for online courses, deployed across 90 E-learning campuses in Brazil.\n• Designed and implemented scalable systems focused on reliability and maintainability, supporting critical enrollment and lead management processes.\n• Worked closely with university stakeholders to translate enrollment and CRM requirements into robust technical solutions.\n• Improved operational efficiency through system automation, eventually leading to the system's acquisition by the university.",
								},
								copySupply: {
									company: 'Copy Supply',
									role: 'Software Engineer',
									period: 'Dec 2017 - Oct 2018',
									location: 'São Paulo, Brazil · On-site',
									techStack: 'ASP.NET MVC, SQL Server and Vue.js',
									displayPriority: 6,
									description:
										'• Contributed to commercial automation and internal systems development.',
								},
								aliveIt: {
									company: 'Alive IT',
									role: 'Software Engineer',
									period: '2014 - Dec 2017',
									location: 'Marília, São Paulo, Brazil · On-site',
									techStack: 'PHP, Laravel, MYSQL and Vue.js',
									displayPriority: 7,
									description:
										'• Contributed to commercial automation and internal systems development.',
								},
								mastersel: {
									company: 'Mastersel',
									role: 'Software Engineer',
									period: '2010 - 2013',
									location: 'Marília, São Paulo, Brazil · On-site',
									techStack: 'Delphi, C++, Firebird',
									displayPriority: 8,
									description:
										'• Contributed to commercial automation and internal systems development.',
								},
							},
						},
						{
							name: 'title',
							language: 'pt',
							value: 'Experiência',
						},
						{
							name: 'subtitle',
							language: 'pt',
							value: 'Jornada Profissional',
						},
						{
							name: 'present',
							language: 'pt',
							value: 'Presente',
						},
						{
							name: 'companies',
							language: 'pt',
							valueJson: {
								investidor10: {
									company: 'Investidor10',
									role: 'Engenheiro de Software Sênior',
									period: 'Nov 2023 - Presente',
									location: 'Rio de Janeiro, Brasil · Remoto',
									techStack:
										'PHP, NextJS, Node.js, Laravel, TypesScript, NestJS, AlpineJS, MCP, Tailwind, N8N, OpenAI, MYSQL e Redis',
									displayPriority: 1,
									description:
										'• Liderou decisões de arquitetura de backend e plataforma para a Carteira, uma das maiores plataformas de portfólio de investimentos da América Latina, suportando 1M+ usuários e transações financeiras de alto volume.\n• Projetou e implementou arquitetura escalável de microserviços focada em performance, confiabilidade e manutenibilidade de longo prazo para suportar crescimento rápido da plataforma.\n• Trabalhou próximo a stakeholders de produto, negócios e equipes técnicas, traduzindo requisitos complexos em soluções técnicas robustas.\n• Melhorou performance do sistema em 60% através de otimização de código, estratégias de cache e melhorias em consultas de banco de dados.',
								},
								vega: {
									company: 'Vega Checkout',
									role: 'Engenheiro de Software Sênior',
									period: 'Jan 2024 - Jul 2024',
									location: 'Barueri, São Paulo, Brasil · Remoto',
									displayPriority: 2,
									techStack:
										'PHP, AlpineJS, Node.js, Laravel, Tailwind, TypesScript, Mongo, MYSQL e Redis',
									description:
										'• Liderou decisões de arquitetura de backend para o Vega Checkout, uma das principais plataformas de pagamento do Brasil, processando milhões de transações mensais com 99.9% de uptime.\n• Projetou e implementou integrações escaláveis de gateway de pagamento com múltiplos provedores (Stripe, PagSeguro, MercadoPago e outros) usando REST APIs e handlers de webhook.\n• Trabalhou próximo a stakeholders de produto e negócios para traduzir requisitos de processamento de pagamentos em soluções confiáveis e manuteníveis.\n• Melhorou estabilidade e performance do sistema para lidar com transações financeiras críticas em escala.',
								},
								otimize: {
									company: 'Otimize / Payt',
									role: 'Engenheiro de Software Sênior',
									period: 'Out 2018 - Out 2023',
									location: 'São Paulo, Brasil · Remoto',
									techStack:
										'PHP, Node.js, Laravel, Bootstrap, TypesScript, MYSQL e Vue.js',
									displayPriority: 3,
									description:
										'• Liderou arquitetura de backend e plataforma desde o início para o PrintI, a principal plataforma B2B de impressão online do Brasil, evoluindo depois para o Payt, uma plataforma líder de checkout digital.\n• Projetou e implementou soluções SaaS escaláveis focadas em performance, confiabilidade e manutenibilidade, com a plataforma gerando R$ 11M+ em transações no primeiro ano.\n• Trabalhou próximo a stakeholders de negócio para traduzir requisitos complexos em soluções técnicas suportando crescimento rápido de negócios.\n• Estabeleceu fundamentos técnicos e arquitetura de sistema de longo prazo para e-commerce e processamento de pagamentos de alto tráfego.',
								},
								diwe: {
									company: 'DIWE',
									role: 'Engenheiro de Software Sênior',
									period: 'Jun 2021 - Abr 2024',
									location: 'Joinville, Santa Catarina, Brasil · Remoto',
									displayPriority: 4,
									techStack:
										'PHP, Node.js, Laravel, Bootstrap, TypesScript, MYSQL e Vue.js',
									description:
										'• Liderou decisões técnicas para plataformas enterprise multi-marca, incluindo o Portal Parceiro St Gobain, uma plataforma de treinamento atendendo 300.000+ usuários ativos.\n• Projetou e implementou sistemas escaláveis para clientes enterprise (St Gobain, UNIMED, Quartzolit, Intelbras) focados em performance e manutenibilidade de longo prazo.\n• Trabalhou próximo a clientes e stakeholders internos para traduzir requisitos complexos de negócio em soluções técnicas robustas.\n• Melhorou escalabilidade e performance de sistemas para plataformas educacionais e de marketing de alto tráfego.',
								},
								unimar: {
									company: 'Universidade de Marília',
									role: 'Engenheiro de Software Sênior (Responsável Técnico / Software Owner)',
									period: '2017 - Set 2023',
									location: 'Marília, São Paulo, Brasil · Remoto',
									displayPriority: 5,
									techStack: 'PHP, Laravel, MYSQL e Vue.js',
									description:
										'• Liderou arquitetura e desenvolvimento end-to-end de sistema CRM personalizado para gerenciamento de matrículas de cursos online, implantado em 90 campi de E-learning no Brasil.\n• Projetou e implementou sistemas escaláveis focados em confiabilidade e manutenibilidade, suportando processos críticos de matrícula e gerenciamento de leads.\n• Trabalhou próximo a stakeholders da universidade para traduzir requisitos de matrícula e CRM em soluções técnicas robustas.\n• Melhorou eficiência operacional através de automação de sistemas, eventualmente levando à aquisição do sistema pela universidade.',
								},
								copySupply: {
									company: 'Copy Supply',
									role: 'Engenheiro de Software',
									period: 'Dez 2017 - Out 2018',
									location: 'São Paulo, Brasil · Presencial',
									techStack: 'ASP.NET MVC, SQL Server e Vue.js',
									displayPriority: 6,
									description:
										'• Contribuiu para automação comercial e desenvolvimento de sistemas internos.',
								},
								aliveIt: {
									company: 'Alive IT',
									role: 'Engenheiro de Software',
									period: '2014 - Dez 2017',
									location: 'Marília, São Paulo, Brasil · Presencial',
									displayPriority: 7,
									techStack: 'PHP, Laravel, MYSQL e Vue.js',
									description:
										'• Contribuiu para automação comercial e desenvolvimento de sistemas internos.',
								},
								mastersel: {
									company: 'Mastersel',
									role: 'Engenheiro de Software',
									period: '2010 - 2013',
									location: 'Marília, São Paulo, Brasil · Presencial',
									displayPriority: 8,
									techStack: 'Delphi, C++, Firebird',
									description:
										'• Contribuiu para automação comercial e desenvolvimento de sistemas internos.',
								},
							},
						},
					],
				},
			},
		},
	});
};

const createProjectsContent = async (prisma: any) => {
	await prisma.component.create({
		data: {
			name: 'projects',
			fields: {
				createMany: {
					data: [
						{
							name: 'title',
							language: 'en',
							value: 'Featured Projects',
						},
						{
							name: 'subtitle',
							language: 'en',
							value: "What I've Built",
						},
						{
							name: 'viewProject',
							language: 'en',
							value: 'View Project',
						},
						{
							name: 'items',
							language: 'en',
							valueJson: {
								investidor10: {
									image: '/companies/i10.jpeg',
									title: 'Investidor10 Platform',
									description:
										"Complete redesign and rebuild of Brazil's leading investment research platform. Implemented modern architecture with SSR, optimized performance achieving 95+ Lighthouse scores, and built a comprehensive design system.",
									tech: 'React, Next.js, TypeScript, Tailwind CSS, Vercel',
								},
								vega: {
									image: '/companies/vega.jpeg',
									title: 'Vega Checkout Analytics',
									description:
										'Real-time analytics dashboard for e-commerce conversion tracking. Features advanced data visualization, funnel analysis, and automated reporting with sub-second query performance.',
									tech: 'React, TypeScript, Laravel, PostgreSQL, Chart.js',
								},
								intelbras: {
									image: '/companies/intelbras.jpeg',
									title: 'Intelbras Solar Platform',
									description:
										'Educational and sales platform for renewable energy solutions. Created interactive tools for solar panel sizing, ROI calculations, and lead generation with seamless CRM integration.',
									tech: 'React, Node.js, MongoDB, AWS',
								},
								parceiro: {
									image: '/companies/pdc.jpeg',
									title: 'Parceiro da Construção',
									description:
										'B2B marketplace and learning platform connecting construction professionals. Built course management system, certification tracking, and professional networking features serving 300k+ users.',
									tech: 'React, WordPress, Laravel, MySQL, Redis, Docker',
								},
								divercity: {
									image: '/companies/divercity.png',
									title: 'Divercity Park',
									description:
										'Institutional website for a children’s entertainment venue located in a shopping mall. Showcases attractions, events, pricing, and contact information with a playful and family-friendly design focused on accessibility and visual appeal.',
									tech: 'WordPress, Tailwind CSS, MySQL, PHP',
								},
								tom: {
									image: '/companies/tom.png',
									title: 'Tom Incorporadora Platform',
									description:
										'Administrative web app developed for a real estate company to manage client interactions and project information. Includes dashboards, document management, and communication tools designed for efficiency and usability.',
									tech: 'Laravel, FilamentPHP, MySQL, Tailwind CSS',
								},
								inteligenzia: {
									image: '/companies/inteligenzia.png',
									title: 'Inteligenzia Client Portal',
									description:
										'Client portal developed for Inteligenzia, the leading B2B marketing agency in Brazil and Latin America. Designed to centralize project management, performance reports, and communication between clients and the agency, improving transparency and collaboration.',
									tech: 'Laravel, FilamentPHP, MySQL, Tailwind CSS',
								},
								mudascarvalho: {
									image: '/companies/mudas.png',
									title: 'Mudas Carvalho Website',
									description:
										'Institutional website for a family-owned plant nursery located in the countryside of São Paulo. Highlights the company’s history, available seedlings, and sustainable cultivation practices through a clean, nature-inspired design.',
									tech: 'Next.js, React, TypeScript, Tailwind CSS, Vercel',
								},
								orazelo: {
									image: '/companies/orazelo.png',
									title: 'Orazelo App',
									description:
										'Mental health and self-knowledge app developed for Christians, available on Google Play and the App Store. The platform offers guided reflections, spiritual content, and personal growth tools, combining faith-based insights with modern UX design.',
									tech: 'React Native, TypeScript, Node.js, Firebase',
								},
								rh99: {
									image: '/companies/rh99.png',
									title: 'RH99 Platform',
									description:
										'Professional social network connecting HR specialists and managers. Designed to foster collaboration, knowledge sharing, and recruitment opportunities through interactive profiles, posts, and discussion features.',
									tech: 'Nuxt.js, Vue.js, TypeScript',
								},
								unimed: {
									image: '/companies/unimed.png',
									title: 'Unimed SJRP Portal',
									description:
										'Institutional and service portal developed for Unimed São José do Rio Preto. Centralizes information for clients, healthcare professionals, and partners, offering online services, plan details, and an optimized user experience for accessibility and reliability.',
									tech: 'Next.js, React, TypeScript, Node.js, AWS',
								},
							},
						},
						{
							name: 'title',
							language: 'pt',
							value: 'Projetos em Destaque',
						},
						{
							name: 'subtitle',
							language: 'pt',
							value: 'O Que Construí',
						},
						{
							name: 'viewProject',
							language: 'pt',
							value: 'Ver Projeto',
						},
						{
							name: 'items',
							language: 'pt',
							valueJson: {
								investidor10: {
									image: '/companies/i10.jpeg',
									title: 'Plataforma Investidor10',
									description:
										'Redesign completo e reconstrução da principal plataforma de pesquisa de investimentos do Brasil. Implementei arquitetura moderna com SSR, otimizei performance alcançando pontuações de 95+ no Lighthouse, e construí um sistema de design abrangente.',
									tech: 'React, Next.js, TypeScript, Tailwind CSS, Vercel',
								},
								vega: {
									image: '/companies/vega.jpeg',
									title: 'Analytics Vega Checkout',
									description:
										'Dashboard de analytics em tempo real para rastreamento de conversão de e-commerce. Possui visualização avançada de dados, análise de funil e relatórios automatizados com performance de consulta em menos de um segundo.',
									tech: 'React, TypeScript, Laravel, PostgreSQL, Chart.js',
								},
								intelbras: {
									image: '/companies/intelbras.jpeg',
									title: 'Plataforma Solar Intelbras',
									description:
										'Plataforma educacional e de vendas para soluções de energia renovável. Criei ferramentas interativas para dimensionamento de painéis solares, cálculos de ROI e geração de leads com integração perfeita de CRM.',
									tech: 'React, Node.js, MongoDB, AWS',
								},
								parceiro: {
									image: '/companies/pdc.jpeg',
									title: 'Parceiro da Construção',
									description:
										'Marketplace B2B e plataforma de aprendizado conectando profissionais da construção. Construí sistema de gerenciamento de cursos, rastreamento de certificações e funcionalidades de networking profissional atendendo mais de 300k usuários.',
									tech: 'React, WordPress, Laravel, MySQL, Redis, Docker',
								},
								divercity: {
									image: '/companies/divercity.png',
									title: 'Divercity Park',
									description:
										'Site institucional para um espaço de entretenimento infantil localizado em um shopping center. Apresenta atrações, eventos, preços e informações de contato com um design lúdico e familiar focado em acessibilidade e apelo visual.',
									tech: 'WordPress, Tailwind CSS, MySQL, PHP',
								},
								tom: {
									image: '/companies/tom.png',
									title: 'Plataforma Tom Incorporadora',
									description:
										'Aplicativo web administrativo desenvolvido para uma empresa imobiliária gerenciar interações com clientes e informações de projetos. Inclui dashboards, gerenciamento de documentos e ferramentas de comunicação projetadas para eficiência e usabilidade.',
									tech: 'Laravel, FilamentPHP, MySQL, Tailwind CSS',
								},
								inteligenzia: {
									image: '/companies/inteligenzia.png',
									title: 'Portal Cliente Inteligenzia',
									description:
										'Portal de cliente desenvolvido para Inteligenzia, a principal agência de marketing B2B do Brasil e América Latina. Projetado para centralizar gerenciamento de projetos, relatórios de performance e comunicação entre clientes e a agência, melhorando transparência e colaboração.',
									tech: 'Laravel, FilamentPHP, MySQL, Tailwind CSS',
								},
								mudascarvalho: {
									image: '/companies/mudas.png',
									title: 'Site Mudas Carvalho',
									description:
										'Site institucional para um viveiro de plantas familiar localizado no interior de São Paulo. Destaca a história da empresa, mudas disponíveis e práticas de cultivo sustentável através de um design limpo inspirado na natureza.',
									tech: 'Next.js, React, TypeScript, Tailwind CSS, Vercel',
								},
								orazelo: {
									image: '/companies/orazelo.png',
									title: 'App Orazelo',
									description:
										'App de saúde mental e autoconhecimento desenvolvido para cristãos, disponível no Google Play e App Store. A plataforma oferece reflexões guiadas, conteúdo espiritual e ferramentas de crescimento pessoal, combinando insights baseados na fé com design UX moderno.',
									tech: 'React Native, TypeScript, Node.js, Firebase',
								},
								rh99: {
									image: '/companies/rh99.png',
									title: 'Plataforma RH99',
									description:
										'Rede social profissional conectando especialistas e gerentes de RH. Projetada para promover colaboração, compartilhamento de conhecimento e oportunidades de recrutamento através de perfis interativos, posts e funcionalidades de discussão.',
									tech: 'Nuxt.js, Vue.js, TypeScript',
								},
								unimed: {
									image: '/companies/unimed.png',
									title: 'Portal Unimed SJRP',
									description:
										'Portal institucional e de serviços desenvolvido para Unimed São José do Rio Preto. Centraliza informações para clientes, profissionais de saúde e parceiros, oferecendo serviços online, detalhes de planos e uma experiência de usuário otimizada para acessibilidade e confiabilidade.',
									tech: 'Next.js, React, TypeScript, Node.js, AWS',
								},
							},
						},
					],
				},
			},
		},
	});
};

const createDonateContent = async (prisma: any) => {
	await prisma.component.create({
		data: {
			name: 'donate',
			fields: {
				createMany: {
					data: [
						{
							name: 'minimumMessage',
							language: 'pt',
							value: 'O valor mínimo é R$ 1,00',
						},
						{
							name: 'errorMessage',
							language: 'pt',
							value: 'Erro ao processar doação. Tente novamente.',
						},
						{
							name: 'title',
							language: 'pt',
							value: 'Ajude um programador a comprar um cafezinho',
						},
						{
							name: 'subtitle',
							language: 'pt',
							value:
								'Seu apoio ajuda a manter este projeto vivo e a continuar criando conteúdo de qualidade. Qualquer valor faz a diferença!',
						},
						{
							name: 'buttonText',
							language: 'pt',
							value: 'Doar',
						},
						{
							name: 'selectAmountLabel',
							language: 'pt',
							value: 'Escolha o valor da doação',
						},
						{
							name: 'selectedAmountLabel',
							language: 'pt',
							value: 'Valor selecionado : ',
						},
						{
							name: 'messageLabel',
							language: 'pt',
							value:
								'Deixe uma mensagem (opcional) - Sua mensagem será enviada junto com a doação',
						},
						{
							name: 'messagePlaceholder',
							language: 'pt',
							value: 'Ex: Obrigado pelo conteúdo incrível! Continue assim! ☕',
						},
						{
							name: 'minimumMessage',
							language: 'en',
							value: 'The minimum donation amount is $1.00',
						},
						{
							name: 'errorMessage',
							language: 'en',
							value: 'Error processing donation. Please try again.',
						},
						{
							name: 'title',
							language: 'en',
							value: 'Help a programmer buy a coffee',
						},
						{
							name: 'subtitle',
							language: 'en',
							value:
								'Your support keeps this project alive and allows me to continue creating quality content. Any amount makes a difference!',
						},
						{
							name: 'buttonText',
							language: 'en',
							value: 'Donate',
						},
						{
							name: 'selectAmountLabel',
							language: 'en',
							value: 'Select the donation amount',
						},
						{
							name: 'selectedAmountLabel',
							language: 'en',
							value: 'Selected amount : ',
						},
						{
							name: 'messageLabel',
							language: 'en',
							value:
								'Leave a message (optional) - Your message will be sent along with the donation',
						},
						{
							name: 'messagePlaceholder',
							language: 'en',
							value: 'Ex: Thank you for the incredible content! Keep going! ☕',
						},
					],
				},
			},
		},
	});
};

const createDonateSuccessContent = async (prisma: any) => {
	await prisma.component.create({
		data: {
			name: 'donate-success',
			fields: {
				createMany: {
					data: [
						{
							name: 'title',
							language: 'pt',
							value: 'Obrigado pela sua doação!',
						},
						{
							name: 'subtitle',
							language: 'pt',
							value:
								'Sua generosidade faz toda a diferença. Agradecemos muito pelo seu apoio!',
						},
						{
							name: 'detailsTitle',
							language: 'pt',
							value: 'Detalhes da doação',
						},
						{
							name: 'detailsPaymentStatus',
							language: 'pt',
							value: 'Status do pagamento',
						},
						{
							name: 'detailsPaymentStatusPaid',
							language: 'pt',
							value: 'Pago',
						},
						{
							name: 'detailsPaymentStatusPending',
							language: 'pt',
							value: 'Pendente',
						},
						{
							name: 'detailsValue',
							language: 'pt',
							value: 'Valor',
						},
						{
							name: 'detailsEmail',
							language: 'pt',
							value: 'Email',
						},
						{
							name: 'buttonText',
							language: 'pt',
							value: 'Voltar para a página inicial',
						},
						{
							name: 'title',
							language: 'en',
							value: 'Thank you for your donation!',
						},
						{
							name: 'subtitle',
							language: 'en',
							value:
								'Your generosity makes a difference. We appreciate your support!',
						},
						{
							name: 'detailsTitle',
							language: 'en',
							value: 'Donation details',
						},
						{
							name: 'detailsPaymentStatus',
							language: 'en',
							value: 'Payment status',
						},
						{
							name: 'detailsPaymentStatusPaid',
							language: 'en',
							value: 'Paid',
						},
						{
							name: 'detailsPaymentStatusPending',
							language: 'en',
							value: 'Pending',
						},
						{
							name: 'detailsValue',
							language: 'en',
							value: 'Value',
						},
						{
							name: 'detailsEmail',
							language: 'en',
							value: 'Email',
						},
						{
							name: 'buttonText',
							language: 'en',
							value: 'Return to the home page',
						},
					],
				},
			},
		},
	});
};
