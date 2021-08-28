import React, { FunctionComponent } from "react";
import styled from "styled-components";

interface IStyleProps {
  width?: string;
  height?: string;
  bgColor?: string;
  fontSize?: string;
  color?: string;
  flex?: number;
}

type ICallbackType = () => void;

export interface IRatingCardProps {
  route: string;
  date: string;
  travels: string;
  onClick: ICallbackType;
  width?: string;
  height?: string;
}

const TripTag = styled.div<IStyleProps>`
  width: ${(props) => props.width};
  display: flex;
  flex-direction: column;
  height: ${(props) => props.height};
  border-radius: 2px;
  box-shadow: rgba(0, 0, 0, 0.16) 0 0 5px 0;
  padding: 1rem 1rem 0.5rem 1rem;
  background: #fff;
`;

const HorizontalTag = styled.div<IStyleProps>`
  box-sizing: border-box;
  border-bottom: 1px solid #e8e8e8;
  flex: 1;
`;

const DetailsContainer = styled.div`
  display: flex;
`;

const TravelDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
`;

const RouteLabel = styled.label`
  font-size: 0.75rem;
  font-weight: bold;
  text-transform: uppercase;
`;

const DateLabel = styled.label`
  color: #747f8d;
  font-size: 0.75rem;
  padding-top: 7px;
`;

const TravelsLabel = styled.label`
  color: #d84e55;
  font-size: 0.75rem;
  padding-left: 10px;
  display: flex;
  justify-content: flex-end;
  flex: 2;
`;

const RatingsContainer = styled.div`
  display: flex;
  flex: 2;
  justify-content: space-evenly;
`;

const StarSpanTag = styled.span`
  font-size: 1.5rem;
  align-self: center;
`;

export const RatingCard: FunctionComponent<IRatingCardProps> = ({ route, date, travels, onClick, ...styleProps }) => {
  return (
    <TripTag {...styleProps} onClick={onClick}>
      <DetailsContainer>
        <TravelDetailsContainer>
          <RouteLabel>{route}</RouteLabel>
          <DateLabel>{date}</DateLabel>
        </TravelDetailsContainer>
        <TravelsLabel>{travels}</TravelsLabel>
      </DetailsContainer>
      <HorizontalTag />
      <RatingsContainer>
        <StarSpanTag className="icon icon-star_shape"/>
        <StarSpanTag className="icon icon-star_shape"/>
        <StarSpanTag className="icon icon-star_shape"/>
        <StarSpanTag className="icon icon-star_shape"/>
        <StarSpanTag className="icon icon-star_shape"/>
      </RatingsContainer>
    </TripTag>
  );
};

RatingCard.defaultProps = {
    width: "auto",
    height: "8rem",
};
