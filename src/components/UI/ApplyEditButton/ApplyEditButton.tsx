import { FC } from "react";
import apply_icon from "../../../icons/apply-icon.svg";
import IconButton from "../IconButton/IconButton.tsx";

interface IApplyEditButton {
  onClick: () => void;
}

const ApplyEditButton: FC<IApplyEditButton> = ({ onClick }) => {
  return (
    <IconButton onClick={onClick}>
      <img src={apply_icon} alt="Применить значение" />
    </IconButton>
  );
};

export default ApplyEditButton;
