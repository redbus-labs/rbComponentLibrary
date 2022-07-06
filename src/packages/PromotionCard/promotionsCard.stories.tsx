import React from 'react';
import {Meta, Story} from "@storybook/react";
import {IProps, PromotionsCard } from "./promotionsCard";

export default {
    title: 'Atoms/promotionsCard',
    component: PromotionsCard,
    argTypes: {
        clickAction: { action: 'click Action'}
    }
} as Meta;

/* tslint:disable max-line-length jsx-no-multiline-js*/
const promotionObj = {
    header: "Limited view Banners",
    score: 150,
    id: 15,
    data: [
      {
        contentUrl: "",
        imageUrl: "/banner.png",
        loginRequired: true,
        title: "",
      },
      {
        contentUrl: "",
        imageUrl: "/banner.png",
        loginRequired: false,
        title: "Flexi Ticket",
      },
      {
        contentUrl: "",
        imageUrl: "/banner.png",
        loginRequired: false,
        title: "",
      },
      {
        contentUrl: "",
        imageUrl: "/banner.png",
        loginRequired: false,
        title: "",
      },
      {
        contentUrl: "",
        imageUrl: "/banner.png",
        loginRequired: false,
        title: "",
      },
    ],
  };

const Template: Story<IProps> = (args) => <PromotionsCard {...args} />;

export const defaultWithProps = Template.bind({});
defaultWithProps.args = {
    promotionObj: promotionObj,
    header: "What’s new ",
    subHeader: "Bringing in all the new features and programs just for you!",
    dummyImageUrl: ""
};