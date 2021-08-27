import React, {PureComponent} from "react";
import styled from "styled-components";
import SearchInpBlockv2 from "./components/SearchInpBlockv2";
import DateSelectorv2 from "./components/DateSelectorv2";
import FerryDateSelectorBlock from "./components/ferryComponents/FerryDateSelectorBlock";
import FerryPassengerCntBlock from "./components/ferryComponents/FerryPassengerCntBlock";

export interface ISearchWidgetProps {
  sourceId: string;
  destinationId: string;
  fromImgIcon: any;
  sourcePlaceholder: string;
  srcName: string;
  toImgIcon: any;
  destPlaceholder: string;
  destName: string;
  toggleImgUrl: string;
  searchBtnLbl: string;
  searchInpPlaceHolder: string;
  openSuggestWindowHandler: (id: string) => void;
  swapCitiesHandler: () => void;
  seachBtnClickHandler: () => void;
  dojLbl: string;
  formattedDoj: any;
  todayLbl?: string;
  tomorrowLbl?: string;
  calendarIconFont?: any;
  isRoundTrip?: boolean;
  roundTripLbl?: string;
  formattedRTDoj?: any;
  roundTripMsg?: string;
  removeRTDoj?: boolean;
  onwardDojClickHandler: (id: string) => void;
  todayTomClickHandler?: (label: string) => void;
  returnDojClickHandler?: (id: string) => void;
  removeRTDojClickHandler?: () => void;
  isFerryHome?: boolean;
  ferryObj?: IFerryObj;
  dropOneway?: boolean;
  dropRoundTrip?: boolean;
}

interface IFerryObj {
  roundTripSel: string;
  oneWaySel: string;
  passengersLbl: string;
  adultLbl: string;
  adultSubLbl: string;
  adultCnt: number;
  childLbl: string;
  childSubLbl: string;
  childCnt: number;
  addLbl: string;
  userIconFont: any;
  showPaxValidationErr: boolean;
  paxValidationLbl: string;
  roundTripSelectionHandler: () => void;
  adultCntClickHandler: (label: string, cnt: number) => void;
  childCntClickHandler: (label: string, cnt: number) => void;
}

const StyledWidgetContainer = styled.div`
  padding: 1rem;
  background: #b3272f;
  background-image: linear-gradient(#b3272f, #d84e55);
`;

const StyledWidget = styled.div`
  padding: 0.2rem;
  margin: 0.2rem;
  background: #fff;
  color: #3e3e52;
  border-radius: 4px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.19);
`;

const StyledToggleBlk = styled.div`
  position: relative;
`;

const StyledHr = styled.hr`
  border-top: 1px solid #e3e3e3;
  border-bottom: none;
  border-left: none;
  border-right: none;
  margin: 0 !important;
`;

const StyledToggleBtn = styled.button`
  position: absolute;
  right: 0.5rem;
  top: 0;
  bottom: 0.2rem;
  margin: auto;
  font-size: 1em;
  min-height: 3.5rem;
  z-index: 10;
  background: transparent;
  border: none;
  padding: 0;
  outline: none;

  img {
    width: 3.5rem;
    height: 3.5rem;
  }
`;

const StyledSearchBtn = styled.button`
  background: #d84e55;
  color: #fff;
  letter-spacing: 2px;
  font-weight: bold;
  text-transform: uppercase;
  outline: none;
  padding: 0.8rem;
  margin: 0.5rem;
  border: none;
  border-radius: 3px;
  width: 95%;
  position: relative;
  margin-top: 1rem;
`;

