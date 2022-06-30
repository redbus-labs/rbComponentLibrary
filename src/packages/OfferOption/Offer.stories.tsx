import React from 'react';
import { Meta, Story } from "@storybook/react";
import { Offer, IOfferProps } from "./Offer";

export default {
  title: 'Atoms/Offer',
  component: Offer,
} as Meta;

const Template: Story<IOfferProps> = (args) => <Offer {...args} />;

const offerResponse = {
  status: "200",
  codetype: "DISCOUNT_CASHBACK_OFFER",
  data: {
    Value: 100,
    Message: "You have availed a discount of Rs 100. And Rs 50 will be credited in your Wallet.",
    Description: "VALID",
    Response: "SUCCESS",
    OType: "5",
  },
  cashBackData: [
    {
      Value: 50,
      Message: "You have availed a discount of Rs 100. And Rs 50 will be credited in your Wallet.",
      Description: "VALID",
      Response: "SUCCESS",
      OType: "2",
    },
  ],
  IsCashBackOffer: true,
};

export const Default = Template.bind({});
Default.args = {
  offerResponse,
  showOnlyInput: false
};

export const InputOpened = Template.bind({});
InputOpened.args = {
  offerResponse,
  showOnlyInput: true
};
