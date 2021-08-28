import React, { FunctionComponent } from "react";
import styled from "styled-components";
import {CardsSlider} from "./components/CardsSlider";

export interface ICardsSliderContainerProps {
  label: string;
  items: any;
}

const OffersContainer = styled.div`
  margin-top: 1rem;
`;

const Heading = styled.label`
  color: #3e3e52;
  font-size: 0.85rem;
`;

export const CardsSliderContainer: FunctionComponent<ICardsSliderContainerProps> = ({ label, items }) => {
  return (
    <OffersContainer>
      <Heading>{label.toUpperCase()}</Heading>
      <CardsSlider list={items} />
    </OffersContainer>
  );
};
