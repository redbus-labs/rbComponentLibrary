import React from 'react';
import {Meta, Story} from "@storybook/react";
import {BottomFixedBanner} from "./BottomModal";

export default {
  title: 'Atoms/BottomModal',
  component: BottomFixedBanner,
} as Meta;

const Template: Story<any> = (args: any) => <BottomFixedBanner {...args} />;
export const defaultModal = Template.bind({});
defaultModal.args = {
  modalHeading: "Heading",
  body: "this is the body"
}

export const customModal = Template.bind({});
customModal.args = {
  modalHeading: "Heading",
  body: "this is the body",
  height: "10em",
  showCross: true,
  bgColor: "#f8f4f4",
  headcolor: "#d84e55",
  isHeadbold: true,
  modalBar: true
}
