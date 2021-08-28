import React from 'react';
import {Meta, Story} from "@storybook/react";
import {CalendarWidgetV1} from "./CalendarWidgetV1";

export default {
    title: 'Molecules/Calendar Widget',
    component: CalendarWidgetV1,
} as Meta;

const Template: Story<any> = (args: any) => <CalendarWidgetV1 {...args} />;

export const calendarWidgetOneway = Template.bind({});
calendarWidgetOneway.args = {
  widgetMainLbl:"Journey Date",
  formattedDoj:"05 Dec 2019",
  todayLbl:"Today",
  tomorrowLbl:"Tomorrow"
};

export const calendarWidgetRoundtrip = Template.bind({});
calendarWidgetRoundtrip.args = {
  widgetMainLbl:"Journey Date",
  formattedDoj:"05 Dec 2019",
  todayLbl:"Today",
  tomorrowLbl:"Tomorrow",
  calendarIconFont:"icon icon-date",
  isRoundTrip:true,
  roundTripLbl:"Return Date(Optional)",
  formattedRTDoj:"10 Dec 2019",
  roundTripMsg:"Avail Discounts",
  removeRTDoj:true,
  addDojIconFont:"icon icon-plus",
  remDojIconFont:"icon icon-circle-cross-blk"
};