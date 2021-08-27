// Setting object Interface
export interface ISideMenu {
    setting: ISideMenuConfig;
    style?: ISideMenuStyle;
}

export interface ISideMenuConfig {
   list: IList[];
   overlayDisplay?: boolean;
   onOverlayClick?: () => void;
}

export interface ISideMenuStyle {
   maxWidth?: string;
   fSize?: string;
   fontColor?: string;
   fWeight?: string;
   iconSize?: string;
   iconColor?: string;
   iconWeight?: string;
   marginFromIcon?: string;
   backgroundColor?: string;
   overlayColor?: string;
   boxShadow?: string;
   textTransform?: string;
   padding?: string;
   liTagPadding?: string;
}

export interface IList {
   iconClass: string;
   displayText: string;
   link?: string;
   dataAutoId?: string;
   newTab?: boolean;
   onClickHandler?: () => void;
   onClickEnabled?: boolean;
   optionalMsg?: string;
}

// Element Styled Components
export interface IMenuWrapper {
   padding?: string;
}

export interface IMenuListWrapper {
   padding?: string;
   backgroundColor?: string;
   maxWidth?: string;
   boxShadow?: string;
}

export interface IListItem {
   fontSize?: string;
   fontColor?: string;
   iconSize?: string;
   iconColor?: string;
}

export interface ILink {
   fontColor?: string;
}
export interface IOptionalMsg {
   style?: IOptionalStyle;
}

export interface IOptionalStyle {
   textTransform?: string;
   fontSize?: string;
}

export interface IOverlay {
   overlayColor?: string;
}
