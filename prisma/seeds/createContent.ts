export default async function (prisma: any) {
	await prisma.$executeRawUnsafe(
		`TRUNCATE TABLE "Field" RESTART IDENTITY CASCADE;`
	);
	await prisma.$executeRawUnsafe(
		`TRUNCATE TABLE "Component" RESTART IDENTITY CASCADE;`
	);

	await Promise.all([
		createNavbarContent(prisma)
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
							name: 'about_en',
							value: 'About',
						},
						{
							name: 'experience_en',
							value: 'Experience',
						},
						{
							name: 'projects_en',
							value: 'Projects',
						},
						{
							name: 'skills_en',
							value: 'Skills',
						},
						{
							name: 'education_en',
							value: 'Education',
						},
						{
							name: 'contact_en',
							value: 'Contact',
						},
						{
							name: 'about_pt',
							value: 'Sobre',
						},
						{
							name: 'experience_pt',
							value: 'Experiência',
						},
						{
							name: 'projects_pt',
							value: 'Projetos',
						},
						{
							name: 'skills_pt',
							value: 'Habilidades',
						},
						{
							name: 'education_pt',
							value: 'Educação',
						},
						{
							name: 'contact_pt',
							value: 'Contato',
						},
					]
				},
			},
		},
	});
}