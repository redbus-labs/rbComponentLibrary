import React, { FunctionComponent } from "react";
import styled from "styled-components";

export interface IRatingProps {
  percentage: number;
  color?: string;
}

// progress bar style
const RatingBarDiv = styled.div`
  display: inline-block;
  height: 0.35em;
  position: relative;
  background: #ddd;
  border-radius: 25px;
  width: 75%;
`;

const ProgressBar = styled.span`
  display: block;
  height: 80%;
  background-color: ${(props) => props.color};
  position: relative;
  overflow: hidden;
  border-radius: 25px;
`;

const RatingPer = styled.span`
  font-size: 0.9em;
  padding-left: 0.8em;
`;

export const RatingBar: FunctionComponent<IRatingProps> = ({ percentage , color}) => {
  return (
    <React.Fragment>
      <RatingBarDiv>
        <ProgressBar color={color} style={{ width: percentage + "%" }} />
      </RatingBarDiv>
      <RatingPer>{percentage} %</RatingPer>
    </React.Fragment>
  );
};
