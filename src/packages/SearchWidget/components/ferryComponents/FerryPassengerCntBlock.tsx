import React from "react";
import styled from "styled-components";

export interface IFerryProps {
  passengersLbl: string;
  adultLbl: string;
  adultSubLbl: string;
  adultCnt: number;
  childLbl: string;
  childSubLbl: string;
  childCnt: number;
  addLbl: string;
  userIconFont: any;
  showPaxValidationErr: boolean;
  paxValidationLbl: string;
  adultCntClickHandler: (label: string, cnt: number) => void;
  childCntClickHandler: (label: string, cnt: number) => void;
}

const PaxBlockContainer = styled.div`
  padding: 0.8rem;
  font-size: 0.85rem;
`;

const PaxLabel = styled.div`
  color: #7e7e8c;
  text-transform: uppercase;
  font-size: 0.8rem;
  margin-bottom: -0.2rem;
`;

const CountBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1.2rem;
`;

const PaxTypeBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: -1rem;
`;

const PaxTypeBold = styled.div`
  font-weight: bold;
`;

const PaxType = styled.div``;

const AgeText = styled.div`
  color: #7e7e8c;
  font-size: 0.75rem;
  margin-top: 0.5rem;
`;

const CountIncBlock = styled.div`
  color: #3e3e52;
  display: flex;
  align-items: center;

  button {
    background: #f8f4f4;
    border: 1px solid #3e3e52;
    border-radius: 2px;
    padding: 0.5rem 0;
    width: 2.5rem;
    font-size: 0.8rem;
    outline: none;
  }
`;

const AddPlusBlock = styled.div`
  color: #3e3e52;
  display: flex;
  align-items: center;

  button {
    background: #f8f4f4;
    border: 1px solid #3e3e52;
    border-radius: 2px;
    padding: 0.5rem 0;
    width: 7rem;
    font-size: 0.8rem;
    outline: none;
  }
`;

const AdultCountIncBlock = styled.div<IFerryProps>`
  color: #3e3e52;
  display: flex;
  align-items: center;

  button {
    background: #f8f4f4;
    border: 1px solid #3e3e52;
    border-radius: 2px;
    padding: 0.5rem 0;
    width: 2.5rem;
    font-size: 0.8rem;
    outline: none;

    &:first-child {
      ${ ({adultCnt}) => adultCnt <= 1 ? `opacity: 0.3;` : `` }
    }
  }
`;

const UserCount = styled.div`
  padding: 0 0.7rem;
`;

const UserCountBold = styled.div`
  padding: 0 0.7rem;
  font-weight: bold;
`;

const ValidationErrMsg = styled.div`
  margin-top: 0.7rem;
  margin-left: 0.2rem;
  font-size: 0.75rem;
  color: #ea4c53;
`;

/* tslint:disable: jsx-no-lambda jsx-no-multiline-js max-line-length object-literal-sort-keys */
const FerryPassengerCntBlock: React.FunctionComponent<IFerryProps> = (props) => {
  let childBtnBlock;
  if (props.childCnt === 0) {
    childBtnBlock = <AddPlusBlock>
      <button onClick={() => props.childCntClickHandler("inc", props.childCnt)}>{props.addLbl + " +"}</button>
    </AddPlusBlock>;
  } else {
    childBtnBlock = <CountIncBlock>
      <button onClick={() => props.childCntClickHandler("dec", props.childCnt)}>-</button>
      <UserCount>{props.childCnt}</UserCount>
      <button onClick={() => props.childCntClickHandler("inc", props.childCnt)}>+</button>
    </CountIncBlock>;
  }
  return (
    <PaxBlockContainer>
      <PaxLabel>{props.passengersLbl}</PaxLabel>
      <CountBlock>
        <img src ={props.userIconFont} />
        <PaxTypeBlock>
            <PaxTypeBold>{props.adultLbl}</PaxTypeBold>
            <AgeText>{props.adultSubLbl}</AgeText>
        </PaxTypeBlock>
        <AdultCountIncBlock {...props}>
            <button onClick={() => { if (props.adultCnt > 1) { props.adultCntClickHandler("dec", props.adultCnt); } }}>-</button>
            <UserCountBold>{props.adultCnt}</UserCountBold>
            <button onClick={() => props.adultCntClickHandler("inc", props.adultCnt)}>+</button>
        </AdultCountIncBlock>
      </CountBlock>
      <CountBlock>
        <img src={props.userIconFont} />
        <PaxTypeBlock>
            <PaxType>{props.childLbl}</PaxType>
            <AgeText>{props.childSubLbl}</AgeText>
        </PaxTypeBlock>
        {childBtnBlock}
      </CountBlock>
      {props.showPaxValidationErr && <ValidationErrMsg>{props.paxValidationLbl}</ValidationErrMsg>}
    </PaxBlockContainer>
  );
};

export default FerryPassengerCntBlock;
