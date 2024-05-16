'use client';

import { IWidgetConfig } from '@/components/widget/IWidgetConfig';
import Widget from '@/components/widget/Widget';

import styles from './Pressure.module.scss';

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
	return (
		<div className={styles.widgets}>
			<Widget
				config={dWidgetConfig}
				value={50}
			/>
			<Widget
				config={sWidgetConfig}
				value={50}
			/>
		</div>
	);
}
