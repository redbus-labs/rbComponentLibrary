import React from 'react';
import {Meta, Story} from "@storybook/react";
import {RadioOption} from "./radioOption";

export default {
  title: 'Atoms/RadioOption',
  component: RadioOption,
} as Meta;

const Template: Story<any> = (args: any) => <RadioOption {...args} />;

export const singleOption = Template.bind({});
singleOption.args = {
  optionBackground:"option option_selected",
  radioimage:"/radio_btn_filled.svg",
  title:"Donate to redBus Cares",
  description:"Help support families of Bus drivers and helpers",
  itemId:2,
  selectedId:2
};

const Template2: Story<any> = (args: any) => <>
  <RadioOption {...args[0]} />
  <RadioOption {...args[1]} />
  <RadioOption {...args[2]} />
</>;

export const multiOption = Template2.bind({});
multiOption.args = [{
    optionBackground:"option option_selected",
    radioimage:"/radio_btn_filled.svg",
    title:"Donate to redBus Cares",
    description:"Help support families of Bus drivers and helpers",
    itemId:1
  },
  { 
    optionBackground:"option",
    radioimage:"/radio_btn_empty.svg",
    title:"Donate to redBus Cares",
    description:"Help support families of Bus drivers and helpers",
    itemId:2
  },
  { 
    optionBackground:"option",
    radioimage:"/radio_btn_empty.svg",
    title:"Donate to redBus Cares",
    description:"Help support families of Bus drivers and helpers",
    itemId:3
  }
];