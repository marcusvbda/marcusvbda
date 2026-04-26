const en: Record<string, string> = {
	// info (CV header)
	info_name: 'Marcus Vinicius Bassalobre de Assis',
	info_email: 'bassalobre.vinicius@gmail.com',
	info_site: 'mvbassalobre.com',
	info_linkedin: 'linkedin.com/in/mvbassalobre',
	info_github: 'github.com/marcusvbda',
	cv_title: 'Senior Fullstack Engineer | Fintech & High-Scale Systems',

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

	bio: 'Senior Fullstack Engineer with 15+ years of experience building and scaling high-traffic fintech and SaaS platforms. Led backend development of one of Latin America\'s largest investment platforms serving 65K+ investors. Strong track record improving system performance, scalability, and reliability across backend, frontend, and cloud.',

	checkCv: 'Check my CV',
	cta: 'Get in touch',
	'Scroll down to explore': 'Scroll down to explore',

	// about
	'About me': 'About me',
	Summary: 'Summary',

	about:
		'Senior Fullstack Engineer with 15+ years of experience designing and scaling high-traffic systems for fintech and SaaS platforms.',

	aboutDescription:
		"I'm a Senior Fullstack Engineer with over 15 years of experience building and scaling complex systems across backend, frontend, and cloud environments, especially in fintech and high-traffic digital platforms.\n\nI've led the backend development of Carteira by Investidor10, one of Latin America's largest investment portfolio platforms serving 65K+ investors — reducing API latency by 60% and improving user engagement by 40% through the 2026 Annual Income Tax Return module.\n\nThroughout my career I've worked across software architecture, high-performance APIs, distributed systems, databases, cloud infrastructure, and user-facing applications. I focus on improving system performance, reducing infrastructure costs, and delivering scalable and reliable products.\n\nI'm currently based in Dublin, Ireland, and eligible to work here under the Critical Skills Employment Permit.",

	// experience
	'Career Journey': 'Career Journey',
	Present: 'Present',

	exp_investidor10_role: 'Senior Software Engineer',
	exp_investidor10_company: 'Investidor10 (Fintech Platform)',
	exp_investidor10_period: 'November 2023 – Present',
	exp_investidor10_location: 'Remote (based in Dublin)',

	exp_investidor10_description:
		'• Led backend development of Carteira, one of Latin America\'s largest investment portfolio platforms serving 65K+ investors.\n• Reduced API latency by 60% through Redis caching and query optimisation.\n• Architected the 2026 Annual Income Tax Return module improving user engagement by 40%.\n• Improved reliability and performance of critical financial data APIs.',

	exp_talentsieve_role: 'Senior Software Engineer – Founder',
	exp_talentsieve_company: 'TalentSieve (AI-powered Recruitment Platform)',
	exp_talentsieve_period: 'January 2025 – Present',
	exp_talentsieve_location: 'Independent Project',

	exp_talentsieve_description:
		'• Built an end-to-end SaaS platform covering backend, frontend, AI integration, and cloud infrastructure.\n• Designed and implemented system architecture, including candidate screening pipelines and real-time analytics dashboards.\n• Developed AI-driven workflows using LLMs while ensuring compliance with GDPR and the EU AI Act.\n• Led product design decisions, focusing on user experience, automation, and scalable architecture.',

	exp_vega_role: 'Senior Software Engineer',
	exp_vega_company: 'Vega Checkout / Payt (Fintech)',
	exp_vega_period: 'October 2018 – October 2023',
	exp_vega_location: 'Brazil',

	exp_vega_description:
		'• Built and maintained backend services supporting high-volume fintech payment transactions processing millions of euros monthly.\n• Led migration from legacy monolithic architecture to scalable microservices.\n• Mentored 10+ developers and established strong code review and CI/CD practices.\n• Reduced production incidents by 35% through improved reliability and engineering standards.\n• Collaborated with product and engineering teams to deliver scalable checkout and analytics solutions.',

	exp_diwe_role: 'Senior Software Engineer',
	exp_diwe_company: 'DIWE',
	exp_diwe_period: 'June 2021 – July 2024',
	exp_diwe_location: 'Joinville, Brazil (Remote)',

	exp_diwe_description:
		'• Lead engineer responsible for a university management platform, significantly improving academic and administrative workflows.\n• Designed backend architecture for automated student scheduling and administrative management.\n• Built scalable modules for student and institutional operations, improving efficiency across departments.\n• Collaborated with cross-functional teams to deliver reliable enterprise software serving thousands of users.',

	exp_investidor10_techStack: 'PHP, Laravel, React, NestJS, Redis, PostgreSQL',
	exp_talentsieve_techStack: 'NestJS, Next.js, AWS, TypeScript',

	exp_bria_role: 'Lead Product Manager (Volunteer)',
	exp_bria_company: 'BRIA – Brazil Ireland Association',
	exp_bria_period: 'April 2026 – Present',
	exp_bria_location: 'Dublin, Ireland',
	exp_bria_description:
		'• Defining product strategy and stakeholder alignment for digital initiatives supporting the Brazilian community in Ireland.\n• Guiding cross-functional teams on feature prioritisation, UX improvements, and delivery of community solutions.\n• Bridging product thinking and technology to drive community engagement and digital experience.',
	exp_bria_techStack: 'Product Strategy, Agile, Digital Products',
	exp_vega_techStack: 'PHP, Laravel, Node.js, AWS, Docker',
	exp_diwe_techStack: 'Node.js, PHP, Laravel',

	exp_unimar_role: 'Software Owner — CRM Fullstack Developer',
	exp_unimar_company: 'Universidade de Marília',
	exp_unimar_period: '2017 – September 2023',
	exp_unimar_location: 'Marília, Brazil',
	exp_unimar_description:
		'• Built and maintained web platforms, CRM systems and enterprise applications across multiple industries.\n• Owned the full software lifecycle: architecture, backend APIs, database design, and user-facing features.\n• Delivered fullstack solutions serving students and institutional stakeholders.',
	exp_unimar_techStack: 'PHP, Laravel, JavaScript, MySQL',

	exp_copysupply_role: 'Software Developer',
	exp_copysupply_company: 'Copy Supply',
	exp_copysupply_period: 'December 2017 – October 2018',
	exp_copysupply_location: 'São Paulo, Brazil',
	exp_copysupply_description:
		'• Built web platforms and enterprise applications focused on backend development and database-driven systems.',
	exp_copysupply_techStack: 'ASP.NET MVC, C#',

	exp_aliveit_role: 'Developer',
	exp_aliveit_company: 'alive it',
	exp_aliveit_period: '2014 – December 2017',
	exp_aliveit_location: 'São Paulo, Brazil',
	exp_aliveit_description:
		'• Built web platforms, CRM systems and enterprise applications across multiple industries.\n• Focused on backend development, APIs and database-driven systems.',
	exp_aliveit_techStack: 'PHP, C++, Firebird',

	exp_guess_role: 'Software Engineering Intern',
	exp_guess_company: 'Guess Soluções em Tecnologia',
	exp_guess_period: '2013 – 2014',
	exp_guess_location: 'Marília, Brazil',
	exp_guess_description:
		'• Early career experience in technology and software development.',
	exp_guess_techStack: 'Delphi',

	exp_masterel_role: 'C++ Developer',
	exp_masterel_company: 'Masterel',
	exp_masterel_period: '2010 – 2013',
	exp_masterel_location: 'Marília, Brazil',
	exp_masterel_description:
		'• Early career development of enterprise applications and software systems.',
	exp_masterel_techStack: 'C++',

	// projects
	'Featured Projects': 'Featured Projects',
	"What I've Built": "What I've Built",
	'View Project': 'View Project',

	proj_talentsieve_title: 'TalentSieve AI Platform',

	proj_talentsieve_description:
		'AI-powered recruitment platform designed to automate candidate screening and hiring workflows. Built using NestJS, Next.js and AWS with LLM integration, analytics dashboards and human-in-the-loop explainability aligned with EU AI Act and GDPR.',

	proj_investidor10_title: 'Investidor10 Platform',

	proj_investidor10_description:
		'Platform architecture improvements and performance optimisation for one of Brazil’s largest investment research platforms serving 65K+ users. Delivered scalable systems and improved performance across financial data services.',

	proj_vega_title: 'Vega Checkout Platform',

	proj_vega_description:
		'Fintech checkout system designed to process high-volume ecommerce transactions with high reliability, scalability, and optimised user experience.',

	// education
	edu_unimar_title: 'BSc in Systems Analysis and Development',
	edu_unimar_description: 'Universidade de Marília — Brazil',

	edu_harvardX_title: 'CS50 – Introduction to Computer Science',
	edu_harvardX_description: 'Harvard University (2025)',

	edu_deepLearning_title: 'Supervised Machine Learning',
	edu_deepLearning_description: 'Stanford Online / DeepLearning.AI (2025)',

	edu_futureLearning_title: 'Advanced English',
	edu_futureLearning_description: 'Future Learning Ireland — Dublin (2025)',

	// skills
	'Skills & Technologies': 'Skills & Technologies',
	'Technical Expertise': 'Technical Expertise',

	skills_backend_label: 'Backend',

	skills_backend_skills: 'Laravel · Node.js · NestJS · PHP · Python · Go',

	skills_cloud_label: 'Cloud & Infrastructure',

	skills_cloud_skills: 'AWS · Docker · CI/CD · Microservices',

	skills_data_label: 'Databases & Performance',

	skills_data_skills: 'PostgreSQL · Redis · Query Optimization · ElasticSearch',

	skills_frontend_label: 'Frontend & Others',

	skills_frontend_skills:
		'React · Next.js · TypeScript · TailwindCSS · LLM Integration · OpenAI APIs · Vector Databases',

	'Earlier Experience': 'Earlier Experience',

	// key achievements
	'Key Achievements': 'Key Achievements',

	achievements_high_traffic:
		'Experience building and scaling high-traffic platforms used by millions of users.',

	achievements_business_mindset:
		'Strong focus on performance optimisation, system reliability and infrastructure cost reduction.',

	achievements_availability:
		'Based in Dublin and available for technical interviews.',

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
