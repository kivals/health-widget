import { FC } from "react";
import { TSize } from "../../../types/TSize.ts";
import styles from './RadioInput.module.css';

interface IRadioInputProps {
  name: string,
  label: string,
  value: TSize,
  currentValue: string,
  onChange: (value: TSize) => void,
}

const RadioInput: FC<IRadioInputProps> = ({
  name,
  label,
  value,
  onChange,
  currentValue,
}) => {

  return (
    <label className={styles.label}>
      <input
        className={styles.input_radio}
        type='radio'
        name={name}
        value={value}
        checked={value === currentValue}
        onChange={e => onChange(e.target.value as TSize)}
      />
      <span className={styles.custom_radio} />
      { label }
    </label>
  );
};

export default RadioInput;