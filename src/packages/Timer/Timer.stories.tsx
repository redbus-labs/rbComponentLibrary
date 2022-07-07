import React from 'react';
import { Meta, Story } from "@storybook/react";
import { Timer, ITimerProps } from "./Timer";

export default {
  title: 'Atoms/Timer',
  component: Timer,
  argTypes: {
    clickAction: { action: "click Action" }
  }
} as Meta;

const Template: Story<ITimerProps> = (args) => <Timer {...args} />;

export const withProps = Template.bind({});
withProps.args = {
  isTimerImage: true,
  timerIconOrUrl: "https://cdn-icons-png.flaticon.com/24/2/2086.png",
  timeLeft: 70,
  timeLabel: {
    hrs: "",
    mins: "",
    secs: "",
  },
  iconColor: "green",
  timerColor: "blue",
  fontWeight: 700,
  fontSize: "16px",
};