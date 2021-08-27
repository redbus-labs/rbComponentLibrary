import React from "react";
import styled from "styled-components";

export interface ISearchBlockv2Props {
    imgIcon: string;
    placeholder: string;
    cityName: string;
    id: string;
    isCollapsedView?: boolean;
    openSuggestWindowHandler: (id: string) => void;
    seachBtnClickHandler?: () => void;
  }

const StyledInpDiv = styled.div`
  display: inline-block;
  color: #747f8d;
  font-size: 0.9em;
  width: 100%;
  margin: 0.3rem;
  line-height: 2.5rem;
`;

const StyledInpWrapper = styled.div<ISearchBlockv2Props>`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  ${ ({isCollapsedView}) => isCollapsedView ? `margin: -0.2rem 0;` : `` }
`;

const StyledDivContent = styled.div`
  display: flex;
  align-items: center;
  width: 85%;
`;

const StyledInp = styled.div`
  position: relative;
  width: 95%;
  color: #3e3e52;
  font-size: 0.8rem;
  left: 0.5rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  &:empty:not(:focus)::before {
    content: attr(data-placeholder);
    position: relative;
    top: 0.3em;
    opacity: 0.6;
    font-size: 0.8rem !important;
    text-transform: uppercase;
    color: #7e7e8c;
  }
`;

const StyledIconWrapper = styled.div`
  color: #fff;
  background: #d84e55;
  padding: 0.5rem;
  border-radius: 50%;
  position: relative;
  width: 2.3rem;
  height: 2.3rem;
  right: 0.5rem;
`;

const StyledSearchIcon = styled.span`
  position: absolute;
  top: 11px;
  left: 11px;
`;

/* tslint:disable max-line-length jsx-no-multiline-js jsx-no-lambda */
const SearchInpBlockv2: React.FunctionComponent<ISearchBlockv2Props> = (props) => {
    return (
        <StyledInpDiv>
            <StyledInpWrapper {...props}>
            <StyledDivContent>
              <img src={props.imgIcon} />
              <StyledInp data-placeholder={props.placeholder} onClick={() => {if (!props.isCollapsedView) { props.openSuggestWindowHandler(props.id); }}}>{props.cityName}</StyledInp>
            </StyledDivContent>
            {props.isCollapsedView && <StyledIconWrapper onClick={props.seachBtnClickHandler}>
              <StyledSearchIcon className="icon icon-payment_search" />
            </StyledIconWrapper>}
            </StyledInpWrapper>
        </StyledInpDiv>
    );
};

export default SearchInpBlockv2;
