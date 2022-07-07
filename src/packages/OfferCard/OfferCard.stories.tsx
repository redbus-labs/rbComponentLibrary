import React from 'react';
import { Meta, Story } from "@storybook/react";
import { OfferCard, IOfferCardProps } from "./OfferCard";

export default {
	title: 'Atoms/Offer Card',
	component: OfferCard,
	argTypes: {
		onClick: { action: "clicked" }
	}
} as Meta;

const Template: Story<IOfferCardProps> = (args) => <OfferCard {...args} />;

export const Default = Template.bind({});
Default.args = {
	primaryText: "Save up to Rs 150",
	secondaryText: "Validity: 02 Apr To 31 May",
	offerCode: "Use code CODE only on App",
	imgUrl: "/offer.png",
};
