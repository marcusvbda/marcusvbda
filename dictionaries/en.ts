const en: Record<string, string> = {
	// info (CV header)
	info_name: 'Marcus Vinicius Bassalobre de Assis',
	info_email: 'bassalobre.vinicius@gmail.com',
	info_site: 'mvbassalobre.com',
	info_linkedin: 'linkedin.com/in/mvbassalobre',
	info_github: 'github.com/marcusvbda',
	cv_title: 'Software Engineer | Full Stack Developer',

	// navbar
	About: 'About',
	Experience: 'Experience',
	Projects: 'Projects',
	Skills: 'Skills',
	Education: 'Education',
	Contact: 'Contact',

	// hero
	"Hi, I'm": "Hi, I'm",
	location: 'Dublin, Ireland',

	bio: 'I build payment, fintech, and investment products with TypeScript, React, Next.js, Node.js, NestJS, and Laravel. I helped scale a payments platform to R$6.5M (~US$1.3M) a month and lead the technical side of a portfolio product with 24,000+ daily users.',

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
		'Software engineer focused on payments, fintech, and high-volume systems. I work across frontend, APIs, queues, and databases.',

	aboutDescription:
		"I built the core payment platform at Payt, a five-developer team, and helped it grow from MVP to approximately R$6.5M (~US$1.3M) in peak monthly volume. It covered transaction processing, retries, webhooks, provider integrations, asynchronous queues, and anti-fraud workflows.\n\nAt Investidor10 I am technical lead and developer of Carteira, the portfolio product serving 24,000+ users daily. It runs real-time updates over WebSockets with caching and Redis, and uses AI and MCP for bots and intelligent insights. I also contributed to its migration from a Laravel monolith to React 19, Next.js, and an offline-first React Native app, and built the Income Tax product for Brazil's annual tax season.\n\nI work mainly with TypeScript, React, Next.js, Node.js, NestJS, Laravel, and PHP. I also use Claude Code, Cursor, and GitHub Copilot in my development workflow.\n\nI'm based in Dublin, Ireland, and open to remote software engineering roles across full stack, backend, and frontend development.",

	// experience
	'Career Journey': 'Career Journey',
	Present: 'Present',

	exp_investidor10_role: 'Technical Lead & Software Engineer (Contract)',
	exp_investidor10_company: 'Investidor10',
	exp_investidor10_period: 'November 2023 – Present',
	exp_investidor10_location: 'Remote (Based in Dublin)',

	exp_investidor10_description:
		"• Technical lead and developer of Carteira, the platform's main portfolio product, serving 24,000+ users daily.\n• Built real-time updates with WebSockets, caching, and Redis.\n• Integrated AI and MCP to power bots and intelligent insights.\n• Contributed to the migration of Carteira from a Laravel monolith to React 19, Next.js, and an offline-first React Native app.\n• Designed and developed the Income Tax product for Brazil's annual tax season.",

	exp_investidor10_techStack:
		'TypeScript, React 19, Next.js, React Native, Node.js, Laravel, PHP, WebSockets, Redis, MongoDB, MySQL, AWS, Vercel, Supabase, MCP',

	exp_bria_role: 'Software Engineer & Product Developer',
	exp_bria_company: 'BRIA – Brazil Ireland Association',
	exp_bria_period: 'January 2026 – Present',
	exp_bria_location: 'Dublin, Ireland',
	exp_bria_description:
		"• Develop and maintain the association's websites and digital platforms.\n• Build internal tools for its operations and community programmes.\n• Turn requests from the association team into website features and internal tools.",
	exp_bria_techStack:
		'React, Next.js, Vercel, Product Development, Technical Planning',

	exp_vega_role: 'Full Stack Engineer (Part-Time Contract)',
	exp_vega_company: 'Vega Checkout',
	exp_vega_period: 'January 2024 – July 2025',
	exp_vega_location: 'Remote',

	exp_vega_description:
		"• Completed the migration of the legacy ASP.NET MVC checkout system to Laravel and Alpine.js after the company's acquisition by Monetizze. Left before the official production release.\n• Migrated the per-client configurable payment gateway layer, with more than 50 gateway options.",

	exp_vega_techStack: 'PHP, Laravel, Alpine.js, Livewire, Tailwind CSS, MySQL',

	exp_otimize_role: 'Full Stack Engineer (Contract)',
	exp_otimize_company: 'Payt (formerly Otimize)',
	exp_otimize_period: 'October 2018 – October 2023',
	exp_otimize_location: 'Remote',

	exp_otimize_description:
		"• Developed the core payment platform in a team of five developers: transaction processing, retries, webhooks, provider integrations, and asynchronous queues.\n• Helped scale the platform from MVP to approximately R$6.5M (~US$1.3M) in peak monthly transaction volume.\n• Built anti-fraud workflows; together with the company's post-sale and support process, they cut fraud and chargeback cases by more than 60%.\n• Worked with the founders and engineering team to define and ship product features.",

	exp_otimize_techStack:
		'TypeScript, Node.js, NestJS, PHP, Laravel, Vue.js, Nuxt.js, React Native, MongoDB, PostgreSQL, Redis, Supabase',

	exp_diwe_role: 'Full Stack Engineer (Contract)',
	exp_diwe_company: 'DIWE',
	exp_diwe_period: 'June 2021 – April 2024',
	exp_diwe_location: 'Remote',

	exp_diwe_description:
		'• Delivered more than 10 projects for large clients including Unimed, Sonex, Quartzolit, Gerdau, Saint-Gobain, Adidas, Construtora Planeta, Branco, and Intelbras.\n• Designed and developed Parceiro da Construção, a training and certification platform for the construction industry with online courses, automated assessments, digital certificates, and about 1,500 active users.',

	exp_diwe_techStack:
		'TypeScript, Node.js, NestJS, PHP, Laravel, Vue.js, Nuxt.js, Java, Python, MongoDB, PostgreSQL, AWS',

	exp_copysupply_role: 'Full Stack Developer',
	exp_copysupply_company: 'Copy Supply',
	exp_copysupply_period: '2017 – 2018',
	exp_copysupply_location: 'São Paulo, Brazil',
	exp_copysupply_description:
		'• Built ASP.NET web applications backed by databases.',
	exp_copysupply_techStack: 'ASP.NET, Full Stack Development',

	exp_aliveit_role: 'Full Stack Developer',
	exp_aliveit_company: 'Alive IT',
	exp_aliveit_period: '2014 – 2017',
	exp_aliveit_location: 'Marília, São Paulo, Brazil',
	exp_aliveit_description:
		'• Built web applications and CRM systems with PHP and C++.',
	exp_aliveit_techStack: 'PHP, C++, Web Development',

	exp_guess_role: 'Delphi Developer Intern',
	exp_guess_company: 'Guess Soluções em Tecnologia',
	exp_guess_period: '2013 – 2014',
	exp_guess_location: 'Marília, Brazil',
	exp_guess_description: '• Built and maintained Delphi applications.',
	exp_guess_techStack: 'Delphi',

	exp_masterel_role: 'C++ Developer',
	exp_masterel_company: 'Mastersel',
	exp_masterel_period: '2010 – 2013',
	exp_masterel_location: 'Marília, Brazil',
	exp_masterel_description: '• Built and maintained internal C++ applications.',
	exp_masterel_techStack: 'C++',

	// projects
	'Featured Projects': 'Featured Projects',
	"What I've Built": "What I've Built",
	'View Project': 'View Project',

	proj_investidor10_title: 'Investidor10 Platform',

	proj_investidor10_description:
		'Technical lead and developer of Carteira, the Investidor10 portfolio product: real-time updates, caching, and AI-powered insights. Contributed to its migration from a Laravel monolith to React, Next.js, and React Native while it stayed available to existing users.',

	proj_bria_title: 'BRIA - Brazil Ireland Association',

	proj_bria_description:
		"Built BRIA's multilingual website with Next.js and Strapi. I led the technical implementation, including the responsive frontend, SEO, and editable content for events, partners, media, and community programmes.",

	proj_divercity_title: 'Divercity Park',

	proj_divercity_description:
		"Built the website for a children's entertainment venue in a shopping centre. It lists attractions, events, prices, and contact details in a visual style designed for families.",

	proj_vega_title: 'Vega Checkout Platform',

	proj_vega_description:
		'Migrated a checkout platform from ASP.NET MVC to Laravel and Alpine.js after its acquisition by Monetizze, including per-client configurable payment gateways with 50+ options.',

	proj_intelbras_title: 'Intelbras Solar Platform',

	proj_intelbras_description:
		'Built tools for solar panel sizing, ROI calculations, lead capture, and CRM integration for the Intelbras renewable energy platform.',

	proj_parceiro_title: 'Parceiro da Construção',

	proj_parceiro_description:
		'Built course management, certificate tracking, and networking features for a B2B training platform for construction professionals, with about 1,500 active users.',

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
	edu_unimar_description: 'Universidade de Marília (UNIMAR) — Brazil (2016)',

	edu_harvardX_title:
		'CS50 – Introduction to Artificial Intelligence with Python',
	edu_harvardX_description: 'Harvard University (2025)',

	edu_deepLearning_title:
		'Supervised Machine Learning — Regression and Classification',
	edu_deepLearning_description: 'Stanford University / DeepLearning.AI (2025)',

	edu_futureLearning_title: 'English for Career Development Programme',
	edu_futureLearning_description: 'C1 Advanced Level Certified (2025)',

	// skills
	'Skills & Technologies': 'Skills & Technologies',
	'Technical Expertise': 'Technical Expertise',

	skills_arch_label: 'Software Engineering',
	skills_arch_skills:
		'REST APIs · Microservices · Distributed Systems · Payments · System Design · Event-Driven Systems',

	skills_backend_label: 'Backend',
	skills_backend_skills: 'Laravel · Node.js · NestJS · PHP · Python · Java',

	skills_frontend_label: 'Frontend',
	skills_frontend_skills:
		'React · Next.js · Vue.js · Nuxt.js · TypeScript · Tailwind CSS · Alpine.js · Livewire',

	skills_data_label: 'Databases & Performance',
	skills_data_skills:
		'PostgreSQL · MySQL · MongoDB · Redis · Query Optimisation',

	skills_cloud_label: 'Cloud & Infrastructure',
	skills_cloud_skills:
		'AWS · Vercel · Docker · CI/CD · GitFlow · Redis · Supabase',

	skills_ai_label: 'AI-Assisted Development',
	skills_ai_skills:
		'Cursor · Claude Code · GitHub Copilot · OpenAI APIs · LLM Integration',

	'Earlier Experience': 'Earlier Experience',

	// key achievements
	'Key Achievements': 'Key Achievements',

	achievements_high_traffic:
		'Lead the technical side of an investment product serving 24,000+ users daily, and helped scale a payments platform to approximately R$6.5M (~US$1.3M) in peak monthly volume.',

	achievements_business_mindset:
		"Built anti-fraud workflows that, with the company's post-sale and support process, cut fraud and chargeback cases by more than 60%.",

	achievements_availability:
		'Based in Dublin, Ireland and open to remote software engineering opportunities.',

	// contact
	'Get in Touch': 'Get in Touch',
	"Let's Build Something Great": "Let's work together",

	contactDescription:
		'If you are hiring for a remote full stack, backend, or frontend engineering role, get in touch.',

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
