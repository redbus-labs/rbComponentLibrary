import React from "react";
import styled from "styled-components";

import {
  initialBlankDateMargin,
  daysInMonth,
  getDate,
  isSameMonthYear,
  setDate,
  getDayFromMonthStart,
  isDateInRange,
  getTime,
  getDateEquality,
  weekName,
} from "../utils/date.helper";
import DayTiles from "./DayTiles";
import { IDayTilesWrapperProps } from "../utils/interfaces";

const SpanContainer = styled.span`
  display: flex;
  justify-content: center;
`;

export class DayTilesWrapper extends React.PureComponent<
  IDayTilesWrapperProps
> {
  private todaysDate: Date = new Date();
  constructor(props: IDayTilesWrapperProps) {
    super(props);
  }

  public dayClicked(d: number) {
    const { calendarDate, setSelectedDate, onDateClicked } = this.props;
    const newDate = setDate(calendarDate, d);
    setSelectedDate(newDate);
    // tslint:disable-next-line: no-unused-expression
    onDateClicked && onDateClicked(newDate);
  }

  public isDayHoliday(currentDateInTime: number) {
    const { holidayList } = this.props;
    return holidayList && holidayList.includes(currentDateInTime);
  }

  public render() {
    const {
      calendarDate,
      startDate,
      maxAllowedDays,
      allowPreviousDates,
      selectedDate,
      maxAllowedDate,
    } = this.props;
    // console.log(calendarDate, startDate, selectedDate);
    const allDays: JSX.Element[] = [];
    const vacantBlank = initialBlankDateMargin(weekName, calendarDate);
    const startDayIndex = getDate(startDate);

    // To create initial vacant blocks (before first date.)
    for (let index = 0; index < vacantBlank; index++) {
      allDays.push(<DayTiles key={index} blankDay={true} />);
    }

    // To create month date blocks.
    for (let index = 1; index <= daysInMonth(calendarDate); index++) {
      let isDateBlocked = false;
      let isHoliday = false;
      let isToday = false;
      let isSelected = false;
      const currentDate = getDayFromMonthStart(index, calendarDate);
      const currentDateInTime = getTime(currentDate);
      const isSameMonthYearPresent = isSameMonthYear(startDate, calendarDate);
      const dateInRange =
      maxAllowedDays !== undefined && maxAllowedDays >= 0 && isDateInRange(currentDate, undefined, maxAllowedDate);

      // Check if dates is equal to `current` date.
      if (getDateEquality(currentDate, this.todaysDate)) {
        isToday = true;
      }

      // Check if dates is equal to `selected` date.
      if (getDateEquality(currentDate, selectedDate)) {
        isSelected = true;
      }

      // To block previous days from start date, IFF allowPreviousDates is false
      if (
        index < startDayIndex &&
        isSameMonthYearPresent &&
        !allowPreviousDates
      ) {
        isDateBlocked = true;
      }

      // Format calendar according to date range provided.
      if (!isDateBlocked && dateInRange) {
        if (
          (vacantBlank + index) % 7 === 6 ||
          (vacantBlank + index) % 7 === 0 ||
          this.isDayHoliday(currentDateInTime)
        ) {
          isHoliday = true;
        }
      } else if (!isDateBlocked && maxAllowedDays !== undefined && maxAllowedDays >= 0 && !dateInRange) {
        // block rest of the dates.
        isDateBlocked = true;
      }

      // If date range is not provided than color the holidays/weekends.
      if (!isDateBlocked && !dateInRange) {
        if (
          (vacantBlank + index) % 7 === 6 ||
          (vacantBlank + index) % 7 === 0 ||
          this.isDayHoliday(currentDateInTime)
        ) {
          isHoliday = true;
        }
      }

      allDays.push(
        <DayTiles
          // tslint:disable-next-line: jsx-no-lambda
          dayClicked={(w) => this.dayClicked(w)}
          isHoliday={isHoliday}
          isDateBlocked={isDateBlocked}
          value={index}
          key={index + 100}
          isToday={isToday}
          isSelected={isSelected}
        />,
      );
    }

    // To create empty div for left over days in last rows.
    const extraEmptyDiv = 7 - (allDays.length % 7);
    for (let index = 1; index <= extraEmptyDiv; index++) {
      allDays.push(<DayTiles key={index} blankDay={true} />);
    }

    // To create the calendar (matrix type structure).
    const rows: JSX.Element[][] = [];
    let cells: JSX.Element[] = [];

    allDays.forEach((row: JSX.Element, i) => {
      if (i % 7 !== 0) {
        cells.push(row);
      } else {
        const insertRow: JSX.Element[] = [...cells];
        rows.push(insertRow);
        cells = [];
        cells.push(row);
      }
      if (i === allDays.length - 1) {
        const insertRow = [...cells];
        rows.push(insertRow);
      }
    });

    const rowElements = rows.map((row, i: number) => {
      return <SpanContainer key={i}> {row}</SpanContainer>;
    });
    return <div> {rowElements}</div>;
  }
}

export default DayTilesWrapper;
