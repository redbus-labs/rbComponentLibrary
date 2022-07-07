import React from 'react';
import { Meta, Story } from "@storybook/react";
import ImageBannerWithContent, { IImageBannerWithContent } from "./ImageBanner";

export default {
  title: 'Atoms/ImageBanner',
  component: ImageBannerWithContent,
} as Meta;

const Template: Story<IImageBannerWithContent> = (args) => <ImageBannerWithContent {...args} />;

const imageBannerContent = {
  headerText: "Heading comes here",
  headingColor: "#000",
  msg: "Content msg here",
  msgColor: "#000",
  imgUrl: "/staff_masks.png",
};

export const Default = Template.bind({});
Default.args = {
  ...imageBannerContent,
  background: "#ffffff",
  padding: "1rem 0.5rem",
  border: "1px solid #dddddd",
  alignItem: "center"
};