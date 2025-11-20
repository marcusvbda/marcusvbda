import { data } from '@/data';

export const en = {
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
