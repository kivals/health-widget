import { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { API_KEY } from '../../utils/api-key.ts';
import { IData } from '../../types/IData.ts';
import PageLayout from '../PageLayout/PageLayout.tsx';
import FetchParameter from '../../components/Parameter/FetchParameter.tsx';

const WEATHER_SRC =
  'https://api.openweathermap.org/data/2.5/weather?q=Moscow&units=metric&appid=';

interface IOutdoorTemperature {
  title: string,
}

const OutdoorTemperature: FC<IOutdoorTemperature> = ({ title }) => {
  const [currentTemperatureData, setCurrentTemperatureData] = useState<IData | null>(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const { data } = await axios.get(WEATHER_SRC + API_KEY);
        const { temp } = data?.main;
        setCurrentTemperatureData({
          name: 'Температура',
          minValue: -100,
          maxValue: 100,
          value: temp,
          units: '°C',
        });
      } catch (error) {
        console.error('Ошибка загрузки', error);
      }
    };
    fetchWeatherData();
  }, []);


  return (
    <PageLayout title={title}>
      <FetchParameter data={currentTemperatureData} />
    </PageLayout>
  );
};

export default OutdoorTemperature;