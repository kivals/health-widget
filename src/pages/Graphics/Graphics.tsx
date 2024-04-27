import { FC, useContext, useEffect } from 'react';
import { AppContext } from '../../context/AppContext.tsx';
import { TAppContext } from '../../types/TAppContext.ts';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Legend,
  BarElement,
} from 'chart.js';
import DoubleLineChart from '../../components/UI/DoubleLineChart/DoubleLineChart.tsx';
import BarChart from '../../components/UI/BarChart/BarChart.tsx';
import styles from './Graphics.module.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  PointElement,
  LineElement,
  Legend,
);

interface IGraphics {
  title: string,
}

const Graphics: FC<IGraphics> = ({ title }) => {
  useEffect(() => {
    document.title = title || '';
  }, [title]);

  const {
    pulseHistory,
    temperatureHistory,
    systolicHistory,
    diastolicHistory,
  } = useContext(AppContext) as TAppContext;

  return (
    <div className={styles.container}>
      <BarChart title={'История изменения пульса'} data={pulseHistory} />

      <BarChart title={'История изменения температуры'} data={temperatureHistory} />

      <DoubleLineChart
        title={'Изменение диастолического и систолического давления'}
        firstLineData={{ label: 'Систолическое', data: systolicHistory }}
        secondLineData={{ label: 'Диастолическое', data: diastolicHistory }}
      />
    </div>
  );
};

export default Graphics;