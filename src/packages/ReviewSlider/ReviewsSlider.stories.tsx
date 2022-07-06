import { Meta, Story } from "@storybook/react";
import React from "react";
import { IProps, ReviewsSlider } from "./ReviewsSlider";

const reviewsObj = {
  header: "Reviews Card",
  score: 50,
  id: 17,
  data: [
    {
      header: "Why this?",
      subHeader: "Hear from our satisfied customers in their own words",
      items: [
        {
          review: "I am always able to book a seat of choice in the front for my elderly mother",
          custName: "Jagan Mohan Reddy",
          custSince: "customer since 2015",
          image: "/banner.png",
        },
        {
          review: "I am always able to book a seat of choice in the front for my elderly father",
          custName: "Mohan Reddy",
          custSince: "customer since 2016",
          image: "/banner.png",
        },
        {
          review: "I am always able to book a seat of choice in the front for my sister",
          custName: "Reddy",
          custSince: "customer since 2018",
          image: "/banner.png",
        },
      ],
    },
  ],
};

export default {
  title: 'Atoms/ReviewsSlider',
  component: ReviewsSlider,
  argTypes: {
    clickAction: { action: "Click action" },
  }
} as Meta;

const Template: Story<IProps> = (args) => <ReviewsSlider {...args} />;


export const DefaultReviewsSlider = Template.bind({});
DefaultReviewsSlider.args = {
  reviewsObj
};

