import React, {FunctionComponent} from "react";
import styled from "styled-components";
import SearchInpBlock from "./components/SearchInpBlock";

export interface ISearchWidgetProps {
  sourceId: string;
  destinationId: string;
  fromLbl: string;
  fromIconClass: string;
  sourcePlaceholder: string;
  srcName: string;
  toLbl: string;
  toIconClass: string;
  destPlaceholder: string;
  destName: string;
  toggleIconClass: string;
  openSuggestWindowHandler: (id: string) => void;
  swapCitiesHandler: () => void;
  autoSrcsearchId?: string;
  autoDestSearchId?: string;
  toggleDataAutoId?: string;
}

const StyledWidget = styled.div`
  margin: 1em;
  margin-top: 1.2em;
  padding: 0.7em 1em;
  background: #fff;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.16);
  border-radius: 2px;
`;

const StyledToggleBlk = styled.div`
  position: relative;
  height: 1px;
  margin: 0.6em 0;
`;

const StyledHr = styled.hr`
  margin: 5px 0;
  background: #cacaca;
`;

const StyledToggleBtn = styled.button`
  position: absolute;
  right: 1.1em;
  top: 0;
  bottom: 0;
  margin: auto;
  font-size: 1em;
  min-height: 3em;
  z-index: 10;
  border: none;
  padding: 0;
  outline: none;
  background: white;
`;

const ToggleIconImg = styled.img`
  height: 20px;
  width: 20px;
  font-size: 22px;
  margin: 5px;
`;

/* tslint:disable max-line-length */
export const SearchWidgetV1: FunctionComponent<ISearchWidgetProps> = (props) => {
  return (
    <StyledWidget>
      <SearchInpBlock searchBoxId={props.autoSrcsearchId} lbl={props.fromLbl} iconClass={props.fromIconClass} placeholder={props.sourcePlaceholder} cityName={props.srcName} openSuggestWindowHandler={props.openSuggestWindowHandler} id={props.sourceId} />
      <StyledToggleBlk>
        <StyledHr />
        <StyledToggleBtn
          onClick={props.swapCitiesHandler}
          aria-label={"swap image"}
          data-autoid={props.toggleDataAutoId}
        >
          <ToggleIconImg src={props.toggleIconClass} />
        </StyledToggleBtn>
      </StyledToggleBlk>
      <SearchInpBlock searchBoxId={props.autoDestSearchId} lbl={props.toLbl} iconClass={props.toIconClass} placeholder={props.destPlaceholder} cityName={props.destName} openSuggestWindowHandler={props.openSuggestWindowHandler} id={props.destinationId} />
    </StyledWidget>
  );
};

SearchWidgetV1.defaultProps = {
  fromLbl: "From",
  sourcePlaceholder: "Enter Source",
  srcName: "",
  toLbl: "To",
  destPlaceholder: "Enter Destination",
  destName: "",
  sourceId: "sourceCity",
  destinationId: "destinationCity",
};
