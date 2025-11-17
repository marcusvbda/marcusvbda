'use client';

import { create } from 'zustand';
import { useEffect } from 'react';

export type BreadcrumbItem = {
	href?: string;
	label: string;
};

type BreadcrumbState = {
	items: BreadcrumbItem[];
	setItems: (items: BreadcrumbItem[]) => void;
};

export const useBreadcrumbStore = create<BreadcrumbState>((set) => ({
	items: [],
	setItems: (items) => set({ items }),
}));

export const useBreadcrumb = (items?: BreadcrumbItem[]) => {
	const { setItems } = useBreadcrumbStore();
	useEffect(() => {
		if (items) setItems(items);
	}, [items, setItems]);
};
