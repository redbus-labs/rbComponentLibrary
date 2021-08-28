import React from "react";
import {Meta, Story} from "@storybook/react";
import {NavItem} from "./NavItem";

export default {
  title: 'Atoms/Navigation List Item',
  component: NavItem,
} as Meta;

const Template: Story<any> = (args: any) => <NavItem {...args} />;
export const withICons = Template.bind({});
withICons.args = {
    navText:"Default",
    leftIconUrl:"/userprofile.svg",
    rightIconUrl:"/right.svg",
    leftIconSize:"1.8em",
    rightIconSize:"0.85em",
}

export const withBoxShadow = Template.bind({});
withBoxShadow.args = {
    navText:"Default",
    rightIconUrl:"/right.svg",
    rightIconSize:"0.85em",
    showBoxShadow:true,
    showBottomBorder:false,
    borderColor:"#f0f1f2"
}

export const slideableNav = Template.bind({});
slideableNav.args = {
    navText:"Default",
    leftIconUrl:"/userprofile.svg",
    rightIconUrl:"/right.svg",
    leftIconSize:"1.8em",
    rightIconSize:"0.85em",
    isSlideable:true,
    slideContent:"Slide Text",
    slideIconUrl:"/plus.png",
    slideFontSize:"0.7em",
    slideColor:"#7e7e8c",
    showBoxShadow:false,
    showBottomBorder:true
}