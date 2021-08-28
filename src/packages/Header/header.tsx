import * as React from "react";
import styled from "styled-components";
import {deserialize} from 'react-serialize';

interface IHeaderProps {
  headerLbl?: string;
  headerSubLbl?: string;
  rightTxtWithHandler?: any;
  isBold?: boolean;
  bgColor?: string;
  isFixed?: boolean;
  arrowImgWithHandler?: any;
  iconColor?: string;
}

const StyledHeader = styled.div<IHeaderProps>`
  background-color: ${ (props) => props.bgColor };
  width: 100%;
  margin: 0;
  padding: 1.2em 0.8em;
  color: #fff;
  position: ${ (props) => props.isFixed ? `fixed` : `relative` };
  z-index: 100;
  display: flex;
  top: 0;
  left: 0;
  right: 0;

`;

const StyledText = styled.span<IHeaderProps>`
  font-weight: ${ (props) => props.isBold ? `bold` : `normal` };
`;

const StyledLeftContainer = styled.div<IHeaderProps>`
  color: ${ (props) => props.iconColor };
  font-weight: bold;
  margin-right: 0.5em;
`;

const StyledRightContainer = styled.div<IHeaderProps>`
  position: absolute;
  right: 3em;
  color: ${ (props) => props.iconColor };
  font-weight: bold;
`;

/* tslint:disable-next-line max-line-length*/
export const Header: React.FunctionComponent<IHeaderProps> = ({bgColor, isFixed, arrowImgWithHandler, isBold, headerLbl, headerSubLbl, iconColor, rightTxtWithHandler}) => {
    return (
        <StyledHeader bgColor={bgColor} isFixed={isFixed}>
            {arrowImgWithHandler && <StyledLeftContainer iconColor={iconColor}>{deserialize(arrowImgWithHandler)}</StyledLeftContainer>}
            <StyledText isBold={isBold}>{headerLbl}</StyledText>
            {headerSubLbl}
            {rightTxtWithHandler && <StyledRightContainer iconColor={iconColor}>{deserialize(rightTxtWithHandler)}</StyledRightContainer>}
        </StyledHeader>
    );
};

Header.defaultProps = {
    headerLbl: "Default Text",
    headerSubLbl: "",
    rightTxtWithHandler: null,
    arrowImgWithHandler: null,
    isBold: false,
    bgColor: "#c13d49",
    iconColor: "#fff",
    isFixed: true,
};
