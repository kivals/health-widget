'use client';

import { FC } from 'react';
import { Line } from 'react-chartjs-2';

interface IDoubleLineChart {
	title: string;
	firstLineData: { label: string; data: number[] };
	secondLineData: { label: string; data: number[] };
}

const DoubleLineChart: FC<IDoubleLineChart> = ({
	title,
	firstLineData,
	secondLineData
}) => {
	const options = {
		responsive: true,
		scales: {
			x: {
				display: false
			}
		},
		plugins: {
			legend: {
				position: 'top' as const
			},
			title: {
				display: true,
				text: title
			}
		}
	};

	const data = {
		labels: new Array(
			Math.max(firstLineData.data.length, secondLineData.data.length)
		).fill(''),
		datasets: [
			{
				label: firstLineData.label,
				tension: 0.5,
				data: [...firstLineData.data],
				borderColor: 'rgb(255, 99, 132)',
				backgroundColor: 'rgba(255, 99, 132, 0.5)'
			},
			{
				label: secondLineData.label,
				tension: 0.5, // Устанавливает плавность линии
				data: [...secondLineData.data],
				borderColor: 'rgb(53, 162, 235)',
				backgroundColor: 'rgba(53, 162, 235, 0.5)'
			}
		]
	};
	return (
		<div>
			<Line
				options={options}
				data={data}
			/>
		</div>
	);
};

export default DoubleLineChart;
