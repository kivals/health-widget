'use client';

import { FC, ReactNode } from 'react';

import styles from './IconButton.module.css';

interface IIconButtonsProps {
	children: ReactNode;
	onClick: () => void;
}

const IconButton: FC<IIconButtonsProps> = ({ children, onClick }) => {
	return (
		<button
			className={styles.button}
			onClick={() => onClick()}
		>
			{children}
		</button>
	);
};

export default IconButton;
