import type { ReactNode } from 'react';

/**
 * Configuration interface for Resource component dependencies
 * This allows the component to be used with different UI libraries
 */
export interface ResourceConfig {
	// UI Components
	Input: React.ComponentType<{
		placeholder?: string;
		className?: string;
		value: string;
		onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
		[key: string]: unknown;
	}>;
	Button: React.ComponentType<{
		className?: string;
		onClick?: () => void;
		disabled?: boolean;
		children: ReactNode;
		[key: string]: unknown;
	}>;
	Spinner: React.ComponentType<{
		className?: string;
		[key: string]: unknown;
	}>;
	Card: React.ComponentType<{
		className?: string;
		children: ReactNode;
		[key: string]: unknown;
	}>;
	CardHeader: React.ComponentType<{
		className?: string;
		children: ReactNode;
		[key: string]: unknown;
	}>;
	Sheet: React.ComponentType<{
		open: boolean;
		onOpenChange: (open: boolean) => void;
		children: ReactNode;
		[key: string]: unknown;
	}>;
	SheetContent: React.ComponentType<{
		className?: string;
		children: ReactNode;
		[key: string]: unknown;
	}>;
	SheetHeader: React.ComponentType<{
		children: ReactNode;
		[key: string]: unknown;
	}>;
	SheetTitle: React.ComponentType<{
		children: ReactNode;
		[key: string]: unknown;
	}>;
	SheetDescription: React.ComponentType<{
		children: ReactNode;
		[key: string]: unknown;
	}>;
	SheetTrigger: React.ComponentType<{
		asChild?: boolean;
		children: ReactNode;
		[key: string]: unknown;
	}>;
	AlertDialog: React.ComponentType<{
		open: boolean;
		onOpenChange: (open: boolean) => void;
		children: ReactNode;
		[key: string]: unknown;
	}>;
	AlertDialogTrigger: React.ComponentType<{
		asChild?: boolean;
		children: ReactNode;
		[key: string]: unknown;
	}>;
	AlertDialogContent: React.ComponentType<{
		children: ReactNode;
		[key: string]: unknown;
	}>;
	AlertDialogHeader: React.ComponentType<{
		children: ReactNode;
		[key: string]: unknown;
	}>;
	AlertDialogTitle: React.ComponentType<{
		children: ReactNode;
		[key: string]: unknown;
	}>;
	AlertDialogDescription: React.ComponentType<{
		children: ReactNode;
		[key: string]: unknown;
	}>;
	AlertDialogFooter: React.ComponentType<{
		children: ReactNode;
		[key: string]: unknown;
	}>;
	AlertDialogCancel: React.ComponentType<{
		disabled?: boolean;
		onClick?: () => void;
		children: ReactNode;
		[key: string]: unknown;
	}>;
	AlertDialogAction: React.ComponentType<{
		onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
		disabled?: boolean;
		className?: string;
		children: ReactNode;
		[key: string]: unknown;
	}>;
	// Utilities
	cn: (...classes: (string | undefined | null | false)[]) => string;
	// Loading component
	LoadingSpinner?: React.ComponentType;
	// Toast notification
	toast?: {
		success: (message: string) => void;
		error: (message: string) => void;
	};
}

// Default config will be set by the library user
let defaultConfig: ResourceConfig | null = null;

export const setResourceConfig = (config: ResourceConfig) => {
	defaultConfig = config;
};

export const getResourceConfig = (): ResourceConfig => {
	if (!defaultConfig) {
		throw new Error(
			'Resource config not set. Please call setResourceConfig() before using Resource components.'
		);
	}
	return defaultConfig;
};
