import React from 'react';
import {Meta, Story} from "@storybook/react";
import {SpinLoader} from "./spinLoader";

export default {
  title: 'Atoms/Spin Loader',
  component: SpinLoader,
} as Meta;

const Template: Story<any> = (args: any) => <SpinLoader {...args} />;
export const defaultLoader = Template.bind({});
defaultLoader.args = {
  color: "#ea4c53",
  size: "40px"
}
