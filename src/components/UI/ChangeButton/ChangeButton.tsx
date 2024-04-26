import { FC } from 'react';
import editIcon from "../../../icons/edit-icon.svg";
import styles from "./ChangeButton.module.css";
import {TSize} from "../../../types/TSize.ts";

interface IChangeButton {
  isDisabled: boolean,
  onClick: () => void,
  size: TSize,
}

const ChangeButton: FC<IChangeButton> = ({ isDisabled, onClick, size }) => {

  return (
    <button
      className={`${styles.button} ${size === 'sm' && styles.small}`}
      disabled={isDisabled}
      onClick={onClick}
    >
      <img src={editIcon} alt={"Изменить значение"}/>
      <span className={styles.button_text}>Изменить</span>
    </button>
  );
};

export default ChangeButton;