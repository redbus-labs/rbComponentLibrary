import React from "react";
import styled from "styled-components";

import {
  getMonthShort,
  getFullYear,
  isMonthSmallerOrEqual,
  isMonthGreaterOrEqual,
  setMonthMargin,
} from "../utils/date.helper";
import { IDayNavigatorProps, IDayNavigatorState } from "../utils/interfaces";

import {ChevronLeft, ChevronRight} from "../utils/icons.helper";

const IconArrow = styled.img`
  height: 0.7em;
  cursor: pointer;
  margin-top: 0.1em;
`;

const CalendarHeader = styled.div`
  display: flex;
  justify-content: center;
`;

const IconBlock = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  height: 15%;
  border: 0;
  font-size: 20px;
  box-sizing: border-box;
  margin: 10px;
  text-align: center;
  width: 10%;
  user-select: none;
`;

export class DayNavigator extends React.PureComponent<
  IDayNavigatorProps,
  IDayNavigatorState
> {
  constructor(props: IDayNavigatorProps) {
    super(props);
    const {
      calendarDate,
      startDate,
      maxAllowedDate,
      allowPreviousDates,
    } = props;
    let isPreviousMonthAllowed = true;
    let isNextMonthAllowed = true;

    if (!allowPreviousDates) {
      isPreviousMonthAllowed = !isMonthSmallerOrEqual(calendarDate, startDate);
    }

    if (maxAllowedDate) {
      isNextMonthAllowed = !isMonthGreaterOrEqual(calendarDate, maxAllowedDate);
    }
    this.state = {
      previousNavigationAllowed: isPreviousMonthAllowed,
      nextNavigationAllowed: isNextMonthAllowed,
    };
  }

  public componentWillReceiveProps(nextProps: IDayNavigatorProps) {
    const {
      calendarDate,
      startDate,
      maxAllowedDate,
      allowPreviousDates,
    } = nextProps;
    let isNextMonthAllowed = true;
    let isPreviousMonthAllowed = true;
    // console.log(calendarDate, startDate, maxAllowedDate);
    if (!allowPreviousDates) {
      isPreviousMonthAllowed = !isMonthSmallerOrEqual(calendarDate, startDate);
    }

    if (maxAllowedDate) {
      isNextMonthAllowed = !isMonthGreaterOrEqual(calendarDate, maxAllowedDate);
    }
    this.setState({
      previousNavigationAllowed: isPreviousMonthAllowed,
      nextNavigationAllowed: isNextMonthAllowed,
    });
  }

  public navigateMonth = (arg: number) => () => {

    const { setCalendarDate, calendarDate, allowPreviousDates } = this.props;
    const { previousNavigationAllowed, nextNavigationAllowed } = this.state;
    const newDate = setMonthMargin(calendarDate, arg);
    if (
      (arg === 1 && nextNavigationAllowed) ||
      (allowPreviousDates && arg === -1) ||
      (!allowPreviousDates && arg === -1 && previousNavigationAllowed)
    ) {
      setCalendarDate(newDate);
    }
    return;
  }

  public render() {
    const { calendarDate, icons , customLocal} = this.props;
    const { previousNavigationAllowed, nextNavigationAllowed } = this.state;

    const LeftIcon = () => {
      if (icons.left && icons.left !== "") {
         return <IconArrow src={icons.left}/>;
      } else if (icons.leftIconClass && icons.leftIconClass !== "") {
        return <span className={icons.leftIconClass} />;
      } else {
        return <ChevronLeft height={"15px"}/>;
      }
    };

    const RightIcon = () => {
      if (icons.right && icons.right !== "") {
         return <IconArrow src={icons.right}/>;
      } else if (icons.rightIconClass && icons.rightIconClass !== "") {
        return <span className={icons.rightIconClass} />;
      } else {
        return <ChevronRight height={"15px"}/>;
      }
    };

    return (
      <CalendarHeader>
        <IconBlock
          style={{ flexGrow: 1, cursor: "pointer"}}
          onClick={this.navigateMonth(-1)}
        >
          {previousNavigationAllowed && <LeftIcon/>}
        </IconBlock>

        <IconBlock
          style={{ flexGrow: 2, fontSize: "16px", textTransform: "uppercase" }}
        >
          {getMonthShort(calendarDate, customLocal && customLocal.monthName)} {getFullYear(calendarDate)}
        </IconBlock>
        <IconBlock
          style={{ flexGrow: 1, cursor: "pointer" }}
          onClick={this.navigateMonth(1)}
        >
          {nextNavigationAllowed && <RightIcon/>}
        </IconBlock>
      </CalendarHeader>
    );
  }
}

export default DayNavigator;
