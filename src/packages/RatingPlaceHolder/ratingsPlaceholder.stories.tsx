import React from 'react';
import {Meta, Story} from "@storybook/react";
import { RatingsPlaceholder, IProps } from "./ratingsPlaceholder";

export default {
    title: 'Atoms/ratingsPlaceholder',
    component: RatingsPlaceholder,
    argTypes: {
      clickAction: {action: "click Action"}
    }
} as Meta;

const Template: Story<IProps> = (args) => <RatingsPlaceholder {...args} />;

export const withProps = Template.bind({});
withProps.args = {
  bgColor: "#ffffff",
  padding: "1em",
  borderRadius: "0px",
  color: "#3e3e52",
  iconEmpty: "icon icon-star star grey-star",
  iconFilled: "icon icon-star star gold-star",
  titleText: "Liking the redBus experience?",
  lowerScaleText: "Very Bad",
  higherScaleText: "Very Good",
  ratingsVal: 0,
};
