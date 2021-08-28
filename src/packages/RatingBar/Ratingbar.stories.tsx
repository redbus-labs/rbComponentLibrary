import * as React from "react";
import {Meta, Story} from "@storybook/react";
import {RatingBar} from "./Ratingbar";

export default {
  title: 'Atoms/Rating Bar',
  component: RatingBar,
} as Meta;

const Template: Story<any> = (args: any) => <RatingBar {...args} />;
export const defaultWithProps = Template.bind({});
defaultWithProps.args = {
    percentage:56,
    color:"red"
}