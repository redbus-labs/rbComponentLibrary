import * as React from "react";
import styled from "styled-components";
import ConfirmPopupCTA from "./components/ModalCTABlock";
interface IConfirmPopupModal {
    showMask?: boolean;
    modalHeading?: any;
    headcolor?: string;
    isHeadbold?: boolean;
    body: any;
    cancelCta?: any;
    confirmCta?: any;
    ctaColor?: string;
    ctaBold?: boolean;
    cancelctaColor?: string;
    confirmctaColor?: string;
    ctaBgColor?: string;
    bgColor?: string;
    isCtaBold?: boolean;
    confirmctaBgColor?: string;
    isconfirmCtabold?: boolean;
    iscancelCtabold?: boolean;
    showCancelButton?: boolean;
    cancelClickHandler?: () => void;
    confirmClickHandler?: () => void;
}
const StyledConfirmPopupWrapper = styled.div<IConfirmPopupModal>`
  position: fixed;
  z-index: 100001;
  ${ ({showMask}) => showMask ? `background: rgba(87, 82, 82, 0.5); top: 0; left: 0; right: 0; bottom: 0;` : `` };
`;
const StyledConfirmPopupContent = styled.div<IConfirmPopupModal>`
  background: white;
  border-radius: 3px;
  position: relative;
  top: 50%;
  background-color: ${ ({bgColor}) => bgColor };
  ${ ({showMask}) => showMask ? `box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);transform: translateY(-50%);margin: 0 2em;` : `` };
`;
const StyledConfirmPopupHead = styled.div<IConfirmPopupModal>`
  color: ${ ({headcolor}) => headcolor };
  padding: 1em;
  padding-bottom: 1em;
  ${ ({isHeadbold}) => isHeadbold ? `font-weight : bold` : `` }
`;
const StyledConfirmPopupBody = styled.div`
  padding: 1em;
`;

/* tslint:disable max-line-length jsx-no-multiline-js*/
export const ConfirmPopupModal: React.FunctionComponent<IConfirmPopupModal> = (props) => {
    return(
        <StyledConfirmPopupWrapper {...props}>
            <StyledConfirmPopupContent {...props}>
                {props.modalHeading && <StyledConfirmPopupHead {...props}> {props.modalHeading}
                </StyledConfirmPopupHead>}
                {props.body && <StyledConfirmPopupBody>
                    {props.body}
                </StyledConfirmPopupBody>}
                <ConfirmPopupCTA {...props}/>
            </StyledConfirmPopupContent>
        </StyledConfirmPopupWrapper>
    );
};

ConfirmPopupModal.defaultProps = {
    showMask: true,
    confirmCta: "Close",
    ctaColor: "#3e3e52",
    modalHeading: "",
    isHeadbold: false,
    body: "",
    headcolor: "#000",
    cancelCta: "",
    isCtaBold: false,
};
