import styles from "./IconButton.module.css";
import React, {FC} from "react";

interface IIconButtonsProps {
  children: React.ReactNode,
  onClick: () => void,
}

const IconButton: FC<IIconButtonsProps> = ({children, onClick}) => {
  return (
    <button className={styles.button} onClick={() => onClick()}>
      {children}
    </button>
  );
};

export default IconButton;