'use client';

import { createContext, useContext, useState } from 'react';

import { TSize } from '@/types/TSize';

export type TAppContext = {
	size: TSize;
	setSize(size: TSize): void;
	systolicHistory: number[];
	setSystolicHistory(history: number[]): void;
	diastolicHistory: number[];
	setDiastolicHistory(history: number[]): void;
};

const mockSystolicHistoryData: number[] = [50, 60, 100, 80];
const mockDiastolicHistoryData: number[] = [110, 100, 140, 180];

export const AppContext = createContext<TAppContext | null>(null);

export function AppWrapper({ children }: { children: React.ReactNode }) {
	const [size, setSize] = useState<TSize>('lg');

	const [systolicHistory, setSystolicHistory] = useState<number[]>([
		...mockSystolicHistoryData
	]);

	const [diastolicHistory, setDiastolicHistory] = useState<number[]>([
		...mockDiastolicHistoryData
	]);

	return (
		<AppContext.Provider
			value={{
				size,
				setSize,
				systolicHistory,
				setSystolicHistory,
				diastolicHistory,
				setDiastolicHistory
			}}
		>
			{children}
		</AppContext.Provider>
	);
}

export function useAppContext() {
	return useContext(AppContext) as TAppContext;
}
