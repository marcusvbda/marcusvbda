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
		marginBottom: 20,
	},
	name: {
		fontSize: 24,
		fontWeight: 'bold',
	},
	contactInfo: {
		fontSize: 10,
		color: 'gray',
	},
	section: {
		marginBottom: 20,
	},
	sectionTitle: {
		fontSize: 14,
		fontWeight: 'bold',
		textTransform: 'uppercase',
		marginBottom: 10,
	},
	job: {
		marginBottom: 10,
	},
	jobTitle: {
		fontSize: 11,
		fontWeight: 'bold',
	},
	jobCompany: {
		fontSize: 10,
		fontWeight: 'bold',
		color: '#333',
	},
	jobPeriod: {
		fontSize: 9,
		color: 'gray',
	},
	jobDescription: {
		fontSize: 10,
	},
	skillCategory: {
		marginTop: 5,
	},
	skillLabel: {
		fontSize: 11,
		fontWeight: 'bold',
	},
	skills: {
		fontSize: 10,
	},
});

export const ResumeDocument = ({ data, lang, sections }: any) => {
	const info = data.info[lang];
	const bio = data.about[lang];
	const experiences = data.experiences[lang];
	const skills = data.skills[lang];
	const education = data.education[lang];

	return (
		<Document>
			<Page size="A4" style={styles.page}>
				<View style={styles.header}>
					<Text style={styles.name}>{info.name}</Text>
					<Text style={styles.jobTitle}>{info.role}</Text>
					<Text style={{ ...styles.contactInfo, marginTop: 10 }}>
						{info.location} | {info.email} | {info.phone}
					</Text>
					<Text style={styles.contactInfo}>
						{info.site} | {info.linkedin} | {info.github}
					</Text>
				</View>
				<View style={styles.section}>
					<Text style={styles.sectionTitle}>{sections.summary}</Text>
					<Text style={styles.jobDescription}>{bio}</Text>
				</View>
				<View style={styles.section}>
					<Text style={styles.sectionTitle}>{sections.experience}</Text>
					{Object.values(experiences).map((job: any, index) => (
						<View key={index} style={styles.job}>
							<Text style={styles.jobTitle}>{job.role}</Text>
							<Text style={styles.jobCompany}>
								{job.company} | {job.location}
							</Text>
							<Text style={styles.jobPeriod}>{job.period}</Text>
							<Text style={styles.jobDescription}>{job.description}</Text>
						</View>
					))}
				</View>
				<View style={styles.section}>
					<Text style={styles.sectionTitle}>{sections.education}</Text>
					{Object.values(education).map((edu: any, index) => (
						<View key={index} style={styles.job}>
							<Text style={styles.jobTitle}>{edu.title}</Text>
							<Text style={styles.jobDescription}>{edu.description}</Text>
						</View>
					))}
				</View>
				<View style={styles.section}>
					<Text style={styles.sectionTitle}>{sections.skills}</Text>
					{Object.values(skills).map((skill: any, index) => (
						<View key={index} style={styles.skillCategory}>
							<Text style={styles.skillLabel}>{skill.label}:</Text>
							<Text style={styles.skills}>{skill.skills}</Text>
						</View>
					))}
				</View>
			</Page>
		</Document>
	);
};
