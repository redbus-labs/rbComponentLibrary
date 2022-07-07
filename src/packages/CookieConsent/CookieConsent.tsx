import React, { FunctionComponent, useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import Cookie from "./Cookie";

export interface ICookieProps {
  header: string;
  defaultText: string;
  acceptAllText: string;
  manageSettingsText: string;
  howWeUseCookies: string;
  openContentText: string;
  saveLbl: string;
  cookiesArray: ICookies[];
  onSaveClick: (data: any) => void;
}

interface ICookies {
  header: string;
  body: string;
  isMandatory: boolean;
  isSelected: boolean;
}

const MainWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
  z-index: 1000001;
  padding: 0 1em;
`;

const ContainerDiv = styled.div`
  max-width: 370px;
  color: #3e3e52;
  box-shadow: 0 8px 16px rgb(19 41 104 / 20%);
  background: #fff;
  border-radius: 8px;
  width: 100%;
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

const PaddingDiv = styled.div`
  padding: 32px 24px 12px;
`;

const TitleDiv = styled.div`
  color: #3e3e52;
  text-align: left;
  font-size: 24px;
  line-height: 32px;
  margin: 0 0 24px;
  font-weight: bold;
`;

const BodyDiv = styled.div`
  color: #3e3e52;
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 40px;
  overflow-y: auto;
`;

const Button = styled.button<any>`
  background-color: #d84e55;
  color: white;
  border-radius: 8px;
  font-weight: 700;
  padding: 12px 0;
  border: none;
  outline: none;
  font-size: 16px;
  width: 100%;
  text-transform: uppercase;
`;

const ManageSettingsDiv = styled.button`
  background: transparent;
  color: #d84e55;
  font-size: 16px;
  line-height: 24px;
  padding: 12px 0;
  text-align: center;
  width: 100%;
  margin: 0;
  border-radius: 8px;
  border: 0;
`;

const FixedDiv = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  align-items: center;
  justify-content: center;
  z-index: 10001;
  background: #fff;
`;

const HeaderDiv = styled.header`
  box-shadow: 0 4px 8px 0 rgb(51 51 51 / 10%);
  padding: 16px;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const TitleOpenH2 = styled.h2`
  color: #3e3e52;
  text-align: left;
  font-size: 18px;
  line-height: 24px;
  margin: 0;
`;

const CloseIcon = styled.span``;

const WrapperDiv = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  align-items: center;
  justify-content: center;
  z-index: 10001;
  flex-direction: column;
`;

const MainOpenDiv = styled.div`
  flex: auto;
  padding: 24px 16px;
  overflow-y: auto;
`;

const ContentOpenDiv = styled.div`
  color: #3e3e52;
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 30px;
`;

const FooterWrapper = styled.footer`
  width: 100%;
  padding: 2rem 0;
  padding: 12px 16px;
  box-shadow: 0 -4px 8px 0 rgb(51 51 51 / 10%);
`;

const CookieUL = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const CookieLI = styled.li`
  border-bottom: 1px solid #dcdfe9;
`;

/* tslint:disable jsx-no-multiline-js jsx-no-lambda */

export const CookieConsent: FunctionComponent<ICookieProps> = (props) => {
  const {
    header,
    defaultText,
    acceptAllText,
    manageSettingsText,
    howWeUseCookies,
    openContentText,
    saveLbl,
    cookiesArray,
    onSaveClick,
  } = props;

  const [expandManageSettings, setExpandManageSettings] = useState(false);

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
  });

  useEffect(() => {
    setCookieData(constructData());
  }, [cookiesArray]);

  const constructData = () => {
    const data: any = {};
    cookiesArray.forEach((cookie) => {
      data[cookie.header] = {
        isMandatory: cookie.isMandatory,
        isSelected: cookie.isSelected,
      };
    });
    return data;
  };

  const intialData = useMemo(() => {
    const data: any = constructData();
    return data;
  }, []);

  const allSelectedData = useMemo(() => {
    const data: any = {};
    cookiesArray.forEach((cookie) => {
      data[cookie.header] = {
        isMandatory: cookie.isMandatory,
        isSelected: true,
      };
    });
    return data;
  }, []);

  const [cookieData, setCookieData] = useState(intialData);

  const onChangeConsent = (head: any, checked: any) => {
    setCookieData((data: any) => {
      return {
        ...data,
        [head]: {
          isSelected: checked,
          isMandatory: data[head].isMandatory,
        },
      };
    });
  };

  const openManageSettings = () => {
    setExpandManageSettings(true);
  };

  const closeManageSettings = () => {
    setExpandManageSettings(false);
  };

  const intialClick = (buttonType: string) => {
    if (buttonType === "acceptAll") {
      onSaveClick(allSelectedData);
    } else if (buttonType === "saveChanges") {
      onSaveClick(cookieData);
    }
  };

  const createMarkup = (content: string) => {
    return { __html: content };
  };
  if (!expandManageSettings) {
    return (
      <>
        <ShadowDiv />
        <MainWrapper>
          <ContainerDiv>
            <PaddingDiv>
              <TitleDiv>{header}</TitleDiv>
              <BodyDiv
                className="cookie-body"
                dangerouslySetInnerHTML={createMarkup(defaultText)}
              />
              <Button onClick={() => intialClick("acceptAll")}>{acceptAllText}</Button>
              <ManageSettingsDiv onClick={openManageSettings}>
                {manageSettingsText}
              </ManageSettingsDiv>
            </PaddingDiv>
          </ContainerDiv>
        </MainWrapper>
      </>
    );
  } else {
    return (
      <FixedDiv>
        <WrapperDiv>
          <HeaderDiv>
            <TitleOpenH2>{howWeUseCookies}</TitleOpenH2>
            <CloseIcon onClick={closeManageSettings} className="icon icon-cross" />
          </HeaderDiv>
          <MainOpenDiv>
            <ContentOpenDiv
              dangerouslySetInnerHTML={{ __html: openContentText }}
            />
            <CookieUL>
              {cookiesArray.map((cookie) => {
                return (
                  <CookieLI key={cookie.header}>
                    <Cookie
                      {...cookie}
                      onChangeConsent={onChangeConsent}
                      isSelected={cookieData[cookie.header].isSelected}
                    />
                  </CookieLI>
                );
              })}
            </CookieUL>
          </MainOpenDiv>
          <FooterWrapper>
            <Button onClick={() => intialClick("saveChanges")}>{saveLbl}</Button>
          </FooterWrapper>
        </WrapperDiv>
      </FixedDiv>
    );
  }
};

CookieConsent.defaultProps = {};