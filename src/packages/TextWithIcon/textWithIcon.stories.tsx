import React from 'react';
import {Meta, Story} from "@storybook/react";
import TextWithIcon from "./textWithIcon";

export default {
  title: 'Atoms/TextWithIcon',
  component: TextWithIcon,
} as Meta;

const Template: Story<any> = (args: any) => <TextWithIcon {...args} />;

export const DefaultWithIcon = Template.bind({});
DefaultWithIcon.args = {
  displayIcon:"icon-user",
  displayText:"profile"
}
