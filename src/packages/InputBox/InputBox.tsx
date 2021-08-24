import React, { FunctionComponent } from "react";
import styled from "styled-components";

export interface IInputProps {
  name?: string;
  id?: string;
  autoId?: string;
  changHandler?: (param: any) => void;
  clickHandler?: () => void;
  bgColor?: string;
  inputType?: string;
  placeholder?: string;
  color?: string;
}

const InputOne = styled.input<IInputProps>`
  outline: none;
  border-radius: 3px;
  background-color: ${(props) => props.bgColor};
  border: 1px solid #bababa;
  width: 100%;
  line-height: 1.2em;
  padding: 0.7em;
  color: ${(props) => props.color};
  font-size: 0.9em;
`;

const defaultHandler = (e: any) => { };

export const Input: FunctionComponent<IInputProps> = (props: IInputProps) => {

  const {
    name,
    id,
    autoId,
    bgColor,
    inputType,
    placeholder,
    color,
    changHandler = defaultHandler,
    clickHandler = defaultHandler,
  } = props;

  const handleChangeEvent = (e: any) => {
    changHandler(e);
  };

  return (
    <InputOne
      name={name}
      id={id}
      placeholder={placeholder}
      type={inputType}
      bgColor={bgColor}
      onChange={handleChangeEvent}
      data-autoid={autoId}
      color={color}
      onClick={clickHandler}
    />
  );
};

Input.defaultProps = {
  bgColor: "#FFFFFF",
  inputType: "text",
  placeholder: "",
  color: "rgba(74, 74, 74, 0.86)",
};
