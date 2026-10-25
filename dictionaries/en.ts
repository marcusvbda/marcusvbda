const en: Record<string, string> = {
	// info (CV header)
	info_name: 'Marcus Vinicius Bassalobre de Assis',
	info_email: 'bassalobre.vinicius@gmail.com',
	info_site: 'mvbassalobre.com',
	info_linkedin: 'linkedin.com/in/mvbassalobre',
	info_github: 'github.com/marcusvbda',
	cv_title: 'Full Stack Engineer | AI Agents',

	// navbar
	About: 'About',
	Experience: 'Experience',
	Projects: 'Projects',
	Skills: 'Skills',
	Education: 'Education',
	Contact: 'Contact',

	// hero
	"Hi, I'm": "Hi, I'm",
	hero_role: 'Full Stack Engineer building AI agents',
	location: 'Dublin, Ireland',

	bio: 'Full stack engineer with 13+ years building payment, fintech, and investment products end to end, and today AI agents that run in production. Lead developer of Carteira at Investidor10 (24,000+ daily users) and founder of Gravity Labs.',

	checkCv: 'Check my CV',
	cv_variant_fullstack: 'Full stack',
	cv_variant_backend: 'Backend / payments',
	cv_variant_frontend: 'Frontend / React',
	cta: 'Get in touch',
	'Scroll down to explore': 'Scroll down to explore',

	// about
	'About me': 'About me',
	Summary: 'Summary',

	about:
		'Full stack engineer building payment, fintech, and investment products end to end, and AI agents that run in production.',

	aboutDescription:
		"I have 13+ years building payment, fintech, and investment products end to end, and today AI agents that run in production. At Gravity Labs, the technology and AI consultancy I founded, I help businesses improve their products and processes with custom software, AI automation and agents, social media and digital presence, and AI consulting, delivering what each client needs.\n\nAt Investidor10 I am lead developer and owner of Carteira, the portfolio product serving 24,000+ users daily. I am the most senior engineer on the product and the technical reference for architecture decisions and code review. I built its real-time updates (WebSockets, Redis) and AI/MCP integrations, contributed to its migration from a Laravel monolith to React 19, Next.js, and an offline-first React Native app, and designed the Income Tax product for Brazil's annual tax season.\n\nBefore that I worked on Payt's core payment platform, scaling it from MVP to approximately R$6.5M (~US$1.3M) in peak monthly volume, with anti-fraud workflows that cut fraud and chargebacks by more than 60%. I also built a 50+ provider payment gateway layer at Vega Checkout and delivered 10+ enterprise projects at Diwe for clients such as Unimed, Gerdau, Saint-Gobain, Adidas, and Intelbras.\n\nI work with spec-driven development and AI coding agents (Claude Code) for planning, implementation, and review. My stack is TypeScript, PHP, Python, React, Next.js, React Native, Node.js, NestJS, Laravel, PostgreSQL, MySQL, Redis, AWS, Docker, n8n, the OpenAI and Anthropic APIs, and MCP.\n\nI work as an independent contractor (B2B invoicing), which is why some engagements overlap. I'm based in Dublin, Ireland, and available for remote contract work, part-time or full-time, with European and Brazilian time-zone overlap.",

	// experience
	'Career Journey': 'Career Journey',
	Present: 'Present',

	exp_gravitylabs_role: 'Founder & AI Engineer',
	exp_gravitylabs_company: 'Gravity Labs',
	exp_gravitylabs_period: 'March 2024 – Present',
	exp_gravitylabs_description:
		'• Technology and AI consultancy helping businesses improve their products and processes, delivering what each client needs, from strategy to working software.\n• Custom software development: web platforms, internal tools and integrations, with the stack chosen to fit each project.\n• AI automation and agents: workflows that cut manual work, and customer-service agents on WhatsApp and other channels through the Meta API, built with n8n, Claude and the OpenAI API.\n• Social media and digital presence: content, profiles and brand identity so businesses get found and remembered.\n• AI and technology consulting: where AI really saves time and money in a business, which tools to adopt, and how to put them into day-to-day operations.',

	exp_investidor10_role: 'Senior Full Stack Engineer',
	exp_investidor10_company: 'Investidor10',
	exp_investidor10_period: 'November 2023 – Present',
	exp_investidor10_location: 'Rio de Janeiro, Brazil',

	exp_investidor10_description:
		"• Lead developer and owner of Carteira, the portfolio product serving 24,000+ users daily. Most senior engineer on the product: technical reference for architecture decisions and code review.\n• Built real-time updates (WebSockets, caching, Redis) and AI/MCP integrations for bots and intelligent insights.\n• Contributed to the migration of the product from a Laravel monolith to React 19, Next.js, and an offline-first React Native app.\n• Designed and developed the Income Tax product for Brazil's annual tax season.",

	exp_investidor10_techStack:
		'TypeScript, React 19, Next.js, React Native, Node.js, Laravel, Redis, WebSockets, MCP, OpenAI/Anthropic APIs',

	exp_bria_role: 'Software Engineer & Product Developer',
	exp_bria_company: 'BRIA – Brazil Ireland Association',
	exp_bria_period: 'January 2026 – Present',
	exp_bria_location: 'Dublin, Ireland',
	exp_bria_description:
		"• Software engineer and product developer for BRIA's website and internal tools, supporting its operations and community programmes.\n• Built the multilingual institutional website with Next.js and Strapi: responsive, SEO-friendly, with content the team manages without code.\n• Build internal tools and integrations for the association's operations and community initiatives.\n• Work directly with stakeholders to turn requirements into working software and iterate on real usage and feedback.",
	exp_bria_techStack: 'Next.js, Strapi',

	exp_vega_role: 'Full Stack Engineer',
	exp_vega_company: 'Vega Checkout',
	exp_vega_period: 'January 2024 – July 2025',
	exp_vega_location: 'Barueri, São Paulo, Brazil',

	exp_vega_description:
		'• Completed the migration of the legacy ASP.NET MVC system to Laravel and Alpine.js after the acquisition by Monetizze.\n• Migrated the per-client configurable payment gateway layer, covering 50+ gateway options.\n• Maintained high-volume payment flows and integrations with multiple gateways, focusing on transaction reliability and platform stability.',

	exp_vega_techStack:
		'Laravel, Alpine.js, PHP, payment gateway integrations',

	exp_otimize_role: 'Full Stack Engineer',
	exp_otimize_company: 'Otimize / Payt',
	exp_otimize_period: 'October 2018 – October 2023',
	exp_otimize_location: 'São Paulo, Brazil',

	exp_otimize_description:
		'• Full stack engineer on the core payment platform of a fintech startup, in a team of five developers.\n• Built transaction processing, retries, webhooks, payment provider integrations, and asynchronous queues.\n• Helped scale the platform from MVP to approximately R$6.5M (~US$1.3M) in peak monthly transaction volume.\n• Built anti-fraud workflows that, together with the post-sale and support process, cut fraud and chargeback cases by more than 60%.\n• Worked on microservices, APIs, and event-driven systems for high-volume transaction processing.',

	exp_diwe_role: 'Full Stack Engineer',
	exp_diwe_company: 'DIWE',
	exp_diwe_period: 'June 2021 – April 2024',
	exp_diwe_location: 'Joinville, Santa Catarina, Brazil',

	exp_diwe_description:
		'• Full stack engineer at an enterprise software consultancy serving large Brazilian organisations.\n• Delivered 10+ projects for clients including Unimed, Sonex, Quartzolit, Gerdau, Saint-Gobain, Adidas, Construtora Planeta, Branco, and Intelbras.\n• Designed and built Parceiro da Construção, a training and certification platform for the construction industry (online courses, automated assessments, digital certificates) with about 1,500 active users.\n• Contributed to architecture and system design decisions across multiple technology stacks.',

	exp_umar_role: 'Software Owner (CRM Full Stack Developer)',
	exp_umar_company: 'Universidade de Marília',
	exp_umar_period: 'October 2017 – September 2023',
	exp_umar_location: 'Marília, São Paulo, Brazil',

	exp_copysupply_role: 'Software Developer (ASP.NET MVC)',
	exp_copysupply_company: 'Copy Supply',
	exp_copysupply_period: 'December 2017 – October 2018',
	exp_copysupply_location: 'São Paulo, Brazil',

	exp_aliveit_role: 'Developer (PHP, C++, Firebird)',
	exp_aliveit_company: 'alive it',
	exp_aliveit_period: 'October 2014 – December 2017',
	exp_aliveit_location: 'Marília, São Paulo, Brazil',

	exp_masterel_role: 'C++ Developer',
	exp_masterel_company: 'Mastersel',
	exp_masterel_period: 'October 2010 – October 2013',
	exp_masterel_location: 'Marília, São Paulo, Brazil',

	// projects
	'Featured Projects': 'Featured Projects',
	"What I've Built": "What I've Built",
	'View Project': 'View Project',

	proj_gravitylabs_title: 'Gravity Labs',

	proj_gravitylabs_description:
		'Technology and AI consultancy: custom software, AI automation and agents, social media, and AI and technology consulting.',

	proj_divercity_title: 'Divercity Park',

	proj_divercity_description:
		"WhatsApp AI agent in production that answers prices, hours, and party questions with live data from the park's API, follows strict pricing guardrails, hands conversations to staff with a summary, and logs unanswered questions into a FAQ feedback loop. Also built the park's website with digital party-contract signing and advance tickets with QR validation.",

	proj_talentlabs_title: 'Talent Labs',

	proj_talentlabs_description:
		"In closed beta. Job-search platform for candidates: collects job postings from multiple sources, uses an LLM to extract structured data from each posting (stack, seniority, location, remote), finds the company's recruiting contact, and sends personalized applications from the candidate's own Gmail, with English and Portuguese templates and CVs.",

	proj_trakk_title: 'Trakk',

	proj_trakk_description:
		'Personal goal tracker with an MCP server, so AI assistants like Claude can read and update goals and tasks. Deployed and in daily use.',

	proj_investidor10_title: 'Investidor10 Platform',

	proj_investidor10_description:
		'Lead developer and owner of Carteira, the Investidor10 portfolio product serving 24,000+ users daily: real-time updates (WebSockets, caching, Redis) and AI/MCP integrations. Contributed to its migration from a Laravel monolith to React 19, Next.js, and an offline-first React Native app.',

	proj_bria_title: 'BRIA - Brazil Ireland Association',

	proj_bria_description:
		"Built BRIA's multilingual institutional website with Next.js and Strapi: responsive, SEO-friendly, with content the team manages without code.",

	proj_vega_title: 'Vega Checkout Platform',

	proj_vega_description:
		'Completed the migration of a checkout platform from ASP.NET MVC to Laravel and Alpine.js after its acquisition by Monetizze, and migrated its per-client configurable payment gateway layer, covering 50+ gateway options.',

	proj_intelbras_title: 'Intelbras Solar Platform',

	proj_intelbras_description:
		'Built tools for solar panel sizing, ROI calculations, lead capture, and CRM integration for the Intelbras renewable energy platform.',

	proj_parceiro_title: 'Parceiro da Construção',

	proj_parceiro_description:
		'Designed and built a training and certification platform for the construction industry: online courses, automated assessments, and digital certificates, with about 1,500 active users.',

	proj_tom_title: 'Tom Incorporadora Platform',

	proj_tom_description:
		'Built an admin app for a real estate developer with dashboards, document management, client communications, and project records.',

	proj_inteligenzia_title: 'Inteligenzia Client Portal',

	proj_inteligenzia_description:
		'Built a client portal for Inteligenzia that keeps project status, performance reports, and client-agency messages in one place.',

	proj_mudascarvalho_title: 'Mudas Carvalho Website',

	proj_mudascarvalho_description:
		'Built a website for a family-owned plant nursery in São Paulo state, covering its history, available seedlings, and sustainable growing practices.',

	proj_orazelo_title: 'Orazelo App',

	proj_orazelo_description:
		'Built a Christian mental health and self-knowledge app for Google Play and the App Store, with guided reflections, spiritual content, and personal growth tools.',

	proj_rh99_title: 'RH99 Platform',

	proj_rh99_description:
		'Built a professional network where HR specialists and managers can create profiles, publish posts, discuss topics, and find recruitment opportunities.',

	proj_unimed_title: 'Unimed SJRP Portal',

	proj_unimed_description:
		'Built a service portal for Unimed São José do Rio Preto with plan information and online services for clients, healthcare professionals, and partners.',

	// education
	edu_unimar_title: 'Technologist Degree in Systems Analysis and Development',
	edu_unimar_description:
		'Universidade de Marília (UNIMAR) — Brazil (January 2013 – December 2016)',

	edu_harvardX_title:
		"CS50's Introduction to Artificial Intelligence with Python",
	edu_harvardX_description: 'Harvard University (February – April 2025)',

	edu_deepLearning_title:
		'Supervised Machine Learning: Regression and Classification',
	edu_deepLearning_description: 'Stanford University / DeepLearning.AI',

	edu_futureLearning_title: 'English for Career Development, C1 level',
	edu_futureLearning_description:
		'Future Learning — 25 weeks (March 2025 – July 2026)',

	// skills
	'Skills & Technologies': 'Skills & Technologies',
	'Technical Expertise': 'Technical Expertise',

	skills_arch_label: 'Software Engineering',
	skills_arch_skills:
		'REST APIs · Microservices · Event-Driven Systems · Asynchronous Queues · Payments · WebSockets · System Design',

	skills_backend_label: 'Backend',
	skills_backend_skills: 'Node.js · NestJS · Laravel · PHP · Python · Strapi',

	skills_frontend_label: 'Frontend',
	skills_frontend_skills:
		'React · Next.js · React Native · TypeScript · Alpine.js',

	skills_data_label: 'Databases & Caching',
	skills_data_skills: 'PostgreSQL · MySQL · Redis',

	skills_cloud_label: 'Cloud & Infrastructure',
	skills_cloud_skills: 'AWS · Docker · Vercel · Supabase · Bitbucket',

	skills_ai_label: 'AI Agents & LLMs',
	skills_ai_skills:
		'LLMs · OpenAI API · Anthropic API · MCP · n8n · WAHA · Claude Code',

	'Earlier Experience': 'Earlier Experience',

	// key achievements
	'Key Achievements': 'Key Achievements',

	achievements_high_traffic:
		'Lead developer of an investment product serving 24,000+ users daily, and helped scale a payments platform to approximately R$6.5M (~US$1.3M) in peak monthly volume.',

	achievements_business_mindset:
		"Built anti-fraud workflows that, with the company's post-sale and support process, cut fraud and chargeback cases by more than 60%.",

	achievements_availability:
		'Based in Dublin, Ireland. Available for remote contract work, part-time or full-time, with European and Brazilian time-zone overlap.',

	// contact
	'Get in Touch': 'Get in Touch',
	"Let's Build Something Great": "Let's work together",

	contactDescription:
		'Available for remote contract work, part-time or full-time, with European and Brazilian time-zone overlap. Get in touch.',

	Location: 'Location',
	Phone: 'Phone',

	contactLocationValue: 'Dublin, Ireland',
	contactPhoneValue: '+353 83 881 8967',

	// download CV
	'Error generating PDF. Please try again.':
		'Error generating PDF. Please try again.',

	'Generating your CV...': 'Generating your CV...',
	'Starting download...': 'Starting download...',

	// footer
	'All rights reserved': 'All rights reserved',

	'Built with React, TypeScript & Tailwind CSS':
		'Built with React, TypeScript & Tailwind CSS',

	// misc
	Email: 'Email',
};

export default en;
