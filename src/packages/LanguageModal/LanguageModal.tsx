import React, { FunctionComponent, useEffect, useState } from "react";
import styled from "styled-components";
import { BottomFixedBanner } from "@redbus/bottom-fixed-banner";

export interface ILanguageModalProps {
  langaugeIcon: any;
  mainText: string;
  subText: string;
  submitText: string;
  langArray: ILang[];
  selectedLang: string;
  submitAction: (value: string) => void;
  closeImgWithHandler?: any;
  closeHandler?: any;
  tickMarkIcon?:any;
  isRDC?:any;
}

export interface ILang {
  id: string;
  label: string;
  selected: boolean;
  clickAction?: () => void;
  flagUrl:string;
}

export interface ILangForFlags {
  id: string;
  label: string;
  selected: boolean;
  clickAction?: () => void;
  flagUrl:string;
  tickMarkIcon:any;
}

const MainContainer = styled.div`
  background: #fff;
  color: #3e3e52;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  color: #3e3e52;
  margin-bottom: 0.5rem;
  margin-top:-1rem;
`;

const TextContainer = styled.div``;


const TitleText = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom:8px;
`;

const SubTitleText = styled.div`
  font-size: 13px;
  color: #7e7e8c;
  margin-right:5rem;
  line-height:17px;
`;

const StyledHr = styled.hr`
  margin: 5px 0;
  background: #e3e3e3;
  opacity: 0.3;
`;

const StyledLabel = styled.label`
  padding-left: 2rem;
  font-size: 14px;
`;

const StyledLabelForFlags = styled.label`
  font-size: 14px;
`;

const LanguageBlock = styled.div<{ selected: boolean }>`
  border: 1px solid ${(props) => props.selected ? "#3e3e52" : "#e3e3e3"};
  padding: 0.5rem 1rem;
  border-radius: 5px;
  margin: 0.5rem 1rem;
  font-size: 12px;
  position: relative;
  display: flex;
  font-weight: ${(props) => props.selected ? "bold" : ""};
  align-items: center;
`;

const LanguageBlockWithFlag = styled.div<{ selected: boolean }>`
  &:hover {
    background: #f0f1f2;
  }
  margin-left:-1rem;
  margin-right:-1rem;
  padding: 0.9rem 1rem;
  font-size: 16px;
  font-family: Montserrat;
  position: static;
  display: flex;
  font-weight: ${(props) => props.selected ? "bold" : ""};
  align-items: center;
  color:#3E3E52;
  line-height: 20px;
  text-transform: capitalize;
  width:auto;
`;

const SubmitCTA = styled.button`
  font-size: 14px;
  background: #d84e55;
  color: #fff;
  width: 100%;
  border-radius: 2px;
  border: none;
  outline: none;
  padding: 0.7rem;
  font-weight: bold;
  margin-top: 0.5rem;
`;

const TickMarkContainer = styled.div`
  padding: 2px 1.4rem 0rem 0.6rem;
  width: 1.9rem;
  display:flex;
  align-items:center;
  justify-content:center;
`;

const SelectedRadio = styled.div`
  width: 1px;
  height: 1px;
  border: 5px solid #d84e55;
  border-radius: 50%;
  background: #fff;
  padding: 3px;
  position: absolute;
`;

const UnSelectedRadio = styled.div`
  width: 5px;
  height: 5px;
  border: 1px solid #465986;
  border-radius: 50%;
  background: #fff;
  padding: 6px;
  position: absolute;
`;

const ShadowDiv = styled.div`
  background: #3e3e52;
  opacity: 0.4;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10001;
`;

const Flag = styled.img` //no change
  height:24px;
  width:36px;
`;

const Picture = styled.picture`
  margin-left:auto;
  display:flex;
  justify-content:center;
  align-items:center;
