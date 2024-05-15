'use client';

import Image from 'next/image';
import { FC } from 'react';

import IconButton from '@/components/UI/buttons/IconButton/IconButton';

interface ICancelEditButton {
	onClick: () => void;
}

const CancelButton: FC<ICancelEditButton> = ({ onClick }) => {
	return (
		<IconButton onClick={onClick}>
			<Image
				src='icons/cancel-icon.svg'
				alt='Отменить значение'
				width={10}
				height={10}
			/>
		</IconButton>
	);
};

export default CancelButton;
