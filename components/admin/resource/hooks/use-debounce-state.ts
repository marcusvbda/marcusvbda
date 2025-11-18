'use client';

import { useEffect, useRef, useState } from 'react';

export default function useDebounceState(value: any, time = 800) {
	const [tempState, setTempState] = useState(value);
	const [state, setState] = useState(value);
	const ref = useRef(null);

	useEffect(() => {
		clearTimeout((ref as any).current);
		(ref as any).current = setTimeout(() => {
			setState(tempState);
		}, time);

		return () => {
			clearTimeout((ref as any).current);
		};
	}, [tempState]);

	return [tempState, setTempState, state, setState];
}
