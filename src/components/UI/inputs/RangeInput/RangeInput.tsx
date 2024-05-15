'use client';

import { FC } from 'react';

import styles from './RangeInput.module.css';

interface IRangeInputProps {
	maxValue: number;
	minValue: number;
	value: number;
}

const RangeInput: FC<IRangeInputProps> = ({ maxValue, minValue, value }) => {
	return (
		<input
			type='range'
			className={styles.range}
			min={minValue}
			max={maxValue}
			defaultValue={value}
			disabled={true}
		/>
	);
};

export default RangeInput;
