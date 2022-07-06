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
	primaryText: "",
	secondaryText: "",
	offerCode: "Use code CODE only on App",
	imgUrl: "/banner.png",
};
