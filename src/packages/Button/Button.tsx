import React, { FunctionComponent } from "react";
import styled from "styled-components";

export interface IButtonProps {
    /** Display content of the button */
    buttonText?: string;
    /** Font size of the button text */
    fontSize?: number;
    /** Background color of button */
    bgColor?: string;
    /** Color of the button text */
    color?: string;
    /** Click Event */
    onClick?: (e: any) => void;
    /** Width of button */
    width?: string;
    /** Border Radius of button */
    borderRadius?: string;
    /** Classes to which button belongs to */
    classes?: string;
    /** Is transition enabled or not */
    noTransition?: boolean;
    /** Auto id of button */
    dataAutoid?: string;
}

const ButtonOne = styled.button<IButtonProps>`
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color || "white"};
  border-radius: ${(props) => props.borderRadius || "4px"};
  font-weight: 700;
  padding: 0.7em 0.5em;
  border: none;
  outline: none;
  font-size: ${(props) => props.fontSize}px;
  transition: ${(props) => props.noTransition ? "auto" : "1s"};
  width: ${(props) => props.width};
`;

export const Button: FunctionComponent<IButtonProps> =
    // HTML tags tried => b, i, a, u, ul, ol, li
    /**
     * <b> <a href="https://redbus.in" target="_blank"> Button Component </a> </b>
     * (click to see where this component is used!)
     */
    ({ buttonText, fontSize, onClick, bgColor, classes, color, noTransition, borderRadius, dataAutoid }) => {
        return (
            <ButtonOne
                data-autoid={dataAutoid}
                onClick={onClick}
                fontSize={fontSize}
                color={color}
                borderRadius={borderRadius}
                noTransition={noTransition}
                bgColor={bgColor}
                className={classes}
            >
                {buttonText}
            </ButtonOne>
        );
    };

Button.defaultProps = {
    color: "white",
    bgColor: "#465986",
    buttonText: "DEFAULT",
    fontSize: 15,
    noTransition: true,
    width: "100px",
    borderRadius: "0",
    onClick: () => { },
};