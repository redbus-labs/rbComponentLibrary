import React from "react";
import styled from "styled-components";

export interface ISearchBlockProps {
    lbl: string;
    iconClass: string;
    placeholder: string;
    cityName: string;
    id: string;
    openSuggestWindowHandler: (id: string) => void;
    searchBoxId?: string;
  }

const StyledInpDiv = styled.div`
  display: inline-block;
  color: #747f8d;
  font-size: 0.9em;
  width: 100%;
`;

const StyledLabel = styled.label`
  display: inline-block;
  color: #747f8d;
  font-size: 0.85em;
`;

const StyledInpWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const StyledInp = styled.div`
  position: relative;
  width: 75%;
  color: #3e3e52;
  font-size: 1.05em;
  top: 0.5em;
  text-overflow: ellipsis;

  &:empty:not(:focus)::before {
    content: attr(data-placeholder);
    position: relative;
    top: 0.3em;
    opacity: 0.6;
    font-size: 0.9em;
  }
`;

/* tslint:disable max-line-length jsx-no-lambda */
const SearchInpBlock: React.FunctionComponent<ISearchBlockProps> = (props) => {
    return (
        <StyledInpDiv>
            <div>
            <StyledLabel>{props.lbl}</StyledLabel>
            </div>
            <StyledInpWrapper>
            <img src={props.iconClass} />
            <StyledInp  data-autoid={props.searchBoxId} data-placeholder={props.placeholder} onClick={() => props.openSuggestWindowHandler(props.id)}>{props.cityName}</StyledInp>
            </StyledInpWrapper>
        </StyledInpDiv>
    );
};

export default SearchInpBlock;
