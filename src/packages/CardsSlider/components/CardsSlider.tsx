import React, { FunctionComponent } from "react";
import styled from "styled-components";
import {CardComponent} from "./CardComponent";

export interface CardsSliderProps {
  list: any;
}

export type ICallbackType = () => void;

const CardContainerTag = styled.div`
  margin-right: 1rem;
`;

const AllCardsContainerTag = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  display: flex;
  padding: 2px;
  margin-top: 0.75rem;
`;

export const CardsSlider: FunctionComponent<CardsSliderProps> = ({ list }) => {
  const cards = list.map((card: any, index: any) => <CardContainerTag key={index}>
    <CardComponent {...card} />
  </CardContainerTag>);

  return (
    <AllCardsContainerTag>
      {cards}
    </AllCardsContainerTag>
  );
};
