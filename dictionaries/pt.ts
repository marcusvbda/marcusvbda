const ptBR: Record<string, string> = {
	// info (CV header)
	info_name: 'Marcus Vinicius Bassalobre de Assis',
	info_email: 'bassalobre.vinicius@gmail.com',
	info_site: 'mvbassalobre.com',
	info_linkedin: 'linkedin.com/in/mvbassalobre',
	info_github: 'github.com/marcusvbda',
	cv_title: 'Engenheiro Full Stack | Agentes de IA',

	// navbar
	About: 'Sobre',
	Experience: 'Experiência',
	Projects: 'Projetos',
	Skills: 'Habilidades',
	Education: 'Formação',
	Contact: 'Contato',

	// hero
	"Hi, I'm": 'Olá, eu sou',
	hero_role: 'Engenheiro Full Stack construindo agentes de IA',
	location: 'Dublin, Irlanda',

	bio: 'Engenheiro full stack com mais de 13 anos construindo produtos de pagamentos, fintech e investimentos de ponta a ponta e, hoje, agentes de IA que rodam em produção. Desenvolvedor líder da Carteira no Investidor10 (24.000+ usuários por dia) e fundador da Gravity Labs.',

	checkCv: 'Ver meu currículo',
	cv_variant_fullstack: 'Full stack',
	cv_variant_backend: 'Backend / pagamentos',
	cv_variant_frontend: 'Frontend / React',
	cta: 'Entre em contato',
	'Scroll down to explore': 'Role para explorar',

	// about
	'About me': 'Sobre mim',
	Summary: 'Resumo',

	about:
		'Engenheiro full stack construindo produtos de pagamentos, fintech e investimentos de ponta a ponta, e agentes de IA que rodam em produção.',

	aboutDescription:
		'Tenho mais de 13 anos construindo produtos de pagamentos, fintech e investimentos de ponta a ponta e, hoje, agentes de IA que rodam em produção. Na Gravity Labs, estúdio independente que fundei, construo agentes de IA e produtos web para pequenos negócios. Para o Divercity Park projetei e mantenho um agente de IA no WhatsApp que atende clientes e cota festas com preços atualizados da API do parque, repassa a conversa para a equipe com um resumo quando não sabe responder e transforma perguntas sem resposta em um FAQ que a equipe completa.\n\nNo Investidor10 sou desenvolvedor líder e responsável pela Carteira, produto de carteira que atende mais de 24.000 usuários por dia. Sou o engenheiro mais sênior do produto e a referência técnica para decisões de arquitetura e code review. Construí as atualizações em tempo real (WebSockets, Redis) e as integrações de IA/MCP, participei da migração de um monólito Laravel para React 19, Next.js e um app React Native offline-first, e projetei o produto de Imposto de Renda para o período anual de declaração no Brasil.\n\nAntes disso, trabalhei na plataforma principal de pagamentos da Payt, escalando-a do MVP a aproximadamente R$6,5 milhões (~US$1,3 milhão) em volume mensal no pico, com fluxos antifraude que reduziram em mais de 60% as fraudes e os chargebacks. Também construí uma camada de gateways de pagamento com mais de 50 provedores na Vega Checkout e entreguei mais de 10 projetos corporativos na Diwe para clientes como Unimed, Gerdau, Saint-Gobain, Adidas e Intelbras.\n\nTrabalho com desenvolvimento orientado a especificações e agentes de código com IA (Claude Code) para planejamento, implementação e revisão. Minha stack é TypeScript, PHP, Python, React, Next.js, React Native, Node.js, NestJS, Laravel, PostgreSQL, MySQL, Redis, AWS, Docker, n8n, as APIs da OpenAI e da Anthropic e MCP.\n\nAtuo como pessoa jurídica (B2B), por isso alguns vínculos ocorreram em paralelo. Moro em Dublin, Irlanda, e estou disponível para contratos remotos, meio período ou período integral, com sobreposição de fuso horário europeu e brasileiro.',

	// experience
	'Career Journey': 'Trajetória Profissional',
	Present: 'Atual',

	exp_gravitylabs_role: 'Fundador e Engenheiro de IA',
	exp_gravitylabs_company: 'Gravity Labs',
	exp_gravitylabs_period: 'Março de 2024 – Atual',
	exp_gravitylabs_description:
		'• Estúdio independente que constrói agentes de IA e produtos web para pequenos negócios.\n• Divercity Park: projetei e mantenho em produção um agente de IA no WhatsApp. Ele responde sobre preços, horários e festas com dados em tempo real da API do parque, segue regras rígidas de preço, repassa conversas para a equipe com um resumo e registra perguntas sem resposta em um ciclo de feedback de FAQ.\n• Construí o site do parque (Next.js, Supabase, Vercel), incluindo assinatura digital de contratos de festa e ingressos antecipados com validação por QR code.',
	exp_gravitylabs_techStack:
		'n8n, WAHA, OpenAI API, PostgreSQL, Next.js, Supabase, Vercel',

	exp_investidor10_role: 'Engenheiro Full Stack Sênior',
	exp_investidor10_company: 'Investidor10',
	exp_investidor10_period: 'Novembro de 2023 – Atual',
	exp_investidor10_location: 'Rio de Janeiro, Brasil',

	exp_investidor10_description:
		'• Desenvolvedor líder e responsável pela Carteira, produto de carteira que atende mais de 24.000 usuários por dia. Engenheiro mais sênior do produto: referência técnica para decisões de arquitetura e code review.\n• Construí atualizações em tempo real (WebSockets, cache, Redis) e integrações de IA/MCP para bots e insights inteligentes.\n• Participei da migração do produto de um monólito Laravel para React 19, Next.js e um app React Native offline-first.\n• Projetei e desenvolvi o produto de Imposto de Renda para o período anual de declaração no Brasil.',

	exp_investidor10_techStack:
		'TypeScript, React 19, Next.js, React Native, Node.js, Laravel, Redis, WebSockets, MCP, APIs da OpenAI/Anthropic',

	exp_bria_role: 'Engenheiro de Software e Desenvolvedor de Produto',
	exp_bria_company: 'BRIA – Brazil Ireland Association',
	exp_bria_period: 'Janeiro de 2026 – Atual',
	exp_bria_location: 'Dublin, Irlanda',
	exp_bria_description:
		'• Engenheiro de software e desenvolvedor de produto do site e das ferramentas internas da BRIA, apoiando as operações e os programas da comunidade.\n• Construí o site institucional multilíngue com Next.js e Strapi: responsivo, otimizado para SEO e com conteúdo que a equipe gerencia sem código.\n• Construo ferramentas internas e integrações para as operações e as iniciativas da comunidade da associação.\n• Trabalho diretamente com os stakeholders para transformar requisitos em software funcional e iterar com base no uso real e no feedback.',
	exp_bria_techStack: 'Next.js, Strapi',

	exp_vega_role: 'Engenheiro Full Stack',
	exp_vega_company: 'Vega Checkout',
	exp_vega_period: 'Janeiro de 2024 – Julho de 2025',
	exp_vega_location: 'Barueri, São Paulo, Brasil',

	exp_vega_description:
		'• Concluí a migração do sistema legado em ASP.NET MVC para Laravel e Alpine.js após a aquisição pela Monetizze.\n• Migrei a camada de gateways de pagamento configuráveis por cliente, cobrindo mais de 50 opções de gateway.\n• Mantive fluxos de pagamento de alto volume e integrações com vários gateways, com foco em confiabilidade das transações e estabilidade da plataforma.',

	exp_vega_techStack:
		'Laravel, Alpine.js, PHP, integrações com gateways de pagamento',

	exp_otimize_role: 'Engenheiro Full Stack',
	exp_otimize_company: 'Otimize / Payt',
	exp_otimize_period: 'Outubro de 2018 – Outubro de 2023',
	exp_otimize_location: 'São Paulo, Brasil',

	exp_otimize_description:
		'• Engenheiro full stack na plataforma principal de pagamentos de uma startup de fintech, em um time de cinco desenvolvedores.\n• Construí processamento de transações, retries, webhooks, integrações com provedores de pagamento e filas assíncronas.\n• Ajudei a escalar a plataforma do MVP a aproximadamente R$6,5 milhões (~US$1,3 milhão) em volume mensal de transações no pico.\n• Construí fluxos antifraude que, junto com o processo de pós-venda e suporte, reduziram em mais de 60% os casos de fraude e chargeback.\n• Trabalhei com microsserviços, APIs e sistemas orientados a eventos para processamento de transações em alto volume.',

	exp_diwe_role: 'Engenheiro Full Stack',
	exp_diwe_company: 'DIWE',
	exp_diwe_period: 'Junho de 2021 – Abril de 2024',
	exp_diwe_location: 'Joinville, Santa Catarina, Brasil',

	exp_diwe_description:
		'• Engenheiro full stack em uma consultoria de software para grandes organizações brasileiras.\n• Entreguei mais de 10 projetos para clientes como Unimed, Sonex, Quartzolit, Gerdau, Saint-Gobain, Adidas, Construtora Planeta, Branco e Intelbras.\n• Projetei e construí o Parceiro da Construção, plataforma de treinamento e certificação para a construção civil (cursos online, avaliações automatizadas, certificados digitais) com cerca de 1.500 usuários ativos.\n• Contribuí para decisões de arquitetura e design de sistemas em diversas stacks tecnológicas.',

	exp_umar_role: 'Software Owner (Desenvolvedor Full Stack de CRM)',
	exp_umar_company: 'Universidade de Marília',
	exp_umar_period: 'Outubro de 2017 – Setembro de 2023',
	exp_umar_location: 'Marília, São Paulo, Brasil',

	exp_copysupply_role: 'Desenvolvedor de Software (ASP.NET MVC)',
	exp_copysupply_company: 'Copy Supply',
	exp_copysupply_period: 'Dezembro de 2017 – Outubro de 2018',
	exp_copysupply_location: 'São Paulo, Brasil',

	exp_aliveit_role: 'Desenvolvedor (PHP, C++, Firebird)',
	exp_aliveit_company: 'alive it',
	exp_aliveit_period: 'Outubro de 2014 – Dezembro de 2017',
	exp_aliveit_location: 'Marília, São Paulo, Brasil',

	exp_masterel_role: 'Desenvolvedor C++',
	exp_masterel_company: 'Mastersel',
	exp_masterel_period: 'Outubro de 2010 – Outubro de 2013',
	exp_masterel_location: 'Marília, São Paulo, Brasil',

	// projects
	'Featured Projects': 'Projetos em Destaque',
	"What I've Built": 'O que eu desenvolvi',
	'View Project': 'Ver Projeto',

	proj_gravitylabs_title: 'Gravity Labs',

	proj_gravitylabs_description:
		'Estúdio independente que constrói agentes de IA e produtos web para pequenos negócios.',

	proj_divercity_title: 'Divercity Park',

	proj_divercity_description:
		'Agente de IA no WhatsApp em produção que responde sobre preços, horários e festas com dados em tempo real da API do parque, segue regras rígidas de preço, repassa conversas para a equipe com um resumo e registra perguntas sem resposta em um ciclo de feedback de FAQ. Também construí o site do parque, com assinatura digital de contratos de festa e ingressos antecipados com validação por QR code.',

	proj_talentlabs_title: 'Talent Labs',

	proj_talentlabs_description:
		'Em beta fechado. Plataforma de busca de vagas para candidatos: coleta vagas de várias fontes, usa um LLM para extrair dados estruturados de cada vaga (stack, senioridade, localização, remoto), encontra o contato de recrutamento da empresa e envia candidaturas personalizadas pelo Gmail do próprio candidato, com templates e currículos em inglês e português.',

	proj_trakk_title: 'Trakk',

	proj_trakk_description:
		'Gerenciador pessoal de metas com um servidor MCP, para que assistentes de IA como o Claude possam ler e atualizar metas e tarefas. Em produção e em uso diário.',

	proj_investidor10_title: 'Plataforma Investidor10',

	proj_investidor10_description:
		'Desenvolvedor líder e responsável pela Carteira, produto de carteira do Investidor10 que atende mais de 24.000 usuários por dia: atualizações em tempo real (WebSockets, cache, Redis) e integrações de IA/MCP. Participei da migração de um monólito Laravel para React 19, Next.js e um app React Native offline-first.',

	proj_bria_title: 'BRIA - Associação Brasil Irlanda',

	proj_bria_description:
		'Construí o site institucional multilíngue da BRIA com Next.js e Strapi: responsivo, otimizado para SEO e com conteúdo que a equipe gerencia sem código.',

	proj_vega_title: 'Plataforma Vega Checkout',

	proj_vega_description:
		'Concluí a migração de uma plataforma de checkout de ASP.NET MVC para Laravel e Alpine.js após a aquisição pela Monetizze e migrei sua camada de gateways de pagamento configuráveis por cliente, cobrindo mais de 50 opções de gateway.',

	proj_intelbras_title: 'Plataforma Solar Intelbras',

	proj_intelbras_description:
		'Desenvolvi ferramentas de dimensionamento de painéis solares, cálculo de retorno sobre investimento, captação de leads e integração com CRM para a plataforma de energia renovável da Intelbras.',

	proj_parceiro_title: 'Parceiro da Construção',

	proj_parceiro_description:
		'Projetei e construí uma plataforma de treinamento e certificação para a construção civil: cursos online, avaliações automatizadas e certificados digitais, com cerca de 1.500 usuários ativos.',

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
	edu_unimar_description:
		'Universidade de Marília (UNIMAR) — Brasil (Janeiro de 2013 – Dezembro de 2016)',

	edu_harvardX_title:
		'CS50 – Introdução à Inteligência Artificial com Python',
	edu_harvardX_description: 'Harvard University (Fevereiro – Abril de 2025)',

	edu_deepLearning_title:
		'Machine Learning Supervisionado: Regressão e Classificação',
	edu_deepLearning_description: 'Stanford University / DeepLearning.AI',

	edu_futureLearning_title: 'Inglês para Desenvolvimento de Carreira, nível C1',
	edu_futureLearning_description:
		'Future Learning — 25 semanas (Março de 2025 – Julho de 2026)',

	// skills
	'Skills & Technologies': 'Habilidades & Tecnologias',
	'Technical Expertise': 'Conhecimentos Técnicos',

	skills_arch_label: 'Engenharia de Software',
	skills_arch_skills:
		'APIs REST · Microsserviços · Sistemas Orientados a Eventos · Filas Assíncronas · Pagamentos · WebSockets · System Design',

	skills_backend_label: 'Backend',
	skills_backend_skills: 'Node.js · NestJS · Laravel · PHP · Python · Strapi',

	skills_frontend_label: 'Frontend',
	skills_frontend_skills:
		'React · Next.js · React Native · TypeScript · Alpine.js',

	skills_data_label: 'Bancos de Dados & Cache',
	skills_data_skills: 'PostgreSQL · MySQL · Redis',

	skills_cloud_label: 'Cloud & Infraestrutura',
	skills_cloud_skills: 'AWS · Docker · Vercel · Supabase · Bitbucket',

	skills_ai_label: 'Agentes de IA & LLMs',
	skills_ai_skills:
		'LLMs · API da OpenAI · API da Anthropic · MCP · n8n · WAHA · Claude Code',

	'Earlier Experience': 'Experiência Anterior',

	// key achievements
	'Key Achievements': 'Principais Resultados',

	achievements_high_traffic:
		'Desenvolvedor líder de um produto de investimentos que atende 24.000+ usuários por dia e ajudei a escalar uma plataforma de pagamentos até aproximadamente R$6,5 milhões em volume mensal no pico.',

	achievements_business_mindset:
		'Construí fluxos antifraude que, junto com o processo de pós-venda e suporte da empresa, reduziram em mais de 60% os casos de fraude e chargeback.',

	achievements_availability:
		'Baseado em Dublin, Irlanda. Disponível para contratos remotos, meio período ou período integral, com sobreposição de fuso horário europeu e brasileiro.',

	// contact
	'Get in Touch': 'Entre em Contato',
	"Let's Build Something Great": 'Vamos trabalhar juntos',

	contactDescription:
		'Disponível para contratos remotos, meio período ou período integral, com sobreposição de fuso horário europeu e brasileiro. Entre em contato.',

	Location: 'Localização',
	Phone: 'Telefone',

	contactLocationValue: 'Dublin, Irlanda',
	contactPhoneValue: '+353 83 881 8967',

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
