/**
 * Central export file for Resource component library
 * This file will be used when converting to an external library
 */

// Main component
export { default as Resource } from './index';

// Sub-components
export { NewResource } from './new';
export { ResourceItem, CardItem } from './item';
export { default as DynamicForm } from './dyamic-form';

// Context and hooks
export { ResourceProvider, useResource } from './context';
export { default as useDebounceState } from './hooks/use-debounce-state';

// Types
export type {
	ResourceProps,
	ResourceItem as ResourceItemType,
	PaginatedResponse as PaginatedResponseType,
	PaginationMeta as PaginationMetaType,
	FilterConfig as FilterConfigType,
	OrderByConfig as OrderByConfigType,
	FieldContext as FieldContextType,
	RenderItemContext,
	ResourceFormValidation as ResourceFormValidationType,
	ResourceServerActions as ResourceServerActionsType,
} from './types';

// Server actions (for reference, but should be provided by the user)
export {
	paginatedFetch as paginatedFetchType,
	updateOrCreate as updateOrCreateType,
	deleteItem as deleteItemType,
} from './server/actions';

// Config
export {
	setResourceConfig as setResourceConfigType,
	getResourceConfig as getResourceConfigType,
} from './config';
export type { ResourceConfig as ResourceConfigType } from './config';
