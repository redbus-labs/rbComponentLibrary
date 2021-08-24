import React, {FunctionComponent} from "react";
import styled , {keyframes} from "styled-components";

export interface IBottomModalProps {
  modalHeading?: string;
  body?: any;
  height?: any;
  showCross?: boolean;
  closeImgWithHandler?: any;
  bgColor?: string;
  headcolor?: string;
  isHeadbold?: boolean;
  modalBar?: boolean;
  className?: string;
  headClass?: string;
}

const slideInUp1 = keyframes`
  0% {
    @-webkit-transform: translate(0, 100%);

    transform: translate(0, 100%);
  }

  100% {
    @-webkit-transform: translate(0, 100%);

    transform: translate(0, 0);
  }
`;

const BottomModalOne = styled.div<IBottomModalProps>`
  position: fixed;
  bottom: 0;
  left: 1em;
  right: 1em;
  color: #3e3e52;
  border: none;
  outline: none;
  ${ (props) => props.bgColor ? `background : ${props.bgColor};` : `background: white;`}
  z-index: 999999;
  ${ (props) => props.height && `height : ${props.height};`}
  display: block;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.27);
  border-radius: 1em 1em 0 0;
  animation: 0.7s ease-out ${(slideInUp1)};

  .modal-bar {
    border-radius: 3px;
    border: solid 2px #c3c3c386;
    width: 50%;
    margin: 1px auto;
  }

  .modal-body {
    padding: 1em;
  }

  .modal-btn {
    text-align: center;
    margin: 0 auto;
  }
`;

const BottomBannerHead = styled.div<IBottomModalProps>`
  color: ${(props) => props.headcolor};
  padding: 0.5em;
  ${(props) => props.isHeadbold ? `font-weight : bold;` : ``}
  text-align: center;
`;

const ModalTextWrap = styled.div<IBottomModalProps>`
  display: flex;
  flex-direction: column;
  color: #3e3e52;

  .main-header {
    font-weight: bold;
    font-size: 19px;
    text-transform: uppercase;
    margin-bottom: 1em;
    margin-top: 0.5em;
  }

  .sub-header {
    font-weight: bold;
    font-size: 14px;
    text-transform: uppercase;
    margin-bottom: 1em;
  }

  .modal-body {
    font-size: 12px;
    color: #465986;
    margin-bottom: 1em;
  }
`;

const CrossOne = styled.img`
  height: 0.7em;
  position: fixed;
  right: 1em;
  cursor: pointer;
  padding: 1em;
`;

const CloseHandler = styled.div<IBottomModalProps>`
  height: 0.7em;
  padding-right: 1.5em;
  padding-top: 1.5em;
  float: right;
  cursor: pointer;
`;

const image = {
  alt: "my image",
  src: "/cross.svg",
};

export const BottomFixedBanner: FunctionComponent<IBottomModalProps> = (props) => {

  return (
    <BottomModalOne height={props.height} bgColor={props.bgColor} className={props.className}>
      {props.closeImgWithHandler && <CloseHandler {...props}> {props.closeImgWithHandler} </CloseHandler>}
      {props.showCross && <CrossOne  src={image.src} alt={image.alt}/>}
      {props.modalHeading && <BottomBannerHead {...props} className={props.headClass}>
        {props.modalHeading}
      </BottomBannerHead>}
      {props.modalBar && <div className="modal-bar" />}
      {props.body && <div className="modal-body">{props.body}</div>}
    </BottomModalOne>
  );
};

BottomFixedBanner.defaultProps = {
  body: <div>This is the body</div>,
  headcolor: "#000",
};
