'use client';

import { ReactNode, useEffect, useState, useRef } from 'react';
import { JsonEditor as Editor } from 'json-edit-react';

export default function JsonEditor({
	name,
	value,
	onChange,
}: {
	name: string;
	value: any;
	onChange: (value: any) => void;
}): ReactNode {
	const [jsonData, setJsonData] = useState(value || {});
	const prevValueRef = useRef(value);

	useEffect(() => {
		if (value !== prevValueRef.current) {
			setJsonData(value || {});
			prevValueRef.current = value;
		}
	}, [value]);

	const handleDataChange = (newData: any) => {
		setJsonData(newData);
		onChange && onChange(newData);
	};

	const jsonDataString = JSON.stringify(jsonData);

	return (
		<>
			<Editor
				data={jsonData}
				setData={handleDataChange}
				className="w-full max-w-full!"
			/>
			<input
				type="hidden"
				value={jsonDataString}
				name={name}
				className="hidden"
			/>
		</>
	);
}
