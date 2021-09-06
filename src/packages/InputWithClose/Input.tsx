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
  value?: string;
  borderColor?: string;
  boxShadow?: any;
  margin?: any;
  handleFocus?: () => void;
  handleBlur?: () => void;
}

const InputWrap = styled.div<IIInputProps>`
  position: relative;
  background: #fff;
  border-bottom: 1px solid ${(props) => props.borderColor};
`;

const InputOne = styled.input<IIInputProps>`
  display: inline-block;
  position: relative;
  left: 1.5em;
  border: none;
  outline: none;
  background-color: ${ (props) => props.bgColor};
  width: 80%;
  line-height: 1.2em;
  padding: 0.7em 0;
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
  display: inline-block;
  width: 24px;
  height: 24px;
  position: relative;
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
  { placeholderText, inputType, bgColor, closeHandler, cancelImg, boxShadow, margin
    , icon, handleChange, label, value, borderColor, handleFocus, handleBlur}) => {
  return (
    <MainWrap boxShadow={boxShadow} margin={margin}>
      {label && <Label>{label}</Label>}
      <InputWrap borderColor={borderColor}>
        {icon && <IconWrap src={icon} />}
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
        <CancelImg src={cancelImg} onClick={closeHandler} />
      </InputWrap>
    </MainWrap>
  );
};
