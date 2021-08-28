
import * as React from "react";
import styled from "styled-components";
import ModalList from "./components/ModalList";
import ModalCTABlock from "./components/ModalCTABlock";

interface IModalProps {
    showMask?: boolean;
    modalHeading?: string;
    modalList: any;
    cancelCta: string;
    confirmCta: string;
    bgColor?: string;
    color?: string;
    ctaColor?: string;
    ctaBgColor?: string;
    isCtaBold?: boolean;
    confirmctaBgColor?: string;
    confirmctaColor?: string;
    showCurrencyKey?: boolean;
    listClickHandler: (item: any) => void;
    cancelClickHandler: () => void;
    confirmClickHandler: () => void;
}

const StyledModalWrapper = styled.div<IModalProps>`
  position: fixed;
  z-index: 100001;
  ${ ({showMask}) => showMask ? `background: rgba(87, 82, 82, 0.5); top: 0; left: 0; right: 0; bottom: 0;` : `` }
`;

const StyledModal = styled.div<IModalProps>`
  background: ${ ({bgColor}) => bgColor };
  color: ${ ({color}) => color };
  margin: 0 2em;
  border-radius: 3px;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
`;

const StyledModalHeading = styled.div`
  padding: 1em;
  padding-bottom: 0;
`;

/* tslint:disable max-line-length jsx-no-multiline-js*/
export const ModalWithList: React.FunctionComponent<IModalProps> = (props) => {
    return (
        <StyledModalWrapper {...props}>
            <StyledModal {...props}>
                {props.modalHeading && <StyledModalHeading>
                    {props.modalHeading}
                </StyledModalHeading>}
                <ModalList modalList={props.modalList} listClickHandler={props.listClickHandler} showCurrencyKey={props.showCurrencyKey}/>
                <ModalCTABlock {...props} />
            </StyledModal>
        </StyledModalWrapper>
    );
};

ModalWithList.defaultProps = {
    showMask: true,
    cancelCta: "Cancel",
    confirmCta: "Confirm",
    bgColor: "#fff",
    color: "#3e3e52",
    ctaColor: "#3e3e52",
    isCtaBold: false,
    showCurrencyKey: false,
};