/* tslint:disable max-line-length jsx-no-multiline-js jsx-no-lambda */
export class SearchWidgetV2 extends PureComponent<ISearchWidgetProps, {isScrolledDown: boolean}> {
  public static defaultProps = {
    sourcePlaceholder: "Enter Source",
    srcName: "",
    destPlaceholder: "Enter Destination",
    destName: "",
    sourceId: "sourceCity",
    destinationId: "destinationCity",
    searchBtnLbl: "Search",
    searchInpPlaceHolder: "Source, Destination, Date",
    dojLbl: "Select Date",
    todayLbl: "Today",
    tomorrowLbl: "Tomorrow",
    isRoundTrip: false,
    roundTripLbl: "Return Date(Optional)",
    roundTripMsg: "Avail discounts",
    removeRTDoj: false,
    isFerryHome: false,
  };

  constructor(props: ISearchWidgetProps) {
    super(props);
    this.state = {
      isScrolledDown: false,
    };
  }

  public scrollDetect = () => {
    const  widgetContainer: any = document.getElementById("widget-container");
    const scrollHeight = window.scrollY * 2;
    if (scrollHeight === 0) {
        this.setState({
          isScrolledDown: false,
        });
    } else if (scrollHeight > 0 && scrollHeight <= widgetContainer.getBoundingClientRect().height) {
        this.setState({
          isScrolledDown: false,
        });
    } else if (scrollHeight > 0 && scrollHeight > widgetContainer.getBoundingClientRect().height) {
      this.setState({
        isScrolledDown: true,
      });
    }
  }

  public componentDidMount() {
    // window.addEventListener("scroll", this.scrollDetect, true);
  }

  public componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollDetect, true);
  }

  public render() {
    const props = this.props;
    return (
      <StyledWidgetContainer>
        <StyledWidget id="widget-container">
          { !this.state.isScrolledDown ? <React.Fragment>
            <SearchInpBlockv2 imgIcon={props.fromImgIcon} placeholder={props.sourcePlaceholder} cityName={props.srcName} openSuggestWindowHandler={props.openSuggestWindowHandler} id={props.sourceId} />
            <StyledHr />
            <StyledToggleBlk>
              <StyledToggleBtn onClick={props.swapCitiesHandler} aria-label={"swap image"}>
                <img src={props.toggleImgUrl} alt={props.toggleImgUrl}/>
              </StyledToggleBtn>
            </StyledToggleBlk>
            <SearchInpBlockv2 imgIcon={props.toImgIcon} placeholder={props.destPlaceholder} cityName={props.destName} openSuggestWindowHandler={props.openSuggestWindowHandler} id={props.destinationId} />
            <StyledHr />
            {props.isFerryHome && props.ferryObj ? <React.Fragment>
              <FerryDateSelectorBlock
                dojLbl={props.dojLbl}
                formattedDoj={props.formattedDoj}
                calendarIconFont={props.calendarIconFont}
                isRoundTrip={props.isRoundTrip}
                roundTripLbl={props.roundTripLbl}
                formattedRTDoj={props.formattedRTDoj}
                roundTripMsg={props.roundTripMsg}
                onwardDojClickHandler={props.onwardDojClickHandler}
                returnDojClickHandler={props.returnDojClickHandler}
                dropOneway={props.dropOneway}
                dropRoundTrip={props.dropRoundTrip}
                {...props.ferryObj}
              />
              <StyledHr />
              <FerryPassengerCntBlock {...props.ferryObj} />
            </React.Fragment> : <React.Fragment>
              <DateSelectorv2 {...props} />
              <StyledHr />
            </React.Fragment>}
            <StyledSearchBtn onClick={props.seachBtnClickHandler}>{props.searchBtnLbl}</StyledSearchBtn>
          </React.Fragment> :
          <React.Fragment>
              <SearchInpBlockv2
                imgIcon={props.fromImgIcon}
                placeholder={props.searchInpPlaceHolder}
                cityName={props.srcName && props.destName && props.formattedDoj ? props.srcName + ", " + props.destName + ", " + props.formattedDoj : ""}
                openSuggestWindowHandler={() => {}}
                id={props.sourceId}
                isCollapsedView={true}
                seachBtnClickHandler={props.seachBtnClickHandler}
              />
          </React.Fragment> }
        </StyledWidget>
      </StyledWidgetContainer>
    );
  }
}
