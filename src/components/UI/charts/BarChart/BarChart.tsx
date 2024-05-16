'use client';

import { FC } from 'react';
import { Bar } from 'react-chartjs-2';

interface IBarChart {
	title: string;
	data: number[];
}

const BarChart: FC<IBarChart> = ({ data, title }) => {
	const chartData = {
		labels: data,
		datasets: [
			{
				label: '',
				data,
				backgroundColor: '#ff7e1d',
				borderColor: 'rgba(255, 99, 132, 1)',
				borderWidth: 1
			}
		]
	};

	const options = {
		responsive: true,
		barPercentage: 1.1,
		maintainAspectRatio: false,
		aspectRatio: 2,
		scales: {
			y: {
				display: false
			}
		},
		plugins: {
			legend: {
				display: false
			},
			title: {
				display: true,
				text: title
			}
		}
	};

	return (
		<div style={{ backgroundColor: '#171820' }}>
			<Bar
				options={options}
				data={chartData}
			/>
		</div>
	);
};

export default BarChart;
