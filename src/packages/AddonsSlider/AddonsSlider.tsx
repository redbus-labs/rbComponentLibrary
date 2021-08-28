import * as React from "react";
import { IAddonsInterface } from "./subComponents/addons.interface";
import { IAddonsProps } from "./subComponents/addonsBlockcss";
import styled from "styled-components";
interface IAddonsSate {
 isItemContentVisible?: any;
 count?: number;
}
const OrientationOne = styled.div<IAddonsInterface>`
  display: flex;
  flex-direction: ${(props) => props.Orientation};
  margin-left: ${(props) => props.marginColumn};
`;
const BackgroundColour = styled.div<IAddonsInterface>`
  background: ${(props) => props.BackgroundAddon};
  margin-right: 1em;
  margin-bottom: 1em;
  border: 1px #eee solid;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  box-shadow: #b1b1b1 0.1px 1px 4px;
`;
const BackgroundColourAddon = styled.div<IAddonsInterface>`
  background: ${(props) => props.BackgroundColourAddons};
  font-size: 0.8em;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
`;

const AddonsDetails = styled.div<IAddonsInterface>`
  background: ${(props) => props.BackgroundColourAddons};
  font-size: 0.8em;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  padding: 1em;
  height: 70px;
`;

const AddonsPrice =  styled.div<IAddonsInterface>`
  display: flex;
  font-weight: bold;
  font-size: 1.25em;
  margin-top: 0.5em;
  padding: 0.1px 9px 9px;
`;

const AddonsLabel = styled.div<IAddonsInterface>`
  color: #d84e55;
  text-align: left;
  white-space: normal;
  margin-top: 0.5em;
  margin-left: 0.4em;
`;

const  AddonsOverlayDetails = styled.div<IAddonsInterface>`
  margin-top: 4em;
  display: flex;
  justify-content: space-between;
`;

