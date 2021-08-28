import React from "react";
import styled from "styled-components";
import TextWithIcon from "../TextWithIcon";
import {
  ISideMenu,
  IMenuWrapper,
  ISideMenuStyle,
} from "./sideMenuInterface";

const MenuWrapper = styled.div<IMenuWrapper>`
  display: flex;
  height: 100%;
`;

const MenuListWrapper = styled.ul<ISideMenuStyle>`
  padding: ${({ padding }) => padding};
  max-width: ${({ maxWidth }) => maxWidth};
  background-color: ${({ backgroundColor }) => backgroundColor};
  box-shadow: ${({ boxShadow }) => boxShadow};
  list-style: none;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const ListItem = styled.li<ISideMenuStyle>`
  font-size: ${({ fSize }) => fSize};
  padding: ${({ liTagPadding }) => liTagPadding};
`;

const Link = styled.a<ISideMenuStyle>`
  color: ${({ fontColor }) => fontColor};
  text-decoration: none;
  width: 100%;
  display: flex;
  line-height: 1.5em;
  align-items: baseline;
`;

const OptionalMsg = styled.span<ISideMenuStyle>`
  text-transform: ${({textTransform}) => textTransform};
  font-size: ${({fSize}) => fSize};
  background-color: #39c190;
  color: #fff;
  display: inline-block;
  vertical-align: middle;
  padding: 0 0.5em;
  margin: 0 0 0 1em;
  border-radius: 0.2em;
`;

const OverLayWrapper = styled.div<ISideMenuStyle>`
  background-color:
    ${({ overlayColor }) =>
        overlayColor};
  opacity: 0.5;
  flex-grow: 1;
`;

export const SideMenuBar = (props: ISideMenu) => {
  const defaultStyle = {
   maxWidth: "65%",
   fSize: "1em",
   fontColor: "#3e3e52",
   fWeight: "normal",
   iconSize: "1em",
   iconColor: "#3e3e52",
   iconWeight: "normal",
   marginFromIcon: "0 1em 0 0",
   backgroundColor: "none",
   overlayColor: "#575252",
   boxShadow: "0px 0px 10px 1px rgba(0,0,0,0.2)",
   textTransform: "uppercase",
   padding: "1em",
   liTagPadding: "0 0 0.8em",
  };

  const {
    list,
    overlayDisplay,
    onOverlayClick,
  } = props && props.setting;

  const style = {...defaultStyle, ...props.style};

  const defaultOverlayDisplay = overlayDisplay ? overlayDisplay : true;

  const onLinkClick = () => {
    return false;
  };

  return (
    <MenuWrapper>
      {list && list.length ? (
        <MenuListWrapper
          {...style}
        >
          {list.map((listItem, index) => {
            return (
              <ListItem
                {...style}
                key={index}
              >
                <Link
                  {...style}
                  href={
                    listItem.link !== "" ? listItem.link : "javascript:void(0)"
                  }
                  onClick={
                    listItem.onClickHandler && typeof listItem.onClickHandler === "function" &&
                    listItem.onClickEnabled
                      ? listItem.onClickHandler
                      : onLinkClick
                  }
                  target={listItem.newTab ? "_blank" : ""}
                >
                  <TextWithIcon
                    displayIcon={listItem.iconClass}
                    displayText={listItem.displayText}
                    marginFromIcon={style.marginFromIcon}
                    iconSize={style.iconSize}
                    iconColor={style.iconColor}
                    iconWeight={style.iconWeight}
                    fSize={style.fSize}
                    fontColor={style.fontColor}
                    fWeight={style.fWeight}
                    textTransform={style.textTransform}
                  />
                  {listItem.optionalMsg ?
                    <OptionalMsg {...style}>{listItem.optionalMsg}</OptionalMsg> : null
                  }
                </Link>
              </ListItem>
            );
          })}
        </MenuListWrapper>
      ) : null}
      {defaultOverlayDisplay ? (
        <OverLayWrapper {...style} onClick={onOverlayClick}/>
      ) : null}
    </MenuWrapper>
  );
};
