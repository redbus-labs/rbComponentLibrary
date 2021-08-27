import React from 'react';
import {Meta, Story} from "@storybook/react";
import {SideMenuBar} from "./sideMenu";

export default {
  title: 'Molecules/SideMenu',
  component: SideMenuBar,
} as Meta;

const Template: Story<any> = (args: any) => <SideMenuBar {...args} />;

const consoleLogger = () => {
  alert("link clicked!");
};

const menuList = [
  {
    iconClass: "icon-user",
    displayText: "profile",
    link: "/user/editprofile",
    dataAutoId: "auto-profile",
  },
  {
    iconClass: "icon-search",
    displayText: "search buses",
    link: "/",
    dataAutoId: "auto-search-buses",
  },
  {
    iconClass: "icon-myBookings",
    displayText: "my trips",
    link: "/user/trips",
    dataAutoId: "auto-my-trips",
  },
  {
    iconClass: "icon-wallet",
    displayText: "wallet",
    link: "/walletHistory",
    dataAutoId: "auto-wallet",
    optionalMsg: "NA",
  },
  {
    iconClass: "icon-star_shape",
    displayText: "offers",
    link: "/offers?src=offer",
    dataAutoId: "auto-offers",
  },
  {
    iconClass: "icon-refer",
    displayText: "Refer & Earn",
    link: "/refer",
    dataAutoId: "auto-refer-&-earn",
  },
  {
    iconClass: "icon-faq",
    displayText: "help",
    link: "/help",
    dataAutoId: "auto-help",
  },
  {
    iconClass: "icon-aboutus",
    displayText: "about us",
    link: "/info",
    dataAutoId: "auto-about-us",
  },
  {
    iconClass: "icon-cancel",
    displayText: "cancel ticket",
    link: "/cancellation",
    dataAutoId: "auto-cancel-ticket",
  },
  {
    iconClass: "icon-reschedule_icon",
    displayText: "reschdule ticket",
    link: "/reschdule",
    dataAutoId: "auto-reschedule-ticket",
  },
  {
    iconClass: "icon-settings",
    displayText: "settings",
    link: "/settings",
    dataAutoId: "auto-settings",
    newTab: true,
  },
  {
    iconClass: "icon-logout",
    displayText: "logout",
    link: "",
    dataAutoId: "auto-logout",
    onClickHandler: consoleLogger,
    onClickEnabled: true,
  },
];

const setting = {
  list: menuList,
  overlayDisplay: true,
  onOverlayClick: consoleLogger,
};

const style = {
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
  textTransform: "capitalize",
  padding: "0 0 0 1em",
  liTagPadding: "0 0 1.1em",
};

export const SideMenuWithProps = Template.bind({});
SideMenuWithProps.args = {
  setting,
  style
}
