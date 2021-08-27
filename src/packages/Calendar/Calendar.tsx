import React, { Fragment, FunctionComponent } from "react";
import { createGlobalStyle } from "styled-components";

import DatePicker from "./components/DatePicker";
import { ICalendarProps } from "./utils/interfaces";

// To load fonts globally.
const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,700');

    font-family: 'Montserrat', sans-serif;
  }
`;

export const Calendar: FunctionComponent<ICalendarProps> = ({
  hideInput = false,
  closeOnSelect = true,
  defaultOpen = false,
  width = 300,
  icons = {},
  maxAllowedDays,
  allowPreviousDates = false,
  disable = false,
  selectedDate,
  startDate = new Date(),
  customLocal = {},
  onOutsideClick,
  onDateClicked,
  closeOnOutsideClick = true,
}) => {
  const iconProp = {...{showCalendarIcon: true }, ...icons};
  return (
    <Fragment>
      <GlobalStyles />
      <DatePicker
        selectedDate={selectedDate}
        startDate={startDate}
        onOutsideClick={onOutsideClick}
        defaultOpen={defaultOpen}
        width={width}
        maxAllowedDays={maxAllowedDays}
        onDateClicked={onDateClicked}
        closeOnSelect={closeOnSelect}
        icons={iconProp}
        allowPreviousDates={allowPreviousDates}
        disable={disable}
        hideInput={hideInput}
        customLocal={customLocal}
        closeOnOutsideClick={closeOnOutsideClick}
      />
  </Fragment>
  );
};
