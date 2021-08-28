import * as React from "react";
import styled from "styled-components";
import FixedNavItem from "./components/FixedNavItem";

interface IFixedNavProps {
    fixedPosition: string;
    navMenu: INavMenuArray;
    clickHandler: (link: string) => void;
}

interface INavMenuArray extends Array<INavMenuObj> {}

export interface INavMenuObj {
    label: string;
    iconFont: any;
    isSelected: boolean;
    link: string;
}

const StyledFixedNav = styled.ul<IFixedNavProps>`
  background-color: #fff;
  padding: 0.6em 0;
  position: fixed;
  ${({ fixedPosition }) => fixedPosition === "top" ? `top: 0;` : `bottom: 0;`}
  left: 0;
  right: 0;
  border: none;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2);
  width: 100%;
  margin: 0;
  padding-right: 0.7em;
`;

export const FixedNav: React.FunctionComponent<IFixedNavProps> = ({ navMenu, fixedPosition, clickHandler }) => {
    return (
     /* tslint:disable jsx-no-lambda max-line-length*/
     <StyledFixedNav navMenu={navMenu} fixedPosition={fixedPosition} clickHandler={clickHandler}>
        {navMenu.map((item, key) => <FixedNavItem key={key} navItem={item} listLength={navMenu.length} clickHandler={() => clickHandler(item.link)}/>)}
    </StyledFixedNav>
    );
};

FixedNav.defaultProps = {
    fixedPosition: "bottom",
};

export default FixedNav;
