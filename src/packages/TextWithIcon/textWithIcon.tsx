import React from "react";
import styled from "styled-components";
import {
  ITextWithIconWrapper,
  IConWrapper,
  ITextWrapper,
} from "./textWithIconInterface";

const Icon = styled.span<IConWrapper>`
  font-size: ${({ iconSize }) => (iconSize ? iconSize : "1em")};
  color: ${({ iconColor }) => (iconColor ? iconColor : "#3e3e52")};
  margin:
    ${({ marginFromIcon }) =>
      marginFromIcon ? marginFromIcon : "0 1em 0 0"};
  font-weight: ${({ iconWeight }) => (iconWeight ? iconWeight : "normal")};
  display: inline-block;
  vertical-align: middle;
`;

const Text = styled.span<ITextWrapper>`
  font-size: ${({ fSize }) => (fSize ? fSize : "1em")};
  color: ${({ fontColor }) => (fontColor ? fontColor : "#3e3e52")};
  text-transform:
    ${({ textTransform }) =>
       textTransform ? textTransform : "capitalize"};
  font-weight: ${({ fWeight }) => (fWeight ? fWeight : "normal")};
  display: inline-block;
  vertical-align: middle;
`;

export const TextWithIcon = (props: ITextWithIconWrapper) => {
  const {
    displayIcon,
    displayText,
    marginFromIcon,
    iconSize,
    iconColor,
    iconWeight,
    fSize,
    fontColor,
    fWeight,
    textTransform,
  } = props;

  return (
    <>
      <Icon
        iconSize={iconSize ? iconSize : fSize}
        iconColor={iconColor ? iconColor : fontColor}
        iconWeight={iconWeight}
        marginFromIcon={marginFromIcon}
        className={`icon ${displayIcon}`}
      />
      <Text
        fSize={fSize}
        fontColor={fontColor}
        fWeight={fWeight}
        textTransform={textTransform}
      >
        {displayText ? displayText : "default"}
      </Text>
    </>
  );
};

export default TextWithIcon;
