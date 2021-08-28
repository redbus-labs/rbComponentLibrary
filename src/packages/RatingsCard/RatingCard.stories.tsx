import React from 'react';
import {Meta, Story} from "@storybook/react";
import {RatingCard} from "./RatingCard";

export default {
    title: 'Atoms/Ratings Card',
    component: RatingCard,
} as Meta;

const Template: Story<any> = (args: any) => <RatingCard {...args} />;

export const defaultWithProps = Template.bind({});
defaultWithProps.args = {
    route: "Coimbatore - Bangalore",
    date: "Sat, 12 May 2018, 8:02 pm ",
    travels: "SARATHI TOURS AND TRAVELS",
    onClick: () => {},
};