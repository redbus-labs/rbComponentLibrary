import * as React from "react";
import {Meta, Story} from "@storybook/react";
import {VerticalLine} from "./VerticalLine";

export default {
  title: 'Atoms/Vertical Line',
  component: VerticalLine,
} as Meta;

const Template: Story<any> = (args: any) => <VerticalLine {...args} />;
export const defaultWithProps = Template.bind({});
defaultWithProps.args = {
    index:3,
    length:7,
    color:"#22329c"
}
