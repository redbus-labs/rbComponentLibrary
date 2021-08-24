import React from 'react';
import {Meta, Story} from "@storybook/react";
import {Input} from "./Input";

export default {
  title: 'Atoms/Input',
  component: Input,
} as Meta;

const Template: Story<any> = (args: any) => <Input {...args} />;
export const defaultInput = Template.bind({});

export const InputWithProps = Template.bind({});
InputWithProps.args = {
  placeholderText:"Placeholder Text",
  inputType:"text",
  bgColor:"#FFFFFF",
  cancelImg:"/cancel-grey.svg",
  icon:"/mail.svg",
  label:"full name",
  borderColor:"#e3e3e3"
}
