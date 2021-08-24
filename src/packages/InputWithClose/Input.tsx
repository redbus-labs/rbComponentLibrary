import * as React from "react";
import styled from "styled-components";

export interface IIInputProps {
  bgColor?: string;
  inputType?: string;
  placeholderText?: string;
  closeHandler?: () => void;
  cancelImg?: any;
  icon?: any;
  label?: string;
  handleChange?: () => void;
  index?: number;
  value?: string;
  borderColor?: string;
  cancelText?: any;
  boxShadow?: any;
  fontIcon?: any;
  margin?: any;
  handleFocus?: () => void;
  handleBlur?: () => void;
}

const InputWrap = styled.div`
  position: relative;
  background: #fff;
`;

const InputOne = styled.input<IIInputProps>`
  border: none;
  outline: none;
  background-color: ${ (props) => props.bgColor};
  border-bottom: 1px solid ${(props) => props.borderColor};
  width: 100%;
  line-height: 1.2em;
  padding: 0.7em 3em;
  font-size: 1em;
  font-weight: bold;
  color: #3e3e52;

  &::placeholder {
    color: #bababa;
    outline: none;
    font-size: 0.75em;
    font-weight: normal;
  }
`;

const CancelImg = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 10px;
  right: 6px;
  cursor: pointer;
`;

const IconWrap = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 8px;
  left: 6px;
`;

const Label = styled.label`
  font-size: 0.75em;
  color: #7e7e8c;
  text-transform: uppercase;
  display: block;
  margin: 0 0 4px 6px;
`;

const MainWrap = styled.div<any>`
  margin: ${ (props) => props.margin};
  box-shadow: ${ (props) => props.boxShadow};
`;

export const Input: React.FunctionComponent<IIInputProps> = (
  { placeholderText, inputType, bgColor, closeHandler, cancelImg, boxShadow, margin,
    fontIcon, cancelText, icon, handleChange, label, value, borderColor, handleFocus, handleBlur}) => {
  return (
    <MainWrap boxShadow={boxShadow} margin={margin}>
      {label && <Label>{label}</Label>}
      <InputWrap>
        {icon && <IconWrap src={icon} />}
        {fontIcon}
        <InputOne
          value={value}
          onChange={handleChange}
          placeholder={placeholderText}
          type={inputType}
          bgColor={bgColor}
          borderColor={borderColor}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {cancelImg && <CancelImg src={cancelImg} onClick={closeHandler} />}
        {cancelText}
      </InputWrap>
    </MainWrap>
  );
};
