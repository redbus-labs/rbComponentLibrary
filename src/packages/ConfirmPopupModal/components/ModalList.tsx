import * as React from "react";
import styled from "styled-components";
import "./modalList.css";

interface IModalListProps {
    modalList: any;
    listClickHandler: (item: any) => void;
    showCurrencyKey?: boolean;
}

const StyledModalList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const StyledModalListItem = styled.li`
  padding: 0.7em 1em;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledBlock = styled.div`
  display: flex;
  align-items: center;
`;

const StyledImgBlock = styled.div`
  margin-right: 1em;
`;

const StyledSelectLabel = styled.div`
  float: right;
  width: 1em;
  height: 1em;
  border: 1px solid #6f6f6f;
  border-radius: 50%;
  background: #fff;
  position: relative;
`;

const StyledSelected = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  bottom: 50%;
  right: 50%;
  width: 0.5em;
  height: 0.5em;
  background: #d84e55;
  border: 1px solid #d84e55;
  border-radius: 50%;
  transform: translate(-50%, -50%);
`;

/* tslint:disable jsx-no-lambda jsx-no-multiline-js max-line-length*/
const ModalList: React.FunctionComponent<IModalListProps> = (props) => {
    return (
        <StyledModalList {...props}>
            {props.modalList.map((item: any, key: any) => <StyledModalListItem key={key} onClick={() => props.listClickHandler(item)}>
                <StyledBlock>
                    {item.iconFont && <StyledImgBlock><span className={item.iconFont}></span></StyledImgBlock>}
                    {props.showCurrencyKey ? item.currencyKey : item.label}
                </StyledBlock>
                <StyledSelectLabel>
                    {item.isSelected && <StyledSelected />}
                </StyledSelectLabel>
            </StyledModalListItem>)}
        </StyledModalList>
    );
};

export default ModalList;
