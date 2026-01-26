/* eslint-disable @typescript-eslint/no-explicit-any */
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
const styles = StyleSheet.create({
	page: {
		padding: 30,
		fontFamily: 'Helvetica',
		fontSize: 10,
	},
	header: {
		textAlign: 'center',
		marginBottom: 15,
	},
	name: {
		fontSize: 22,
		fontWeight: 'bold',
	},
	contactInfo: {
		fontSize: 9,
		color: 'gray',
	},
	section: {
		marginBottom: 12,
	},
	sectionTitle: {
		fontSize: 12,
		fontWeight: 'bold',
		textTransform: 'uppercase',
		marginBottom: 6,
	},
	job: {
		marginBottom: 8,
	},
	jobTitle: {
		fontSize: 11,
		fontWeight: 'bold',
	},
	jobCompany: {
		fontSize: 9,
		fontWeight: 'bold',
		color: '#333',
		marginTop: 2,
	},
	jobPeriod: {
		fontSize: 8,
		color: 'gray',
		marginTop: 2,
	},
	jobDescription: {
		fontSize: 9,
		marginTop: 4,
		lineHeight: 1.4,
	},
	bulletPoint: {
		fontSize: 9,
		marginTop: 2,
		lineHeight: 1.4,
	},
	skillCategory: {
		marginTop: 3,
	},
	skillLabel: {
		fontSize: 10,
		fontWeight: 'bold',
	},
	skills: {
		fontSize: 9,
	},
	relocationNote: {
		fontSize: 9,
		fontStyle: 'italic',
		color: 'gray',
		marginTop: 10,
		textAlign: 'center',
	},
});

// Helper function to parse date from period string and return sortable date
const parseExperienceDate = (period: string): number => {
	if (!period) return 0;

	// Handle "Present" or "Presente" - should come first (return high number)
	const formattedPeriod = period.toLowerCase();
	if (
		formattedPeriod.includes('present') ||
		formattedPeriod.includes('presente') ||
		formattedPeriod.includes('current') ||
		formattedPeriod.includes('atual')
	) {
		return 999999; // High number to sort first
	}

	// Extract year from formats like:
	// "Nov 2023 - Present" -> 2023
	// "Jan 2024 - Jul 2024" -> 2024
	// "2017 - Sep 2023" -> 2017
	// "2010 - 2013" -> 2010

	const yearMatch = formattedPeriod.match(/(\d{4})/);
	if (yearMatch) {
		return parseInt(yearMatch[1], 10);
	}

	return 0;
};

// Helper function to sort experiences by displayPriority first, then by date (most recent first)
const sortExperiencesByDate = (experiences: any[]): any[] => {
	return [...experiences].sort((a, b) => {
		// First sort by displayPriority (if exists), higher priority first
		const priorityA = a.displayPriority ?? 999;
		const priorityB = b.displayPriority ?? 999;
		if (priorityA !== priorityB) {
			return priorityA - priorityB; // Ascending: 1 comes before 2
		}

		// If priorities are equal, sort by date
		const dateA = parseExperienceDate(a.period);
		const dateB = parseExperienceDate(b.period);
		return dateB - dateA; // Descending order (newest first)
	});
};

export const RenderDocument = ({
	about,
	info,
	education,
	skills,
	experience,
	sections,
	relocationNote,
	language = 'en',
}: any) => {
	const skillsContent = skills?.categories?.valueJson || {};
	const educationContent = education?.items?.valueJson || {};
	const experienceContent = experience?.companies?.valueJson || {};

	// Convert to array and sort by date (most recent first)
	const sortedExperiences = sortExperiencesByDate(
		Object.values(experienceContent)
	);

	return (
		<Document>
			<Page size="A4" style={styles.page}>
				<View style={styles.header}>
					<Text style={styles.name}>{info.name?.value}</Text>
					<Text style={styles.jobTitle}>{info.role?.value}</Text>
					<Text style={{ ...styles.contactInfo, marginTop: 10 }}>
						{info.location?.value} | {info.email?.value} | {info.phone?.value}
					</Text>
					<Text style={styles.contactInfo}>
						{info.site?.value} | {info.linkedin?.value} | {info.github?.value}
					</Text>
				</View>
				<View style={styles.section}>
					<Text style={styles.sectionTitle}>{sections.summary}</Text>
					{about?.description?.value
						?.split('\n')
						.filter((line: string) => line.trim())
						.map((line: string, idx: number) => (
							<Text key={idx} style={styles.jobDescription}>
								{line.trim()}
							</Text>
						))}
				</View>
				<View style={styles.section}>
					<Text style={styles.sectionTitle}>{sections.experience}</Text>
					{sortedExperiences.map((job: any, index) => (
						<View key={index} style={styles.job}>
							<Text style={styles.jobTitle}>{job.role}</Text>
							<Text style={styles.jobCompany}>
								{job.company} | {job.location}
							</Text>
							<Text style={styles.jobPeriod}>{job.period}</Text>
							{job.description
								?.split('\n')
								.filter((line: string) => line.trim())
								.map((line: string, idx: number) => (
									<Text key={idx} style={styles.bulletPoint}>
										{line.trim()}
									</Text>
								))}
						</View>
					))}
				</View>
				<View style={styles.section}>
					<Text style={styles.sectionTitle}>{sections.education}</Text>
					{Object.values(educationContent).map((edu: any, index) => (
						<View key={index} style={styles.job}>
							<Text style={styles.jobTitle}>{edu.title}</Text>
							<Text style={styles.jobDescription}>{edu.description}</Text>
						</View>
					))}
				</View>
				<View style={styles.section}>
					<Text style={styles.sectionTitle}>{sections.skills}</Text>
					{Object.values(skillsContent).map((skill: any, index) => (
						<View key={index} style={styles.skillCategory}>
							<Text style={styles.skillLabel}>{skill.label}:</Text>
							<Text style={styles.skills}>{skill.skills}</Text>
						</View>
					))}
				</View>
				{relocationNote && (
					<View>
						<Text style={styles.relocationNote}>{relocationNote}</Text>
					</View>
				)}
			</Page>
		</Document>
	);
};
