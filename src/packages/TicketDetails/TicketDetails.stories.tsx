import React from 'react';
import {Meta, Story} from "@storybook/react";
import {TicketDetails} from "./TicketDetails";

export default {
    title: 'Molecules/Ticket Details',
    component: TicketDetails,
} as Meta;

const busDetails = {
  source: "Bangalore",
  destination: "Tiruanathapuram",
  boardingPoint: "Madiwala Bus Stop",
  droppingPoint: "Koyambedu Office",
  boardingTime: "8:15",
  bpMeridiem: "pm",
  droppingTime: "4:15",
  dpMeridiem: "am",
  duration: "08 hrs 00 min",
  date: "10 Jan",
  day: "Tuesday",
  travels: "KGN Roadlines",
  busType: "Non A/C Seater (2+2)",
  isCancelled: false,
};

const passengerDetails = {
  seatNoText: "Seat No",
  ticketNoText: "Ticket No",
  pnrText: "PNR",
  fareText: "Fare",
  ticketNo: "TKCR 7333794",
  pnr: "AFT123C",
  fare: "Rs. 1400",
  seats: [
    {
      seatNo: "L10",
      passengerName: "Janardhan Desai",
    },
    {
      seatNo: "L11",
      passengerName: "Manisha Desai",
    },
  ],
  showTripId: true,
  tripId: "888983dad3",
};


const Template: Story<any> = (args: any) => <TicketDetails {...args} />;

export const defaultWithProps = Template.bind({});
defaultWithProps.args = {
  busDetails,
  passengerDetails,
};
