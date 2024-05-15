'use client';

import { usePathname } from 'next/navigation';

import RadioInput from '@/components/UI/inputs/RadioInput/RadioInput';

import pagesData from '@/config/pages';

import styles from './BaseLayout.module.scss';
import { useAppContext } from '@/context';

export default function BaseLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	const path = usePathname();
	const { size, setSize } = useAppContext();
	const text = Array.from(pagesData.values()).find(
		({ url }) => url === path
	)?.text;

	return (
		<div>
			<h1 className={styles.title}>{text}</h1>
			<div className={styles.toggler}>
				<RadioInput
					name={'size-radio'}
					label={'Малый размер'}
					value={'sm'}
					currentValue={size}
					onChange={setSize}
				/>
				<RadioInput
					name={'size-radio'}
					label={'Большой размер'}
					value={'lg'}
					currentValue={size}
					onChange={setSize}
				/>
			</div>
			<div className={styles.widgets_body}>{children}</div>
		</div>
	);
}
