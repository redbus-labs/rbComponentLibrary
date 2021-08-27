import React from 'react';
import {Meta, Story} from "@storybook/react";
import {Calendar} from "./Calendar";
import { ICustomLocal, ICalendarIcons } from "./utils/interfaces";
import { weekName } from "./utils/date.helper";

export default {
    title: 'Molecules/Calendar',
    component: Calendar,
} as Meta;

const monthName = [
  "JANUARY",
  "FEBRUARY",
  "MARCH",
  "APRIL",
  "MAY",
  "JUNE",
  "JULY",
  "AUGUST",
  "SEPTEMBER",
  "OCTOBER",
  "NOVEMBER",
  "DECEMBER",
];

const holidayDateArray: Date[] = [
  new Date(),
  new Date("2021-8-31"),
  new Date("2019-8-2"),
  new Date("2019-7-6"),
  new Date("2019-7-2"),
  new Date("2019-7-3"),
];

const icons: ICalendarIcons = {
  showCalendarIcon: true, // showCalendarIcon is mandatory prop, if using this obj.
  calendar: "https://cdn0.iconfinder.com/data/icons/elega-date-time/100/Calendar_Check-512.png",
  left: "",
  right: "",
  calendarClass: "",
  leftIconClass: "",
  rightIconClass: "",
};

const langObj: ICustomLocal = {
  monthName,
  weekName,
  holidaysList: holidayDateArray,
};

const Template: Story<any> = (args: any) => <Calendar {...args} />;

export const defaultCalendar = Template.bind({});
defaultCalendar.args = {
};

export const customWidth = Template.bind({});
customWidth.args = {
  width: 500
};

export const hiddenInput = Template.bind({});
hiddenInput.args = {
  hideInput:true,
  defaultOpen:true,
  closeOnSelect:false,
  closeOnOutsideClick:false
}

export const defaultOpen = Template.bind({});
defaultOpen.args = {
  defaultOpen:true
}

export const selectedDate = Template.bind({});
selectedDate.args = {
  allowPreviousDates:false,
  selectedDate: new Date("2019-8-24")
}

export const startDate = Template.bind({});
startDate.args = {
  allowPreviousDates:false,
  startDate: new Date("2019-7-20")
}

export const disabled = Template.bind({});
disabled.args = {
  disable: true
}

export const maxAllowedDays = Template.bind({});
maxAllowedDays.args = {
  startDate:new Date(),
  maxAllowedDays:0,
  allowPreviousDates: true
}

export const closeOnSelect = Template.bind({});
closeOnSelect.args = {
  closeOnSelect: false
}
 
export const allowPreviousDates = Template.bind({});
closeOnSelect.args = {
  allowPreviousDates: false,
  startDate: new Date("2020-4-21")
}

export const languageAndHoliday = Template.bind({});
languageAndHoliday.args = {
  customLocal: langObj
}

export const customIcon = Template.bind({});
customIcon.args = {
  icons: icons
}