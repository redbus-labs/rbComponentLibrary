import React, { FunctionComponent } from "react";
import styled from "styled-components";

export interface ICardBannerProps {
  heading?: string;
  subText?: string;
  imageUrl?: string;
  appleIcon?: string;
  androidIcon?: string;
  browserLink?: string;
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Heading = styled.div`
  color: #3e3e52;
  font-weight: bold;
  font-size: 1.05rem;
  padding-bottom: 0.5rem;
`;

const SubText = styled.div`
  color: #3e3e52;
  font-size: 0.8rem;
  line-height: 1.3rem;
`;

const TextContent = styled.div`
  padding-right: 0.5rem;
  flex: 2;
`;

const Imageicon = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 0.5rem;
`;

const ImgLogo = styled.img`
  height: 6.38rem;
`;

const Icons = styled.div`
  padding-top: 0.5rem;
  color: "#000";
`;

const AppleICon = styled.span`
  padding-left: 0.75rem;
  font-size: 1.2rem;
`;

const AndroidIcon = styled.span`
  font-size: 1.2rem;
`;

export const CardBanner: FunctionComponent<ICardBannerProps> = (props: ICardBannerProps) => {
  const { heading, subText, imageUrl, appleIcon, androidIcon, browserLink } = props;

  const clickHandler = () => {
    if (browserLink) {
      window.open(browserLink , "_blank");
    }
  };

  return (
    <Container onClick={clickHandler}>
      <TextContent>
        <Heading>
          {heading}
        </Heading>
        <SubText>
          {subText}
        </SubText>
        <Icons>
            <AndroidIcon className={androidIcon} />
            <AppleICon className={appleIcon} />
        </Icons>
      </TextContent>
      <Imageicon>
        <ImgLogo src={imageUrl} alt="logo icon" />
      </Imageicon>
    </Container>
  );
};

CardBanner.defaultProps = {
  heading: "Download redBus app",
  subText: "Keep your tickets at your finger tip, never miss your bus and get exciting offers.",
  imageUrl: "/download_image.svg",
  appleIcon: "icon icon-apple_logo",
  androidIcon: "icon icon-google_play",
  browserLink: "#",
};
