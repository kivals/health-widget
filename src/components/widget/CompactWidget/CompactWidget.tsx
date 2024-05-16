import { FC, useState } from 'react';

import ApplyButton from '@/components/UI/buttons/ApplyButton/ApplyButton';
import CancelButton from '@/components/UI/buttons/CancelButton/CancelButton';
import ChangeButton from '@/components/UI/buttons/ChangeButton/ChangeButton';
import NumberInput from '@/components/UI/inputs/NumberInput/NumberInput';
import RangeInput from '@/components/UI/inputs/RangeInput/RangeInput';
import { IEditableWidgetProps } from '@/components/widget/types/IWidgetProps';

import styles from './CompactWidget.module.scss';

const CompactWidget: FC<IEditableWidgetProps> = ({
	config,
	value,
	isEdit,
	storeNewValue,
	changeEdit
}) => {
	const [editableValue, setEditableValue] = useState<number>();

	const applyHandler = () => {
		if (editableValue) {
			storeNewValue(editableValue);
			changeEdit();
		}
	};

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<h2 className={styles.title}>{config.name}</h2>
				{isEdit ? (
					<div className={styles.buttons}>
						<ApplyButton onClick={applyHandler} />
						<CancelButton onClick={changeEdit} />
					</div>
				) : (
					<ChangeButton
						isDisabled={false}
						onClick={changeEdit}
						size={'sm'}
					/>
				)}
			</div>
			<div className={styles.body}>
				{isEdit ? (
					<NumberInput
						maxValue={config.maxValue}
						minValue={config.minValue}
						onChange={setEditableValue}
					/>
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
					</>
				)}
			</div>
		</div>
	);
};

export default CompactWidget;
