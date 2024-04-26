import { TSize } from "./TSize.ts";

export type TAppContext = {
  size: TSize,
  setSize(size: TSize): void,
  pulseHistory: number[],
  setPulseHistory(history: number[]): void,
  temperatureHistory: number[],
  setTemperatureHistory(history: number[]): void,
  systolicHistory: number[],
  setSystolicHistory(history: number[]): void,
  diastolicHistory: number[],
  setDiastolicHistory(history: number[]): void,
}