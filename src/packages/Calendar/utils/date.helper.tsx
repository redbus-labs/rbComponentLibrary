const maxPossibleDate = new Date(8640000000000000);
const minPossibleDate = new Date(-8640000000000000);
export const weekName = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

export const getMonthShort = (date: Date, monthName?: any) => {
  if (!monthName) {
    return date.toLocaleString("default", { month: "short" });
  } else {
    return monthName[getMonth(date)];
  }
};

export const getMonthLong = (date: Date) =>
  date.toLocaleString("default", { month: "long" });

export const getDayShort = (date: Date) =>
  date.toLocaleString("default", { weekday: "short" });

export const getDayLong = (date: Date) =>
  date.toLocaleString("default", { weekday: "long" });

export const getFullYear = (date: Date) => date.getFullYear();

export const getMonth = (date: Date) => date.getMonth();

export const getTime = (date: Date) => date.getTime();

export const getDate = (date: Date) => date.getDate();

export const getDayFromMonthStart = (margin: number, date: Date) =>
  new Date(date.getFullYear(), date.getMonth(), margin);

export const getDayFromDate = (margin: number, date: Date) =>
  new Date(date.getFullYear(), date.getMonth(), date.getDate() + margin);

export const setDate = (date: Date, n: number) => new Date(date.setDate(n));

export const getDateEquality = (d1: Date, d2: Date) => {
  return (
    getDate(d1) === getDate(d2) &&
    getMonth(d1) === getMonth(d2) &&
    getFullYear(d1) === getFullYear(d2)
  );
};

// This method will take care of edge cases like 31-sep.
export const setMonthMargin = (date: Date, count: number) => {
  let m;
  const d = (date = new Date(+date)).getDate();

  date.setMonth(date.getMonth() + count, 1);
  m = date.getMonth();
  date.setDate(d);
  if (date.getMonth() !== m) {date.setDate(0); }
  return date;
};

export const isSameMonthYear = (firstDate: Date, secondDate: Date) => {
  if (
    firstDate.getMonth() === secondDate.getMonth() &&
    getFullYear(firstDate) === getFullYear(secondDate)
  ) {
    return true;
  }
  return false;
};

export const isMonthSmallerOrEqual = (firstDate: Date, secondDate: Date) => {
  const firstYear = firstDate.getFullYear();
  const secondYear = secondDate.getFullYear();
  if (
    firstYear < secondYear ||
    (firstYear === secondYear && firstDate.getMonth() <= secondDate.getMonth())
  ) {
    return true;
  }
  return false;
};

export const isMonthGreaterOrEqual = (firstDate: Date, secondDate: Date) => {
  const firstYear = firstDate.getFullYear();
  const secondYear = secondDate.getFullYear();
  if (
    firstYear > secondYear ||
    (firstYear === secondYear && firstDate.getMonth() >= secondDate.getMonth())
  ) {
    return true;
  }
  return false;
};

export const isDateInRange = (
  date: Date,
  minDateArg: Date | undefined,
  maxDateArg: any,
) => {
  const maxDate = maxDateArg || maxPossibleDate;
  const minDate = minDateArg || minPossibleDate;

  if (date >= minDate && date <= maxDate) {
    return true;
  }
  return false;
};

export const dateDiffInDays = (a: Date, b: Date) => {
  const _MS_PER_DAY = 1000 * 60 * 60 * 24;
  const d1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const d2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
  return Math.floor((d1 - d2) / _MS_PER_DAY);
};

export const daysInMonth = (date: Date) => {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
};

export const initialBlankDateMargin = (customLocal: string[], date: Date) => {
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  // const firstDayName = getDayShort(firstDay);
  return (firstDay.getDay() + 6) % 7;
};
