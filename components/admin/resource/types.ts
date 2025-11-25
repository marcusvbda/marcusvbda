import { ReactNode } from 'react';
import { z } from 'zod';

export interface ResourceItem {
	id: number | string;
	[key: string]: unknown;
}

export interface PaginationMeta {
	total: number;
	totalResult: number;
	page: number;
	perPage: number;
	totalPages: number;
}

export interface PaginatedResponse {
	items: ResourceItem[];
	meta: PaginationMeta;
}

export interface FilterConfig {
	[key: string]: string | number | boolean | object;
}

export interface OrderByConfig {
	[key: string]: 'asc' | 'desc';
}

export interface FieldContext {
	itemState?: ResourceItem | null;
	error: Record<string, string[]>;
	pending: boolean;
	formValues: Record<string, unknown>;
	setFormValues: (
		values:
			| Record<string, unknown>
			| ((prev: Record<string, unknown>) => Record<string, unknown>)
	) => void;
	setVisible: (visible: boolean) => void;
}

export interface RenderItemContext {
	row: ResourceItem;
	setVisible: (visible: boolean) => void;
}

export interface ResourceFormValidation {
	[key: string]: z.ZodTypeAny;
}

export interface ResourceServerActions {
	paginatedFetch: (
		entity: string,
		options: {
			page: number;
			perPage: number;
			orderBy: OrderByConfig;
			filter: FilterConfig;
			defaultFilter?: FilterConfig;
		}
	) => Promise<PaginatedResponse>;
	updateOrCreate: (
		entity: string,
		payload: ResourceItem
	) => Promise<{
		item?: ResourceItem;
		success: boolean;
		message: string;
	}>;
	deleteItem: (
		id: number | string,
		entity: string
	) => Promise<{
		success: boolean;
		message: string;
	}>;
}

export interface ResourceProps {
	entity: string;
	label: string;
	pluralLabel?: string;
	description?: string;
	perPage?: number;
	filterBy?: string;
	orderBy?: OrderByConfig;
	filterPlaceholder?: string;
	itemLabel?: string;
	renderNew?: () => ReactNode;
	renderItem?: (context: RenderItemContext) => ReactNode;
	className?: string;
	classNameList?: string;
	createView?: ReactNode;
	editView?: ReactNode;
	fields?: (context: FieldContext) => ReactNode[];
	defaultFilter?: FilterConfig;
	afterSave?: (result: {
		item?: ResourceItem;
		success: boolean;
		message: string;
	}) => void | Promise<void>;
	validateForm?: ResourceFormValidation;
	icon?: ReactNode;
	beforeList?: ReactNode;
	hideNew?: boolean;
	initialState?: Record<string, unknown>;
	serverActions?: ResourceServerActions;
	debounceTime?: number;
	emptyState?: ReactNode;
	loadingComponent?: ReactNode;
	errorComponent?: (error: Error) => ReactNode;
}
