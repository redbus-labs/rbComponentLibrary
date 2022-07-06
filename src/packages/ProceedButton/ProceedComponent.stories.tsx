import React from 'react';
import {Meta, Story} from "@storybook/react";
import { ProceedButtonComponent, IProceedComponentProps } from "./ProceedComponent";

export default {
    title: 'Atoms/Proceed Button',
    component: ProceedButtonComponent,
    argTypes: {
      doneClick: {action: "On Click"}
    }
} as Meta;

const locale ={
  conv_amount:"",
  conv_fee:"",
  conv_added:"",
  conv_proceed:"",
  conv_done:""
}

const Template: Story<IProceedComponentProps> = (args) => <ProceedButtonComponent {...args} />;

export const Default = Template.bind({})
Default.args = {
  locale:locale,
  finalAmt:"",
  minimiseicon:"",
  expandicon:"",
  conv_fee:"",
  details:"",
  custinfo:true,
  showMask:false,
  seatImageDiv:<div></div>,
  id:1
};

