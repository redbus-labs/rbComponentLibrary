import React, { FunctionComponent } from "react";
import BusDetails, { IBusDetailsProps } from "./components/Busdetails";
import PassengerDetails, { IPassengerDetailsProps, ISeatDetails } from "./components/PassengerDetails";

export interface ITicketDeailsProps {
  passengerDetails: IPassengerDetailsProps;
  busDetails: IBusDetailsProps;
}

//@ts-ignore
export { IBusDetailsProps, IPassengerDetailsProps, ISeatDetails };

export const TicketDetails: FunctionComponent<ITicketDeailsProps> = (props: ITicketDeailsProps) => {
  const { passengerDetails, busDetails } = props;
  return (
    <div>
      <BusDetails {...busDetails} />
      <PassengerDetails {...passengerDetails} />
    </div>
  );
};
