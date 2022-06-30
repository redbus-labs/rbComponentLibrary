import React from 'react';
import { Meta, Story } from "@storybook/react";
import { FeatureCard, IProps } from "./FeatureCard";

export default {
    title: 'Atoms/Feature Card',
    component: FeatureCard,
    argTypes: {
        clickAction: { action: "click Action" }
    }
} as Meta;

const Template: Story<IProps> = (args) => <FeatureCard {...args} />;

export const Default = Template.bind({});
Default.args = {
    image: "/staff_masks.png",
    title: "Card Title",
    description: "Card Description",
    bgColor: "#ffffff",
    borderRadius: "3px",
    color: "#3e3e52",
    padding: "1em",
    buttonText: "START NOW",
    buttonColor: "#d84e55",
};