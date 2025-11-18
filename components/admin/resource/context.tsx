'use client';

import { createContext, useContext, ReactNode } from 'react';

interface IFields {
	[key: string]: any;
}

interface IResourceContext {
	entity: string;
	label: string;
	pluralLabel: string;
	itemLabel: string;
	fields: IFields;
	renderItem?: (item: any) => ReactNode;
	renderNew?: () => ReactNode;
	renderForm?: (renderedForm: ReactNode, itemState?: any) => ReactNode;
	refetch: () => void;
}

const ResourceContext = createContext<IResourceContext | undefined>(undefined);

export const ResourceProvider = ({
	children,
	value,
}: {
	children: ReactNode;
	value: IResourceContext;
}) => {
	return (
		<ResourceContext.Provider value={value}>
			{children}
		</ResourceContext.Provider>
	);
};

export const useResource = (): IResourceContext => {
	const context = useContext(ResourceContext);
	if (!context) {
		throw new Error('useResource must be used within a ResourceProvider');
	}
	return context;
};
