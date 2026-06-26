const en: Record<string, string> = {
	// info (CV header)
	info_name: 'Marcus Vinicius Bassalobre de Assis',
	info_email: 'bassalobre.vinicius@gmail.com',
	info_site: 'mvbassalobre.com',
	info_linkedin: 'linkedin.com/in/mvbassalobre',
	info_github: 'github.com/marcusvbda',
	cv_title: 'Senior Software Engineer | Software Architect',

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

	bio: 'Senior Software Engineer and Software Architect with 13+ years of experience designing, modernising, and scaling financial systems, payment platforms, and high-availability distributed applications. Deep expertise in backend architecture, technical leadership, and full stack delivery across fintech and enterprise environments.',

	checkCv: 'Check my CV',
	cta: 'Get in touch',
	'Scroll down to explore': 'Scroll down to explore',

	// about
	'About me': 'About me',
	Summary: 'Summary',

	about:
		'Senior Software Engineer and Software Architect with 13+ years of experience designing and scaling high-availability systems for fintech, payments, and enterprise platforms.',

	aboutDescription:
		'Architectural Depth: Proven track record in technical leadership, architectural decision-making, and defining engineering foundations across fintech, payments, and enterprise software.\n\nFull Stack Delivery: 13+ years of hands-on experience across backend, frontend, and infrastructure — from distributed systems and payment pipelines to leading teams through complex modernisation projects.\n\nAI-Assisted Development: I use AI tools (Cursor, Claude Code, GitHub Copilot) as productivity and quality multipliers to accelerate delivery and reduce engineering overhead.\n\nRemote & Global: Over 6 years operating fully remote, including relocation to Dublin. Currently eligible to work in Ireland under the Critical Skills Employment Permit.',

	// experience
	'Career Journey': 'Career Journey',
	Present: 'Present',

	exp_investidor10_role: 'Senior Software Engineer — Technical Reference',
	exp_investidor10_company: 'Investidor10',
	exp_investidor10_period: 'November 2023 – Present',
	exp_investidor10_location: 'Remote (Based in Dublin)',

	exp_investidor10_description:
		"• Sole engineer responsible for Carteira, the platform's flagship portfolio product serving 24,000+ active users across free and paid tiers.\n• Led the full re-architecture of Carteira from a Laravel monolith into a standalone React 19 + Next.js + React Native offline-first application, delivering ~75% reduction in page load time and ~60% reduction in API latency through Redis caching and query optimisation.\n• Achieved ~80% reduction in redundant API requests via React Query client-side caching and ~52% increase in free-to-paid conversions within 6 months of release.\n• Designed and shipped the Income Tax module, increasing user engagement by ~40%.\n• Serves as senior technical reference for the Carteira team, owning architecture decisions, leading code reviews, and mentoring engineers.",

	exp_investidor10_techStack:
		'TypeScript, React 19, Next.js, React Native, Node.js, Laravel, PHP, MongoDB, MySQL, Redis, AWS, Vercel, Supabase',

	exp_bria_role: 'Volunteer Technology Project Manager',
	exp_bria_company: 'BRIA – Brazil Ireland Association',
	exp_bria_period: 'January 2026 – Present',
	exp_bria_location: 'Dublin, Ireland',
	exp_bria_description:
		"• Coordinates the development and maintenance of the association's websites, landing pages, and digital platforms.\n• Supports technical planning, product roadmap organisation, and technology delivery execution.\n• Mentors volunteer developers, guiding architectural decisions and engineering best practices.",
	exp_bria_techStack: 'Vercel, Product Planning, Technical Mentorship',

	exp_vega_role: 'Senior Full Stack Engineer (Part-Time Contract)',
	exp_vega_company: 'Vega Checkout',
	exp_vega_period: 'January 2024 – July 2025',
	exp_vega_location: 'Remote',

	exp_vega_description:
		'• Maintained and optimised high-volume payment flows integrated with multiple payment gateways, improving reliability and platform stability.\n• Supported code quality through peer reviews and architectural improvements.',

	exp_vega_techStack: 'PHP, Laravel, Tailwind CSS, MySQL',

	exp_otimize_role: 'Senior Software Engineer / Tech Lead',
	exp_otimize_company: 'Payt (formerly Otimize)',
	exp_otimize_period: 'October 2018 – October 2023',
	exp_otimize_location: 'Remote',

	exp_otimize_description:
		'• First engineer hired — designed and built the entire platform architecture from scratch, then grew and led the engineering team to 4 engineers.\n• Built payment processing systems with anti-fraud workflows, queue-based transaction handling, and webhook-driven flows integrated across multiple payment gateways.\n• Scaled the platform to process roughly €800K/month in regular transaction volume, peaking at ~€6.5M/month across all merchants.\n• Set technical direction, ran code reviews, and mentored engineers as the company scaled.',

	exp_otimize_techStack:
		'TypeScript, Node.js, NestJS, PHP, Laravel, Vue.js, Nuxt.js, React Native, MongoDB, PostgreSQL, Redis, Supabase',

	exp_diwe_role: 'Senior Full Stack Software Engineer',
	exp_diwe_company: 'DIWE',
	exp_diwe_period: 'June 2021 – April 2024',
	exp_diwe_location: 'Remote',

	exp_diwe_description:
		'• Delivered enterprise software for major clients including Gerdau, Unimed, Saint-Gobain, and Intelbras across healthcare, manufacturing, and industrial sectors.\n• Built a training and certification platform for the civil construction industry with structured courses, assessments, and automatically issued digital certificates.\n• Contributed to architecture decisions and system design across multiple concurrent projects.',

	exp_diwe_techStack:
		'TypeScript, Node.js, NestJS, PHP, Laravel, Vue.js, Nuxt.js, Java, Python, MongoDB, PostgreSQL, AWS',

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
		"Architecture modernisation and performance optimisation for one of Brazil's largest investment research platforms. Led migration from a Laravel monolith to an offline-first Next.js architecture, delivering scalable systems and improved user experience for a high-traffic financial platform.",

	proj_vega_title: 'Vega Checkout Platform',

	proj_vega_description:
		'Fintech checkout system designed to process high-volume e-commerce transactions with high reliability, scalability, and optimised user experience. Built with resilient payment gateway integrations and performance-first architecture.',

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

	skills_arch_label: 'Architecture & Leadership',
	skills_arch_skills:
		'Software Architecture · Distributed Systems · Payments · Microservices · Technical Leadership · System Design',

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
		'Experience building and scaling high-traffic platforms processing millions of transactions for thousands of simultaneous users.',

	achievements_business_mindset:
		'Strong focus on software architecture, system reliability, distributed systems, and performance optimisation across fintech and enterprise platforms.',

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
