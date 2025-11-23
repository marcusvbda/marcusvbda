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
		creatAboutContent(prisma)
	])
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
					]
				},
			},
		},
	});
}

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
							value: "Hi, I'm"
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
							value: 'Check my CV'
						},
						{
							name: 'name',
							language: 'en',
							value: 'Marcus Vinicius Bassalobre de Assis',
						},
						{
							name: 'role',
							language: 'en',
							value: 'Senior Fullstack Engineer',
						},
						{
							name: 'location',
							language: 'en',
							value: 'Dublin, Ireland',
						},
						{
							name: 'bio',
							language: 'en',
							value: "I'm a Senior Fullstack Engineer with over 15 years of experience building and leading software development teams to deliver high-performance, scalable digital products.",
						},
						{
							name: 'greeting',
							language: 'pt',
							value: 'Olá, sou'
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
							value: 'Veja meu CV'
						},
						{
							name: 'name',
							language: 'pt',
							value: 'Marcus Vinicius Bassalobre de Assis',
						},
						{
							name: 'role',
							language: 'pt',
							value: 'Engenheiro Fullstack Sênior',
						},
						{
							name: 'location',
							language: 'pt',
							value: 'Dublin, Irlanda',
						},
						{
							name: 'bio',
							language: 'pt',
							value: 'Sou Engenheiro de Software Fullstack Sênior com mais de 15 anos de experiência em desenvolvimento e liderança de equipes, entregando produtos digitais escaláveis e de alta performance.',
						}
					]
				},
			},
		},
	});
}

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
							value: '/assets/mac.png'
						},
						{
							name: 'name',
							language: 'en',
							value: 'Marcus Vinicius Bassalobre de Assis'
						},
						{
							name: 'role',
							language: 'en',
							value: 'Senior Fullstack Engineer'
						},
						{
							name: 'email',
							language: 'en',
							value: 'bassalobre.vinicius@gmail.com'
						},
						{
							name: 'site',
							language: 'en',
							value: 'mvbassalobre.com'
						},
						{
							name: 'linkedin',
							language: 'en',
							value: 'linkedin.com/in/mvbassalobre'
						},
						{
							name: 'phone',
							language: 'en',
							value: '+353-81-881-8967 (Ireland), +55 (14) 99676-6177 (Brazil)'
						},
						{
							name: 'github',
							language: 'en',
							value: 'github.com/marcusvbda'
						},
						{
							name: 'location',
							language: 'en',
							value: 'Dublin, Ireland'
						},
						{
							name: 'avatar',
							language: 'pt',
							value: '/assets/mac.png'
						},
						{
							name: 'name',
							language: 'pt',
							value: 'Marcus Vinicius Bassalobre de Assis'
						},
						{
							name: 'role',
							language: 'pt',
							value: 'Engenheiro Fullstack Sênior'
						},
						{
							name: 'email',
							language: 'pt',
							value: 'bassalobre.vinicius@gmail.com'
						},
						{
							name: 'site',
							language: 'pt',
							value: 'mvbassalobre.com'
						},
						{
							name: 'linkedin',
							language: 'pt',
							value: 'linkedin.com/in/mvbassalobre'
						},
						{
							name: 'phone',
							language: 'pt',
							value: '+353-81-881-8967 (Irlanda), +55 (14) 99676-6177 (Brasil)'
						},
						{
							name: 'github',
							language: 'pt',
							value: 'github.com/marcusvbda'
						},
						{
							name: 'location',
							language: 'pt',
							value: 'Dublin, Irlanda'
						},
					]
				}
			},
		},
	});
}

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
							value: 'About Me'
						},
						{
							name: 'subtitle',
							language: 'en',
							value: 'Crafting Digital Experiences'
						},
						{
							name: 'description',
							language: 'en',
							value: "With over 15 years of experience in software engineering, I've had the privilege of leading diverse teams and architecting solutions that impact millions of users. My journey has taken me from founding my own tech ventures to leading engineering at some of Brazil's most innovative fintech and SaaS companies. \nI specialize in building scalable, high-performance web applications using modern technologies like React, Next.js, Laravel, and TypeScript. My approach combines technical excellence with business acumen, always focusing on delivering measurable value.\nCurrently based in Dublin, Ireland, I'm passionate about mentoring engineers, establishing robust development practices, and pushing the boundaries of what's possible with web technologies."
						},
						{
							name: 'image',
							language: 'en',
							value: '/assets/blue.png'
						},
						{
							name: 'title',
							language: 'pt',
							value: 'Sobre Mim'

						},
						{
							name: 'subtitle',
							language: 'pt',
							value: 'Criando Experiências Digitais'
						},
						{
							name: 'description',
							language: 'pt',
							value: "Com mais de 15 anos de experiência em engenharia de software, tive o privilégio de liderar equipes diversas e arquitetar soluções que impactam milhões de usuários. Minha jornada me levou desde fundar meus próprios empreendimentos tecnológicos até liderar engenharia em algumas das empresas de fintech e SaaS mais inovadoras do Brasil.\nSou especializado em construir aplicações web escaláveis e de alta performance usando tecnologias modernas como React, Next.js, Laravel e TypeScript. Minha abordagem combina excelência técnica com visão de negócios, sempre focando em entregar valor mensurável.\nAtualmente baseado em Dublin, Irlanda, sou apaixonado por mentorar engenheiros, estabelecer práticas robustas de desenvolvimento e expandir os limites do que é possível com tecnologias web."
						},
						{
							name: 'image',
							language: 'pt',
							value: '/assets/blue.png'
						}
					]
				}
			},
		},
	});
}