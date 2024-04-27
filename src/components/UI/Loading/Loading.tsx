import { FC } from 'react';
import loadingIcon from '../../../icons/loading_icon.svg';
import styles from './Loading.module.css';

const Loading: FC = () => {
  return (
    <img className={styles.image} src={loadingIcon} alt='Загрузка данных' />
  );
};

export default Loading;