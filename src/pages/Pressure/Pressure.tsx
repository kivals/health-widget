import { FC, useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/AppContext.tsx';
import { TAppContext } from '../../types/TAppContext.ts';
import { TState } from '../../types/TState.ts';
import { IParameterConfig } from '../../types/IParameterConfig.ts';
import Parameter from '../../components/Parameter/Parameter.tsx';
import PageLayout from '../PageLayout/PageLayout.tsx';
import { rangeValue } from '../../utils/common.ts';
import { mockDiastolicData, mockSystolicData } from '../../mock/data.ts';

interface IPressure {
  caption: string,
  title?: string;
}

const Pressure: FC<IPressure> = ({ caption, title }) => {
  useEffect(() => {
    document.title = title || caption;
  }, [title, caption]);
  
  const {
    systolicHistory,
    setSystolicHistory,
    diastolicHistory,
    setDiastolicHistory,
  } = useContext(AppContext) as TAppContext;

  const [systolicParameter, setSystolicParameter] = useState<IParameterConfig>({
    data: mockSystolicData,
    state: 'show',
  });

  const [diastolicParameter, setDiastolicParameter] =
    useState<IParameterConfig>({
      data: mockDiastolicData,
      state: 'show',
    });

  const onChangeSystolicState = (state: TState) => {
    setSystolicParameter((prev) => ({
      ...prev,
      state,
    }));
  };

  const onChangeSystolicValue = (value: number) => {
    setSystolicParameter((prev) => ({
      data: {
        ...prev.data,
        value,
      },
      state: 'show',
    }));
    setSystolicHistory([
      ...systolicHistory,
      rangeValue(
        systolicParameter.data.minValue,
        systolicParameter.data.maxValue,
        value,
      ),
    ]);
  };

  const onChangeDiastolicState = (state: TState) => {
    setDiastolicParameter((prev) => ({
      ...prev,
      state,
    }));
  };

  const onChangeDiastolicValue = (value: number) => {
    setDiastolicParameter((prev) => ({
      data: {
        ...prev.data,
        value,
      },
      state: 'show',
    }));

    setDiastolicHistory([
      ...diastolicHistory,
      rangeValue(
        diastolicParameter.data.minValue,
        diastolicParameter.data.maxValue,
        value,
      ),
    ]);
  };

  return (
    <PageLayout caption={caption}>
      <Parameter
        data={systolicParameter.data}
        state={systolicParameter.state}
        onChangeParameter={onChangeSystolicValue}
        onChangeState={onChangeSystolicState}
      />
      <Parameter
        data={diastolicParameter.data}
        state={diastolicParameter.state}
        onChangeParameter={onChangeDiastolicValue}
        onChangeState={onChangeDiastolicState}
      />
    </PageLayout>
  );
};

export default Pressure;
