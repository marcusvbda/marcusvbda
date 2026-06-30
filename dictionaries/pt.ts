const pt: Record<string, string> = {
	// info (CV header)
	info_name: 'Marcus Vinicius Bassalobre de Assis',
	info_email: 'bassalobre.vinicius@gmail.com',
	info_site: 'mvbassalobre.com',
	info_linkedin: 'linkedin.com/in/mvbassalobre',
	info_github: 'github.com/marcusvbda',
	cv_title: 'Engenheiro de Software Sênior | Arquiteto de Software',

	// navbar
	About: 'Sobre',
	Experience: 'Experiência',
	Projects: 'Projetos',
	Skills: 'Habilidades',
	Education: 'Educação',
	Contact: 'Contato',

	// hero
	"Hi, I'm": 'Olá, sou',
	location: 'Dublin, Irlanda',

	bio: 'Engenheiro de software com mais de 13 anos de experiência, grande parte em plataformas fintech e de pagamentos onde disponibilidade e correção realmente importam. Projeto arquitetura backend, lidero decisões técnicas e ainda escrevo código diariamente — em toda a stack.',

	checkCv: 'Ver meu CV',
	cta: 'Entre em contato',
	'Scroll down to explore': 'Desça para explorar',

	// about
	'About me': 'Sobre mim',
	Summary: 'Resumo',

	about: 'Construo e reconstruo sistemas que precisam ficar no ar: plataformas fintech, pipelines de pagamento, aplicações de alto tráfego. A maior parte da minha carreira foi como o engenheiro que acaba sendo o dono das decisões de arquitetura, não apenas executando-as.',

	aboutDescription:
		'Arquitetura & Liderança Técnica: Fui o primeiro engenheiro, o único engenheiro ou a referência técnica na maioria dos times em que trabalhei — o que significa que decisões de arquitetura, revisões de código e mentoria fazem parte do trabalho, não são extras.\n\nFull Stack, por necessidade: 13+ anos entre backend, frontend e infraestrutura. Trabalhei em sistemas distribuídos e processamento de pagamentos tanto quanto em interfaces React — geralmente no mesmo projeto.\n\nFerramentas de IA como parte do fluxo: Uso Claude Code, Cursor e GitHub Copilot diariamente, da mesma forma que usaria qualquer outra ferramenta que acelere o trabalho sem baixar a barra.\n\nRemoto, de verdade: 6+ anos trabalhando 100% remoto, incluindo relocação para Dublin. Elegível para trabalhar na Irlanda pelo Critical Skills Employment Permit.',

	// experience
	'Career Journey': 'Jornada Profissional',
	Present: 'Presente',

	exp_investidor10_role: 'Engenheiro de Software Sênior — Referência Técnica',
	exp_investidor10_company: 'Investidor10',
	exp_investidor10_period: 'Novembro 2023 – Presente',
	exp_investidor10_location: 'Remoto (Baseado em Dublin)',

	exp_investidor10_description:
		'• Único engenheiro responsável pela Carteira, o principal produto de portfólio da plataforma, usado por mais de 24 mil assinantes ativos entre planos gratuito e pago.\n• Re-arquitetou a Carteira de um monólito Laravel para uma aplicação standalone offline-first com React 19, Next.js e React Native — o carregamento das páginas passou de notavelmente lento para quase instantâneo, e a latência das APIs reduziu o suficiente para que o cache Redis se pagasse em semanas.\n• Reconstruiu o data fetching client-side com React Query, reduzindo drasticamente as chamadas redundantes à API e contribuindo para um salto significativo na conversão de gratuito para pago após o lançamento.\n• Projetou e entregou o módulo de Imposto de Renda do zero, hoje um dos recursos mais usados durante a temporada de declaração.\n• Atua como referência técnica do time da Carteira: decisões de arquitetura, revisões de código, mentoria.',

	exp_investidor10_techStack:
		'TypeScript, React 19, Next.js, React Native, Node.js, Laravel, PHP, MongoDB, MySQL, Redis, AWS, Vercel, Supabase',

	exp_bria_role: 'Gerente Voluntário de Projetos de Tecnologia',
	exp_bria_company: 'BRIA – Brazil Ireland Association',
	exp_bria_period: 'Janeiro 2026 – Presente',
	exp_bria_location: 'Dublin, Irlanda',
	exp_bria_description:
		'• Coordena o desenvolvimento e a manutenção dos websites e plataformas digitais da associação.\n• Gerencia o planejamento técnico e a organização do roadmap para projetos em andamento.\n• Mentora desenvolvedores voluntários em arquitetura e práticas de engenharia.',
	exp_bria_techStack: 'Vercel, Planejamento de Produto, Mentoria Técnica',

	exp_vega_role: 'Engenheiro Full Stack Sênior (Contrato Part-Time)',
	exp_vega_company: 'Vega Checkout',
	exp_vega_period: 'Janeiro 2024 – Julho 2025',
	exp_vega_location: 'Remoto',

	exp_vega_description:
		'• Manteve e melhorou fluxos de pagamento de alto volume em múltiplos gateways de pagamento, com foco em confiabilidade e estabilidade da plataforma.\n• Apoiou a qualidade do código por meio de revisões técnicas e melhorias arquiteturais contínuas.',

	exp_vega_techStack: 'PHP, Laravel, Tailwind CSS, MySQL',

	exp_otimize_role: 'Engenheiro de Software Sênior / Tech Lead',
	exp_otimize_company: 'Payt (anteriormente Otimize)',
	exp_otimize_period: 'Outubro 2018 – Outubro 2023',
	exp_otimize_location: 'Remoto',

	exp_otimize_description:
		'• Primeiro engenheiro contratado. Projetou a arquitetura da plataforma do zero, depois cresceu e liderou o time de engenharia até 4 pessoas.\n• Construiu o núcleo de processamento de pagamentos: fluxos antifraude, processamento de transações baseado em filas e integrações webhook em múltiplos gateways de pagamento.\n• Escalou a plataforma de poucos pedidos por mês para processar cerca de €800K/mês em volume regular, com picos de ~€6,5M/mês no total de lojistas.\n• Definiu a direção técnica do time, conduziu revisões de código e mentorou engenheiros à medida que a empresa crescia.',

	exp_otimize_techStack:
		'TypeScript, Node.js, NestJS, PHP, Laravel, Vue.js, Nuxt.js, React Native, MongoDB, PostgreSQL, Redis, Supabase',

	exp_diwe_role: 'Engenheiro Full Stack Sênior',
	exp_diwe_company: 'DIWE',
	exp_diwe_period: 'Junho 2021 – Abril 2024',
	exp_diwe_location: 'Remoto',

	exp_diwe_description:
		'• Entregou software para clientes corporativos como Gerdau, Unimed, Saint-Gobain e Intelbras, nos setores de saúde, manufatura e indústria.\n• Construiu uma plataforma de treinamento e certificação para a construção civil, com cursos estruturados, avaliações e emissão automática de certificados digitais.\n• Trabalhou em arquitetura e design de sistemas em vários projetos simultâneos.',

	exp_diwe_techStack:
		'TypeScript, Node.js, NestJS, PHP, Laravel, Vue.js, Nuxt.js, Java, Python, MongoDB, PostgreSQL, AWS',

	exp_copysupply_role: 'Desenvolvedor Full Stack',
	exp_copysupply_company: 'Copy Supply',
	exp_copysupply_period: '2017 – 2018',
	exp_copysupply_location: 'São Paulo, Brasil',
	exp_copysupply_description:
		'• Construiu plataformas web e aplicações empresariais com foco em desenvolvimento full stack e sistemas orientados a banco de dados.',
	exp_copysupply_techStack: 'ASP.NET, Desenvolvimento Full Stack',

	exp_aliveit_role: 'Desenvolvedor Full Stack',
	exp_aliveit_company: 'Alive IT',
	exp_aliveit_period: '2014 – 2017',
	exp_aliveit_location: 'Marília, São Paulo, Brasil',
	exp_aliveit_description:
		'• Construiu plataformas web, sistemas CRM e aplicações empresariais em diferentes setores.\n• Trabalhou em desenvolvimento full stack, APIs e sistemas orientados a banco de dados.',
	exp_aliveit_techStack: 'PHP, C++, Desenvolvimento Web',

	exp_guess_role: 'Estagiário Desenvolvedor Delphi',
	exp_guess_company: 'Guess Soluções em Tecnologia',
	exp_guess_period: '2013 – 2014',
	exp_guess_location: 'Marília, Brasil',
	exp_guess_description: '• Primeira experiência real em desenvolvimento de software.',
	exp_guess_techStack: 'Delphi',

	exp_masterel_role: 'Desenvolvedor C++',
	exp_masterel_company: 'Mastersel',
	exp_masterel_period: '2010 – 2013',
	exp_masterel_location: 'Marília, Brasil',
	exp_masterel_description:
		'• Desenvolvimento inicial de aplicações empresariais e sistemas de software internos.',
	exp_masterel_techStack: 'C++',

	// projects
	'Featured Projects': 'Projetos em Destaque',
	"What I've Built": 'O Que Construí',
	'View Project': 'Ver Projeto',

	proj_investidor10_title: 'Plataforma Investidor10',

	proj_investidor10_description:
		'Modernização da arquitetura de uma das maiores plataformas de pesquisa de investimentos do Brasil. Liderou a migração de um monólito Laravel para uma arquitetura offline-first com Next.js — o tipo de reescrita que se faz com o avião ainda voando, com usuários reais durante todo o processo.',

	proj_vega_title: 'Plataforma Vega Checkout',

	proj_vega_description:
		'Sistema fintech de checkout construído para processar transações de e-commerce de alto volume com confiabilidade. O trabalho foi principalmente sobre integrações resilientes com gateways de pagamento e garantir que as coisas continuassem funcionando quando o tráfego aumentasse.',

	// education
	edu_unimar_title: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
	edu_unimar_description: 'Universidade de Marília (UNIMAR) — Brasil (2016)',

	edu_harvardX_title: 'CS50 – Introdução à Inteligência Artificial com Python',
	edu_harvardX_description: 'Harvard University (2025)',

	edu_deepLearning_title:
		'Machine Learning Supervisionado — Regressão e Classificação',
	edu_deepLearning_description: 'Stanford University / DeepLearning.AI (2025)',

	edu_futureLearning_title: 'Programa de Inglês para Desenvolvimento de Carreira',
	edu_futureLearning_description: 'Nível Avançado C1 Certificado (2025)',

	// skills
	'Skills & Technologies': 'Habilidades & Tecnologias',
	'Technical Expertise': 'Expertise Técnica',

	skills_arch_label: 'Arquitetura & Liderança',
	skills_arch_skills:
		'Arquitetura de Software · Sistemas Distribuídos · Pagamentos · Microsserviços · Liderança Técnica · Design de Sistemas',

	skills_backend_label: 'Backend',
	skills_backend_skills: 'Laravel · Node.js · NestJS · PHP · Python · Java',

	skills_frontend_label: 'Frontend',
	skills_frontend_skills:
		'React · Next.js · Vue.js · Nuxt.js · TypeScript · Tailwind CSS · Alpine.js · Livewire',

	skills_data_label: 'Bancos de Dados & Performance',
	skills_data_skills:
		'PostgreSQL · MySQL · MongoDB · Redis · Otimização de Queries',

	skills_cloud_label: 'Cloud & Infraestrutura',
	skills_cloud_skills:
		'AWS · Vercel · Docker · CI/CD · GitFlow · Redis · Supabase',

	skills_ai_label: 'Desenvolvimento Assistido por IA',
	skills_ai_skills:
		'Cursor · Claude Code · GitHub Copilot · OpenAI APIs · Integração com LLMs',

	'Earlier Experience': 'Experiências Anteriores',

	// key achievements
	'Key Achievements': 'Destaques',

	achievements_high_traffic:
		'Construiu e escalou plataformas com volume real de transações e usuários simultâneos — não em teoria, em produção, com dinheiro transitando.',

	achievements_business_mindset:
		'Confortável em assumir a arquitetura de ponta a ponta: o tipo de decisões difíceis de desfazer quando o sistema já está no ar.',

	achievements_availability:
		'Baseado em Dublin, disponível para entrevistas, elegível para trabalhar na Irlanda pelo Critical Skills Employment Permit.',

	// contact
	'Get in Touch': 'Entre em Contato',
	"Let's Build Something Great": 'Vamos Construir Algo Incrível',

	contactDescription:
		'Aberto a conversas sobre vagas de engenharia, sistemas fintech ou problemas de arquitetura que valham a pena resolver. Entre em contato — costumo responder rapidamente.',

	Location: 'Localização',
	Phone: 'Telefone',

	contactLocationValue: 'Dublin, Irlanda',
	contactPhoneValue: '+353 083 881 8967',

	// download CV
	'Error generating PDF. Please try again.':
		'Erro ao gerar o PDF. Tente novamente.',

	'Generating your CV...': 'Gerando seu CV...',
	'Starting download...': 'Iniciando download...',

	// footer
	'All rights reserved': 'Todos os direitos reservados',

	'Built with React, TypeScript & Tailwind CSS':
		'Feito com React, TypeScript & Tailwind CSS',

	// misc
	Email: 'E-mail',
};

export default pt;
