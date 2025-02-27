'use client';
import { createContext, useContext } from 'react';

export const AuthContext = createContext<any>({
	user: null,
});

export const AuthContextProvider = ({ children, user }: any) => {
	return (
		<AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
	);
};

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error('useAuth must be used within an AuthContextProvider');
	}
	return context;
};
