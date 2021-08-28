import * as React from "react";
import styled from "styled-components";

export type ICallbackType = (e: any) => void;

export interface IButtonProps {
  displayText: string;
  displayImage?: string;
  onClick: ICallbackType;
  isImageReq?: boolean;
  wrapClass ?: string;
  labelClass?: string;
  buttonWidth ?: string;
  buttonHeight ?: string;
  buttonBackColor ?: string;
  buttonBoxShadow ?: string;
  font?: string;
  color?: string;
  dataId?: string;
}
export interface IButtonTag {
  onClick?: (e: any) => void;
  buttonWidth ?: string;
  buttonHeight ?: string;
  buttonBackColor ?: string;
  buttonBoxShadow ?: string;
}
export interface ILabelSpanTag {
  font?: string;
  color?: string;
  labelClass?: string;
}
const ButtonTag = styled.button<IButtonTag>`
  cursor: pointer;
  display: flex;
  width: ${ (props) => props.buttonWidth };
  height: ${ (props) => props.buttonHeight };
  justify-content: center;
  border: none;
  background: ${ (props) => props.buttonBackColor };
  box-shadow: ${ (props) => props.buttonBoxShadow };
  border-radius: 4px;
  align-items: center;
  flex-direction: column;
`;

const ContainerTag = styled.div`
  display: flex;
  flex: 9;
  align-self: center;
`;
const LabelContainerTag = styled.div`
  flex: 5;
  display: flex;
  justify-content: center;
`;

const LabelTag = styled.label<ILabelSpanTag>`
  font-size: ${ (props) => props.font };
  color: ${ (props) => props.color };
  height: 1rem;
  cursor: pointer;
  align-self: center;
`;

const SpanTag = styled.img`
  cursor: pointer;
  align-self: flex-end;
  font-size: 2.25rem;
`;

const ButtonWithImg: React.FunctionComponent<IButtonProps> = (
  props: IButtonProps,
) => {
  const {
    displayText,
    displayImage,
    onClick ,
    isImageReq = true ,
    wrapClass ,
    labelClass ,
    buttonWidth ,
    buttonHeight ,
    buttonBackColor ,
    buttonBoxShadow,
    dataId,
    font,
    color} = props;
  return (
    <ButtonTag
      data-id={dataId}
      onClick={onClick}
      buttonWidth={buttonWidth}
      buttonHeight={buttonHeight}
      buttonBackColor={buttonBackColor}
      buttonBoxShadow={buttonBoxShadow}
      className={wrapClass}
    >
      <ContainerTag>
        {isImageReq ? <SpanTag src = {displayImage} /> : null}
      </ContainerTag>
      <LabelContainerTag>
        <LabelTag
          font={font}
          color={color}
          className={labelClass}
        >
          {displayText}
        </LabelTag>
      </LabelContainerTag>
    </ButtonTag>
  );
};

export { ButtonWithImg };
