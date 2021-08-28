import React from 'react';
import {Meta, Story} from "@storybook/react";
import {CardBanner} from "./cardBanner";

export default {
  title: 'Atoms/Card Banner',
  component: CardBanner,
} as Meta;

const Template: Story<any> = (args: any) => <CardBanner {...args} />;
export const defaultBanner = Template.bind({});
defaultBanner.args = {
    heading: "Download redBus app",
    subText: "Keep your tickets at your finger tip, never miss your bus and get exciting offers.",
    imageUrl: "/download_image.svg",
    appleIcon: "icon icon-star",
    androidIcon: "icon icon-star",
    browserLink: "#",
}
