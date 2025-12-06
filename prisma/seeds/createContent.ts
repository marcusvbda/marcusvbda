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
								"With over 15 years of experience in software engineering, I've had the privilege of leading diverse teams and architecting solutions that impact millions of users. My journey has taken me from founding my own tech ventures to leading engineering at some of Brazil's most innovative fintech and SaaS companies. \nI specialize in building scalable, high-performance web applications using modern technologies like React, Next.js, Laravel, and TypeScript. My approach combines technical excellence with business acumen, always focusing on delivering measurable value.\nCurrently based in Dublin, Ireland, I'm passionate about mentoring engineers, establishing robust development practices, and pushing the boundaries of what's possible with web technologies.",
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
								'Com mais de 15 anos de experiência em engenharia de software, tive o privilégio de liderar equipes diversas e arquitetar soluções que impactam milhões de usuários. Minha jornada me levou desde fundar meus próprios empreendimentos tecnológicos até liderar engenharia em algumas das empresas de fintech e SaaS mais inovadoras do Brasil.\nSou especializado em construir aplicações web escaláveis e de alta performance usando tecnologias modernas como React, Next.js, Laravel e TypeScript. Minha abordagem combina excelência técnica com visão de negócios, sempre focando em entregar valor mensurável.\nAtualmente baseado em Dublin, Irlanda, sou apaixonado por mentorar engenheiros, estabelecer práticas robustas de desenvolvimento e expandir os limites do que é possível com tecnologias web.',
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
										'DeepLearning.AI & Stanford University • Online • 2025',
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
										'DeepLearning.AI & Stanford University • Online • 2025',
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
								frontend: {
									label: 'Frontend',
									skills:
										'HTML,CSS,JavaScript,React,Next.js,TypeScript,Vue.js,Nuxt.js,Tailwind CSS,Bootstrap,ShadCn,Context API,Zustand,Redux,React Query,Vite,SSR,SEO',
								},
								backend: {
									label: 'Backend',
									skills:
										'Laravel, NestJS, ExpressJS, Node.js, PHP, PostgreSQL, MySQL, Redis, Prisma',
								},
								tools: {
									label: 'Tools & DevOps',
									skills:
										'Docker, Git, AWS, Vercel, CI/CD, Linux, macOS, Windows, VS Code, Figma, OpenAI, N8N, Supabase, Firebase',
								},
								others: {
									label: 'Methodologies & Others',
									skills:
										'Agile/Scrum, REST APIs, GraphQL, Microservices, Testing, System Design, Team Leadership',
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
								frontend: {
									label: 'Frontend',
									skills:
										'HTML,CSS,JavaScript,React,Next.js,TypeScript,Vue.js,Nuxt.js,Tailwind CSS,Bootstrap,ShadCn,Context API,Zustand,Redux,React Query,Vite,SSR,SEO',
								},
								backend: {
									label: 'Backend',
									skills:
										'Laravel, NestJS, ExpressJS, Node.js, PHP, PostgreSQL, MySQL, Redis, Prisma',
								},
								tools: {
									label: 'Ferramentas',
									skills:
										'Docker, Git, AWS, Vercel, CI/CD, Linux, macOS, Windows, VS Code, Figma, OpenAI, N8N, Supabase, Firebase',
								},
								others: {
									label: 'Metodologias & Outros',
									skills:
										'Agile/Scrum, REST APIs, GraphQL, Microservices, Testing, System Design, Team Leadership',
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
									role: 'Software Engineer (PHP, Laravel, React, NestJS)',
									period: 'Nov 2023 - Present',
									location: 'Rio de Janeiro, Rio de Janeiro, Brazil · Remote',
									description:
										"Led end-to-end development of Carteira, one of Latin America's largest investment portfolio platforms serving 1M+ users. Architected and implemented scalable microservices architecture using PHP, Laravel, React, Next.js, NestJS, TypeScript, and PostgreSQL to support platform growth. Optimized application performance achieving 60% faster load times through code optimization, caching strategies, and database query improvements. Collaborated with product managers, designers, and stakeholders to deliver high-impact features aligned with business objectives. Implemented CI/CD pipelines, automated testing, and code review processes to ensure code quality and deployment reliability.",
								},
								vega: {
									company: 'Vega Checkout',
									role: 'Software Engineer (PHP, Laravel, AlpineJS)',
									period: 'Jan 2024 - Jul 2024',
									location: 'Barueri, São Paulo, Brazil · Remote',
									description:
										"Developed core features for Vega Checkout, one of Brazil's leading payment platforms formed by the merger of PerfectPay and Monetizze. Built and maintained payment gateway integrations with multiple providers including Pagar.me, Stone, Stripe, PagBank, Mastercard, PagSeguro, and MercadoPago using REST APIs and webhook handlers. Developed responsive, interactive user interfaces with Laravel, Tailwind CSS, and AlpineJS, implementing real-time transaction processing and payment status updates. Optimized backend API performance and database queries to handle high transaction volumes, ensuring 99.9% uptime. Collaborated with cross-functional teams using Agile/Scrum methodologies to deliver stable, high-quality releases on schedule.",
								},
								diwe: {
									company: 'DIWE',
									role: 'Software Engineer (PHP, Node.js)',
									period: 'Jun 2021 - Apr 2024',
									location: 'Joinville, Santa Catarina, Brazil · Remote',
									description:
										'Served as a leader in the development team at Diwe, delivering software engineering solutions for digital marketing and technology clients, including St Gobain, UNIMED, Quartzolit, and Intelbras. Identified client challenges and implemented technology solutions to optimize business processes. Notable achievements include developing a complete internal ERP system and creating the St Gobain Partner Portal, a training platform for construction professionals that reached over 300,000 active users. Contributed to frontend and backend development, focusing on user-centric features, scalability, and maintainability, while collaborating closely with cross-functional teams to deliver projects on time and aligned with client expectations.',
								},
								otimize: {
									company: 'Otimize / Payt',
									role: 'Software Engineer (PHP, Laravel)',
									period: 'Oct 2018 - Oct 2023',
									location: 'São Paulo, Brazil · Remote',
									description:
										'Joined Otimize as the first developer, contributing from the ground up to build PrintI, the top 1 B2B platform for online printing in Brazil. Later, evolved the product into Payt, a leading digital checkout and product creation platform. I played a key role in developing robust, scalable SaaS solutions, maintaining long-term technical ownership of core features and integrations. Notably, the sales platform generated over BRL 11 million in customer transactions during its first year. Collaborated closely with stakeholders to deliver tailored solutions that met complex business demands, ensuring stability, scalability, and high-impact delivery.',
								},
								unimar: {
									company: 'Universidade de Marília',
									role: 'Software Owner (CRM Software Engineer)',
									period: '2017 - Sep 2023',
									location: 'Marília, São Paulo, Brazil · Remote',
									description:
										'Hired by the coordination team to end-to-end design, develop, and maintain a custom CRM for managing leads and student enrollment for online courses. Worked independently on development, ongoing maintenance, and continuous enhancements, with the system eventually being used by 90 E-learning campuses of Unimar across Brazil until its acquisition by the university. Streamlined processes through automation, improving operational efficiency, and provided ongoing support and training to ensure full adoption by users.',
								},
								copySupply: {
									company: 'Copy Supply',
									role: 'Software Developer (ASP.NET MVC)',
									period: 'Dec 2017 - Oct 2018',
									location: 'São Paulo, São Paulo, Brazil · On-site',
									description:
										'Developed end-to-end internal sales team CRM system using ASP.NET MVC, C#, Bootstrap, JavaScript, and SQL Server. Implemented features for lead management, client tracking, sales pipeline visualization, and reporting dashboards. Worked in continuous development cycles with the sales team, gathering requirements and iterating on features. The solution improved client management efficiency and streamlined internal processes, delivering a reliable, scalable tool aligned with business needs.',
								},
								aliveIt: {
									company: 'Alive it',
									role: 'Developer (PHP, C++, Firebird)',
									period: '2014 - Dec 2017',
									location: 'Marília, São Paulo, Brazil · On-site',
									description:
										'Started in technical support and transitioned to software development. Developed automation systems for fuel stations using PHP, Laravel, C++, and Firebird database. Built applications for inventory management, sales reporting, and point-of-sale integration. Contributed to improved operational efficiency and process reliability through automated workflows and real-time data processing.',
								},
								guess: {
									company: 'Guess soluções em tecnologia',
									role: 'Intern (Delphi)',
									period: '2013 - 2014',
									location: 'Marília, São Paulo, Brazil · On-site',
									description:
										'Developed real estate management tools during a mandatory university internship, contributing to process automation and supporting the operational team.',
								},
								mastersel: {
									company: 'Mastersel',
									role: 'C++ Developer',
									period: '2010 - 2013',
									location: 'Marília, São Paulo, Brazil · On-site',
									description:
										'Developed commercial automation applications in C++ and provided technical support to clients, ensuring smooth integration of new systems. Maintained and updated existing applications, improving functionality and performance, and resolving technical issues quickly and effectively.',
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
									role: 'Engenheiro de Software (PHP, Laravel, React, NestJS)',
									period: 'Nov 2023 - Presente',
									location: 'Rio de Janeiro, Rio de Janeiro, Brasil · Remoto',
									description:
										'Liderei o desenvolvimento end-to-end da Carteira, uma das maiores plataformas de portfólio de investimentos da América Latina, atendendo mais de 1 milhão de usuários. Arquiteteei e implementei arquitetura escalável de microserviços usando PHP, Laravel, React, Next.js, NestJS, TypeScript e PostgreSQL para suportar o crescimento da plataforma. Otimizei performance da aplicação alcançando tempos de carregamento 60% mais rápidos através de otimização de código, estratégias de cache e melhorias em consultas de banco de dados. Colaborei com gerentes de produto, designers e stakeholders para entregar funcionalidades de alto impacto alinhadas com objetivos de negócio. Implementei pipelines de CI/CD, testes automatizados e processos de code review para garantir qualidade de código e confiabilidade de deploy.',
								},
								vega: {
									company: 'Vega Checkout',
									role: 'Engenheiro de Software (PHP, Laravel, AlpineJS)',
									period: 'Jan 2024 - Jul 2024',
									location: 'Barueri, São Paulo, Brasil · Remoto',
									description:
										'Desenvolvi funcionalidades principais do Vega Checkout, uma das principais plataformas de pagamento do Brasil formada pela fusão de PerfectPay e Monetizze. Construí e mantive integrações de gateway de pagamento com múltiplos provedores incluindo Pagar.me, Stone, Stripe, PagBank, Mastercard, PagSeguro e MercadoPago usando REST APIs e handlers de webhook. Desenvolvi interfaces de usuário responsivas e interativas com Laravel, Tailwind CSS e AlpineJS, implementando processamento de transações em tempo real e atualizações de status de pagamento. Otimizei performance de API backend e consultas de banco de dados para lidar com altos volumes de transações, garantindo 99.9% de uptime. Colaborei com equipes multifuncionais usando metodologias Agile/Scrum para entregar releases estáveis e de alta qualidade no prazo.',
								},
								diwe: {
									company: 'DIWE',
									role: 'Engenheiro de Software (PHP, Node.js)',
									period: 'Jun 2021 - Abr 2024',
									location: 'Joinville, Santa Catarina, Brasil · Remoto',
									description:
										'Atuei como líder na equipe de desenvolvimento na Diwe, entregando soluções de engenharia de software para clientes de marketing digital e tecnologia, incluindo St Gobain, UNIMED, Quartzolit e Intelbras. Identifiquei desafios dos clientes e implementei soluções tecnológicas para otimizar processos de negócio. Conquistas notáveis incluem desenvolver um sistema ERP interno completo e criar o Portal Parceiro St Gobain, uma plataforma de treinamento para profissionais da construção que alcançou mais de 300.000 usuários ativos. Contribuí para desenvolvimento de frontend e backend, focando em funcionalidades centradas no usuário, escalabilidade e manutenibilidade, enquanto colaborava de perto com equipes multifuncionais para entregar projetos no prazo e alinhados com as expectativas dos clientes.',
								},
								otimize: {
									company: 'Otimize / Payt',
									role: 'Engenheiro de Software (PHP, Laravel)',
									period: 'Out 2018 - Out 2023',
									location: 'São Paulo, Brasil · Remoto',
									description:
										'Ingressei na Otimize como primeiro desenvolvedor, contribuindo desde o início para construir o PrintI, a plataforma B2B número 1 de impressão online no Brasil. Posteriormente, evolui o produto para Payt, uma plataforma líder de checkout digital e criação de produtos. Desempenhei papel fundamental no desenvolvimento de soluções SaaS robustas e escaláveis, mantendo propriedade técnica de longo prazo de funcionalidades principais e integrações. Notavelmente, a plataforma de vendas gerou mais de R$ 11 milhões em transações de clientes durante seu primeiro ano. Colaborei de perto com stakeholders para entregar soluções personalizadas que atenderam demandas complexas de negócio, garantindo estabilidade, escalabilidade e entrega de alto impacto.',
								},
								unimar: {
									company: 'Universidade de Marília',
									role: 'Proprietário de Software (Engenheiro de Software CRM)',
									period: '2017 - Set 2023',
									location: 'Marília, São Paulo, Brasil · Remoto',
									description:
										'Contratado pela equipe de coordenação para projetar, desenvolver e manter de ponta a ponta um CRM personalizado para gerenciar leads e matrículas de estudantes para cursos online. Trabalhei independentemente em desenvolvimento, manutenção contínua e melhorias contínuas, com o sistema eventualmente sendo usado por 90 campi de E-learning da Unimar em todo o Brasil até sua aquisição pela universidade. Simplifiquei processos através de automação, melhorando eficiência operacional, e forneci suporte e treinamento contínuos para garantir adoção completa pelos usuários.',
								},
								copySupply: {
									company: 'Copy Supply',
									role: 'Desenvolvedor de Software (ASP.NET MVC)',
									period: 'Dez 2017 - Out 2018',
									location: 'São Paulo, São Paulo, Brasil · Presencial',
									description:
										'Desenvolvi sistema CRM interno da equipe de vendas de ponta a ponta usando ASP.NET MVC, C#, Bootstrap, JavaScript e SQL Server. Implementei funcionalidades para gerenciamento de leads, rastreamento de clientes, visualização de pipeline de vendas e dashboards de relatórios. Trabalhei em ciclos de desenvolvimento contínuo com a equipe de vendas, coletando requisitos e iterando em funcionalidades. A solução melhorou eficiência de gerenciamento de clientes e simplificou processos internos, entregando uma ferramenta confiável e escalável alinhada com as necessidades do negócio.',
								},
								aliveIt: {
									company: 'Alive it',
									role: 'Desenvolvedor (PHP, C++, Firebird)',
									period: '2014 - Dez 2017',
									location: 'Marília, São Paulo, Brasil · Presencial',
									description:
										'Iniciei em suporte técnico e fiz transição para desenvolvimento de software. Desenvolvi sistemas de automação para postos de combustível usando PHP, Laravel, C++ e banco de dados Firebird. Construí aplicações para gerenciamento de estoque, relatórios de vendas e integração de ponto de venda. Contribuí para melhor eficiência operacional e confiabilidade de processos através de fluxos de trabalho automatizados e processamento de dados em tempo real.',
								},
								guess: {
									company: 'Guess soluções em tecnologia',
									role: 'Estagiário (Delphi)',
									period: '2013 - 2014',
									location: 'Marília, São Paulo, Brasil · Presencial',
									description:
										'Desenvolvi ferramentas de gerenciamento imobiliário durante estágio obrigatório da universidade, contribuindo para automação de processos e apoiando a equipe operacional.',
								},
								mastersel: {
									company: 'Mastersel',
									role: 'Desenvolvedor C++',
									period: '2010 - 2013',
									location: 'Marília, São Paulo, Brasil · Presencial',
									description:
										'Desenvolvi aplicações de automação comercial em C++ e forneci suporte técnico a clientes, garantindo integração adequada de novos sistemas. Mantive e atualizei aplicações existentes, melhorando funcionalidade e performance, e resolvi problemas técnicos de forma rápida e eficaz.',
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
