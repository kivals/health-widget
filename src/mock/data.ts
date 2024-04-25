import {IData} from "../types/IData.ts";

const mockSystolicData: IData = {
  name: "Диастолическое давление",
  value: 214,
  units: "мм. рт. ст.",
  maxValue: 350,
  minValue: 50,
  allowEdit: true, // разрешение на изменение показателя
}

const mockDiastolicData: IData = {
  name: "Систолическое давление",
  value: 50,
  units: "мм. рт. ст.",
  maxValue: 100,
  minValue: 1,
  allowEdit: true, // разрешение на изменение показателя
}

const mockPulseData: IData = {
  name: "Пульс",
  value: 120,
  units: "уд./мин.",
  maxValue: 280,
  minValue: 10,
  allowEdit: true, // разрешение на изменение показателя
}

const mockTemperatureData: IData = {
  name: "Температура",
  value: 36.6,
  units: "°C",
  maxValue: 42.0,
  minValue: 34.3,
  allowEdit: true, // разрешение на изменение показателя
}

export {
  mockDiastolicData,
  mockSystolicData,
  mockPulseData,
  mockTemperatureData,
}