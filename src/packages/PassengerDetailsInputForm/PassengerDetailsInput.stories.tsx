import React from 'react';
import {Meta, Story} from "@storybook/react";
import PassengerDetailsInput from "./PassengerDetailsInput";

export default {
  title: 'Molecules/Passenger Details Input Form',
  component: PassengerDetailsInput,
} as Meta;

const radioButton = {
    radioList: [[
        {
            displayName: "Male",
            value: 1,
            name: "passenger1",
        },
        {
            displayName: "Female",
            value: 2,
            name: "passenger1",
        },
    ],
    [
        {
            displayName: "Male",
            value: 1,
            name: "passenger2",
        },
        {
            displayName: "Female",
            value: 2,
            name: "passenger2",
        },
    ]],
    type: "SLIDER_RADIOBUTTON",
    height: 2.4,
    width: 50,
    color: "#4f91d9",
    background: "#fff",
    border: "#4f91d9",
    radioStateValue: 1,
    handleChange: () => {},
};
const checkbox = {
    checkboxType: "DEFAULT_CHECKBOX",
    chckboxState: false,
    radius: 2,
    height: 15,
    width: 15,
    handleSelection: () => {},
    handleUnSelection: () => {},
};

const businessDetails = {
    gstinLabel: "GSTIN",
    gstinPlaceholder: "GSTIN",
    businessNameLabel: "Business Name",
    businessNamePlaceholder: "Business Name",
    businessAddressLabel: "Business Address",
    businessAddressPlaceholder: "Business Address",
    businessEmailLabel: "Business Email",
    businessEmailPlaceholder: "Business Email",
};
const passengerDetails = [
    {
        name: "ashish",
        age: "22",
        gender: "Male",
        seat: 12,
    },
    {
        name: "",
        age: "",
        gender: "Male",
        seat: 18,
    },
];

const Template: Story<any> = (args: any) => <PassengerDetailsInput {...args} />;
export const defaultForm = Template.bind({});

export const FormWithProps = Template.bind({});
FormWithProps.args = {
    passengerTitle:"passenger",
    seatLabel:"Seat",
    nameLabel:"Name",
    namePlaceholder:"Enter your name",
    genderLabel:"Gender",
    ageLabel:"Age",
    agePlaceholder:"Enter age",
    radioButton:radioButton,
    passengerDetails:passengerDetails,
    bussinessBookingLabel:"I am booking tickets for business travel",
    checkbox:checkbox,
    businessDetails:businessDetails
}
