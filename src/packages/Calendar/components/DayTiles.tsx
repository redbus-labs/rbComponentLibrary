import React from "react";
import styled from "styled-components";

import {
  IDayTilesProps,
  IDayTilesState,
  ISpanColorProps,
} from "../utils/interfaces";

const spanColor = (props: ISpanColorProps) => {
  if (props.isSelected) {
    return "white";
  } else if (props.isHoliday) {
    return "#EF4348";
  }
  return "black";
};

const spanBackground = (props: ISpanColorProps) => {
  if (props.isSelected) {
    return "#EF4348";
  } else if (props.isToday) {
    return "pink";
  }
  return "white";
};

const CalendarDaysBlock = styled.div`
  font-weight: 400;
  height: 10%;
  width: 11%;
  border: 0;
  font-size: 11px;
  box-sizing: border-box;
  margin: 4px;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  font-family: Montserrat, sans-serif;
  user-select: none;
`;

const CalendarDaysSpan = styled.span<ISpanColorProps>`
  line-height: 29px;
  width: 30px;
  display: inline-block;
  border-radius: 50%;
  cursor: pointer;
  user-select: none;
  opacity: ${(props) => (props.isDateBlocked ? 0.2 : 1)};
  color: ${(props) => spanColor(props)};
  background: ${(props) => spanBackground(props)};

  &:hover {
    background: ${(props) => (props.isDateBlocked ? null : "#F5EBEB")};
    color: ${(props) => (props.isDateBlocked ? null : "black")};
  }
`;

export class DayTiles extends React.PureComponent<
  IDayTilesProps,
  IDayTilesState
> {
  constructor(props: IDayTilesProps) {
    super(props);
  }

  public render() {
    const {
      blankDay,
      value,
      isDateBlocked = false,
      isHoliday = false,
      isToday = false,
      isSelected = false,
      dayClicked,
    } = this.props;
    if (blankDay) { return <CalendarDaysBlock>{""}</CalendarDaysBlock>; }
    const val = value || 0;
    return (
      <CalendarDaysBlock
        key={value}
        // tslint:disable-next-line: jsx-no-lambda
        onClick={() => !isDateBlocked && dayClicked && dayClicked(val)}
      >
        <CalendarDaysSpan
          isToday={isToday}
          isHoliday={isHoliday}
          isDateBlocked={isDateBlocked}
          isSelected={isSelected}
        >
          {value}
        </CalendarDaysSpan>
      </CalendarDaysBlock>
    );
  }
}
export default DayTiles;
