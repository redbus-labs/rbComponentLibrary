import React from 'react';
import {Meta, Story} from "@storybook/react";
import {ConfirmPopupModal} from "./ConfirmPopup";
import {ModalWithList} from "./ModalWithList";

export default {
    title: 'Molecules/Confirmation Modal',
    component: ConfirmPopupModal,
} as Meta;

const modalList = [
    {
        label : "India",
        id: "IND",
        isSelected: true,
        iconFont: 'country_flag country_flag_ind'
    },
    {
        label : "Singapore",
        id: "SGP",
        iconFont: 'country_flag country_flag_sgp'
    },
    {
        label : "Malaysia",
        id: "MYS",
        iconFont: 'country_flag country_flag_myr'
    },
    {
        label : "Indonesia",
        id: "IDN",
        iconFont: 'country_flag country_flag_idn'
    },
    {
        label : "Columbia",
        id: "COL",
        iconFont: 'country_flag country_flag_col'
    },
    {
        label : "Peru",
        id: "PER",
        iconFont: 'country_flag country_flag_per'
    }
];

const Template: Story<any> = (args: any) => <ConfirmPopupModal {...args} />;

export const defaultModal = Template.bind({});
defaultModal.args = {
    showMask:true,
    modalHeading:"Modal Heading",
    headcolor:"red",
    isHeadbold:true,
    cancelCta:"Cancel",
    confirmCta:"Confirm",
    ctaBgColor:"#d84e55",
    bgColor:"white",
    body:"Confirm to proceed",
    ctaColor:"#fff",
    ctaBold:false
};

const Template2: Story<any> = (args: any) => <ModalWithList {...args} />;

export const modalWithList = Template2.bind({});
modalWithList.args = {
    showMask:true,
    modalHeading:"Country",
    modalList,
    cancelCta:"Cancel",
    confirmCta:"Proceed",
    bgColor:"#fff",
    color:"#3e3e52",
    ctaColor:"#3e3e52",
    ctaBgColor:"#d84e55",
    isCtaBold:false,
    confirmctaBgColor:"#fff",
    confirmctaColor:"#3e3e52"
};
