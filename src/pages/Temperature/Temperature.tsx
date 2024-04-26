import { FC, useContext, useState } from "react";
import { AppContext } from "../../context/AppContext.tsx";
import { TAppContext } from "../../types/TAppContext.ts";
import { IParameterConfig } from "../../types/IParameterConfig.ts";
import { mockTemperatureData } from "../../mock/data.ts";
import { TState } from "../../types/TState.ts";
import Parameter from "../../components/Parameter/Parameter.tsx";
import PageLayout from "../PageLayout/PageLayout.tsx";
import { rangeValue } from "../../utils/common.ts";

interface ITemperature {
  title: string;
}

const Temperature: FC<ITemperature> = ({ title }) => {
  const { temperatureHistory, setTemperatureHistory } = useContext(
    AppContext,
  ) as TAppContext;

  const [temperatureParameter, setTemperatureParameter] =
    useState<IParameterConfig>({
      data: mockTemperatureData,
      state: "show",
    });

  const onChangeTemperatureState = (state: TState) => {
    setTemperatureParameter((prev) => ({
      ...prev,
      state,
    }));
  };

  const onChangeTemperatureValue = (value: number) => {
    setTemperatureParameter((prev) => ({
      data: {
        ...prev.data,
        value,
      },
      state: "show",
    }));

    setTemperatureHistory([
      ...temperatureHistory,
      rangeValue(
        temperatureParameter.data.minValue,
        temperatureParameter.data.maxValue,
        value,
      ),
    ]);
  };
  return (
    <PageLayout title={title}>
      <Parameter
        data={temperatureParameter.data}
        state={temperatureParameter.state}
        onChangeParameter={onChangeTemperatureValue}
        onChangeState={onChangeTemperatureState}
      />
    </PageLayout>
  );
};

export default Temperature;
