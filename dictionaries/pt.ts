const ptBR: Record<string, string> = {
	// info (CV header)
	info_name: 'Marcus Vinicius Bassalobre de Assis',
	info_email: 'bassalobre.vinicius@gmail.com',
	info_site: 'mvbassalobre.com',
	info_linkedin: 'linkedin.com/in/mvbassalobre',
	info_github: 'github.com/marcusvbda',
	cv_title: 'Engenheiro de Software | Desenvolvedor Full Stack',

	// navbar
	About: 'Sobre',
	Experience: 'Experiência',
	Projects: 'Projetos',
	Skills: 'Habilidades',
	Education: 'Formação',
	Contact: 'Contato',

	// hero
	"Hi, I'm": 'Olá, eu sou',
	location: 'Dublin, Irlanda',

	bio: 'Desenvolvo sistemas frontend e backend para produtos de fintech, pagamentos e investimentos com TypeScript, React, Next.js, Node.js, NestJS e Laravel.',

	checkCv: 'Ver meu currículo',
	cta: 'Entre em contato',
	'Scroll down to explore': 'Role para explorar',

	// about
	'About me': 'Sobre mim',
	Summary: 'Resumo',

	about:
		'Desenvolvo aplicações web e ferramentas internas, do frontend e das APIs ao banco de dados e deploy. Meus projetos recentes incluem fluxos de pagamento, produtos de investimento e software corporativo.',

	aboutDescription:
		'Nos projetos recentes, entreguei funcionalidades de pagamentos, tributação e investimentos, da interface e das APIs às mudanças no banco de dados e à produção.\n\nTrabalhei em fluxos de retry de pagamentos, carteiras de investimento, ferramentas de imposto de renda, aplicações corporativas e sistemas internos.\n\nTrabalho principalmente com TypeScript, React, Next.js, Node.js, NestJS, Laravel e PHP. Também uso Claude Code, Cursor e GitHub Copilot no desenvolvimento.\n\nMoro em Dublin, Irlanda, e estou aberto a vagas remotas de engenharia de software com atuação full stack, backend ou frontend.',

	// experience
	'Career Journey': 'Trajetória Profissional',
	Present: 'Atual',

	exp_investidor10_role: 'Engenheiro de Software',
	exp_investidor10_company: 'Investidor10',
	exp_investidor10_period: 'Novembro de 2023 – Atual',
	exp_investidor10_location: 'Remoto (Baseado em Dublin)',

	exp_investidor10_description:
		'• Desenvolvo e mantenho a Carteira, principal produto de portfólio da plataforma, utilizado por mais de 24.000 usuários ativos entre planos gratuitos e pagos.\n• Participei da migração da Carteira de um monólito Laravel para React 19, Next.js e uma aplicação React Native offline-first.\n• Reestruturei o carregamento de dados no cliente com React Query para reduzir chamadas redundantes de API.\n• Desenvolvi o módulo de Imposto de Renda para o período anual de declaração no Brasil.',

	exp_investidor10_techStack:
		'TypeScript, React 19, Next.js, React Native, Node.js, Laravel, PHP, MongoDB, MySQL, Redis, AWS, Vercel, Supabase',

	exp_bria_role: 'Engenheiro de Software & Desenvolvedor de Produto',
	exp_bria_company: 'BRIA – Brazil Ireland Association',
	exp_bria_period: 'Janeiro de 2026 – Atual',
	exp_bria_location: 'Dublin, Irlanda',
	exp_bria_description:
		'• Desenvolvo e mantenho os sites e as plataformas digitais da associação.\n• Construo ferramentas internas para as operações e os programas da comunidade.\n• Transformo pedidos da equipe da associação em funcionalidades para o site e ferramentas internas.',
	exp_bria_techStack:
		'React, Next.js, Vercel, Desenvolvimento de Produto, Planejamento Técnico',

	exp_vega_role: 'Desenvolvedor Full Stack (Contrato Part-Time)',
	exp_vega_company: 'Vega Checkout',
	exp_vega_period: 'Janeiro de 2024 – Julho de 2025',
	exp_vega_location: 'Remoto',

	exp_vega_description:
		'• Desenvolvi e mantive integrações com múltiplos gateways de pagamento.\n• Melhorei a lógica de retry e o tratamento de transações para reduzir falhas de pagamento.\n• Refatorei o pipeline de transações e revisei alterações com o time.',

	exp_vega_techStack: 'PHP, Laravel, Tailwind CSS, MySQL',

	exp_otimize_role: 'Desenvolvedor Full Stack',
	exp_otimize_company: 'Payt (anteriormente Otimize)',
	exp_otimize_period: 'Outubro de 2018 – Outubro de 2023',
	exp_otimize_location: 'Remoto',

	exp_otimize_description:
		'• Desenvolvi a plataforma principal de pagamentos, incluindo processamento de transações, retries, webhooks, integrações com provedores e filas assíncronas.\n• Construí fluxos antifraude e integrações com gateways de pagamento utilizadas em produção.\n• Ajudei a escalar a plataforma desde o MVP até cerca de R$800 mil/mês em volume recorrente, com picos próximos de R$6,5 milhões/mês considerando todos os lojistas.\n• Trabalhei com os fundadores e o time de engenharia para definir e entregar funcionalidades do produto.',

	exp_otimize_techStack:
		'TypeScript, Node.js, NestJS, PHP, Laravel, Vue.js, Nuxt.js, React Native, MongoDB, PostgreSQL, Redis, Supabase',

	exp_diwe_role: 'Engenheiro de Software Full Stack',
	exp_diwe_company: 'DIWE',
	exp_diwe_period: 'Junho de 2021 – Abril de 2024',
	exp_diwe_location: 'Remoto',

	exp_diwe_description:
		'• Desenvolvi software para Gerdau, Unimed, Saint-Gobain e Intelbras em projetos de saúde, manufatura, educação e indústria.\n• Construí uma plataforma de treinamento e certificação para a construção civil com cursos, avaliações e emissão automática de certificados digitais.',

	exp_diwe_techStack:
		'TypeScript, Node.js, NestJS, PHP, Laravel, Vue.js, Nuxt.js, Java, Python, MongoDB, PostgreSQL, AWS',

	exp_copysupply_role: 'Desenvolvedor Full Stack',
	exp_copysupply_company: 'Copy Supply',
	exp_copysupply_period: '2017 – 2018',
	exp_copysupply_location: 'São Paulo, Brasil',
	exp_copysupply_description:
		'• Desenvolvi aplicações web em ASP.NET conectadas a bancos de dados.',
	exp_copysupply_techStack: 'ASP.NET, Desenvolvimento Full Stack',

	exp_aliveit_role: 'Desenvolvedor Full Stack',
	exp_aliveit_company: 'Alive IT',
	exp_aliveit_period: '2014 – 2017',
	exp_aliveit_location: 'Marília, São Paulo, Brasil',
	exp_aliveit_description:
		'• Desenvolvi aplicações web e sistemas CRM com PHP e C++.',
	exp_aliveit_techStack: 'PHP, C++, Desenvolvimento Web',

	exp_guess_role: 'Estagiário Desenvolvedor Delphi',
	exp_guess_company: 'Guess Soluções em Tecnologia',
	exp_guess_period: '2013 – 2014',
	exp_guess_location: 'Marília, Brasil',
	exp_guess_description: '• Desenvolvi e mantive aplicações em Delphi.',
	exp_guess_techStack: 'Delphi',

	exp_masterel_role: 'Desenvolvedor C++',
	exp_masterel_company: 'Mastersel',
	exp_masterel_period: '2010 – 2013',
	exp_masterel_location: 'Marília, Brasil',
	exp_masterel_description:
		'• Desenvolvi e mantive aplicações internas em C++.',
	exp_masterel_techStack: 'C++',

	// projects
	'Featured Projects': 'Projetos em Destaque',
	"What I've Built": 'O que eu desenvolvi',
	'View Project': 'Ver Projeto',

	proj_investidor10_title: 'Plataforma Investidor10',

	proj_investidor10_description:
		'Trabalhei na modernização do produto de carteira do Investidor10 enquanto ele continuava disponível para os usuários. A migração levou o produto de um monólito Laravel para React, Next.js e React Native.',

	proj_bria_title: 'BRIA - Associação Brasil Irlanda',

	proj_bria_description:
		'Desenvolvi o site multilíngue da BRIA com Next.js e Strapi. Liderei a implementação técnica, incluindo o frontend responsivo, SEO e conteúdo editável para eventos, parceiros, mídia e programas da comunidade.',

	proj_divercity_title: 'Divercity Park',

	proj_divercity_description:
		'Desenvolvi o site de um espaço de entretenimento infantil em um shopping. Ele reúne atrações, eventos, preços e informações de contato em uma identidade visual voltada para famílias.',

	proj_vega_title: 'Plataforma Vega Checkout',

	proj_vega_description:
		'Trabalhei em uma plataforma de checkout para e-commerce com integrações de gateways de pagamento, lógica de retry e processamento de transações.',

	proj_intelbras_title: 'Plataforma Solar Intelbras',

	proj_intelbras_description:
		'Desenvolvi ferramentas de dimensionamento de painéis solares, cálculo de retorno sobre investimento, captação de leads e integração com CRM para a plataforma de energia renovável da Intelbras.',

	proj_parceiro_title: 'Parceiro da Construção',

	proj_parceiro_description:
		'Desenvolvi gestão de cursos, acompanhamento de certificados e recursos de networking para uma plataforma B2B utilizada por mais de 300 mil profissionais da construção civil.',

	proj_tom_title: 'Plataforma Tom Incorporadora',

	proj_tom_description:
		'Desenvolvi uma aplicação administrativa para uma incorporadora com dashboards, gestão de documentos, comunicação com clientes e registros de projetos.',

	proj_inteligenzia_title: 'Portal do Cliente Inteligenzia',

	proj_inteligenzia_description:
		'Desenvolvi um portal para a Inteligenzia que reúne status de projetos, relatórios de desempenho e mensagens entre clientes e agência.',

	proj_mudascarvalho_title: 'Site Mudas Carvalho',

	proj_mudascarvalho_description:
		'Desenvolvi o site de um viveiro familiar no interior de São Paulo, com a história da empresa, mudas disponíveis e práticas de cultivo sustentável.',

	proj_orazelo_title: 'Aplicativo Orazelo',

	proj_orazelo_description:
		'Desenvolvi um aplicativo cristão de saúde mental e autoconhecimento para Google Play e App Store, com reflexões guiadas, conteúdo espiritual e ferramentas de crescimento pessoal.',

	proj_rh99_title: 'Plataforma RH99',

	proj_rh99_description:
		'Desenvolvi uma rede profissional onde especialistas e gestores de recursos humanos podem criar perfis, publicar conteúdo, discutir temas e encontrar oportunidades de recrutamento.',

	proj_unimed_title: 'Portal Unimed SJRP',

	proj_unimed_description:
		'Desenvolvi um portal de serviços para a Unimed São José do Rio Preto com informações de planos e serviços online para clientes, profissionais de saúde e parceiros.',

	// education
	edu_unimar_title: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
	edu_unimar_description: 'Universidade de Marília (UNIMAR) — Brasil (2016)',

	edu_harvardX_title: 'CS50 – Introdução à Inteligência Artificial com Python',
	edu_harvardX_description: 'Harvard University (2025)',

	edu_deepLearning_title:
		'Machine Learning Supervisionado — Regressão e Classificação',
	edu_deepLearning_description: 'Stanford University / DeepLearning.AI (2025)',

	edu_futureLearning_title:
		'Programa de Inglês para Desenvolvimento de Carreira',
	edu_futureLearning_description: 'Nível C1 Avançado Certificado (2025)',

	// skills
	'Skills & Technologies': 'Habilidades & Tecnologias',
	'Technical Expertise': 'Conhecimentos Técnicos',

	skills_arch_label: 'Engenharia de Software',
	skills_arch_skills:
		'APIs REST · Microsserviços · Sistemas Distribuídos · Pagamentos · System Design · Sistemas Orientados a Eventos',

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

	'Earlier Experience': 'Experiência Anterior',

	// key achievements
	'Key Achievements': 'Principais Resultados',

	achievements_high_traffic:
		'Desenvolvi e mantive um produto de investimentos utilizado por mais de 24.000 usuários ativos e sistemas de pagamento que chegaram a R$6,5 milhões em volume mensal no pico.',

	achievements_business_mindset:
		'Entreguei ferramentas tributárias, fluxos de pagamento e funcionalidades de investimento atuando em interfaces, APIs, bancos de dados e infraestrutura.',

	achievements_availability:
		'Baseado em Dublin, Irlanda, e aberto a oportunidades remotas em engenharia de software.',

	// contact
	'Get in Touch': 'Entre em Contato',
	"Let's Build Something Great": 'Vamos trabalhar juntos',

	contactDescription:
		'Se você está contratando para uma vaga remota de engenharia full stack, backend ou frontend, entre em contato.',

	Location: 'Localização',
	Phone: 'Telefone',

	contactLocationValue: 'Dublin, Irlanda',
	contactPhoneValue: '+55 14 99676 6177',

	// download CV
	'Error generating PDF. Please try again.':
		'Erro ao gerar o PDF. Tente novamente.',

	'Generating your CV...': 'Gerando seu currículo...',
	'Starting download...': 'Iniciando download...',

	// footer
	'All rights reserved': 'Todos os direitos reservados',

	'Built with React, TypeScript & Tailwind CSS':
		'Desenvolvido com React, TypeScript & Tailwind CSS',

	// misc
	Email: 'Email',
};

export default ptBR;
