import clsx from 'clsx';
import { useState } from 'react';

import ApplyButton from '@/components/UI/buttons/ApplyButton/ApplyButton';
import CancelButton from '@/components/UI/buttons/CancelButton/CancelButton';
import ChangeButton from '@/components/UI/buttons/ChangeButton/ChangeButton';
import NumberInput from '@/components/UI/inputs/NumberInput/NumberInput';
import RangeInput from '@/components/UI/inputs/RangeInput/RangeInput';

import styles from './CompactWidget.module.scss';

export function CompactWidget() {
	const [isEdit, setEdit] = useState<boolean>(false);

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<h2 className={clsx(styles.title)}>Систолическое2 давление</h2>
				{isEdit ? (
					<div className={styles.buttons}>
						<ApplyButton onClick={() => console.log('')} />
						<CancelButton onClick={() => setEdit(false)} />
					</div>
				) : (
					<ChangeButton
						isDisabled={false}
						onClick={() => setEdit(true)}
						size={'sm'}
					/>
				)}
			</div>
			<div className={styles.body}>
				{isEdit ? (
					<NumberInput
						maxValue={0}
						minValue={100}
						onChange={() => console.log('')}
					/>
				) : (
					<>
						<span className={styles.value}>120</span>
						<span className={styles.units}>мм. рт. ст.</span>
						<div className={styles.range}>
							<RangeInput
								maxValue={100}
								minValue={0}
								value={56}
							/>
						</div>
					</>
				)}
			</div>
		</div>
	);
}
