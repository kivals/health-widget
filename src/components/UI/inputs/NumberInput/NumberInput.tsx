'use client';

import { FC } from 'react';

import styles from './NumberInput.module.css';

interface INumberInput {
	maxValue: number;
	minValue: number;
	onChange: (value: number) => void;
}

const NumberInput: FC<INumberInput> = ({ maxValue, minValue, onChange }) => {
	return (
		<input
			type={'number'}
			min={minValue}
			max={maxValue}
			step={1}
			className={styles.input}
			placeholder={'Введите значение...'}
			onChange={e => onChange(Number(e.target.value))}
		/>
	);
};

export default NumberInput;
