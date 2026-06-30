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

	bio: "I'm a software engineer with 13+ years of experience, most of it spent on fintech and payment platforms where uptime and correctness actually matter. I design backend architecture, lead technical decisions, and still write code daily — across the full stack.",

	checkCv: 'Check my CV',
	cta: 'Get in touch',
	'Scroll down to explore': 'Scroll down to explore',

	// about
	'About me': 'About me',
	Summary: 'Summary',

	about:
		'I build and rebuild systems that need to stay up: fintech platforms, payment pipelines, high-traffic applications. Most of my career has been spent as the engineer who ends up owning architecture decisions, not just executing them.',

	aboutDescription:
		"Architecture & Technical Leadership: I've been the first engineer, the sole engineer, or the technical reference on most teams I've worked with — which means architecture decisions, code reviews, and mentoring have been part of the job, not extras.\n\nFull Stack, by necessity: 13+ years across backend, frontend, and infrastructure. I've worked on distributed systems and payment processing as much as on React interfaces — usually on the same project.\n\nAI tools as part of the workflow: I use Claude Code, Cursor, and GitHub Copilot daily, the same way I'd use any other tool that makes the work faster without lowering the bar.\n\nRemote, for real: 6+ years working fully remote, including relocating to Dublin. Eligible to work in Ireland under the Critical Skills Employment Permit.",

	// experience
	'Career Journey': 'Career Journey',
	Present: 'Present',

	exp_investidor10_role: 'Senior Software Engineer — Technical Reference',
	exp_investidor10_company: 'Investidor10',
	exp_investidor10_period: 'November 2023 – Present',
	exp_investidor10_location: 'Remote (Based in Dublin)',

	exp_investidor10_description:
		"• Sole engineer on Carteira, the platform's flagship portfolio product, used by 24,000+ active subscribers across free and paid tiers.\n• Re-architected Carteira from a Laravel monolith into a standalone React 19 + Next.js + React Native offline-first application — page loads went from noticeably slow to near-instant, and API latency dropped enough that Redis caching paid for itself within weeks.\n• Rebuilt client-side data fetching around React Query, cutting redundant API calls dramatically and contributing to a meaningful jump in free-to-paid conversions after launch.\n• Designed and shipped the Income Tax module from scratch, now one of the most-used features during tax season.\n• Acts as the technical reference for the Carteira team: architecture calls, code reviews, mentoring.",

	exp_investidor10_techStack:
		'TypeScript, React 19, Next.js, React Native, Node.js, Laravel, PHP, MongoDB, MySQL, Redis, AWS, Vercel, Supabase',

	exp_bria_role: 'Volunteer Technology Project Manager',
	exp_bria_company: 'BRIA – Brazil Ireland Association',
	exp_bria_period: 'January 2026 – Present',
	exp_bria_location: 'Dublin, Ireland',
	exp_bria_description:
		"• Coordinate development and maintenance of the association's websites and digital platforms.\n• Handle technical planning and roadmap organisation for ongoing projects.\n• Mentor volunteer developers on architecture and engineering practices.",
	exp_bria_techStack: 'Vercel, Product Planning, Technical Mentorship',

	exp_vega_role: 'Senior Full Stack Engineer (Part-Time Contract)',
	exp_vega_company: 'Vega Checkout',
	exp_vega_period: 'January 2024 – July 2025',
	exp_vega_location: 'Remote',

	exp_vega_description:
		'• Maintained and improved high-volume payment flows across multiple payment gateways, with a focus on reliability and platform stability.\n• Supported code quality through peer reviews and ongoing architectural cleanup.',

	exp_vega_techStack: 'PHP, Laravel, Tailwind CSS, MySQL',

	exp_otimize_role: 'Senior Software Engineer / Tech Lead',
	exp_otimize_company: 'Payt (formerly Otimize)',
	exp_otimize_period: 'October 2018 – October 2023',
	exp_otimize_location: 'Remote',

	exp_otimize_description:
		'• First engineer hired. Designed the platform architecture from a blank slate, then grew and led the engineering team to 4 people.\n• Built the payment processing core: anti-fraud workflows, queue-based transaction handling, and webhook integrations across several payment gateways.\n• Scaled the platform from handling a few transactions a month to processing around R$800K/month in regular volume, with peaks near R$6.5M/month across all merchants.\n• Set technical direction for the team, ran code reviews, and mentored engineers as the company grew.',

	exp_otimize_techStack:
		'TypeScript, Node.js, NestJS, PHP, Laravel, Vue.js, Nuxt.js, React Native, MongoDB, PostgreSQL, Redis, Supabase',

	exp_diwe_role: 'Senior Full Stack Software Engineer',
	exp_diwe_company: 'DIWE',
	exp_diwe_period: 'June 2021 – April 2024',
	exp_diwe_location: 'Remote',

	exp_diwe_description:
		'• Delivered software for enterprise clients including Gerdau, Unimed, Saint-Gobain, and Intelbras, spanning healthcare, manufacturing, and industrial sectors.\n• Built a training and certification platform for the civil construction industry, with courses, assessments, and automatic digital certificate issuance.\n• Worked on architecture and system design across several concurrent projects.',

	exp_diwe_techStack:
		'TypeScript, Node.js, NestJS, PHP, Laravel, Vue.js, Nuxt.js, Java, Python, MongoDB, PostgreSQL, AWS',

	exp_copysupply_role: 'Full Stack Developer',
	exp_copysupply_company: 'Copy Supply',
	exp_copysupply_period: '2017 – 2018',
	exp_copysupply_location: 'São Paulo, Brazil',
	exp_copysupply_description:
		'• Built web platforms and enterprise applications, mostly focused on full stack development and database-driven systems.',
	exp_copysupply_techStack: 'ASP.NET, Full Stack Development',

	exp_aliveit_role: 'Full Stack Developer',
	exp_aliveit_company: 'Alive IT',
	exp_aliveit_period: '2014 – 2017',
	exp_aliveit_location: 'Marília, São Paulo, Brazil',
	exp_aliveit_description:
		'• Built web platforms, CRM systems, and enterprise applications across different industries.\n• Worked across full stack development, APIs, and database-driven systems.',
	exp_aliveit_techStack: 'PHP, C++, Web Development',

	exp_guess_role: 'Delphi Developer Intern',
	exp_guess_company: 'Guess Soluções em Tecnologia',
	exp_guess_period: '2013 – 2014',
	exp_guess_location: 'Marília, Brazil',
	exp_guess_description: '• First real experience in software development.',
	exp_guess_techStack: 'Delphi',

	exp_masterel_role: 'C++ Developer',
	exp_masterel_company: 'Mastersel',
	exp_masterel_period: '2010 – 2013',
	exp_masterel_location: 'Marília, Brazil',
	exp_masterel_description:
		'• Early career work building enterprise applications and internal software systems.',
	exp_masterel_techStack: 'C++',

	// projects
	'Featured Projects': 'Featured Projects',
	"What I've Built": "What I've Built",
	'View Project': 'View Project',

	proj_investidor10_title: 'Investidor10 Platform',

	proj_investidor10_description:
		"Architecture modernisation for one of Brazil's largest investment research platforms. Led the migration from a Laravel monolith to an offline-first Next.js architecture — the kind of rebuild you do while the plane is still flying, with real users on it the whole time.",

	proj_vega_title: 'Vega Checkout Platform',

	proj_vega_description:
		'A fintech checkout system built to handle high-volume e-commerce transactions reliably. The work was mostly about resilient payment gateway integrations and making sure things kept working when traffic spiked.',

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
		'Built and scaled platforms handling real transaction volume and concurrent users — not in theory, in production, with money moving through them.',

	achievements_business_mindset:
		'Comfortable owning architecture end-to-end: the kind of decisions that are hard to undo once a system is live.',

	achievements_availability:
		'Based in Dublin, available for interviews, eligible to work in Ireland under the Critical Skills Employment Permit.',

	// contact
	'Get in Touch': 'Get in Touch',
	"Let's Build Something Great": "Let's Build Something Great",

	contactDescription:
		'Open to conversations about engineering roles, fintech systems, or architecture problems worth solving. Reach out — I usually reply quickly.',

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
