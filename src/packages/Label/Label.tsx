import * as React from "react";
import styled from "styled-components";

export interface ITagProps {
    tagText?: any;
    bgColor?: string;
    width?: number;
    height?: number;
    image?: any;
    color?: string;
    font?: number;
    borderRadius?: string;
    padding?: string;
    boxShadow?: string;
    border?: string;
    rightImage?: boolean;
   }
/* tslint:disable max-line-length jsx-no-multiline-js*/

const LabelTagOne = styled.text<ITagProps>`
  background-color: ${ (props) => props.bgColor};
  border-radius: ${ (props) => props.borderRadius};
  font-weight: 300;
  padding: ${(props) => props.padding};
  border: ${(props) => props.border};
  outline: none;
  transition: 1s;
  width: ${ (props) => props.width}%;
  height: ${ (props) => props.height}%;
  color: ${ (props) => props.color};
  box-shadow: ${ (props) => props.boxShadow};
  word-wrap: break-word;
`;

export const Label: React.FunctionComponent<ITagProps> =
    ({ tagText, bgColor, image, color, borderRadius, padding, boxShadow, border , rightImage }) => {
        return (
            <LabelTagOne bgColor={bgColor} color={color} borderRadius={borderRadius} padding={padding} boxShadow={boxShadow} border={border}>
                {rightImage ? <>{tagText} {image}</> : <>{image}  {tagText}</>}
            </LabelTagOne>
        );
    };

Label.defaultProps = {
    bgColor: "#465986",
    tagText: "DEFAULT",
    borderRadius: "4px",
    padding: "0.4em 0.2em",
    boxShadow: "1px 1px 4px #d4d4d4",
    border: "none",
};
export default Label;
