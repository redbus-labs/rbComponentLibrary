import React, { FunctionComponent } from "react";
import styled from "styled-components";
import OfferCard from "@redbus/offer-card";

export interface IOfferCardSliderProps {
  offerCardList: IOfferCardProps[];
}

export interface IOfferCardProps {
  primaryText: string;
  secondaryText: string;
  offerCode: string;
  imgUrl: string;
  onClick: (e?: any) => void;
}

const CardContainerTag = styled.div`
  margin-right: 1rem;
`;

const OfferCardContainerTag = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  display: flex;
  padding: 2px;
`;

export const OfferCardSlider: FunctionComponent<IOfferCardSliderProps> = ({ offerCardList }) => {
  const offerCards = offerCardList.map((card, index) => <CardContainerTag key={index}>
    <OfferCard {...card} /></CardContainerTag>);

  return (
    <OfferCardContainerTag>
      {offerCards}
    </OfferCardContainerTag>
  );
};
