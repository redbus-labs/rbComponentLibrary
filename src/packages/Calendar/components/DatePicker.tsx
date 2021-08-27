import * as React from "react";
import styled from "styled-components";

import DayTitle from "./DayNameTitle";
import DayTilesWrapper from "./DayTilesWrapper";
import DayNavigator from "./DayNavigator";
import {
  getDate,
  getMonthShort,
  getFullYear,
  getTime,
  getDayFromDate,
} from "../utils/date.helper";
import {
  IDatePickerProps,
  IDatePickerState,
} from "../utils/interfaces";

import {CalendarIconSvg} from "../utils/icons.helper";

const CalendarContainer = styled.div`
  position: relative;
  display: inline-block;
  min-width: 250px;
`;

const MainBlock = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 100;
  border: 1px solid #e4e4e4;
  background: white;
`;

const InputElm = styled.input`
  padding: 1em;
  border: 1px solid #e4e4e4;
  flex: 1;
  font-size: 1rem;
  width: 100%;
  box-sizing: border-box;
  user-select: none;
  outline: none;
`;
const CalendarIcon = styled.div`
  height: 20px;
  width: 20px;
  top: 15px;
  right: 5%;
  float: right;
  position: absolute;
  cursor: pointer;
`;

const CalendarIconImg = styled.img`
  height: 20px;
  width: 20px;
  top: 15px;
  right: 5%;
  float: right;
  position: absolute;
  cursor: pointer;
`;

export class DatePicker extends React.PureComponent<
  IDatePickerProps,
  IDatePickerState
> {
  private wrapperRef: React.RefObject<HTMLDivElement>;
  private holidayList: number[] | undefined = [];
  private maxAllowedDate: any = Date;

  constructor(props: IDatePickerProps) {
    super(props);
    const { defaultOpen, maxAllowedDays, customLocal } = props;
    // ref for whole container.
    this.wrapperRef = React.createRef();
    this.state = {
      isOpen: defaultOpen || false,
      calendarDate:
        (props.selectedDate && new Date(props.selectedDate)) || new Date(),
      selectedDate:
        (props.selectedDate && new Date(props.selectedDate)) || new Date(),
    };
    this.holidayList =
      customLocal &&
      customLocal.holidaysList &&
      customLocal.holidaysList.map((date) => getTime(date));
    // this.holidayList = holidays && holidays.map(date => getTime(date));
    const startDate = props.startDate || this.state.selectedDate;
    this.maxAllowedDate =
      maxAllowedDays !== undefined && maxAllowedDays >= 0 && getDayFromDate(maxAllowedDays, startDate);
  }

  public componentDidMount() {
    // Event listener to track outside click
    if (this.props.closeOnOutsideClick) {
      document.addEventListener("mousedown", (e: Event) =>
      this.handleClickOutside(e),
      );
    }
  }

  public componentWillUnmount() {
    if (this.props.closeOnOutsideClick) {
      document.removeEventListener("mousedown", (e: Event) =>
        this.handleClickOutside(e),
      );
    }
  }

  public handleClickOutside = (event: any) => {
    const node = this.wrapperRef.current;
    if (node && !node.contains(event.target)) {
      this.setState({
        isOpen: false,
      });
      // tslint:disable-next-line: no-unused-expression
      this.props.onOutsideClick && this.props.onOutsideClick();
    }
  }

  public onFocus = () => {
    const { disable } = this.props;
    if (disable) {return; }
    this.setState({
      isOpen: true,
    });
  }

  public setCalendarDate = (date: Date) => {
    this.setState({
      calendarDate: date,
    });
  }

  public setSelectedDate = (date: Date) => {
    const { closeOnSelect } = this.props;
    let closePicker = !closeOnSelect;
    !closePicker ? (closePicker = false) : (closePicker = true);
    this.setState({
      selectedDate: date,
      isOpen: closePicker,
    });
  }

  public inputValue = () => {
    const { selectedDate } = this.state;
    const { customLocal } = this.props;
    const dd: number = getDate(selectedDate);
    let dds: string = dd.toString();
    const mm: string = getMonthShort(selectedDate, customLocal && customLocal.monthName);
    const yyyy = getFullYear(selectedDate);

    if (dd < 10) {
      dds = "0" + dd;
    }
    return dds + "-" + mm + "-" + yyyy;
  }

  public render() {
    const { calendarDate, isOpen, selectedDate } = this.state;
    const {
      width,
      startDate= new Date("1970"),
      onDateClicked,
      maxAllowedDays,
      icons,
      hideInput,
      allowPreviousDates,
      customLocal,
    } = this.props;

    const RenderCalendarIcon = () => {
      if (icons.calendar && icons.calendar !== "") {
         return <CalendarIconImg onClick={this.onFocus} src={icons.calendar}/>;
      } else if (icons.calendarClass && icons.calendarClass !== "") {
        return <span onClick={this.onFocus} className={icons.calendarClass} />;
      } else {
        return <CalendarIcon onClick={this.onFocus}> <CalendarIconSvg height="20px"/> </CalendarIcon>;
      }
    };

    const input = <div style={{position: "relative"}} className="inputContainer">
      {icons && icons.showCalendarIcon && <RenderCalendarIcon/>}
        <InputElm
          value={this.inputValue()}
          readOnly={true}
          onFocus={this.onFocus}
        />
      </div>;

    const mainBlock =  <MainBlock>
      <DayNavigator
        setCalendarDate={this.setCalendarDate}
        calendarDate={calendarDate}
        startDate={startDate}
        icons={icons}
        allowPreviousDates={allowPreviousDates}
        maxAllowedDays={maxAllowedDays}
        maxAllowedDate={this.maxAllowedDate}
        customLocal={customLocal}
      />
      <DayTitle customLocal={customLocal} {...this.props} />
      <DayTilesWrapper
        calendarDate={this.state.calendarDate}
        startDate={startDate}
        onDateClicked={onDateClicked}
        maxAllowedDays={maxAllowedDays}
        allowPreviousDates={allowPreviousDates}
        holidayList={this.holidayList}
        selectedDate={selectedDate}
        setSelectedDate={this.setSelectedDate}
        maxAllowedDate={this.maxAllowedDate}
        customLocal={customLocal}
      />
    </MainBlock>;

    return (
      <CalendarContainer ref={this.wrapperRef} style={{ width }}>
        {!hideInput && input}
        {isOpen && (mainBlock)}
      </CalendarContainer>
    );
  }
}

export default DatePicker;
