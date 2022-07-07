import React from 'react';
import { Meta, Story } from "@storybook/react";
import TravelInsurance, { ITravelInsuranceProps } from "./TravelInsurance";

export default {
    title: 'Molecules/Travel Insurance',
    component: TravelInsurance,
    argTypes: {
        handleChange: { action: "clicked" },
    }
} as Meta;

const Template: Story<ITravelInsuranceProps> = (args) => <TravelInsurance {...args} />;

const benefitItem = [
    {
        img: "/insurance_img2.svg",
        desc: "Personal Accident",
        title: "Upto RM 60,000",
    },
    {
        img: "/insurance_img2.svg",
        desc: "Covid-10 Hospitalization or Death",
        title: "Upto RM 1,00,000",
    },
    {
        img: "/insurance_img2.svg",
        desc: "Loss of Luggage (does not cover personal jewellery)",
        title: "Upto RM 5,000",
    },
];

const radioButton = [
    {
        desc: "Yes, Protect my trip at ₹ 36 ( 3 passengers), I agree to the Terms and Conditions",
        id: "insuranceConfirm",
        dataId: "insuranceYesButton",
        dataIdBtn: "insuranceYesButton",
        name: "insChoice",
        value: "1",
    },
    {
        desc: "No, I do not need insurance",
        id: "insuranceReject",
        dataId: "insuranceNoButton",
        dataIdBtn: "insuranceNoButton",
        name: "insChoice",
        value: "2",
    },
];

const content = {
    logo: "/staff_masks.png",
    heading: "Be Insured!",
    subHeading: "Avail benefits with travel insurance",
    disClosureSheet: "View Product Disclosure Sheet",
    disClosureLink: "/extended/en/",
    isOpen: true,
    downArrowClass: "icon icon-up-arrow",
    radioItem: radioButton,
    benefitDetails: benefitItem,
    error: "Select any option either Yes or No",
    note: "Globally, over 40% of our travelers choose to secure their travel everyday",
    defaultSelection: "insuranceReject",
};

export const Default = Template.bind({});
Default.args = {
    ...content,
};