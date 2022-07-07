import React from 'react';
import {Meta, Story} from "@storybook/react";
import { SuccessCard, IProps } from "./successCard";

export default {
    title: 'Atoms/successCard',
    component: SuccessCard,
} as Meta;

const Template: Story<IProps> = (args) => <SuccessCard {...args} />;

export const defaultCard = Template.bind({});
defaultCard.args = {
  image: "/success.png",
  amount: "50",
  message: "will be donated to redbus cares once our team verifies the images uploaded."
};
