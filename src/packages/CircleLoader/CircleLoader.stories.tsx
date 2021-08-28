import React from 'react';
import {Meta, Story} from "@storybook/react";
import {CircleLoader} from "./CircleLoader";

export default {
    title: 'Atoms/Circle Loader',
    component: CircleLoader,
} as Meta;

const Template: Story<any> = (args: any) => <CircleLoader {...args} />;

export const defaultLoader = Template.bind({});
defaultLoader.args = {
    showMask: true,
    fontSize: "1em",
};

export const enlargedLoader = Template.bind({});
enlargedLoader.args = {
    showMask: false,
    enlargeLoader: true,
};
