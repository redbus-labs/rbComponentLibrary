import React, { FunctionComponent } from "react";
import styled from "styled-components";

const PointDot = styled.span`
  color: ${(props) => props.color};
  font-size: 0.7em;
`;

const Verticaline = styled.span`
  border-left: 1px dotted  ${(props) => props.color};
  height: 6em;
  display: block;
  margin: -0.6em 0.3em 0;
`;

export interface IVerticalLineProps {
  index: number;
  length: number;
  color: string;
}

export const VerticalLine: FunctionComponent<IVerticalLineProps> = ({ index, length, color }) => {
  return (
    <React.Fragment>
      <PointDot color={color} className="icon icon-radio" />
      {index !== length - 1 ? <Verticaline color={color} /> : []}
    </React.Fragment>
  );
};
