import { data } from '@/data';

export const en = {
	nav: {
		about: 'About',
		experience: 'Experience',
		projects: 'Projects',
		skills: 'Skills',
		education: 'Education',
		contact: 'Contact',
	},
	info: data?.info?.en || {},
	hero: {
		greeting: "Hi, I'm",
		avatar: data?.info?.en?.avatar || '',
		name: data?.info?.en?.name || '',
		role: data?.info?.en?.role || '',
		location: data?.info?.en?.location || '',
		bio: data?.bio?.en || '',
		cta: 'Get in touch',
		scrollDown: 'Scroll down to explore',
		checkCv: 'Check my CV',
	},
	about: {
		title: 'About Me',
		subtitle: 'Crafting Digital Experiences',
		description: data?.about?.en || '',
		image: '/assets/blue.png',
	},
	experience: {
		title: 'Experience',
		subtitle: 'Career Journey',
		present: 'Present',
		companies: data?.experiences?.en || {},
	},
	projects: {
		title: 'Featured Projects',
		subtitle: "What I've Built",
		viewProject: 'View Project',
		items: data?.projects?.en || {},
	},
	education: {
		title: 'Education',
		items: data?.education?.en || {},
	},
	skills: {
		title: 'Skills & Technologies',
		subtitle: 'Technical Expertise',
		categories: data?.skills?.en || {},
	},
	contact: {
		title: 'Get in Touch',
		subtitle: "Let's Build Something Great",
		description:
			"I'm always interested in hearing about new opportunities, innovative projects, or just having a chat about technology and software engineering.",
		location: 'Location',
		phone: 'Phone',
		locationValue: 'Dublin, Ireland',
	},
	footer: {
		rights: 'All rights reserved',
		builtWith: 'Built with React, TypeScript & Tailwind CSS',
	},
};
