import React from "react";
import styled from "styled-components";

export interface IFerryProps {
  roundTripSel: string;
  oneWaySel: string;
  roundTripSelectionHandler: () => void;
  dojLbl: string;
  formattedDoj: any;
  calendarIconFont?: any;
  isRoundTrip?: boolean;
  roundTripLbl?: string;
  formattedRTDoj?: any;
  roundTripMsg?: string;
  onwardDojClickHandler: (id: string) => void;
  returnDojClickHandler?: (id: string) => void;
  dropOneway?: boolean;
  dropRoundTrip?: boolean;
}

const DateContainer = styled.div`
  padding: 0.8rem;
  font-size: 0.85rem;
`;

const SelectorMain = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const SelectorBlock = styled.div`
  width: 50%;
  display: flex;
`;

const DojSelectorBlock = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  line-height: 2rem;
`;

const DojReturnSelectorBlock = styled.div<IFerryProps>`
  width: 45%;
  display: flex;
  flex-direction: column;
  line-height: 2rem;
  ${ ({isRoundTrip}) => !isRoundTrip ? `opacity: 0.5;` : `` }
`;

const RadioLabel = styled.label`
  border: 1px solid #3e3e52;
  background: #f8f4f4;
  border-radius: 50%;
  height: 1rem;
  width: 1rem;
  position: absolute;
`;

const SelLabel = styled.div`
  margin-left: 2rem;
  color: #3e3e52;
`;

const RadioBtn = styled.span``;

const InputBlock = styled.input`
  display: none;

  &:checked ~ ${RadioLabel} {
    border: 1px solid #d84e55;
    background: #d84e55;

    ${RadioBtn} {
      border: 1px solid #d84e55;
      background: #fff;
      border-radius: 50%;
      height: 0.5rem;
      width: 0.5rem;
      left: 3px;
      top: 3px;
      position: absolute;
    }
  }

  &:checked ~ ${SelLabel} {
    color: #d84e55;
    font-weight: bold;
  }
`;

const DateLabel = styled.div`
  color: #7e7e8c;
  text-transform: uppercase;
  font-size: 0.8rem;
`;

const DateComponent = styled.div`
  border: 1px solid #e3e3e3;
  border-radius: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const DojLabel = styled.span`
  margin-left: 1rem;
  font-size: 0.85rem;
  color: #7e7e8c;
`;

const RoundTripLabel = styled.div`
  color: #465986;
  font-size: 0.75rem;
  margin: 0.5rem 0;
`;

const CalendarSpanBlock = styled.span`
  font-size: 1.5rem;
  position: relative;
  top: 0.2rem;
  left: 0.5rem;
`;

/* tslint:disable: jsx-no-lambda jsx-no-multiline-js max-line-length */
const TripSelectorBlock: React.FunctionComponent<IFerryProps> = (props) => {
  return (
    <SelectorMain>
      {props.dropRoundTrip && <SelectorBlock>
        <InputBlock id="ferryRoundTrip" type="radio" checked={props.isRoundTrip} onClick={props.roundTripSelectionHandler} />
        <RadioLabel htmlFor="ferryRoundTrip"><RadioBtn /></RadioLabel>
        <SelLabel>{props.roundTripSel}</SelLabel>
      </SelectorBlock>}
      {props.dropOneway && <SelectorBlock>
        <InputBlock id="ferryOneWay" type="radio" checked={!props.isRoundTrip} onClick={props.roundTripSelectionHandler} />
        <RadioLabel htmlFor="ferryOneWay"><RadioBtn /></RadioLabel>
        <SelLabel>{props.oneWaySel}</SelLabel>
      </SelectorBlock>}
    </SelectorMain>
  );
};

const DateSelectorBlock: React.FunctionComponent<IFerryProps> = (props) => {
  return (
    <SelectorMain>
        <DojSelectorBlock>
          <DateLabel>{props.dojLbl}</DateLabel>
          <DateComponent onClick={() => props.onwardDojClickHandler("onward")}>
              <CalendarSpanBlock className={props.calendarIconFont} />
              <DojLabel>{props.formattedDoj}</DojLabel>
          </DateComponent>
        </DojSelectorBlock>
        <DojReturnSelectorBlock {...props}>
          <DateLabel>{props.roundTripLbl}</DateLabel>
          <DateComponent onClick={() => { if (props.isRoundTrip && props.returnDojClickHandler) { props.returnDojClickHandler("return"); } }}>
              <CalendarSpanBlock className={props.calendarIconFont} />
              <DojLabel>{props.formattedRTDoj}</DojLabel>
          </DateComponent>
        </DojReturnSelectorBlock>
    </SelectorMain>
  );
};

const FerryDateSelectorBlock: React.FunctionComponent<IFerryProps> = (props) => {
  return (
    <DateContainer>
        <TripSelectorBlock {...props} />
        <DateSelectorBlock {...props} />
        <RoundTripLabel>{props.roundTripMsg}</RoundTripLabel>
    </DateContainer>
  );
};

export default FerryDateSelectorBlock;
