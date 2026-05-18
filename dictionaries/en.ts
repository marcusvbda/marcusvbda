const en: Record<string, string> = {
	// info (CV header)
	info_name: 'Marcus Vinicius Bassalobre de Assis',
	info_email: 'bassalobre.vinicius@gmail.com',
	info_site: 'mvbassalobre.com',
	info_linkedin: 'linkedin.com/in/mvbassalobre',
	info_github: 'github.com/marcusvbda',
	cv_title: 'Senior AI-First Software Engineer | Software Architect',

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

	bio: 'Senior AI-First Software Engineer with 13+ years of experience designing, modernising, and scaling financial systems, e-commerce platforms, and high-availability web applications. Specialist in AI-First engineering culture, combining deep software architecture expertise with advanced LLM orchestration to accelerate delivery and raise engineering productivity.',

	checkCv: 'Check my CV',
	cta: 'Get in touch',
	'Scroll down to explore': 'Scroll down to explore',

	// about
	'About me': 'About me',
	Summary: 'Summary',

	about:
		'Senior AI-First Software Engineer with 13+ years of experience designing and scaling high-availability systems for fintech, e-commerce, and enterprise platforms.',

	aboutDescription:
		"AI-First Development: I leverage advanced AI agents and LLMs (Cursor, Claude Code, GitHub Copilot) to accelerate delivery, optimise code quality, and raise engineering productivity across the full stack.\n\nRemote Mastery: I have operated in fully remote environments for over 6 years, mastering asynchronous collaboration and ensuring distributed engineering success.\n\nArchitectural Rigor: Proven track record in technical leadership, architectural decision-making, and developer mentorship across fintech, payments, and enterprise software.\n\nCurrently based in Dublin and eligible to work in Ireland under the Critical Skills Employment Permit.",

	// experience
	'Career Journey': 'Career Journey',
	Present: 'Present',

	exp_investidor10_role: 'Senior AI-First Software Engineer',
	exp_investidor10_company: 'Investidor10',
	exp_investidor10_period: 'November 2023 – Present',
	exp_investidor10_location: 'Remote (Based in Dublin)',

	exp_investidor10_description:
		'• Led the modernisation and migration of one of the company\'s most critical financial products, transforming a Laravel monolith into a modern offline-first architecture using Next.js.\n• Defined caching strategies, data synchronisation, and offline-first workflows to significantly improve user experience on a high-traffic investment platform serving thousands of simultaneous users.\n• Architected and implemented scalable microservices, queue-based messaging systems, real-time data pipelines, and advanced performance optimisation workflows.\n• Contributed directly to an approximately 15% increase in paid user conversion following the launch of the redesigned portfolio experience.\n• Maximised team efficiency through practical AI-assisted engineering workflows using Cursor and LLMs, reducing delivery time and mitigating human error.',

	exp_investidor10_techStack:
		'Laravel, React, Next.js, TypeScript, Tailwind CSS, AWS, Redis, Vercel, MySQL, CI/CD, GitFlow',

	exp_bria_role: 'Volunteer Technology Project Manager',
	exp_bria_company: 'BRIA – Brazil Ireland Association',
	exp_bria_period: 'January 2026 – Present',
	exp_bria_location: 'Dublin, Ireland',
	exp_bria_description:
		'• Coordinates the development and maintenance of the association\'s websites, landing pages, and digital platforms.\n• Supports technical planning, product roadmap organisation, and technology delivery execution.\n• Mentors volunteer developers, guiding architectural decisions and engineering best practices.',
	exp_bria_techStack: 'Vercel, Product Planning, Technical Mentorship',

	exp_vega_role: 'Senior Software Engineer',
	exp_vega_company: 'Vega Checkout',
	exp_vega_period: 'January 2024 – July 2025',
	exp_vega_location: 'Remote',

	exp_vega_description:
		'• Maintained and optimised scalable, resilient payment flows integrated with multiple market-leading payment gateways for high-volume e-commerce operations.\n• Improved transaction reliability and overall platform stability under peak traffic scenarios.\n• Supported engineering team growth through rigorous code reviews, best practice dissemination, and individual mentorship.\n• Developed robust Laravel applications for the e-commerce ecosystem and digital marketing automation pipelines.',

	exp_vega_techStack: 'Laravel, PHP, Alpine.js, Livewire, Tailwind CSS, MySQL, GitFlow',

	exp_otimize_role: 'Senior Software Engineer / Tech Lead',
	exp_otimize_company: 'Payt (formerly Otimize)',
	exp_otimize_period: 'October 2018 – October 2023',
	exp_otimize_location: 'Remote',

	exp_otimize_description:
		'• Joined as the company\'s first software engineer, solely responsible for defining the engineering foundations and initial platform architecture from zero.\n• Built and scaled payment and e-commerce platforms from the ground up, which grew to process millions in monthly transactions.\n• Designed and implemented robust anti-fraud systems, webhook-based architectures, queue systems, and asynchronous processing workflows.\n• Architected scalable microservices and complex, secure integrations with multiple payment gateways.\n• Provided technical leadership and mentored the development team as the engineering organisation scaled.',

	exp_otimize_techStack:
		'Laravel, Vue.js, Nuxt.js, Node.js, NestJS, Python, MongoDB, PostgreSQL, Redis, Supabase',

	exp_diwe_role: 'Senior Full Stack Software Engineer',
	exp_diwe_company: 'DIWE',
	exp_diwe_period: 'June 2021 – April 2024',
	exp_diwe_location: 'Remote',

	exp_diwe_description:
		'• Delivered scalable enterprise systems for major corporations including Gerdau, Unimed, and Saint-Gobain across healthcare and heavy industry sectors.\n• Operated across multiple technical ecosystems (PHP, Node.js, Java, TypeScript, Python), navigating stack diversity with confidence and adaptability.\n• Actively contributed to corporate architecture discussions and the planning of new modules and microservices.',

	exp_diwe_techStack:
		'Laravel, Node.js, NestJS, Vue.js, Nuxt.js, TypeScript, Python, Java, AWS, MongoDB, PostgreSQL',

	exp_copysupply_role: 'Full Stack Developer',
	exp_copysupply_company: 'Copy Supply',
	exp_copysupply_period: '2017 – 2018',
	exp_copysupply_location: 'São Paulo, Brazil',
	exp_copysupply_description:
		'• Built web platforms and enterprise applications focused on full stack development and database-driven systems.',
	exp_copysupply_techStack: 'ASP.NET, Full Stack Development',

	exp_aliveit_role: 'Full Stack Developer',
	exp_aliveit_company: 'Alive IT',
	exp_aliveit_period: '2014 – 2017',
	exp_aliveit_location: 'Marília, São Paulo, Brazil',
	exp_aliveit_description:
		'• Built web platforms, CRM systems and enterprise applications across multiple industries.\n• Focused on full stack development, APIs and database-driven systems.',
	exp_aliveit_techStack: 'PHP, C++, Web Development',

	exp_guess_role: 'Delphi Developer Intern',
	exp_guess_company: 'Guess Soluções em Tecnologia',
	exp_guess_period: '2013 – 2014',
	exp_guess_location: 'Marília, Brazil',
	exp_guess_description:
		'• Early career experience in technology and software development.',
	exp_guess_techStack: 'Delphi',

	exp_masterel_role: 'C++ Developer',
	exp_masterel_company: 'Mastersel',
	exp_masterel_period: '2010 – 2013',
	exp_masterel_location: 'Marília, Brazil',
	exp_masterel_description:
		'• Early career development of enterprise applications and software systems.',
	exp_masterel_techStack: 'C++',

	// projects
	'Featured Projects': 'Featured Projects',
	"What I've Built": "What I've Built",
	'View Project': 'View Project',

	proj_investidor10_title: 'Investidor10 Platform',

	proj_investidor10_description:
		'Architecture modernisation and performance optimisation for one of Brazil\'s largest investment research platforms. Led migration from a Laravel monolith to an offline-first Next.js architecture, delivering scalable systems and improved user experience for a high-traffic financial platform.',

	proj_vega_title: 'Vega Checkout Platform',

	proj_vega_description:
		'Fintech checkout system designed to process high-volume e-commerce transactions with high reliability, scalability, and optimised user experience. Built with resilient payment gateway integrations and performance-first architecture.',

	// education
	edu_unimar_title: 'Technologist Degree in Systems Analysis and Development',
	edu_unimar_description: 'Universidade de Marília (UNIMAR) — Brazil (2016)',

	edu_harvardX_title: 'CS50 – Introduction to Artificial Intelligence with Python',
	edu_harvardX_description: 'Harvard University (2025)',

	edu_deepLearning_title: 'Supervised Machine Learning — Regression and Classification',
	edu_deepLearning_description: 'Stanford University / DeepLearning.AI (2025)',

	edu_futureLearning_title: 'English for Career Development Programme',
	edu_futureLearning_description: 'C1 Advanced Level Certified (2025)',

	// skills
	'Skills & Technologies': 'Skills & Technologies',
	'Technical Expertise': 'Technical Expertise',

	skills_backend_label: 'Backend',
	skills_backend_skills: 'Laravel · Node.js · NestJS · PHP · Python · Java',

	skills_cloud_label: 'Cloud & Infrastructure',
	skills_cloud_skills: 'AWS · Vercel · Docker · CI/CD · GitFlow · Microservices · Redis · Supabase',

	skills_data_label: 'Databases & Performance',
	skills_data_skills: 'PostgreSQL · MySQL · MongoDB · Redis · Query Optimisation',

	skills_frontend_label: 'Frontend',
	skills_frontend_skills:
		'React · Next.js · Vue.js · Nuxt.js · TypeScript · Tailwind CSS · Alpine.js · Livewire',

	skills_ai_label: 'AI & LLMs',
	skills_ai_skills:
		'LLM Orchestration · Cursor · Claude Code · GitHub Copilot · OpenAI APIs · AI-First Development',

	'Earlier Experience': 'Earlier Experience',

	// key achievements
	'Key Achievements': 'Key Achievements',

	achievements_high_traffic:
		'Experience building and scaling high-traffic platforms processing millions of transactions for thousands of simultaneous users.',

	achievements_business_mindset:
		'Strong focus on AI-First development, performance optimisation, system reliability, and distributed architecture.',

	achievements_availability:
		'Based in Dublin and available for technical interviews under the Critical Skills Employment Permit.',

	// contact
	'Get in Touch': 'Get in Touch',
	"Let's Build Something Great": "Let's Build Something Great",

	contactDescription:
		"I'm always open to discussing software engineering challenges, fintech platforms, and scalable system architecture.",

	Location: 'Location',
	Phone: 'Phone',

	contactLocationValue: 'Dublin, Ireland',
	contactPhoneValue: '+353 083 881 8967',

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
