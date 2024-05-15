import Image from 'next/image';
import { FC } from 'react';

import IconButton from '@/components/UI/buttons/IconButton/IconButton';

interface IApplyEditButton {
	onClick: () => void;
}

const ApplyButton: FC<IApplyEditButton> = ({ onClick }) => {
	return (
		<IconButton onClick={onClick}>
			<Image
				src={'icons/apply-icon.svg'}
				alt='Применить значение'
				width={10}
				height={10}
			/>
		</IconButton>
	);
};

export default ApplyButton;
