import React from 'react';
import {Meta, Story} from "@storybook/react";
import {CancellationPolicy} from "./CancellationPolicy";

export default {
    title: 'Templates/Cancellation Policy',
    component: CancellationPolicy,
} as Meta;

const cancellationPolicyData = {
    tableData: [
        {
            cancellation_charges_subHead: "Cancellation Charges",
            cancellation_time_subHead: "Cancellation time",
            cancelPolicy: [
                {
                    cancellationString: "Before 26th Aug 08:15 PM",
                    chargeExact: "₹4",
                    chargePerc: "10%",
                    backgroundColor1: "#fff5e5",
                    backgroundColor2: "#fff5e5",
                    borderColor: "0.15em solid #ff9b00",
                    currentSlot: true,
                },
                {
                    cancellationString: "After 26th Aug 08:15 PM & Before 27th Aug 08:15 AM",
                    chargeExact: "₹18",
                    chargePerc: "50%",
                    backgroundColor1: "#fff",
                    backgroundColor2: "#f8f4f4",
                    borderColor: "1px solid #dddddd",
                    currentSlot: false,
                },
                {
                    cancellationString: "After 27th Aug 08:15 AM & Before 27th Aug 08:15 PM",
                    chargeExact: "₹37",
                    chargePerc: "100%",
                    backgroundColor1: "#fff",
                    backgroundColor2: "#f8f4f4",
                    borderColor: "1px solid #dddddd",
                    currentSlot: false,
                },
            ],
            wngMsg: [
                "Cancellation charges are computed on a per seat basis. Above cancellation fare is calculated based on seat fare of ₹37.0",
                "Cancellation charges are calculated based on service start date + time at :27-Aug-2020 20:15",
                "For group bookings individual seats can be cancelled.",
                "Ticket cannot be cancelled after scheduled bus departure time from the first boarding point",
            ],
        },
        {
            additionItemHeading: "Paneer Tikka Sandwich (Plain)",
            cancellation_charges_subHead: "Cancellation Charges",
            cancellation_time_subHead: "Cancellation time",
            cancelPolicy: [
                {
                    cancellationString: "After 26th Aug 08:15 PM & Before 27th Aug 08:15 AM",
                    chargeExact: "₹4",
                    chargePerc: "10%",
                    backgroundColor1: "#fff5e5",
                    backgroundColor2: "#fff5e5",
                    borderColor: "1px solid #ff9b00",
                    currentSlot: false,
                },
            ],
            wngMsg: [
                "Cancellation charges are computed on a per seat basis. Above cancellation fare is calculated based on seat fare of ₹37.0",
                "Cancellation charges are calculated based on service start date + time at :27-Aug-2020 20:15",
                "For group bookings individual seats can be cancelled.",
                "Ticket cannot be cancelled after scheduled bus departure time from the first boarding point",
            ],
        },
        {
            additionItemHeading: "Corn and Cheese Sandwich (Plain)",
            cancellation_charges_subHead: "Cancellation Charges",
            cancellation_time_subHead: "Cancellation time",
            cancelPolicy: [
                {
                    cancellationString: "Before 26th Aug 08:15 PM",
                    chargeExact: "₹4",
                    chargePerc: "10%",
                    backgroundColor1: "#fff5e5",
                    backgroundColor2: "#fff5e5",
                    borderColor: "1px solid #ff9b00",
                },
                {
                    cancellationString: "After 26th Aug 08:15 PM & Before 27th Aug 08:15 AM",
                    chargeExact: "₹18",
                    chargePerc: "50%",
                    backgroundColor1: "#fff",
                    backgroundColor2: "#f8f4f4",
                    borderColor: "1px solid #dddddd",
                },
            ],
        },
    ],
    shrtLocale: {
        cancelPolicy: "Cancellation Policy",
        shrtLocale: "Your current cancellation charges according to the cancellation policy is highlighted below",
    },
};

const Template: Story<any> = (args: any) => <CancellationPolicy {...args} />;

export const defaultWithProps = Template.bind({});
defaultWithProps.args = {
    header:"Cancellation Policy",
    description:"Your current cancellation charges according to the cancellation policy is highlighted below",
    cancelPolicies:cancellationPolicyData,
    page:"",
    tcpPromotionalText:"Congrats You will get 80 rupees discount",
    UnableToLoad:"Unable to load content, Please try again later"
};
