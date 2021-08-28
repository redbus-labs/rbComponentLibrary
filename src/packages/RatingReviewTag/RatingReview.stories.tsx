import React from "react";
import {Meta, Story} from "@storybook/react";
import {serialize} from 'react-serialize';
import {RatingReview} from "./RatingReview";

export default {
  title: 'Atoms/Rating Review Tag',
  component: RatingReview,
} as Meta;

const Template: Story<any> = (args: any) => <RatingReview {...args} />;
export const defaultTag = Template.bind({});

export const withRatingReviewIcons = Template.bind({});
withRatingReviewIcons.args = {
  ratingText:4.5,
  reviewText:226,
  imageRating:serialize(<img src="/rating.png" alt="rating" width="30%" height="auto" />),
  imageReview:serialize(<img src="/review.svg" alt="review" width="38%" height="auto" />)
}