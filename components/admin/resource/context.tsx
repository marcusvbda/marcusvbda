'use client';

import { createContext, useContext, ReactNode } from 'react';

interface IResourceContext {
	entity: string;
	label: string;
	pluralLabel: string;
	itemLabel: string;
	fields?: (cx: any) => ReactNode[];
	renderItem?: (item: any) => ReactNode;
	renderNew?: () => ReactNode;
	refetch: () => void;
	afterSave?: (result: any) => void;
	validateForm?: any;
	hideNew: boolean;
	initialState?: any;
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
