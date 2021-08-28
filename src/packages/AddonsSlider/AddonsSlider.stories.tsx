import React from 'react';
import {Meta, Story} from "@storybook/react";
import {addonsList} from "./subComponents/defaultProps";
import {Addons} from "./AddonsSlider";

export default {
    title: 'Molecules/Addons Slider',
    component: Addons,
} as Meta;

const Template: Story<any> = (args: any) => <Addons {...args} />;

export const sliderWithProps = Template.bind({});
sliderWithProps.args = {
    DataAddons:addonsList,
    AddonsCount:() => {},
    Orientation:"row"
};
