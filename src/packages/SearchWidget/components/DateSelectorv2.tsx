import React from "react";
import styled from "styled-components";

export interface ICalendarWidgetProps {
    dojLbl: string;
    formattedDoj: any;
    todayLbl?: string;
    tomorrowLbl?: string;
    calendarIconFont?: any;
    isRoundTrip?: boolean;
    roundTripLbl?: string;
    formattedRTDoj?: any;
    roundTripMsg?: string;
    removeRTDoj?: boolean;
    onwardDojClickHandler: (id: string) => void;
    todayTomClickHandler?: (label: string) => void;
    returnDojClickHandler?: (id: string) => void;
    removeRTDojClickHandler?: () => void;
}

const CalendarWidget = styled.div`
  padding: 0.7em 1em;
  display: flex;
  position: relative;
`;

const WidgetSubBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
`;

const HeadingBlock = styled.div`
  display: flex;
  flex-direction: row;
`;

const SubBlockHeading = styled.div`
  font-size: 0.75em;
  text-align: left;
  margin-right: 1em;
`;

const SubBlockContent = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  padding: 0.5em 0;
  width: 100%;
`;

const SubBlockSubContent = styled.div`
  font-size: 0.645em;
  text-align: left;

  &:empty:not(:focus)::before {
    content: attr(data-placeholder);
    position: relative;
    top: 0.3em;
    opacity: 0.6;
    font-size: 0.85rem !important;
    text-transform: uppercase;
    color: #7e7e8c;
  }
`;

const CTABlock = styled.div`
  font-size: 0.8em;
  display: flex;
  justify-content: space-evenly;
`;

const Button = styled.button`
  background: transparent;
  text-transform: uppercase;
  border: none;
  outline: none;
  line-height: 1.5em;
  padding-left: 0;
  padding-right: 0;
  font-weight: bold;
  font-size: 0.8em;
  color: #1034d9;
`;

const CalendarIconBlock = styled.span`
  font-size: 1.4rem;
  margin-right: 0.3rem;
`;

const RemoveRTIconBlock = styled.div``;

/* tslint:disable: jsx-no-lambda jsx-no-multiline-js max-line-length */
const ButtonCTABlock: React.FunctionComponent<ICalendarWidgetProps> = (props) => (
    <CTABlock {...props}>
        <Button onClick={() => { if (props.todayTomClickHandler) { props.todayTomClickHandler("tod"); } }}>{props.todayLbl}</Button>
        <Button onClick={() => { if (props.todayTomClickHandler) { props.todayTomClickHandler("tom"); } }}>{props.tomorrowLbl}</Button>
    </CTABlock>
);

const DateSelectorv2: React.FunctionComponent<ICalendarWidgetProps> = (props) => {
  return (
    <CalendarWidget>
      <WidgetSubBlock>
        <CalendarIconBlock className={props.calendarIconFont} />
        <SubBlockContent data-placeholder={props.dojLbl}>{props.formattedDoj}</SubBlockContent>
      </WidgetSubBlock>
      <WidgetSubBlock>
        <ButtonCTABlock {...props} />
      </WidgetSubBlock>
    </CalendarWidget>
  );
};

DateSelectorv2.defaultProps = {
  dojLbl: "Select Date",
  todayLbl: "Today",
  tomorrowLbl: "Tomorrow",
  isRoundTrip: false,
  roundTripLbl: "Return Date(Optional)",
  roundTripMsg: "Avail discounts",
  removeRTDoj: false,
};

export default DateSelectorv2;
