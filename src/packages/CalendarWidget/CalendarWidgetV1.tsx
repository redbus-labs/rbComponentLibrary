import React, {FunctionComponent} from "react";
import styled from "styled-components";

export interface ICalendarWidgetProps {
    widgetMainLbl: string;
    formattedDoj: any;
    todayLbl: string;
    tomorrowLbl: string;
    calendarIconFont?: any;
    isRoundTrip?: boolean;
    roundTripLbl?: string;
    formattedRTDoj?: any;
    roundTripMsg?: string;
    removeRTDoj?: boolean;
    addDojIconFont?: any;
    remDojIconFont?: any;
    onwardDojClickHandler: (id: string) => void;
    todayTomClickHandler: (label: string) => void;
    returnDojClickHandler?: (id: string) => void;
    removeRTDojClickHandler?: () => void;
    calendarOnwayDate?: string;
    calendarRoundTripDate?: string;
}

const CalendarWidget = styled.div`
  margin: 1em;
  margin-top: 1.2em;
  padding: 0.7em 1em;
  background: #fff;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.16);
  border-radius: 2px;
  display: flex;
  color: #3e3e52;
  position: relative;
`;

const WidgetSubBlock = styled.div<{isReturnBlk: boolean}>`
  display: flex;
  flex-direction: column;
  width: 50%;
  ${ ({isReturnBlk}) => !isReturnBlk ? `justify-content: center;` : `align-items: flex-end;` }
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
`;

const CTABlock = styled.div<ICalendarWidgetProps>`
  font-size: 0.8em;
  display: flex;
  ${ ({isRoundTrip}) => isRoundTrip ? `justify-content: flex-start;` : `justify-content: flex-end;` }
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
`;

const ButtonSeparator = styled.span`
  border-left: 1px solid #3e3e52;
  margin: 0 0.5em;
`;

const RemoveRTIconBlock = styled.div`
  position: absolute;
  right: 0.5em;
  font-size: 0.9em;
`;

const CalendarIconSpan = styled.span`
  font-size: 1.4rem;
  margin-right: 0.3rem;
`;

const AddIconBlock = styled.div`
  font-size: 1.5em;
  width: 100%;
  display: flex;
  justify-content: center;
`;

/* tslint:disable: jsx-no-lambda jsx-no-multiline-js max-line-length */
const ButtonCTABlock: FunctionComponent<ICalendarWidgetProps> = (props) => (
    <CTABlock {...props}>
        <Button data-autoid={props.todayLbl} onClick={() => props.todayTomClickHandler("tod")}>{props.todayLbl}</Button>
        <ButtonSeparator />
        <Button data-autoid={props.tomorrowLbl} onClick={() => props.todayTomClickHandler("tom")}>{props.tomorrowLbl}</Button>
    </CTABlock>
);

export const CalendarWidgetV1: FunctionComponent<ICalendarWidgetProps> = (props) => {
  return (
    <CalendarWidget>
        <WidgetSubBlock  isReturnBlk={false}>
            <SubBlockHeading>{props.widgetMainLbl}</SubBlockHeading>
            <SubBlockContent data-autoid={props.calendarOnwayDate} onClick={() => props.onwardDojClickHandler("onward")}>
                <CalendarIconSpan className={props.calendarIconFont} />
                {props.formattedDoj}
            </SubBlockContent>
            {props.isRoundTrip && <ButtonCTABlock {...props} />}
        </WidgetSubBlock>
        {!props.isRoundTrip && <WidgetSubBlock isReturnBlk={false}>
            <ButtonCTABlock {...props} />
        </WidgetSubBlock>}
        {props.isRoundTrip && <WidgetSubBlock isReturnBlk={true}>
            <HeadingBlock>
                <SubBlockHeading>{props.roundTripLbl}</SubBlockHeading>
                {props.removeRTDoj && props.formattedRTDoj && <RemoveRTIconBlock onClick={props.removeRTDojClickHandler} className={props.remDojIconFont} />}
            </HeadingBlock>
            <SubBlockContent data-autoid={props.calendarRoundTripDate} onClick={() => { if (props.returnDojClickHandler) { props.returnDojClickHandler("return"); } }}>
                {props.formattedRTDoj !== "" ? props.formattedRTDoj : <AddIconBlock className={props.addDojIconFont} />}
            </SubBlockContent>
            <SubBlockSubContent>{props.roundTripMsg}</SubBlockSubContent>
        </WidgetSubBlock>}
    </CalendarWidget>
  );
};

CalendarWidgetV1.defaultProps = {
  widgetMainLbl: "Journey Date",
  todayLbl: "Today",
  tomorrowLbl: "Tomorrow",
  isRoundTrip: false,
  roundTripLbl: "Return Date(Optional)",
  roundTripMsg: "Avail discounts",
  removeRTDoj: false,
};
