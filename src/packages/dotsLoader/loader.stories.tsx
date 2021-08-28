import React from 'react';
import {Meta, Story} from "@storybook/react";
import {Loader} from "./loader";

export default {
  title: 'Atoms/Dots Loader',
  component: Loader,
} as Meta;

const Template: Story<any> = (args: any) => <Loader {...args} />;
export const defaultLoader = Template.bind({});
defaultLoader.args = {
  loaderColor: "#ea4c53"
}
