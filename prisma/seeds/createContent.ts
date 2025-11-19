export default async function (prisma: any) {
	await prisma.$executeRawUnsafe(
		`TRUNCATE TABLE "Field" RESTART IDENTITY CASCADE;`
	);
	await prisma.$executeRawUnsafe(
		`TRUNCATE TABLE "Component" RESTART IDENTITY CASCADE;`
	);

	await Promise.all([
		createNavbarContent(prisma),
		createHeroContent(prisma)
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
