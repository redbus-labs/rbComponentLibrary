export interface IAddonsInterface {
    DataAddons?: any;
    currency?: any;
    Orientation?: string;
    BackgroundAddon?: string;
    marginColumn?: string;
    icon?: string;
    BackgroundColourAddons?: string;
    AddonsToDisplay?: number;
    AddonsHeader1?: string;
    AddonsHeader2?: string;
    ViewDiscription?: string;
    ViewInclusion?: string;
    ViewExclusion?: string;
    ViewHowToRedeem?: string;
    ViewTnC?: string;
    ViewCancelPolicy?: string;
    AddonsCount?: (event: any, uuid: any, index: any) => void;
    OnViewClick?: (uuid: any) => void;
    OnCrossClick?: (uuid: any) => void;

}
