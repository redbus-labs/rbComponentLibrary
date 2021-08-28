import React from 'react';
import {Meta, Story} from "@storybook/react";
import { SearchWidgetV1 } from "./SearchWidgetV1";
import { SearchWidgetV2 } from "./SearchWidgetV2";

export default {
  title: 'Molecules/Search Widget',
  component: SearchWidgetV1,
} as Meta;

const Template: Story<any> = (args: any) => <SearchWidgetV1 {...args} />;

export const searchWidgetVersion1 = Template.bind({});
searchWidgetVersion1.args = {
  fromLbl:"From",
  fromIconClass:"/bp_home.svg",
  sourcePlaceholder:"Enter Source",
  srcName:"",
  toLbl:"To",
  toIconClass:"/dp_home.svg",
  destPlaceholder:"Enter Destination",
  destName:"",
  toggleIconClass:"/toggle_sd.svg",
  sourceId:"sourceCity",
  destinationId:"destinationCity",
};

const Template2: Story<any> = (args: any) => <SearchWidgetV2 {...args} />;

export const searchWidgetVersion2 = Template2.bind({});
searchWidgetVersion2.args = {
  fromImgIcon:"/home_src.svg",
  sourcePlaceholder:"Enter Source",
  srcName:"",
  toImgIcon:"/home_src.svg",
  destPlaceholder:"Enter Destination",
  destName:"",
  toggleImgUrl:"/toggle_btn.png",
  sourceId:"sourceCity",
  destinationId:"destinationCity",
  searchBtnLbl:"Search",
  searchInpPlaceHolder:"Source, Destination, Date",
  dojLbl:"Journey Date",
  formattedDoj:"05 Dec 2019",
  todayLbl:"Today",
  tomorrowLbl:"Tomorrow",
  calendarIconFont:"icon icon-date",
  isRoundTrip:true,
  roundTripLbl:"Return Date(Optional)",
  formattedRTDoj:"10 Dec 2019",
  roundTripMsg:"Avail Discounts",
  removeRTDoj:true
};

const Template3: Story<any> = (args: any) => <SearchWidgetV2 {...args} />;

export const searchWidgetVersion3 = Template3.bind({});
searchWidgetVersion3.args = {
  fromImgIcon:"/home_src.svg",
  sourcePlaceholder:"Enter Source",
  srcName:"",
  toImgIcon:"/home_src.svg",
  destPlaceholder:"Enter Destination",
  destName:"",
  toggleImgUrl:"/toggle_btn.png",
  sourceId:"sourceCity",
  destinationId:"destinationCity",
  searchBtnLbl:"Search",
  searchInpPlaceHolder:"Source, Destination, Date",
  dojLbl:"Onward",
  formattedDoj:"05/05/2020",
  roundTripMsg:"Amazing discounts when you book round trips!",
  calendarIconFont:"icon icon-date",
  isRoundTrip:true,
  roundTripLbl:"Return",
  formattedRTDoj:"05/05/2020",
  isFerryHome:true,
  ferryObj:{
    roundTripSel: "Round Trip",
    oneWaySel: "One-Way",
    passengersLbl: "Passengers",
    adultLbl: "Adult",
    adultSubLbl: "13 yrs & above",
    adultCnt: 1,
    childLbl: "Child",
    childSubLbl: "2 - 12 yrs of age",
    childCnt: 0,
    addLbl: "add",
    userIconFont: "/booking_user.svg",
    showPaxValidationErr: false,
    paxValidationLbl: "Pax validation err"
  },
  dropOneway:true,
  dropRoundTrip:true
};
