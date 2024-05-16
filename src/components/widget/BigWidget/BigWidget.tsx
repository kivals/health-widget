'use client';

import clsx from 'clsx';
import { useState } from 'react';

import ApplyButton from '@/components/UI/buttons/ApplyButton/ApplyButton';
import CancelButton from '@/components/UI/buttons/CancelButton/CancelButton';
import ChangeButton from '@/components/UI/buttons/ChangeButton/ChangeButton';
import NumberInput from '@/components/UI/inputs/NumberInput/NumberInput';
import RangeInput from '@/components/UI/inputs/RangeInput/RangeInput';

import styles from './BigWidget.module.scss';

export function BigWidget() {
	const [isEdit, setEdit] = useState<boolean>(false);

	return (
		<div className={clsx(styles.container)}>
			<h2 className={clsx(styles.title)}>Систолическое давление2</h2>
			{isEdit ? (
				<>
					<NumberInput
						maxValue={0}
						minValue={100}
						onChange={() => console.log('')}
					/>
					<div className={styles.buttons}>
						<ApplyButton onClick={() => console.log('')} />
						<CancelButton onClick={() => setEdit(false)} />
					</div>
				</>
			) : (
				<>
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
						onClick={() => setEdit(true)}
					/>
				</>
			)}
		</div>
	);
}
