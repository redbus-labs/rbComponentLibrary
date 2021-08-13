import * as React from "react";
import styled from "styled-components";
export interface IRatingProps {
  ratingText?: number;
  fontSize?: number;
  width?: number;
  radius?: number;
  bgColor?: string;
  reviewText?: number;
  bgColRating?: string;
  bgColorReview?: string;
  imageRating?: any;
  imageReview?: any;
}
const RatingOne = styled.div<IRatingProps>`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.bgColor};
  color: black;
  border-radius: 4px;
  font-weight: 400;
  padding: 1em;
  border: none;
  outline: none;
  font-size: ${((props) => props.fontSize)}px;
  transition: 1s;
  width: ${((props) => props.width)}%;
`;
const ReviewText = styled.div<IRatingProps>`
  background-color: ${((props) => props.bgColorReview)};
  color: #7e7e8c;
  border-radius: 3px;
  font-weight: 300;
  border: none;
  outline: none;
  transition: 1s;
  margin-right: 5px;
  width: 46px;
  text-align: center;
  height: 24px;
  font-size: 12px;
  box-sizing: border-box;

  .image_review {
    display: inline- block;
    padding-right: 0.3em;
    vertical-align: middle;
  }

  .review_text {
    padding: 0.2em;
  }

  .review {
    margin-top: 1.5em;
  }
`;
const RatingText = styled.div<IRatingProps>`
  background-color: ${((props) => props.bgColRating)};
  color: white;
  border-radius: 3px;
  font-weight: 300;
  border: none;
  outline: none;
  transition: 1s;
  padding: 4px 3px;
  margin-top: 5px;
  margin-right: 5px;
  width: 42px;
  text-align: center;
  height: 24px;
  font-size: 12px;
  box-sizing: border-box;

  .image_rating {
    display: inline- block;
    padding-right: 0.3em;
    vertical-align: middle;
  }

  .rating_text {
    padding: 0.2em;
  }
`;
const color = (ratingText: number = 0) => {
  if (ratingText >= 4 && ratingText <= 5) {
    return "#38b87c";
  } else if (ratingText > 3 && ratingText < 4) {
    return "#ebaf3c";
  } else {
  return "#f04747";
  }
};
export const RatingReview: React.FunctionComponent<IRatingProps> = ({
  reviewText,
  ratingText,
  fontSize,
  bgColRating,
  width,
  bgColor,
  bgColorReview,
  imageRating,
  imageReview,
}) => {
  const ratingColor = color(ratingText);
  const reviewTextCondition = reviewText != null ? (
    <div className="review">
      <span className="image_review">{imageReview}</span>
      <span className="rating_review">{reviewText}</span>
    </div>
  ) : (
    []
  );
  return (
    <RatingOne
      fontSize={fontSize}
      width={width}
      bgColor={bgColor}
      bgColRating={bgColRating}
      imageRating={imageRating}
    >
      <RatingText ratingText={ratingText} bgColRating={ratingColor}>
        <div className="rating">
          <span className="image_rating">{imageRating}</span>
          <span className="rating_text">{ratingText}</span>
        </div>
      </RatingText>
      <ReviewText bgColorReview={bgColorReview} reviewText={reviewText}>
        {reviewTextCondition}
      </ReviewText>
    </RatingOne>
  );
};
RatingReview.defaultProps = {
  ratingText: 3.4,
  fontSize: 20,
  width: 4.5,
  bgColor: "white",
  reviewText: 226,
  bgColorReview: "white",
};
