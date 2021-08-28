import React from 'react';
import {Meta, Story} from "@storybook/react";
import {Input} from "./InputBox";

export default {
  title: 'Atoms/Input',
  component: Input,
} as Meta;

const Template: Story<any> = (args: any) => <Input {...args} />;
export const defaultInput = Template.bind({});

export const InputWithProps = Template.bind({});
InputWithProps.args = {
    name:"Input Text",
    id:"inputId",
    inputType:"text",
    bgColor:"#FFFFFF",
    placeholder:"Placeholder Text",
    color:"rgba(74, 74, 74, 0.86)"
}
