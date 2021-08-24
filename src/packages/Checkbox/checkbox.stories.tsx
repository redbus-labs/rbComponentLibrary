import React from 'react';
import {Meta, Story} from "@storybook/react";
import {CheckBox} from "./checkbox";

export default {
  title: 'Atoms/CheckBox',
  component: CheckBox,
} as Meta;

const Template: Story<any> = (args: any) => <CheckBox {...args} />;
export const defaultCheckbox = Template.bind({});
defaultCheckbox.args = {
    checkboxState:true,
    checkboxType:"DEFAULT_CHECKBOX",
    radius:2,
    width:15,
    height:15,
    background:"#fff",
    border:"purple"
}

export const switchCheckbox = Template.bind({});
switchCheckbox.args = {
    checkboxState:false,
    checkboxType:"SWITCH_CHECKBOX",
    radius:15,
    width:50,
    height:25,
    background:"#4f91d9",
    border:"1px solid"
}

export const customCheckbox = Template.bind({});
customCheckbox.args = {
    checkboxState:true,
    preferCheckBoxPropState:false,
    checkboxType:"DEFAULT_CHECKBOX",
    radius:2,
    width:15,
    height:15,
    customCheckBoxClass:true,
    border:"#3e3e52",
    background:"#f7f4f4",
    checkedClass:"icon icon-checkbox_filled",
    uncheckClass:"icon icon-checkbox_empty"
}
