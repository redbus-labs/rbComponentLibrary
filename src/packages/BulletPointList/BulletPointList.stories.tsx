import React from 'react';
import { Meta, Story } from "@storybook/react";
import { BulletPointList, IBulletPointList } from "./BulletPointList";

export default {
    title: 'Atoms/Bullet Point List',
    component: BulletPointList,
} as Meta;

const Template: Story<IBulletPointList> = (args) => <BulletPointList {...args} />;
export const defaultClaimPointList = Template.bind({});
const contentArr = {
    dataPoint: [
        "Point 1",
        "Point 2",
        "Point 3",
        "Point 4",
    ],
};
defaultClaimPointList.args = {
    heading: "Bullet list",
    pointList: contentArr,
}