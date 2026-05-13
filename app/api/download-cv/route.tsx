import { Document, Page, StyleSheet, Text, View } from '@react-pdf/renderer';
import { renderToBuffer } from '@react-pdf/renderer';
import { readFileSync } from 'fs';
import { NextRequest, NextResponse } from 'next/server';
import { join } from 'path';
import React from 'react';

const LANG_LABEL: Record<string, string> = {
	en: 'English',
	pt: 'Português',
};

type Segment = { bold: boolean; text: string };

type Node =
	| { type: 'h1'; text: string }
	| { type: 'h2'; text: string }
	| { type: 'h3'; text: string }
	| { type: 'bullet'; segments: Segment[] }
	| { type: 'paragraph'; segments: Segment[] }
	| { type: 'blank' };

function parseInline(text: string): Segment[] {
	const segments: Segment[] = [];
	const parts = text.split(/(\*\*[^*]+\*\*)/);
	for (const part of parts) {
		if (part.startsWith('**') && part.endsWith('**')) {
			segments.push({ bold: true, text: part.slice(2, -2) });
		} else if (part) {
			segments.push({ bold: false, text: part });
		}
	}
	return segments;
}

function parseMarkdown(content: string): Node[] {
	const nodes: Node[] = [];
	for (const line of content.split('\n')) {
		const t = line.trim();
		if (t.startsWith('# ')) nodes.push({ type: 'h1', text: t.slice(2) });
		else if (t.startsWith('## ')) nodes.push({ type: 'h2', text: t.slice(3) });
		else if (t.startsWith('### ')) nodes.push({ type: 'h3', text: t.slice(4) });
		else if (t.startsWith('- ') || t.startsWith('* '))
			nodes.push({ type: 'bullet', segments: parseInline(t.slice(2)) });
		else if (t === '') nodes.push({ type: 'blank' });
		else nodes.push({ type: 'paragraph', segments: parseInline(t) });
	}
	return nodes;
}

const styles = StyleSheet.create({
	page: {
		paddingVertical: 48,
		paddingHorizontal: 52,
		fontFamily: 'Helvetica',
		fontSize: 9.5,
		color: '#111111',
		lineHeight: 1.5,
	},
	h1: {
		fontSize: 20,
		fontFamily: 'Helvetica-Bold',
		marginBottom: 2,
		color: '#000000',
	},
	h2: {
		fontSize: 11,
		fontFamily: 'Helvetica-Bold',
		marginTop: 16,
		marginBottom: 5,
		paddingBottom: 3,
		borderBottomWidth: 0.75,
		borderBottomColor: '#bbbbbb',
		color: '#222222',
		textTransform: 'uppercase',
		letterSpacing: 0.8,
	},
	h3: {
		fontSize: 10.5,
		fontFamily: 'Helvetica-Bold',
		marginTop: 8,
		marginBottom: 2,
		color: '#333333',
	},
	paragraph: {
		marginBottom: 3,
	},
	bullet: {
		marginLeft: 14,
		marginBottom: 2,
	},
	bold: {
		fontFamily: 'Helvetica-Bold',
	},
	blank: {
		marginBottom: 4,
	},
});

function renderSegments(segments: Segment[]) {
	return segments.map((seg, i) =>
		seg.bold ? (
			<Text key={i} style={styles.bold}>
				{seg.text}
			</Text>
		) : (
			<Text key={i}>{seg.text}</Text>
		),
	);
}

function CVDocument({ nodes }: { nodes: Node[] }) {
	return (
		<Document>
			<Page size="A4" style={styles.page}>
				{nodes.map((node, i) => {
					if (node.type === 'h1') {
						return (
							<Text key={i} style={styles.h1}>
								{node.text}
							</Text>
						);
					}
					if (node.type === 'h2') {
						return (
							<Text key={i} style={styles.h2}>
								{node.text}
							</Text>
						);
					}
					if (node.type === 'h3') {
						return (
							<Text key={i} style={styles.h3}>
								{node.text}
							</Text>
						);
					}
					if (node.type === 'paragraph') {
						return (
							<View key={i} style={styles.paragraph}>
								<Text>{renderSegments(node.segments)}</Text>
							</View>
						);
					}
					if (node.type === 'bullet') {
						return (
							<View key={i} style={styles.bullet}>
								<Text>• {renderSegments(node.segments)}</Text>
							</View>
						);
					}
					return <View key={i} style={styles.blank} />;
				})}
			</Page>
		</Document>
	);
}

export async function GET(request: NextRequest) {
	const lang = request.nextUrl.searchParams.get('lang') ?? 'en';
	const safeLang = ['en', 'pt'].includes(lang) ? lang : 'en';

	let content: string;
	try {
		content = readFileSync(join(process.cwd(), 'cvs', `${safeLang}.md`), 'utf-8');
	} catch {
		return NextResponse.json({ error: 'CV file not found' }, { status: 404 });
	}

	const nodes = parseMarkdown(content);
	const buffer = await renderToBuffer(<CVDocument nodes={nodes} />);
	const langLabel = LANG_LABEL[safeLang] ?? safeLang.toUpperCase();
	const filename = `Marcus Vinicius Bassalobre de Assis (${langLabel}).pdf`;

	return new NextResponse(new Uint8Array(buffer), {
		headers: {
			'Content-Type': 'application/pdf',
			'Content-Disposition': `attachment; filename="${filename}"`,
		},
	});
}
