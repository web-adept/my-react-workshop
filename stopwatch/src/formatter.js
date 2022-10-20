export const formatter = (timeUnit) =>
  timeUnit <= 9 ? `0${timeUnit}` : timeUnit
