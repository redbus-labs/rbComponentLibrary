import React from 'react';
import {Meta, Story} from "@storybook/react";
import OfferCardSlider from "./index";

export default {
    title: 'Molecules/Offer Card Slider',
    component: OfferCardSlider,
    argTypes: {
        onClick: { action: "Clicked" }
    }
} as Meta;

const Template: Story<any> = (args) => <OfferCardSlider {...args} />;

const OfferCardSliderData = [
    {
        primaryText: "",
        secondaryText: "",
        offerCode: "",
        imgUrl: "/banner.png",
    },
    {
        primaryText: "",
        secondaryText: "",
        offerCode: "",
        imgUrl: "/banner.png",
    },
    {
        primaryText: "",
        secondaryText: "",
        offerCode: "",
        imgUrl: "/banner.png",
    },
];


export const Default = Template.bind({});
Default.args = {
    offerCardList: OfferCardSliderData
};
