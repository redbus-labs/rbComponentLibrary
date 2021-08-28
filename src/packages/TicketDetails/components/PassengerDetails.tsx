import React, { FunctionComponent } from "react";
import styled from "styled-components";

export interface ISeatDetails {
  seatNo: string;
  passengerName: string;
}

export interface IPassengerDetailsProps {
  seatNoText: string;
  ticketNoText: string;
  pnrText: string;
  fareText: string;
  seats: ISeatDetails[];
  ticketNo: string;
  pnr?: string;
  fare: string;
  showTripId: boolean;
  tripIdText?: string;
  tripId?: string;
}

const PassengerDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  min-height: 8rem;
  border: none;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16);
  padding: 1rem 1rem 0.25rem 1rem;
  border-radius: 6px;
  font-size: 0.875rem;
`;

const SeatDetailsContainer = styled.div`
  display: flex;
`;

// const LeftLabelContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   flex: 1;
// `;

const LeftLabelTag = styled.label`
  color: #747f8d;
  flex: 1;
`;

const RightLabelTag = styled.label`
  flex: 2;
  color: #000;
`;

const SeatLabelTag = styled.label`
  padding: 0 0 5px 0;
`;

const RightLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  color: #000;
`;

const TicketContainer = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
`;

const FareContainer = styled.div`
  display: flex;
  flex: 2;
`;

const HorizontalContainer = styled.div`
  flex: 2;
`;
const DottedHorizontal = styled.hr`
  border: none;
  border-top: 1px dashed #ddd;
`;

const SpanTag = styled.span`
  font-weight: bold;
  padding-right: 10px;
`;

const RowContainer = styled.div`
  display: flex;
  flex: 1;
  padding: 5px 0;
`;

export const PassengerDetails: FunctionComponent<IPassengerDetailsProps> = (props: IPassengerDetailsProps) => {

  const {
    seatNoText,
    seats,
    ticketNoText,
    ticketNo,
    pnrText,
    pnr,
    fareText,
    fare,
    showTripId = false,
    tripIdText = "Trip Id",
    tripId,
  } = props;

  const passengerList = seats.map((seat) => (
    <SeatLabelTag key={seat.seatNo}>
      <SpanTag>{seat.seatNo}</SpanTag>- {seat.passengerName}
    </SeatLabelTag>
  ));

  const pnrRow = (pnrText && pnr) ?
    <RowContainer>
      <LeftLabelTag>
        {pnrText}
      </LeftLabelTag>
      <RightLabelTag>
        {pnr}
      </RightLabelTag>
    </RowContainer>
    : "";

  const tripIdRow = (showTripId && tripId) ?
    <RowContainer>
      <LeftLabelTag>
        {tripIdText}
      </LeftLabelTag>
      <RightLabelTag>
        {tripId}
      </RightLabelTag>
    </RowContainer> : "";

  return (
    <PassengerDetailsContainer>
      <SeatDetailsContainer>
        <RowContainer>
          <LeftLabelTag>{seatNoText}</LeftLabelTag>
          <RightLabelContainer>
            {passengerList}
          </RightLabelContainer>
        </RowContainer>
      </SeatDetailsContainer>
      <HorizontalContainer>
        <DottedHorizontal />
      </HorizontalContainer>
      <TicketContainer>
        <RowContainer>
          <LeftLabelTag>{ticketNoText}</LeftLabelTag>
          <RightLabelTag>{ticketNo}</RightLabelTag>
        </RowContainer>
        {pnrRow}
        {tripIdRow}
      </TicketContainer>
      <HorizontalContainer>
        <DottedHorizontal />
      </HorizontalContainer>
      <FareContainer>
        <RowContainer>
          <LeftLabelTag>{fareText}</LeftLabelTag>
          <RightLabelTag>{fare}</RightLabelTag>
        </RowContainer>
      </FareContainer>
    </PassengerDetailsContainer>
  );
};

export default PassengerDetails;