`;

/* tslint:disable-next-line max-line-length*/
const LanguageComponent: FunctionComponent<ILang> = ({ id, label, selected, clickAction}) => {
  return (
    <LanguageBlock selected={selected} onClick={clickAction} >
      {selected && <SelectedRadio /> || <UnSelectedRadio />}
      <StyledLabel>{label}</StyledLabel>
    </LanguageBlock>
  );
};

/* tslint:disable-next-line max-line-length*/
const LanguageComponentWithFlag: FunctionComponent<ILangForFlags> = ({ id, label, selected, clickAction,  flagUrl, tickMarkIcon}) => {
  return (
    <LanguageBlockWithFlag selected={selected} onClick={clickAction} >
      <TickMarkContainer>{selected && tickMarkIcon}</TickMarkContainer>
      <StyledLabelForFlags>{label}</StyledLabelForFlags>
      <Picture>
          <source srcSet={"/public/images/webp/"+flagUrl+".webp"} type="image/webp"></source>
          <Flag src={"/public/images/"+flagUrl+".png"} alt="flag"/>
      </Picture>
    </LanguageBlockWithFlag>
  );
};


/* tslint:disable-next-line max-line-length*/
const ModalBody: FunctionComponent<ILanguageModalProps> = ({ langaugeIcon, mainText, subText, langArray, submitText, selectedLang, submitAction, tickMarkIcon, isRDC }) => {
  const [activeLang, setActiveLang] = useState(selectedLang);
  const onSubmit = () => {
    submitAction(activeLang);
  };
  const languageArray: any = [];
  if(isRDC){
    langArray.forEach((lang) => {
      languageArray.push(
        /* tslint:disable-next-line max-line-length*/
        <LanguageComponentWithFlag
          {...lang}
          selected={lang.id === activeLang}
          // tslint:disable-next-line jsx-no-lambda
          clickAction={() => {
            return setActiveLang(lang.id);
          }}
          flagUrl={lang.flagUrl}
          id = {lang.id}
          tickMarkIcon={tickMarkIcon}
        />,
      );
    });
  }
  else{
    langArray.forEach((lang) => {
      languageArray.push(
        /* tslint:disable-next-line max-line-length*/
        <LanguageComponent
          {...lang}
          selected={lang.id === activeLang}
          // tslint:disable-next-line jsx-no-lambda
          clickAction={() => {
            return setActiveLang(lang.id);
          }}
        />,
      );
    });
  }
  
  return (
    <MainContainer>
      <TitleContainer>
        {langaugeIcon}
        <TextContainer>
          <TitleText>
            {mainText}
          </TitleText>
          <SubTitleText>
            {subText}
          </SubTitleText>
        </TextContainer>
      </TitleContainer>
      <StyledHr />
      {languageArray}
      <SubmitCTA onClick={onSubmit}>
        {submitText}
      </SubmitCTA>
    </MainContainer>
  );
};

/* tslint:disable-next-line max-line-length*/
export const LanguageModal: FunctionComponent<ILanguageModalProps> = (props) => {

  useEffect(() => {
    const bodyElement = document && document.getElementsByTagName("body") || "";
    if (bodyElement) {
      bodyElement[0].classList.add("no-scroll");
    }
    return () => {
      if (bodyElement) {
        bodyElement[0].classList.remove("no-scroll");
      }
    };
  }, []);

  return (
    <>
    <ShadowDiv onClick={props.closeHandler}/>
    <BottomFixedBanner className="bottomModalRDC " body={<ModalBody {...props} />} closeImgWithHandler={props.closeImgWithHandler} />
    </>
  );
};

LanguageModal.defaultProps = {
  langaugeIcon: "***",
  mainText: "Select Language",
  subText: "Choose your default language , you can change this later.",
  submitText: "Submit",
  selectedLang: "en",
  langArray: [
    {
      id: "en",
      label: "English",
      selected: true,
      flagUrl:"/flag.png",

    },
    {
      id: "es",
      label: "Espanol",
      selected: true,
      flagUrl:"/flag.png",
    },
    {
      id: "hi",
      label: "Hindi",
      selected: true,
      flagUrl:"/flag.png",
    },
  ],
};
