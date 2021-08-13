import { number, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { RatingReview } from "./RatingReview";
const imageRating = <img src="/rating.png" alt="rating" width="30%" height="auto" />;
const imageReview = <img src="/review.svg" alt="review" width="38%" height="auto" />;
storiesOf("Atoms/RatingReview", module)
  .addParameters({ component: RatingReview })
  .add("default", () => <RatingReview />)
  .add("with rating & review icon", () => (
    <RatingReview
      ratingText={number("rating", 4.5)}
      reviewText={number("review", 226)}
      imageRating={imageRating}
      imageReview={imageReview}
    />
  ));
