import React, { FunctionComponent } from "react";
import styled from "styled-components";

export interface IStyleProps {
  width?: string;
  height?: string;
  bgColor?: string;
  fontSize?: string;
  color?: string;
  flex?: number;
}

export interface IOfferCardProps {
  primaryText: string;
  secondaryText: string;
  offerCode: string;
  imgUrl: string;
  onClick: ICallbackType;
}

export type ICallbackType = () => void;

const OfferCardContainerTag = styled.div<IStyleProps>`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  width: 17rem;
  height: 9rem;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.16) 0 0 5px 0;
  border-radius: 4px;
  background: #fff;
`;

const OfferTextContainerTag = styled.div<IStyleProps>`
  display: flex;
  padding: 0.8rem 0.5rem 1rem 0.2rem;
`;

const ImageContainerTag = styled.div<IStyleProps>`
  display: flex;
  margin: 0 0.5rem;
  width: 5.5rem;
  height: 5.5rem;
`;

const ImgTag = styled.img<IStyleProps>`
  cursor: pointer;
`;

const TextContainerTag = styled.div<IStyleProps>`
  display: flex;
  flex-direction: column;
  padding: 0 0.5rem;
  justify-content: center;
`;

const PrimaryTextContainerTag = styled.div`
  display: flex;
`;

const PrimaryTextTag = styled.label<IStyleProps>`
  color: #b3272f;
  font-size: 0.8rem;
  font-weight: bold;
  align-self: flex-end;
  cursor: pointer;
`;

const SecondaryTextContainerTag = styled.div<IStyleProps>`
  display: flex;
  cursor: pointer;
  margin-top: 0.7rem;
`;

const SecondaryTextTag = styled.label<IStyleProps>`
  font-size: 0.7rem;
  color: #3e3e52;
  align-self: center;
  cursor: pointer;
`;

const HorizontalTag = styled.div<IStyleProps>`
  box-sizing: border-box;
  border-bottom: 1px solid #e8e8e8;
`;

const OfferCodeContainerTag = styled.div<IStyleProps>`
  display: flex;
  flex: 2;
  justify-content: center;
`;

const OfferCodeTextTag = styled.label<IStyleProps>`
  align-self: center;
  color: #4a4a4a;
  font-size: 0.8rem;
  font-weight: bold;
  cursor: pointer;
`;

const primaryTxtResponse = (primaryText: any) => {
  const primaryTxt: string = primaryText.length > 45 ? `${primaryText.substring(0, 46)}...` : primaryText;
  return primaryTxt;
};

export const OfferCard: FunctionComponent<IOfferCardProps> = ({
  primaryText, secondaryText, offerCode, onClick, imgUrl }) => {
  return (
    <OfferCardContainerTag onClick={onClick}>
      <OfferTextContainerTag>
        <ImageContainerTag>
          <ImgTag src={imgUrl} alt={imgUrl} className="lazyload" />
        </ImageContainerTag>
        <TextContainerTag>
          <PrimaryTextContainerTag>
            <PrimaryTextTag>{primaryTxtResponse(primaryText)}</PrimaryTextTag>
          </PrimaryTextContainerTag>
          <SecondaryTextContainerTag>
            <SecondaryTextTag>{secondaryText}</SecondaryTextTag>
          </SecondaryTextContainerTag>
        </TextContainerTag>
      </OfferTextContainerTag>
      {offerCode.length ? <HorizontalTag /> : null}
      <OfferCodeContainerTag>
        <OfferCodeTextTag>{offerCode}</OfferCodeTextTag>
      </OfferCodeContainerTag>
    </OfferCardContainerTag>
  );
};
