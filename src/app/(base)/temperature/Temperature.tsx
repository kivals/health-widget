'use client';

import Widget from '@/components/widget/Widget';
import { IWidgetConfig } from '@/components/widget/types/IWidgetConfig';

import { useAppContext } from '@/context';

const tWidgetConfig: IWidgetConfig = {
	name: 'Температура',
	units: '°C',
	maxValue: 42.0,
	minValue: 34.3
};

export function Temperature() {
	const { temperatureHistory, setTemperatureHistory } = useAppContext();

	return (
		<Widget
			config={tWidgetConfig}
			value={temperatureHistory[temperatureHistory.length - 1]}
			storeNewValue={value =>
				setTemperatureHistory([...temperatureHistory, value])
			}
		/>
	);
}
