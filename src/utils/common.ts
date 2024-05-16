export const rangeValue = (min: number, max: number, value: number): number => {
  return Math.min(Math.max(value, min), max);
}