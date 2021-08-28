import * as React from "react";
import {Meta, Story} from "@storybook/react";
import {FixedNav} from "./FixedNav";

export default {
  title: 'Atoms/Fixed Navigator',
  component: FixedNav,
} as Meta;

const menuItems = [
    {
        label : "Home",
        isSelected: true,
        link: "",
        iconFont: <img src="/userprofile.svg" width="25px" height="25px" />,
    },
    {
        label : "Home",
        isSelected: false,
        link: "",
        iconFont: <img src="/userprofile.svg" width="25px" height="25px" />,
    },
    {
        label : "Home",
        isSelected: false,
        link: "",
        iconFont: <img src="/userprofile.svg" width="25px" height="25px" />,
    },
    {
        label : "Home",
        isSelected: false,
        link: "",
        iconFont: <img src="/userprofile.svg" width="25px" height="25px" />,
    },
];

const Template: Story<any> = (args: any) => <FixedNav {...args} />;
export const bottomFixed = Template.bind({});
bottomFixed.args = {
    fixedPosition:"bottom",
    navMenu:menuItems
}

export const topFixed = Template.bind({});
topFixed.args = {
    fixedPosition:"top",
    navMenu:menuItems
}
