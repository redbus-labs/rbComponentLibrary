import * as React from "react";
import styled from "styled-components";

export interface IProps {
    bgColor?: any;
    padding?: string;
    borderRadius?: string;
    color?: string;
    titleText?: any;
    lowerScaleText?: any;
    higherScaleText?: any;
    iconEmpty?: any;
    iconFilled?: any;
    ratingsVal?: any;
    clickAction: (e?: any) => void;
}

const FeatureCardWrap = styled.div<IProps>`
  .srp_rating_midSection {
    display: flex;
    flex-direction: column;
    background-color: ${ (props) => props.bgColor};
    padding: ${(props) => props.padding};
    border-radius: ${ (props) => props.borderRadius};
    color: ${ (props) => props.color};
    margin-bottom: 1em;
    border: 1px solid #e3e3e3;
    height: 10rem;

    .ratings_title {
      font-size: 1.19rem;
    }

    .grey-star {
      color: #ddd;
    }

    .star {
      font-size: 2.2em;
    }

    .gold-star {
      color: #ffc900;
    }

    .star_wrapper {
      display: flex;
      flex-direction: column;
      margin-top: 1.4rem;
    }

    .just_stars {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    .rating_text {
      display: flex;
      justify-content: space-between;
      margin-top: 1rem;
      color: var(--clr-gray-5);
    }
  }
`;

/* tslint:disable max-line-length jsx-no-multiline-js*/
export function RatingsPlaceholder(props: IProps) {
    // tslint:disable-next-line:no-shadowed-variable
    function ratingClick(rv: any) {
        props.clickAction(rv);
    }

    const ratingsDisplay = [];
    let rateVal = props.ratingsVal;
    for (let i = 1; i < 6; i++) {
        const rv: any = i;
        if (rateVal > 0) {
            ratingsDisplay.push(<span key={i} data-value={i} onClick={ratingClick.bind(rv)} className={props.iconFilled} />);
            rateVal--;
        } else {
            ratingsDisplay.push(<span key={i} data-value={i} onClick={ratingClick.bind(rv)} className={props.iconEmpty} />);
        }
    }

    const elements = <div className="srp_rating_midSection">
    {props.titleText && <div className="ratings_title">{props.titleText}</div>}
    <div className="star_wrapper">
        <div className="just_stars">{ratingsDisplay}</div>
        <div className="rating_text">
            <div className="bad-rating">{props.lowerScaleText}</div>
            <div className="good-rating">{props.higherScaleText}</div>
        </div>
    </div>
</div>;
    return (
        <React.Fragment>
            <FeatureCardWrap bgColor={props.bgColor} color={props.color} borderRadius={props.borderRadius} padding={props.padding} clickAction={props.clickAction} ratingsVal={props.ratingsVal}>
                {elements}
            </FeatureCardWrap>
        </React.Fragment>
    );
}
