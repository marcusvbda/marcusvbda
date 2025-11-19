import { ReactNode } from 'react';
import { findEntityById } from '@/server/entity';
import { notFound } from 'next/navigation';
import FieldPageContentClient from './content';

export default async function FieldsPage({ params }: any): Promise<ReactNode> {
	const { id } = await params;
	const component = await findEntityById("component", id);
	if (!component?.id) {
		return notFound()
	}
	return (
		<FieldPageContentClient component={component} />
	);
}
