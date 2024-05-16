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
	pulseHistory: number[];
	setPulseHistory(history: number[]): void;
	temperatureHistory: number[];
	setTemperatureHistory(history: number[]): void;
};

//TODO вынести
const mockSystolicHistoryData: number[] = [50, 60, 100, 80];
const mockDiastolicHistoryData: number[] = [110, 100, 140, 180];
const mockPulseHistoryData: number[] = [34, 45, 98, 55];
const mockTemperatureHistoryData: number[] = [36.6, 39.9, 34.0, 34, 36.6];

export const AppContext = createContext<TAppContext | null>(null);

export function AppWrapper({ children }: { children: React.ReactNode }) {
	const [size, setSize] = useState<TSize>('lg');

	const [systolicHistory, setSystolicHistory] = useState<number[]>([
		...mockSystolicHistoryData
	]);

	const [diastolicHistory, setDiastolicHistory] = useState<number[]>([
		...mockDiastolicHistoryData
	]);

	const [pulseHistory, setPulseHistory] = useState<number[]>([
		...mockPulseHistoryData
	]);

	const [temperatureHistory, setTemperatureHistory] = useState<number[]>([
		...mockTemperatureHistoryData
	]);

	return (
		<AppContext.Provider
			value={{
				size,
				setSize,
				systolicHistory,
				setSystolicHistory,
				diastolicHistory,
				setDiastolicHistory,
				pulseHistory,
				setPulseHistory,
				temperatureHistory,
				setTemperatureHistory
			}}
		>
			{children}
		</AppContext.Provider>
	);
}

export function useAppContext() {
	return useContext(AppContext) as TAppContext;
}
