'use client';

import Widget from '@/components/widget/Widget';
import { IWidgetConfig } from '@/components/widget/types/IWidgetConfig';

import styles from './Pressure.module.scss';
import { useAppContext } from '@/context';

const dWidgetConfig: IWidgetConfig = {
	name: 'Диастолическое давление',
	units: 'мм. рт. ст.',
	maxValue: 350,
	minValue: 50
};

const sWidgetConfig: IWidgetConfig = {
	name: 'Систолическое давление',
	units: 'мм. рт. ст.',
	maxValue: 350,
	minValue: 50
};

export function Pressure() {
	const {
		diastolicHistory,
		setDiastolicHistory,
		systolicHistory,
		setSystolicHistory
	} = useAppContext();

	return (
		<div className={styles.widgets}>
			<Widget
				config={dWidgetConfig}
				value={diastolicHistory[diastolicHistory.length - 1]}
				storeNewValue={value =>
					setDiastolicHistory([...diastolicHistory, value])
				}
			/>
			<Widget
				config={sWidgetConfig}
				value={systolicHistory[systolicHistory.length - 1]}
				storeNewValue={value => setSystolicHistory([...systolicHistory, value])}
			/>
		</div>
	);
}
