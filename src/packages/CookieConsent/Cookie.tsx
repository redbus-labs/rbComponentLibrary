import styled from "styled-components";
import React, { useState } from "react";

interface ICookies {
  header: string;
  body: string;
  isMandatory: boolean;
  isSelected: boolean;
  onChangeConsent: (header: string, checked: boolean) => void;
}

const MainWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: left;
  padding: 16px 0;
  width: 100%;
  margin: 0;
  color: #3e3e52;
`;

const HeaderSpan = styled.span`
  font-weight: bold;
  font-size: 14px;
  line-height: 24px;
  flex: 1 0 auto;
  text-transform: capitalize;
  margin-right: 24px;
`;

const IconSpan = styled.span`
  display: inline-block;
  transition: transform 0.2s;
  color: #3e3e52;
  opacity: 0.5;
  font-size: 0.95rem;
  position: relative;
  left: 0.5rem;

  &.rotate {
    transform: rotate(180deg);
  }
`;

const BodyDiv = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
`;

const HeaderWrapper = styled.div`
  display: flex;
`;

const GlobalCheckbox = styled.span`
  position: relative;
`;

const SwitchLabel = styled.label<{ isMandatory: boolean }>`
  position: absolute;
  top: 0;
  left: -24px;
  width: 48px;
  height: 24px;
  border-radius: 16px;
  background: #bebebe;
  cursor: pointer;
  ${(props) => props.isMandatory ? "opacity: 0.5;" : ""}

  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #fff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;

const SwitchInput = styled.input`
  opacity: 0;
  z-index: 1;

  &:checked + ${SwitchLabel} {
    background: #4f91d9;

    ::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 27px;
      transition: 0.2s;
    }
  }
`;

const Cookie = (props: ICookies) => {
  const { header, body, isMandatory, isSelected, onChangeConsent } = props;
  const [isExpanded, setExpanded] = useState(false);
  const expandBody = () => {
    setExpanded(true);
  };
  const collapseBody = () => {
    setExpanded(false);
  };
  const onChange = () => {
    if (!isMandatory) {
      onChangeConsent(header, !isSelected);
    }
  };
  return (
    <MainWrapper>
      <HeaderWrapper>
        <HeaderSpan>
          {header}
          {(!isExpanded && (
            <IconSpan onClick={expandBody} className="icon icon-up-arrow rotate" />
          )) || <IconSpan onClick={collapseBody} className="icon icon-up-arrow" />}
        </HeaderSpan>
        <GlobalCheckbox>
          <SwitchInput
            id={`checkbox+${header}`}
            type="checkbox"
            onClick={onChange}
            checked={isSelected}
          />
          <SwitchLabel isMandatory={isMandatory} htmlFor={`checkbox+${header}`} />
        </GlobalCheckbox>
      </HeaderWrapper>
      {isExpanded && <BodyDiv dangerouslySetInnerHTML={{ __html: body }} />}
    </MainWrapper>
  );
};

export default Cookie;