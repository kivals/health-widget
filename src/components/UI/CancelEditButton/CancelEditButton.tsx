import { FC } from "react";
import cancel_icon from "../../../icons/cancel-icon.svg";
import IconButton from "../IconButton/IconButton.tsx";

interface ICancelEditButton {
  onClick: () => void;
}

const CancelEditButton: FC<ICancelEditButton> = ({ onClick }) => {
  return (
    <IconButton onClick={onClick}>
      <img src={cancel_icon} alt="Отменить значение" />
    </IconButton>
  );
};

export default CancelEditButton;
