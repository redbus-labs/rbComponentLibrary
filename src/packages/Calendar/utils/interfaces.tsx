export interface ICalendarProps {
  onOutsideClick?: () => void;
  onDateClicked?: (arg: Date) => void;
  selectedDate?: Date;
  startDate?: Date;
  defaultOpen?: boolean;
  width?: number;
  maxAllowedDays?: number;
  closeOnSelect?: boolean;
  icons?: ICalendarIcons;
  allowPreviousDates?: boolean;
  disable?: boolean;
  hideInput?: boolean;
  customLocal?: ICustomLocal;
  closeOnOutsideClick?: boolean;
}

export interface ICustomLocal {
  monthName?: string[];
  weekName?: string[];
  holidaysList?: Date[];
}

export interface ICalendarIcons {
  showCalendarIcon: boolean;
  calendar?: string;
  left?: string;
  right?: string;
  calendarClass?: string;
  leftIconClass?: string;
  rightIconClass?: string;
}

export interface IDayTilesWrapperProps {
  onDateClicked?: (date: Date) => void;
  calendarDate: Date;
  startDate: Date;
  maxAllowedDays?: number;
  allowPreviousDates?: boolean;
  setSelectedDate: (arg: Date) => void;
  selectedDate: Date;
  maxAllowedDate?: Date | undefined;
  holidayList?: number[];
  customLocal?: ICustomLocal;
}

export interface IDayTilesProps {
  blankDay?: boolean;
  value?: number;
  isDateBlocked?: boolean;
  isHoliday?: boolean;
  isToday?: boolean;
  dayClicked?: (num: number) => void;
  isSelected?: boolean;
}

export interface IDayTilesState {
  isToday: boolean;
}

export interface ISpanColorProps {
  isDateBlocked: boolean;
  isHoliday: boolean;
  isToday: boolean;
  isSelected: boolean;
}

export interface IDayNavigatorProps {
  setCalendarDate: (arg: Date) => void;
  calendarDate: Date;
  startDate: Date;
  icons: ICalendarIcons;
  allowPreviousDates?: boolean;
  maxAllowedDate?: Date | undefined;
  maxAllowedDays?: number;
  customLocal?: ICustomLocal;
}

export interface IDayNavigatorState {
  previousNavigationAllowed: boolean;
  nextNavigationAllowed: boolean;
}
export interface IDayNameTileProps {
  customLocal?: ICustomLocal;
}

export interface IDatePickerProps {
  onOutsideClick?: () => void;
  onDateClicked?: (date: Date) => void;
  selectedDate?: Date;
  defaultOpen: boolean;
  width: number;
  startDate?: Date;
  maxAllowedDays?: number;
  closeOnSelect: boolean;
  icons: ICalendarIcons;
  allowPreviousDates: boolean;
  disable: boolean;
  hideInput: boolean;
  customLocal?: ICustomLocal;
  closeOnOutsideClick?: boolean;
}
export interface IDatePickerState {
  isOpen: boolean;
  calendarDate: Date;
  selectedDate: Date;
}
