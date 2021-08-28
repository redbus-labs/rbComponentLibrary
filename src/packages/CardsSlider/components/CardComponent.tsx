import React, { FunctionComponent } from "react";
import styled from "styled-components";

export interface CardComponentProps {
  heading: string;
  desc: string;
  imgUrl: string;
  onClick: ICallbackType;
}

export type ICallbackType = () => void;

export interface IStyleProps {
  width?: string;
  height?: string;
  bgColor?: string;
  fontSize?: string;
  color?: string;
  flex?: number;
}

const WhyTextContainerTag = styled.div<IStyleProps>`
  display: flex;
  cursor: pointer;
  width: 17rem;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.16) 0 0 5px 0;
  border-radius: 4px;
  background: #fff;
  height: 7.5em;
  align-items: center;
  padding: 0.5em;
`;

const ImageContainerTag = styled.div<IStyleProps>`
  display: flex;
  margin: 0 0.5rem;
  overflow: hidden;
  width: 11em;
`;

const ImgTag = styled.img<IStyleProps>`
  cursor: pointer;
  height: 50px !important;
  width: 50px !important;
  margin: auto;
`;

const TextContainerTag = styled.div<IStyleProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 0.5em;
`;

const HeadingTextContainerTag = styled.div`
  display: flex;
`;

const HeadingTextTag = styled.label<IStyleProps>`
  font-size: 0.8rem;
  font-weight: bold;
  align-self: flex-end;
  cursor: pointer;
  white-space: pre-wrap;
  color: #4a4a4a;
`;

const DescTextContainerTag = styled.div<IStyleProps>`
  display: flex;
  cursor: pointer;
  margin-top: 0.7rem;
  width: 100%;
`;

const DescTextTag = styled.label<IStyleProps>`
  font-size: 0.7rem;
  align-self: center;
  cursor: pointer;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: normal;
  color: #818a99;
`;

export const CardComponent: FunctionComponent<CardComponentProps> = ({ heading, desc, imgUrl }) => {
  return (
    <WhyTextContainerTag>
      <ImageContainerTag>
        <ImgTag src={imgUrl} />
      </ImageContainerTag>
      <TextContainerTag>
        <HeadingTextContainerTag>
          <HeadingTextTag>{heading}</HeadingTextTag>
        </HeadingTextContainerTag>
        <DescTextContainerTag>
          <DescTextTag>{desc}</DescTextTag>
        </DescTextContainerTag>
      </TextContainerTag>
    </WhyTextContainerTag>
  );
};
