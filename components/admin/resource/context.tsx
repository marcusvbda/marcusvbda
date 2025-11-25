'use client';

import { createContext, useContext, ReactNode, useMemo } from 'react';
import type {
	FieldContext,
	RenderItemContext,
	ResourceFormValidation,
	ResourceItem,
	ResourceServerActions,
} from './types';

export interface ResourceContextValue {
	entity: string;
	label: string;
	pluralLabel: string;
	itemLabel: string;
	fields?: (context: FieldContext) => ReactNode[];
	renderItem?: (context: RenderItemContext) => ReactNode;
	renderNew?: () => ReactNode;
	refetch: () => void;
	afterSave?: (result: {
		item?: ResourceItem;
		success: boolean;
		message: string;
	}) => void | Promise<void>;
	validateForm?: ResourceFormValidation;
	hideNew: boolean;
	initialState?: Record<string, unknown>;
	serverActions?: ResourceServerActions;
}

const ResourceContext = createContext<ResourceContextValue | undefined>(
	undefined
);

interface ResourceProviderProps {
	children: ReactNode;
	value: ResourceContextValue;
}

export const ResourceProvider = ({
	children,
	value,
}: ResourceProviderProps) => {
	const memoizedValue = useMemo(
		() => value,
		[
			value.entity,
			value.label,
			value.pluralLabel,
			value.itemLabel,
			value.hideNew,
			value.refetch,
		]
	);

	return (
		<ResourceContext.Provider value={memoizedValue}>
			{children}
		</ResourceContext.Provider>
	);
};

export const useResource = (): ResourceContextValue => {
	const context = useContext(ResourceContext);
	if (!context) {
		throw new Error('useResource must be used within a ResourceProvider');
	}
	return context;
};
