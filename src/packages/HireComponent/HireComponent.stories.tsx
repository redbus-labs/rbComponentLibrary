import { Meta, Story } from "@storybook/react";
import React from "react";
import { HireComponent } from "./HireComponent";
import { IProps } from "./HireComponent";

const hireData: any = [
  {
    SubHeader: "Hire buses, tempo travellers & cars at your convenience for group travel.",
    header: "Travelling in group?",
    onClick: "",
    slider: [
      {
        image: "/hire.jpeg",
        onClick: "",
        text: "6 Seater - Innova",
      },
      {
        image: "/hire.jpeg",
        onClick: "",
        text: "12 Seater Traveller ",
      },
      {
        image: "/hire.jpeg",
        onClick: "",
        text: "20 Seater Bus",
      },
    ],
  },
];

export default {
  title: "Atoms/HireComponent",
  component: HireComponent,
  argTypes: {
    changeActionHandler: { action: "Change action clicked" },
  }
} as Meta;

const Template: Story<IProps> = (args) => <HireComponent {...args} />;


export const defaultHireComponent = Template.bind({});

defaultHireComponent.args = {
  bgColor: "#ffffff",
  padding: "1em",
  hireInfo: hireData,
  knowMoreText: "Know More"
}


