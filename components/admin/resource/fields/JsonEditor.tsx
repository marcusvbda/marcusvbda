'use client';

import { ReactNode, useEffect, useState } from 'react';
import { JsonEditor as Editor } from 'json-edit-react';

export default function JsonEditor({
	name,
	defaultValue,
}: {
	name: string;
	defaultValue: any;
}): ReactNode {
	const [jsonData, setJsonData] = useState(defaultValue || {});
	const [jsonDataString, setJsonDataString] = useState(
		JSON.stringify(jsonData)
	);
	useEffect(() => {
		setJsonDataString(JSON.stringify(jsonData));
	}, [jsonData]);

	return (
		<>
			<Editor
				data={jsonData}
				setData={setJsonData}
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
