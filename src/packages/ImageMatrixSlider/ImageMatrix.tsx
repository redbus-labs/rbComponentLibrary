import React, { FunctionComponent } from "react";
import styled from "styled-components";

export interface IImageMatrix {
  titleText: string;
  ImagesArray: any;
}

const MainContainer = styled.div`
  background: #fff;
  color: #3e3e52;
  width: 100%;
  border: 1px solid #f0f1f2;
`;

const MainText = styled.div`
  color: #3e3e52;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  margin: 1rem 0rem 0rem 1rem;
`;

const ImagesContainer = styled.div`
  overflow: scroll hidden;
  padding: 0.5rem 0rem 1rem 0.7rem;
`;

const ImagesDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const Image = styled.img`
  width: 120px;
  height: 50px;
  padding: 0.6rem 1.2rem;
  display: inline-block;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
`;

const SuBtext = styled.div`
margin:5px 2px;
`;

export const Benifit: FunctionComponent<any> = (Images) => {
  const ImagesArrayPassed: any = [];
  Object.keys(Images).forEach((key) => {
    ImagesArrayPassed.push(
      <>
        <ImageWrapper>
          <Image src={Images[key].imgUrl} alt="" loading="lazy" />
          <SuBtext>{Images[key].imgName}</SuBtext>
        </ImageWrapper>
      </>
    );
  });
  return (
    <>
      <ImagesDiv>{ImagesArrayPassed}</ImagesDiv>
    </>
  );
};

/* tslint:disable-next-line max-line-length*/
export const ImageMatrix: FunctionComponent<IImageMatrix> = ({
  titleText,
  ImagesArray,
}) => {
  const benifits: any = [];
  ImagesArray.forEach((value: any) => {
    benifits.push(<Benifit {...value}></Benifit>);
  });
  return (
    <MainContainer>
      <MainText>{titleText}</MainText>
      <ImagesContainer>{benifits}</ImagesContainer>
    </MainContainer>
  );
};

ImageMatrix.defaultProps = {
  titleText: "Some title text",
  ImagesArray: [
    [
      {
        imgUrl: "/staff_masks.png",
        imgName: "image",
      },
      {
        imgUrl: "/staff_masks.png",
        imgName: "image",
      },
      {
        imgUrl: "/staff_masks.png",
        imgName: "image",
      },
      {
        imgUrl: "/staff_masks.png",
        imgName: "image",
      },
      {
        imgUrl: "/staff_masks.png",
        imgName: "image",
      },
    ],
    [
      {
        imgUrl: "/staff_masks.png",
        imgName: "image",
      },
      {
        imgUrl: "/staff_masks.png",
        imgName: "image",
      },
      {
        imgUrl: "/staff_masks.png",
        imgName: "image",
      },
      {
        imgUrl: "/staff_masks.png",
        imgName: "image",
      },
      {
        imgUrl: "/staff_masks.png",
        imgName: "image",
      },
    ],
  ],
};
