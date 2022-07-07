import React from 'react';
import {Meta, Story} from "@storybook/react";
import {Label, ITagProps } from "./Label";

export default {
    title: 'Atoms/LabelTag',
    component: Label,
} as Meta;

const Template: Story<ITagProps> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
};

export const withProps = Template.bind({});
withProps.args = {
   tagText: "testing",
   bgColor: "#eee",
};

export const withPropsAndIcon = Template.bind({});
withPropsAndIcon.args = {
   image: < img src={"/cross.svg"} alt="cross" width="10px" height="0.7%"/>,
   rightImage: true,
   borderRadius: "0",
   tagText: <b>200 Feet Bypass Ajmer Road</b>,
   bgColor: "#f8f4f4",
   color: "#d84e55",
   boxShadow: "1px 1px 4px #d4d4d4",
};
