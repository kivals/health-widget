'use client';

import {
	BarElement,
	CategoryScale,
	Chart as ChartJS,
	Legend,
	LinearScale,
	LineElement,
	PointElement,
	Title
} from 'chart.js';

import BarChart from '@/components/UI/charts/BarChart/BarChart';
import DoubleLineChart from '@/components/UI/charts/DoubleLineChart/DoubleLineChart';

import styles from './Charts.module.css';
import { useAppContext } from '@/context';

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	PointElement,
	LineElement,
	Legend
);

export function Charts() {
	const {
		pulseHistory,
		temperatureHistory,
		systolicHistory,
		diastolicHistory
	} = useAppContext();

	return (
		<div className={styles.container}>
			<BarChart
				title={'История изменения пульса'}
				data={pulseHistory}
			/>

			<BarChart
				title={'История изменения температуры'}
				data={temperatureHistory}
			/>

			<DoubleLineChart
				title={'Изменение диастолического и систолического давления'}
				firstLineData={{ label: 'Систолическое', data: systolicHistory }}
				secondLineData={{ label: 'Диастолическое', data: diastolicHistory }}
			/>
		</div>
	);
}
