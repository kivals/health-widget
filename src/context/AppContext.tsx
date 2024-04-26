import { createContext, PropsWithChildren, useState } from "react";
import { TSize } from "../types/TSize.ts";
import { TAppContext } from "../types/TAppContext.ts";
import {
  mockDiastolicHistoryData,
  mockPulseHistoryData,
  mockSystolicHistoryData,
  mockTemperatureHistoryData
} from "../mock/data.ts";

export const AppContext = createContext<TAppContext | null>(null);

export const AppProvider = (props: PropsWithChildren) => {
  const [size, setSize] = useState<TSize>("lg");

  const [pulseHistory, setPulseHistory] =
    useState<number[]>([...mockPulseHistoryData]);

  const [temperatureHistory, setTemperatureHistory] =
    useState<number[]>([...mockTemperatureHistoryData]);

  const [systolicHistory, setSystolicHistory] =
    useState<number[]>([...mockSystolicHistoryData]);

  const [diastolicHistory, setDiastolicHistory] =
    useState<number[]>([...mockDiastolicHistoryData]);

  return (
    <AppContext.Provider value={{
      size,
      setSize,
      pulseHistory,
      setPulseHistory,
      temperatureHistory,
      setTemperatureHistory,
      systolicHistory,
      setSystolicHistory,
      diastolicHistory,
      setDiastolicHistory
    }}>
      {props.children}
    </AppContext.Provider>
  );
};