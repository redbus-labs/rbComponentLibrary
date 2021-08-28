import React from 'react';
import {Meta, Story} from "@storybook/react";
import {ButtonWithImg} from "./ButtonWithImg";

export default {
  title: 'Atoms/Button With Image',
  component: ButtonWithImg,
} as Meta;

const Template: Story<any> = (args: any) => <ButtonWithImg {...args} />;
export const defaultButtonWithoutImg = Template.bind({});
defaultButtonWithoutImg.args = {
  displayText: "Rpool",
  isImageReq: false
}

export const defaultDesignButton = Template.bind({});
defaultDesignButton.args = {
  displayText: "Rpool",
  displayImage: "/rpool.svg"
}

export const customDesignButton = Template.bind({});
customDesignButton.args = {
  buttonBoxShadow:"rgba(0, 0, 0, 0.16) 0 0 5px 0",
  font:"15px",
  color:"#566D7E",
  displayText:"Rpool",
  displayImage:"/rpool.svg"
}
