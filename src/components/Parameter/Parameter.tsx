import { FC, useContext, useMemo, useState } from "react";
import { AppContext } from "../../context/AppContext.tsx";
import { TAppContext } from "../../types/TAppContext.ts";
import { IData } from "../../types/IData.ts";
import { TState } from "../../types/TState.ts";
import NumberInput from "../UI/NumberInput/NumberInput.tsx";
import ApplyEditButton from "../UI/ApplyEditButton/ApplyEditButton.tsx";
import CancelEditButton from "../UI/CancelEditButton/CancelEditButton.tsx";
import ChangeButton from "../UI/ChangeButton/ChangeButton.tsx";
import RangeInput from "../UI/RangeInput/RangeInput.tsx";
import { rangeValue } from "../../utils/common.ts";
import styles from "./Parameter.module.css";

interface IParameterProps {
  data: IData;
  state: TState;
  onChangeParameter: (value: number) => void;
  onChangeState: (value: TState) => void;
}

const Parameter: FC<IParameterProps> = ({
  data,
  state,
  onChangeParameter,
  onChangeState,
}) => {
  const { size } = useContext(AppContext) as TAppContext;
  const [editableValue, setEditableValue] = useState<number | null>();

  const preparedValue = useMemo(
    () => rangeValue(data.minValue, data.maxValue, data.value),
    [data.minValue, data.maxValue, data.value],
  );

  return (
    <div className={`${styles.container} ${size === "sm" && styles.small}`}>
      <h2 className={styles.name}>
        {data.name}
        {state === "show" && size === "sm" && (
          <ChangeButton
            size={"sm"}
            isDisabled={!data.allowEdit}
            onClick={() => onChangeState("edit")}
          />
        )}
        {state === "edit" && size === "sm" && (
          <div className={styles.actions}>
            <ApplyEditButton
              onClick={() =>
                onChangeParameter(Number(editableValue) || data.value)
              }
            />
            <CancelEditButton onClick={() => onChangeState("show")} />
          </div>
        )}
      </h2>
      <div className={styles.body}>
        {state === "edit" ? (
          <NumberInput
            minValue={data.minValue}
            maxValue={data.maxValue}
            onChange={setEditableValue}
          />
        ) : (
          <>
            <span className={styles.value}>{preparedValue}</span>
            <span className={styles.units}>{data.units}</span>
            <div className={styles.range_wrapper}>
              <RangeInput
                maxValue={data.maxValue}
                minValue={data.minValue}
                value={preparedValue}
              />
            </div>
          </>
        )}
      </div>
      <div className={styles.actions}>
        {state === "edit" && size === "lg" && (
          <>
            <ApplyEditButton
              onClick={() =>
                onChangeParameter(Number(editableValue) || data.value)
              }
            />
            <CancelEditButton onClick={() => onChangeState("show")} />
          </>
        )}
        {state === "show" && size === "lg" && (
          <ChangeButton
            size={"lg"}
            isDisabled={!data.allowEdit}
            onClick={() => onChangeState("edit")}
          />
        )}
      </div>
    </div>
  );
};

export default Parameter;
