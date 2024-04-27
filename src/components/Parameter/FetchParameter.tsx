import { FC, useContext } from 'react';
import { AppContext } from '../../context/AppContext.tsx';
import { TAppContext } from '../../types/TAppContext.ts';
import { IData } from '../../types/IData.ts';
import Loading from '../UI/Loading/Loading.tsx';
import styles from './Parameter.module.css';

interface IFetchParameterProps {
  data: IData | null,
}

const FetchParameter: FC<IFetchParameterProps> = ({ data }) => {
  const { size } = useContext(AppContext) as TAppContext;

  return (
    <div className={`${styles.container} ${size === 'sm' && styles.small}`}>
      {data ?
        <>
          <h2 className={styles.name}>
            {data.name}
          </h2>
          <div className={styles.body}>
            <span className={styles.value}>{data.value}</span>
            <span className={styles.units}>{data.units}</span>
          </div>
        </> :
        <Loading />}
    </div>
  );
};

export default FetchParameter;