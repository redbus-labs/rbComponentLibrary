import React from 'react';
import {Meta, Story} from "@storybook/react";
import {CardsSliderContainer} from "./CardsSliderContainer";

export default {
  title: 'Molecules/Cards Slider',
  component: CardsSliderContainer,
} as Meta;

const sliderData: any = [
    {
        heading: "On Time Guarantee",
        desc: "Get 25% refund if bus is delayed by more than 30mins from departure on select routes",
        imgUrl: "/ic-shield-red-big.png"
    },
    {
        heading: "Maximum Choice",
        desc: "We give you the widest number of travel options across thousands of routes",
        imgUrl: "/maximum_choices.png"
    },
    {
        heading: "Superior Customer Service",
        desc: "We put our experience and relationships to good use and solve your travel issues",
        imgUrl: "/customer_care.png"
    },
    {
        heading: "Maximum Choice",
        desc: "We give you the widest number of travel options across thousands of routes",
        imgUrl: "/maximum_choices.png"
    },
];

const Template: Story<any> = (args: any) => <CardsSliderContainer {...args} />;
export const defaultSlider = Template.bind({});
defaultSlider.args = {
    label: "Why Choose Redbus",
    items: sliderData
}
