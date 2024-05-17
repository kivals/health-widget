'use client';

import { FC } from 'react';

import Loading from '@/components/UI/Loading/Loading';
import { ILoadingWidgetProps } from '@/components/widget/types/IWidgetProps';

import styles from './LoadingWidget.module.scss';
import { useAppContext } from '@/context';

const LoadingWidget: FC<ILoadingWidgetProps> = ({ config, value }) => {
	const { size } = useAppContext();

	return (
		<div className={`${styles.container} ${size === 'sm' && styles.small}`}>
			{value ? (
				<>
					<h2 className={styles.name}>{config.name}</h2>
					<span className={styles.value}>{value}</span>
					<span className={styles.units}>{config.units}</span>
				</>
			) : (
				<Loading />
			)}
		</div>
	);
};

export default LoadingWidget;
