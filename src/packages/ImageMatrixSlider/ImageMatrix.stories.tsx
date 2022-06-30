import React from 'react';
import { Meta, Story } from "@storybook/react";
import { ImageMatrix, IImageMatrix } from "./ImageMatrix";

export default {
  title: 'Molecules/Image Matrix Slider',
  component: ImageMatrix,
} as Meta;

const Template: Story<IImageMatrix> = (args) => <ImageMatrix {...args} />;

export const defaultAddons = Template.bind({});
defaultAddons.args = {
  titleText: "Some title text",
  ImagesArray: [
    [
      {
        imgUrl: "/staff_masks.png",
        imgName: "image"
      },
      {
        imgUrl: "/staff_masks.png",
        imgName: "image"
      },
      {
        imgUrl: "/staff_masks.png",
        imgName: "image"
      },
      {
        imgUrl: "/staff_masks.png",
        imgName: "image"
      },
      {
        imgUrl: "/staff_masks.png",
        imgName: "image"
      },

    ],
    [
      {
        imgUrl: "/staff_masks.png",
        imgName: "image"
      },
      {
        imgUrl: "/staff_masks.png",
        imgName: "image"
      },
      {
        imgUrl: "/staff_masks.png",
        imgName: "image"
      },
      {
        imgUrl: "/staff_masks.png",
        imgName: "image"
      },
      {
        imgUrl: "/staff_masks.png",
        imgName: "image"
      }
    ]]
};