export class Addons extends React.Component<IAddonsInterface, IAddonsSate> {
    public static defaultProps: IAddonsInterface;
    constructor(props: IAddonsInterface) {
        super(props);
        this.state = {
            isItemContentVisible: {},
            count: 0,
        };
    }
    public render() {
    const onViewClick = (uuid: any) => {
        this.setState({
            isItemContentVisible: {
              ...this.state.isItemContentVisible,
              [uuid]: true,
            },
          });
    };
    const onCrossClick = (uuid: any) => {
        this.setState({
            isItemContentVisible: {
              ...this.state.isItemContentVisible,
              [uuid]: false,
            },
          });
    };

    const defaultAddonCount = () => {
      return null;
    };
    const { DataAddons, currency, AddonsCount, Orientation, BackgroundAddon, marginColumn,
            icon, BackgroundColourAddons, AddonsToDisplay,  AddonsHeader1, AddonsHeader2, ViewDiscription
          , ViewInclusion, ViewExclusion, ViewHowToRedeem, ViewTnC, ViewCancelPolicy, OnCrossClick,
            OnViewClick} = this.props;
    const  size = AddonsToDisplay;
    const getAddonsImage = (url: string) => url
        ? <img   className="itemimage_url" src={`${url}`} /> : null;
    const addonsListNew =    DataAddons && DataAddons.Data && DataAddons.Data.filter((item: any) => {
                return item.showAsCard === false;
            });
    const viewAddons = addonsListNew && addonsListNew.slice(0, size).map((items: any, index: any) => {
              return <div  className="display_addons_block" key={items.uuid} >
                <BackgroundColour BackgroundAddon={BackgroundAddon}>
                {getAddonsImage(items.images[0].url)}
                <AddonsDetails>
                <span className="items_title">
                     {items.title}
                 </span>
                <div className="subtitle_view_details">
                 <span className="items_subtitle">
                    {items.subtitle}
                     </span>
                <span
                      className="view_details"
                      id="view_details"
                      onClick={OnViewClick ? OnViewClick : () =>
                      onViewClick(items.uuid)}
                >
                    View Details
                </span>
                    </div>
                </AddonsDetails>
                <hr/>
                <AddonsPrice>
                <span className="display_price">
                {currency}
                <span id={`addons_display_price-${index}`}>
                {items.displayPrice}</span>
                {items.unitType ? <span className="price_unitType">
                / {items.unitType}</span> : "" }
                </span>
                <span className="input_div" id="input_div">
                <input
                 type="button"
                 value="-"
                 id={`minus_addons-${index}`}
                 className="minus_addons"
                 onClick={AddonsCount ? (event) => AddonsCount(event, items.uuid, index) : defaultAddonCount}
                />
                <input
                 type="number"
                 className="count_plus"
                 max={items.maxUnit}
                 min={items.minUnit}
                 id={`count_plus-${index}`}
                 defaultValue="0"
                 disabled={true}
                />
                <input
                 type="button"
                 value="+"
                 id={`plus_addons-${index}`}
                 className="plus_addons"
                 onClick={AddonsCount ? (event) => AddonsCount(event, items.uuid, index) : defaultAddonCount}
                />
                </span>
                </AddonsPrice>
                <div className="min_unit">
                {items.minUnit > 1 ? `min qty purchase ${items.minUnit}`
                 : null  }</div>
           {this.state.isItemContentVisible[items.uuid] ?
         <div key={index} >
         <main className={`view_details_addons`} id={`view_detailss-${index}`}>
         <div className="overlay_details_title" id="overlay_details_title" >
         <span className="overlay_title"> {items.title}</span>
         {icon ? < div className={icon}  onClick={OnCrossClick ? OnCrossClick : () => onCrossClick(items.uuid)}/> :
         <img alt="cross" onClick={OnCrossClick ? OnCrossClick : () => onCrossClick(items.uuid)}/>}
         </div>
        <AddonsOverlayDetails>
        <span className="overlay_details_subtitle">{items.subtitle}</span>
        <div className="addons_price_display">
        <span>{currency}{items.displayPrice}</span> {items.unitType ? <span className="price_unitType">
          / {items.unitType}</span> : "" }
        </div></AddonsOverlayDetails>
        <AddonsLabel> {ViewDiscription ? ViewDiscription : "DESCRIPTION"} </AddonsLabel>
        <div className="addons_overlay_description">{items.description}
        </div>
        {items && items.inclusions && items.inclusions.length > 0 &&
        <AddonsLabel>{ViewInclusion ? ViewInclusion : "INCLUSIONS"}</AddonsLabel>}
        <div className="addons_views_details">
        {items && items.inclusions && items.inclusions.length > 0
          && items.inclusions.map((inclusions: any, indexin: any) =>
        (<li key={indexin}>{inclusions}</li>))}
        </div>
        {items && items.exclusions && items.exclusions.length > 0 &&
        <AddonsLabel>{ViewExclusion ? ViewExclusion : "EXCLUSIONS"}</AddonsLabel>}
        <div className="addons_views_details">{items && items.exclusions && items.exclusions.length > 0 &&
            items.exclusions.map((exclusions: any, indexex: any) => {
                    return (
                        <li key={indexex}>{exclusions}</li>);
                },
            )}
        </div>
        {items && items.howToRedeem && items.howToRedeem.length > 0 &&
        <AddonsLabel>{ViewHowToRedeem ? ViewHowToRedeem : "HOW TO REDEEM"}</AddonsLabel>}
        <div className="addons_views_details">{items && items.howToRedeem &&
         items.howToRedeem.map((howToRedeem: any, indexhtr: any) => {
                return (<li key={indexhtr}>{howToRedeem}</li>);
                },
            )}
         </div>
    {items && items.tnc && items.tnc.length > 0 &&
    <AddonsLabel>{ViewTnC ? ViewTnC : "TERMS & CONDITION"}</AddonsLabel>}
    <div className="addons_views_details">{items && items.tnc && items.tnc.length > 0 &&
      items.tnc.map((tnc: any, indextnc: any) => {
                    return (<li key={indextnc}>{tnc}</li>); },
            )}
    </div>
    {items && items.cancellationPolicyArray && items.cancellationPolicyArray.length > 0 &&
    <AddonsLabel>{ViewCancelPolicy ? ViewCancelPolicy : "CANCELLATION POLICY"}</AddonsLabel>}
    {items && items.cancellationPolicyArray && items.cancellationPolicyArray.length > 0 &&
    <div className="addons_cancellation_policy">
        <header className="addons_title">
            <span className="addons_time">Time of cancellation </span>
            <span className="addons_deduction">Deduction</span>
        </header>
        <div>{items.cancellationPolicyArray.map(
                (cancellationPolicyArray: any, indexcan: any) => {
                    return (<table className="addons_canceltable" key={indexcan}>
                            <tbody>
                                <tr><td className="addon_time">{cancellationPolicyArray.description}
                                    </td>
                                    <td className="addon_refund">{cancellationPolicyArray.chargesValue}
                                    </td>
                                </tr>
                            </tbody>
                        </table>); })}</div>
                </div>}</main></div> : null}
                </BackgroundColour></div>; });
    const  viewHeader = <header className="addons_header">
              <div className="addons_container">
                        <header className="addon-serice">
                            <div className="additional_services">
                            {AddonsHeader1 ? AddonsHeader1 : "Additional Services"}
                            </div>
                            <div className="addons_prices">
                            {AddonsHeader2 ? AddonsHeader2 : "Check out our new additional services at exciting prices"}
                            </div>
                        </header>
                        <BackgroundColourAddon BackgroundColourAddons={BackgroundColourAddons}>
                       < OrientationOne Orientation={Orientation} marginColumn={marginColumn}>
                       {viewAddons}
                       </OrientationOne>
                       </BackgroundColourAddon>
              </div>
        </header>;
    const view = addonsListNew && addonsListNew.length > 0 ?
        viewHeader : null;
    return (
        <IAddonsProps>
           {view}
            </IAddonsProps>
        );
    }
}

Addons.defaultProps = {
DataAddons: null,
currency: "₹",
itemsOrder: null,
Orientation: "row",
};
