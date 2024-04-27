import { FC, useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/AppContext.tsx';
import { TAppContext } from '../../types/TAppContext.ts';
import { IParameterConfig } from '../../types/IParameterConfig.ts';
import { mockPulseData } from '../../mock/data.ts';
import { TState } from '../../types/TState.ts';
import PageLayout from '../PageLayout/PageLayout.tsx';
import Parameter from '../../components/Parameter/Parameter.tsx';
import { rangeValue } from '../../utils/common.ts';

interface IPulse {
  title: string;
  caption: string,
}

const Pulse: FC<IPulse> = ({ title, caption }) => {

  useEffect(() => {
    document.title = title || caption;
  }, [title, caption]);
  
  const { pulseHistory, setPulseHistory } = useContext(
    AppContext,
  ) as TAppContext;

  const [pulseParameter, setPulseParameter] = useState<IParameterConfig>({
    data: mockPulseData,
    state: 'show',
  });

  const onChangePulseState = (state: TState) => {
    setPulseParameter((prev) => ({
      ...prev,
      state,
    }));
  };

  const onChangePulseValue = (value: number) => {
    setPulseParameter((prev) => ({
      data: {
        ...prev.data,
        value,
      },
      state: 'show',
    }));

    setPulseHistory([
      ...pulseHistory,
      rangeValue(
        pulseParameter.data.minValue,
        pulseParameter.data.maxValue,
        value,
      ),
    ]);
  };
  return (
    <PageLayout caption={caption}>
      <Parameter
        data={pulseParameter.data}
        state={pulseParameter.state}
        onChangeParameter={onChangePulseValue}
        onChangeState={onChangePulseState}
      />
    </PageLayout>
  );
};

export default Pulse;
