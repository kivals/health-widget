import LoadingWidget from '@/components/widget/LoadingWidget/LoadingWidget';
import { IWidgetConfig } from '@/components/widget/types/IWidgetConfig';

import { fetchTemperature } from '@/services/temperatureApi.service';

const oWidgetConfig: Partial<IWidgetConfig> = {
	name: 'Температура',
	units: '°C'
};

export async function Outdoor() {
	const temp = await fetchTemperature();

	return (
		<LoadingWidget
			config={oWidgetConfig}
			value={temp}
		/>
	);
}
