import React from 'react';
import {Meta, Story} from "@storybook/react";
import HamburgerIcon from "./HamburgerIcon";

export default {
  title: 'Atoms/Hamburger Icon',
  component: HamburgerIcon,
} as Meta;

const Template: Story<any> = (args: any) => <HamburgerIcon {...args} />;
export const defaultIcon = Template.bind({});
defaultIcon.args = {
    color: "#000",
    size: "1em"
}
