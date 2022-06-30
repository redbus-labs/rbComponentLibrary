import * as React from "react";
import styled from "styled-components";

export interface IImageBannerWithContent {
  imgUrl: any;
  headerText: string;
  msg: string;
  headingColor?: string;
  msgColor?: string;
  background?: string;
  padding?: string;
  border?: string;
  alignItem?: string;
}

interface IStyleComp {
  csColor?: string;
  csBackground?: string;
  csPadding?: string;
  csBoarder?: string;
  csAlignItems?: string;
}

const ImageContentSubMainWrap = styled.section<IStyleComp>`
  display: flex;
  padding: ${(props) => props.csPadding || "1rem 0.5rem"};
  align-items: ${(props) => props.csAlignItems || "center"};
  background-color: ${(props) => props.csBackground || "#fff"};
  border: ${(props) => props.csBoarder || "1px solid #dddddd"};
`;

const Content = styled.section<IStyleComp>`
  font-size: 0.8em;
  color: ${(props) => props.csColor || "#7e7e8c"};
  line-height: 1.4;
`;

const ContentImage = styled.img`
  width: 4.5em;
  margin-right: 1.4em;
`;

const ContentHead = styled.div<IStyleComp>`
  font-weight: bold;
  margin-bottom: 0.4em;
  font-size: 0.9em;
  color: ${(props) => props.csColor || "#3e3e52"};
  line-height: 1.5;
`;

export const ImageBannerWithContent: React.FunctionComponent<IImageBannerWithContent> =
  (props: IImageBannerWithContent) => {
    return (
      <>
        <ImageContentSubMainWrap
          csAlignItems={props.alignItem}
          csBackground={props.background}
          csPadding={props.padding}
          csBoarder={props.border}
        >
          <>
            <ContentImage src={props.imgUrl} alt="logo" />
          </>
          <div>
            <ContentHead csColor={props.msgColor}>{props.headerText}</ContentHead>
            <Content csColor={props.headingColor} dangerouslySetInnerHTML={{ __html: props.msg }} />
          </div>
        </ImageContentSubMainWrap>
      </>
    );
  };

export default ImageBannerWithContent;