import axios from 'axios';
import { cache } from 'react';

import { API_KEY } from '@/utils/api-key';

const WEATHER_SRC =
	'https://api.openweathermap.org/data/2.5/weather?q=Moscow&units=metric&appid=';

export const fetchTemperature = cache(async () => {
	try {
		const { data } = await axios.get(WEATHER_SRC + API_KEY);
		const { temp } = data?.main;
		return temp;
	} catch (error) {
		console.error('Ошибка загрузки', error);
	}
});
