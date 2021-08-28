import React, { FunctionComponent } from "react";
import styled from "styled-components";

export interface IBusDetailsProps {
  source: string;
  destination: string;
  boardingPoint: string;
  droppingPoint: string;
  boardingTime: string;
  droppingTime: string;
  duration: string;
  date: string;
  day: string;
  travels: string;
  busType: string;
  bpMeridiem: string;
  dpMeridiem: string;
  IAddonsDetails?: any;
  TicketNo?: string;
  isCancelled?: boolean;
}

export interface IBusTicketContainer {
  isCancelled?: boolean;
}

const BusDetailsContainer = styled.div<IBusTicketContainer>`
  width: auto;
  min-height: 8.75rem;
  height: auto;
  border: none;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16);
  border-radius: 6px;
  display: flex;
  font-size: 0.875rem;
  flex-direction: column;
  color: #fff;
  padding: 1rem;
  background-image: ${(props) => props.isCancelled
    ?
    `linear-gradient(to right, #7e7e8c, #3e3e52),
    radial-gradient(circle at 100% 100%, rgba(204, 0, 0, 0) 14px, #7e7e8c 15px),
    radial-gradient(circle at 0 100%, rgba(204, 0, 0, 0) 14px, #3e3e52 15px);
    `
    :
    `linear-gradient(to right, #ed6c6d, #bc333a),
    radial-gradient(circle at 100% 100%, rgba(204, 0, 0, 0) 14px, #ed6c6d 15px),
    radial-gradient(circle at 0 100%, rgba(204, 0, 0, 0) 14px, #bc333a 15px);
    `
  }
`;

const TravelsDateContainer = styled.div`
  display: flex;
  flex: 2;
`;

const TravelsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
`;

const SolidHorizontal = styled.hr`
  border: none;
  border-top: 1px solid #fff;
  width: 100%;
  margin-bottom: 0;
  margin-top: 10px;
`;

const TimeContainer = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const FromTimeLabelTag = styled.label`
  flex: 1;
  font-weight: bold;
  font-size: 1.5rem;
  align-self: flex-end;
`;

const DurationContainer = styled.div`
  flex: 10;
  padding: 0 1rem;
`;

const DurationLabelTag = styled.label`
  font-size: 0.75rem;
  border-bottom: 1px dashed #fff;
  display: flex;
  justify-content: center;
`;

const ToTimeLabelTag = styled.label`
  flex: 1;
  font-weight: bold;
  font-size: 1.5rem;
  align-self: flex-end;
`;

const CityContainer = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const SourceContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-self: flex-end;
  padding-right: 10px;
`;

const DestinationContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-self: flex-end;
`;

const PrimaryLabelTag = styled.label`
  flex: 2;
`;

const SecondaryLabelTag = styled.label`
  font-size: 0.75rem;
  flex: 2;
`;

const PrimaryDestLabelTag = styled.label`
  flex: 2;
  align-self: flex-end;
`;

const SecondaryDestLabelTag = styled.label`
  font-size: 0.75rem;
  flex: 2;
  align-self: flex-end;
`;

const SpanTag = styled.span`
  font-weight: normal;
  font-size: 0.75rem;
  text-transform: lowercase;
`;

export const BusDetails: FunctionComponent<IBusDetailsProps> = (props: IBusDetailsProps) => {

  const {
    source,
    destination,
    boardingPoint,
    droppingPoint,
    boardingTime,
    droppingTime,
    duration,
    date,
    day,
    travels,
    busType,
    bpMeridiem,
    dpMeridiem,
    isCancelled,
  } = props;

  return (
    <BusDetailsContainer isCancelled={isCancelled}>
      <TravelsDateContainer>
        <DateContainer>
          <PrimaryLabelTag>{date}</PrimaryLabelTag>
          <SecondaryLabelTag>{day}</SecondaryLabelTag>
        </DateContainer>
        <TravelsContainer>
          <PrimaryLabelTag>{travels}</PrimaryLabelTag>
          <SecondaryLabelTag>{busType}</SecondaryLabelTag>
        </TravelsContainer>
      </TravelsDateContainer>
      <SolidHorizontal />
      <TimeContainer>
        <FromTimeLabelTag>{boardingTime}<SpanTag>{bpMeridiem}</SpanTag></FromTimeLabelTag>
        <DurationContainer>
          <DurationLabelTag>{duration}</DurationLabelTag>
        </DurationContainer>
        <ToTimeLabelTag>{droppingTime}<SpanTag>{dpMeridiem}</SpanTag></ToTimeLabelTag>
      </TimeContainer>
      <CityContainer>
        <SourceContainer>
          <PrimaryLabelTag>{source}</PrimaryLabelTag>
          <SecondaryLabelTag>{boardingPoint}</SecondaryLabelTag>
        </SourceContainer>
        <DestinationContainer>
          <PrimaryDestLabelTag>{destination}</PrimaryDestLabelTag>
          <SecondaryDestLabelTag>{droppingPoint}</SecondaryDestLabelTag>
        </DestinationContainer>
      </CityContainer>
    </BusDetailsContainer>
  );
};

export default BusDetails;
