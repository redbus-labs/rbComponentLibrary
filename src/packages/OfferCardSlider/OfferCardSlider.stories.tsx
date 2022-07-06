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
        primaryText: "Save up to Rs 150 ",
        secondaryText: "Validity: 02 Apr To 31 May",
        offerCode: "Use code CODE",
        imgUrl: "/offer.png",
    },
    {
        primaryText: "Save up to Rs 150 ",
        secondaryText: "Validity: 02 Apr To 31 May",
        offerCode: "Use code CODE",
        imgUrl: "/offer.png",
    },
    {
        primaryText: "Save up to Rs 150 ",
        secondaryText: "Validity: 02 Apr To 31 May",
        offerCode: "Use code CODE",
        imgUrl: "/offer.png",
    },
];


export const Default = Template.bind({});
Default.args = {
    offerCardList: OfferCardSliderData
};
