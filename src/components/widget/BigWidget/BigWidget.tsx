'use client';

import clsx from 'clsx';

import ChangeButton from '@/components/UI/buttons/ChangeButton/ChangeButton';
import RangeInput from '@/components/UI/inputs/RangeInput/RangeInput';

import styles from './BigWidget.module.scss';

export function BigWidget() {
	return (
		<div className={clsx(styles.container)}>
			<h2 className={clsx(styles.title)}>Систолическое давление</h2>
			<span className={clsx(styles.value)}>120</span>
			<span className={clsx(styles.units)}>мм. рт. ст.</span>
			<div className={clsx(styles.range)}>
				<RangeInput
					maxValue={100}
					minValue={0}
					value={56}
				/>
			</div>
			<ChangeButton
				size={'lg'}
				isDisabled={false}
				onClick={() => console.log('')}
			/>
		</div>
	);
}
