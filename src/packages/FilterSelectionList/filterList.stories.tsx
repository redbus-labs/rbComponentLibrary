import React from 'react';
import {Meta, Story} from "@storybook/react";
import { FilterList } from "./filterList";

export default {
    title: 'Molecules/Filter Selection List',
    component: FilterList,
} as Meta;

const popularData = [
  {
    text: "Others", 
    value: [201,202], 
    keyOnPayload: "bpList", 
    active: false
  }, {
    text: "Karol Bagh", 
    value: [171,172], 
    keyOnPayload: "bpList", 
    active: false
  }, {
    text: "Connaught Place", 
    value: [1919, 1929], 
    keyOnPayload: "bpList", 
    active: false
  }
];
const othersData = [
  {
    text: "WIFI", 
    value: "1", 
    keyOnPayload: "amtList", 
    image: "/Amenities/1.svg", 
    active: false
  }, {
    text: "Water Bottle", 
    value: "4", 
    keyOnPayload: "amtList", 
    image: "/Amenities/4.svg", 
    active: false
  }, {
    text: "Blankets", 
    value: "5", 
    keyOnPayload: "amtList", 
    image: "/Amenities/5.svg", 
    active: false
  }, {
    text: "Charging Point", 
    value: "7", 
    keyOnPayload: "amtList", 
    image: "/Amenities/7.svg", 
    active: false
  }, {
    text: "Movie", 
    value: "8", 
    keyOnPayload: "amtList", 
    image: "/Amenities/8.svg", 
    active: false
  }, {
    text: "Track My Bus", 
    value: "19", keyOnPayload: 
    "amtList", image: "/Amenities/19.svg", 
    active: false
  }, {
    text: "Emergency Contact Number", 
    value: "27", 
    keyOnPayload: "amtList", 
    image: "/Amenities/27.svg", 
    active: false
  }, {
    text: "Toilet", 
    value: "35", keyOnPayload: "amtList", 
    image: "/Amenities/35.svg", 
    active: false
  }
];

const Template: Story<any> = (args: any) => <FilterList {...args} />;

export const withPopularFilters = Template.bind({});
withPopularFilters.args = {
  popularData,
  othersData
};

export const withoutPopularFilters = Template.bind({});
withoutPopularFilters.args = {
  popularData: [],
  othersData
};
