'use client';

import { FC, useState } from 'react';

import ApplyButton from '@/components/UI/buttons/ApplyButton/ApplyButton';
import CancelButton from '@/components/UI/buttons/CancelButton/CancelButton';
import ChangeButton from '@/components/UI/buttons/ChangeButton/ChangeButton';
import NumberInput from '@/components/UI/inputs/NumberInput/NumberInput';
import RangeInput from '@/components/UI/inputs/RangeInput/RangeInput';
import { IWidgetProps } from '@/components/widget/IWidgetProps';

import styles from './BigWidget.module.scss';

const BigWidget: FC<IWidgetProps> = ({ config, value }) => {
	const [isEdit, setEdit] = useState<boolean>(false);

	return (
		<div className={styles.container}>
			<h2 className={styles.title}>{config.name}</h2>
			{isEdit ? (
				<>
					<NumberInput
						maxValue={config.maxValue}
						minValue={config.minValue}
						onChange={() => console.log('')}
					/>
					<div className={styles.buttons}>
						<ApplyButton onClick={() => console.log('')} />
						<CancelButton onClick={() => setEdit(false)} />
					</div>
				</>
			) : (
				<>
					<span className={styles.value}>{value}</span>
					<span className={styles.units}>{config.units}</span>
					<div className={styles.range}>
						<RangeInput
							maxValue={config.maxValue}
							minValue={config.minValue}
							value={value}
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
};

export default BigWidget;
