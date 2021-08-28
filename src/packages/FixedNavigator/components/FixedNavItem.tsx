import * as React from "react";
import styled from "styled-components";
import { INavMenuObj } from "../FixedNav";

interface IFixedNavItemProps {
    navItem: INavMenuObj;
    listLength: number;
    clickHandler?: () => void;
}

const StyledNavItem = styled.li<IFixedNavItemProps>`
  float: left;
  width: ${({ listLength }) => 100 / listLength}%;
  list-style: none;
  text-align: center;
  text-transform: uppercase;
  font-size: 0.7em;
  ${({ navItem }) => navItem.isSelected ? `color: #d84e55; font-weight: bold;` : `color: #3E3E52;`}
`;

const StyledDiv = styled.div`
  margin-top: 0.3em;
`;

export const FixedNavItem: React.FunctionComponent<IFixedNavItemProps>
= ({ navItem, listLength, clickHandler }) => {
    return (
        <StyledNavItem listLength={listLength} navItem={navItem} onClick={clickHandler}>
            {navItem.iconFont}
            <StyledDiv>{navItem.label}</StyledDiv>
        </StyledNavItem>
    );
};

export default FixedNavItem;
