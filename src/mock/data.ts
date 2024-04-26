import { IData } from "../types/IData.ts";

const mockSystolicData: IData = {
  name: "Диастолическое давление",
  value: 214,
  units: "мм. рт. ст.",
  maxValue: 350,
  minValue: 50,
  allowEdit: true,
}

const mockDiastolicData: IData = {
  name: "Систолическое давление",
  value: 50,
  units: "мм. рт. ст.",
  maxValue: 100,
  minValue: 1,
  allowEdit: true,
}

const mockPulseData: IData = {
  name: "Пульс",
  value: 120,
  units: "уд./мин.",
  maxValue: 280,
  minValue: 10,
  allowEdit: true,
}

const mockTemperatureData: IData = {
  name: "Температура",
  value: 36.6,
  units: "°C",
  maxValue: 42.0,
  minValue: 34.3,
  allowEdit: true,
}

// Данные добавлены для начальной инициализации контекста
const mockPulseHistoryData: number[] = [34,45,98,55];
const mockTemperatureHistoryData: number[] = [36.6, 39.9, 34.0, 34];
const mockSystolicHistoryData: number[] = [50,60,100,80];
const mockDiastolicHistoryData: number[] = [110,100,140,180];

export {
  mockDiastolicData,
  mockSystolicData,
  mockPulseData,
  mockTemperatureData,
  mockPulseHistoryData,
  mockTemperatureHistoryData,
  mockSystolicHistoryData,
  mockDiastolicHistoryData
}