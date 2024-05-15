'use client';

import { createContext, useContext, useState } from 'react';

import { TSize } from '@/types/TSize';

export type TAppContext = {
	size: TSize;
	setSize(size: TSize): void;
};

export const AppContext = createContext<TAppContext | null>(null);

export function AppWrapper({ children }: { children: React.ReactNode }) {
	const [size, setSize] = useState<TSize>('lg');

	return (
		<AppContext.Provider
			value={{
				size,
				setSize
			}}
		>
			{children}
		</AppContext.Provider>
	);
}

export function useAppContext() {
	return useContext(AppContext) as TAppContext;
}
