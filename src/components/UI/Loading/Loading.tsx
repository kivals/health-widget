import Image from 'next/image';
import { FC } from 'react';

import styles from './Loading.module.css';

const Loading: FC = () => {
	return (
		<Image
			className={styles.image}
			src='icons/loading-icon.svg'
			alt='Иконка загрузки данных'
			width={50}
			height={50}
		/>
	);
};

export default Loading;
