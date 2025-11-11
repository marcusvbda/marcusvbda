'use client';

import { createContext, ReactNode, useContext } from 'react';

const sessionContet = createContext<any>({
	session: null,
});

export const SessionProvider = ({
	children,
	session,
}: {
	children: ReactNode;
	session: any;
}) => {
	return (
		<sessionContet.Provider value={{ session }}>
			{children}
		</sessionContet.Provider>
	);
};

export const useSession = () => {
	const session = useContext(sessionContet);
	if (!session) {
		throw new Error('useSession must be used within SessionProvider');
	}
	return session;
};
