import React from 'react';
import {Meta, Story} from "@storybook/react";
import {serialize} from 'react-serialize';
import {Header} from "./header";

export default {
  title: 'Atoms/Header',
  component: Header,
} as Meta;

const Template: Story<any> = (args: any) => <Header {...args} />;
export const defaultHeader = Template.bind({});
defaultHeader.args = {
    headerLbl: "Reschedule"
}

export const headerWithLeftIcon = Template.bind({});
headerWithLeftIcon.args = {
    arrowImgWithHandler:serialize(<span style={{fontSize: "1.2em"}} className="icon icon-back_arrow" />),
    headerLbl:"Search Page",
    isBold:true
}

export const headerWithRightIcon = Template.bind({});
headerWithRightIcon.args = {
    arrowImgWithHandler:serialize(<span style={{fontSize: "1.2em"}} className="icon icon-back_arrow" />),
    headerLbl:"Profile",
    isBold:true,
    isFixed:true,
    rightTxtWithHandler:serialize(<span style={{fontSize: "1.5em"}} className="icon icon-userprofile" />)
}
