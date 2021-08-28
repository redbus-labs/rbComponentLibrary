import * as React from "react";
import styled from "styled-components";

interface IModalCTAProps {
    cancelCta?: any;
    confirmCta?: any;
    ctaColor?: string;
    ctaBgColor?: string;
    isCtaBold?: boolean;
    confirmctaBgColor?: string;
    confirmctaColor?: string;
    cancelctaColor?: string;
    cancelctaBgColor?: string;
    isconfirmCtabold?: boolean;
    iscancelCtabold?: boolean;
    cancelClickHandler?: () => void;
    confirmClickHandler?: () => void;
}

const StyledCTABlock = styled.div`
  padding-bottom: 1em;
  text-align: right;
`;

const StyledCancelButton = styled.button<IModalCTAProps>`
  text-transform: uppercase;
  padding: 0.5em 1em;
  margin-right: 1em;
  border: none;
  border-radius: 2px;
  outline: none;
  font-size: 0.8em;
  color: ${ ({cancelctaColor, ctaColor}) => cancelctaColor ? cancelctaColor : ctaColor };
  ${ ({iscancelCtabold, isCtaBold}) => (iscancelCtabold || isCtaBold) ? `font-weight: bold;` : `` }
  ${ ({cancelctaBgColor, ctaBgColor}) => cancelctaBgColor ? `background: ${cancelctaBgColor};` : ctaBgColor ? `background: ${ctaBgColor};` : `background: none;`}
`;

const StyledConfirmButton = styled.button<IModalCTAProps>`
  text-transform: uppercase;
  padding: 0.5em 1em;
  margin-right: 1em;
  border: none;
  border-radius: 2px;
  outline: none;
  font-size: 0.8em;
  color: ${ ({confirmctaColor, ctaColor}) => confirmctaColor ? confirmctaColor : ctaColor };
  ${ ({isconfirmCtabold, isCtaBold}) => (isconfirmCtabold || isCtaBold) ? `font-weight: bold;` : `` }
  ${ ({confirmctaBgColor, ctaBgColor}) => confirmctaBgColor ? `background: ${confirmctaBgColor};` : ctaBgColor ? `background: ${ctaBgColor};` : `background: none;`}
`;

const ModalCTABlock: React.FunctionComponent<IModalCTAProps> = (props) => {
    const cancelButton = <StyledCancelButton {...props} onClick={props.cancelClickHandler}>
      {props.cancelCta}
    </StyledCancelButton>;
    return (
        <StyledCTABlock>
            {props.cancelCta && cancelButton}
            <StyledConfirmButton {...props}  onClick={props.confirmClickHandler}>
                {props.confirmCta}
            </StyledConfirmButton>
        </StyledCTABlock>
    );
};

export default ModalCTABlock;
