'use client';

import Image from 'next/image';
import { FC } from 'react';

import { TSize } from '@/types/TSize';

import styles from './ChangeButton.module.css';

interface IChangeButton {
	isDisabled: boolean;
	onClick: () => void;
	size: TSize;
}

const ChangeButton: FC<IChangeButton> = ({ isDisabled, onClick, size }) => {
	return (
		<button
			className={`${styles.button} ${size === 'sm' && styles.small}`}
			disabled={isDisabled}
			onClick={onClick}
		>
			<Image
				src='icons/edit-icon.svg'
				alt={'Изменить значение'}
				width={16}
				height={16}
			/>
			<span className={styles.button_text}>Изменить</span>
		</button>
	);
};

export default ChangeButton;
