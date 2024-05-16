'use client';

import Widget from '@/components/widget/Widget';
import { IWidgetConfig } from '@/components/widget/types/IWidgetConfig';

import { useAppContext } from '@/context';

const pWidgetConfig: IWidgetConfig = {
	name: 'Пульс',
	units: 'уд./мин.',
	maxValue: 250,
	minValue: 20
};

export function Pulse() {
	const { pulseHistory, setPulseHistory } = useAppContext();

	return (
		<Widget
			config={pWidgetConfig}
			value={pulseHistory[pulseHistory.length - 1]}
			storeNewValue={value => setPulseHistory([...pulseHistory, value])}
		/>
	);
}
