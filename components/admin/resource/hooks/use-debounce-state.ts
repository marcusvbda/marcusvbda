'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

export interface UseDebounceStateReturn<T> {
	value: T;
	setValue: (value: T | ((prev: T) => T)) => void;
	debouncedValue: T;
	setDebouncedValue: (value: T) => void;
	isDebouncing: boolean;
}

export default function useDebounceState<T = string>(
	initialValue: T,
	delay = 800
): UseDebounceStateReturn<T> {
	const [value, setValue] = useState<T>(initialValue);
	const [debouncedValue, setDebouncedValue] = useState<T>(initialValue);
	const [isDebouncing, setIsDebouncing] = useState(false);
	const timeoutRef = useRef<NodeJS.Timeout | null>(null);

	useEffect(() => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}

		setIsDebouncing(true);
		timeoutRef.current = setTimeout(() => {
			setDebouncedValue(value);
			setIsDebouncing(false);
		}, delay);

		return () => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}
		};
	}, [value, delay]);

	const setDebouncedValueDirect = useCallback((newValue: T) => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
		setIsDebouncing(false);
		setDebouncedValue(newValue);
	}, []);

	return {
		value,
		setValue,
		debouncedValue,
		setDebouncedValue: setDebouncedValueDirect,
		isDebouncing,
	};
}
