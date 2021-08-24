import React from 'react';
import {Meta, Story} from "@storybook/react";
import RadioButton from "./RadioButton";

export default {
    title: 'Atoms/RadioButton',
    component: RadioButton,
} as Meta;

const radioButtonsData: any = [
    {
        displayName: "Label Text 1",
        value: 1,
        name: "name1",
    },
    {
        displayName:  "Label Text 2",
        value: 2,
        name: "name1",
    },
];

const Template: Story<any> = (args: any) => <RadioButton {...args} />;
export const defaultRadioButton = Template.bind({});
defaultRadioButton.args = {
    radioList: radioButtonsData,
    radioButtonType: "DEFAULT_RADIOBUTTON",
    width: 20,
    height: 20,
    color: "#667e56",
    background: "#eee",
    border: "green",
    radioStateValue: 1
}

export const sliderRadioButton = Template.bind({});
sliderRadioButton.args = {
    radioList: radioButtonsData,
    radioButtonType: "SLIDER_RADIOBUTTON",
    height: 2,
    color: "#e6545b",
    background: "#fff",
    border: "#e6545b",
    radioStateValue: 1
}

export const customRadioButton = Template.bind({});
customRadioButton.args = {
    radioList: radioButtonsData,
    radioButtonType: "CUSTOM_RADIOBUTTON",
    width: 20,
    height: 20,
    color: "#566D7E",
    background: "#eee",
    border: "green",
    radioStateValue: 1
}
