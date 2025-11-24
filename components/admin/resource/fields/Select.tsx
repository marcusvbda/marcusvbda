'use client';

import { ReactNode, useEffect, useState, useRef } from 'react';
import {
	Select as SelectComponent,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectItem,
} from '@/components/ui/select';

export default function Select({
	field,
	pending,
	index,
	value,
	onChange,
}: any): ReactNode {
	const [v, setV] = useState(value);
	const prevValueRef = useRef(value);

	useEffect(() => {
		if (value !== prevValueRef.current) {
			setV(value);
			prevValueRef.current = value;
		}
	}, [value]);

	const handleValueChange = (val: any) => {
		setV(val);
		onChange && onChange(val);
	};

	return (
		<>
			<input type="hidden" value={v} name={index} className="hidden" />
			<SelectComponent
				value={v}
				onValueChange={handleValueChange}
				disabled={pending}
			>
				<SelectTrigger className="w-full">
					<SelectValue placeholder={field?.placeholder || ''} />
				</SelectTrigger>
				<SelectContent>
					{(field?.options || []).map((op: any, opKey: any) => (
						<SelectItem key={`${opKey}_${op.value}`} value={op.value}>
							{op.label}
						</SelectItem>
					))}
				</SelectContent>
			</SelectComponent>
		</>
	);
}
