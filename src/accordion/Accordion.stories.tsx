import React from "react";
import {Meta, Story} from "@storybook/react";
import {Accordion} from "./Accordion";


export default {
  title: 'Atoms/Accordion',
  component: Accordion,
} as Meta;

const Template: Story<any> = (args: any) => <Accordion {...args} />;

const Template2: Story<any> = (args: any) => <><Accordion {...args[0]} /><Accordion {...args[1]} /></>;

export const singleAccordion = Template.bind({});
singleAccordion.args = {
  title: "What is your return policy?",
  content: "Lorem ipsum dolor sit amet," + "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const complexAccordion = Template2.bind({});
complexAccordion.args = [
  {
    title: "What is your return policy?",
    content: "Lorem ipsum dolor sit amet," + "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    title: "What is your cancellation policy?",
    content: "Lorem ipsum dolor sit amet," + "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  }
];
