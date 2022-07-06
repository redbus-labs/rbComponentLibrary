import * as React from "react";
import styled from "styled-components";
import {WebpImage} from '@redbus/webp-image';

export interface IProps {
    bgColor?: any;
    padding?: string;
    hireInfo?: any;
    knowMoreText?: string;
    gotoURL?: any;
}

const CardWrap = styled.div<IProps>`
  .hire_card {
    display: flex;
    flex-direction: column;
    background-color: ${ (props) => props.bgColor};
    padding: ${(props) => props.padding};

    .header_wrap {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    .card_title {
      font-weight: bold;
      color: #3e3e52;
      font-size: 0.85rem;
    }

    .card_link {
      color: #1034d9;
      font-size: 0.85em;
      text-decoration: none;
      font-weight: bold;
    }

    .card_subtitle {
      color: var(--clr-gray-5);
      font-size: 0.8rem;
      margin-top: 0.75rem;
    }

    .slider_wrapper {
      display: flex;
      flex-direction: row;
      margin-top: 0.75rem;
      overflow: scroll hidden;
      padding: 2px;

      .slider_card {
        text-decoration: none;

        .slider_image {
          background: #fff;
          box-shadow: 0 2px 14px rgba(0, 0, 0, 0.14);
          border-radius: 3px;
          padding: 0.4rem 0.8rem;
          height: 4.5rem;
          width: 7.5rem;
          margin-right: 1em;
        }

        .card_text {
          color: #3e3e52;
          font-size: 0.8rem;
          margin-top: 0.5rem;
          text-align: left;
        }
      }
    }
  }
`;

/* tslint:disable max-line-length jsx-no-multiline-js*/
export function HireComponent(props: IProps) {
    const hireInfo =  props.hireInfo && props.hireInfo[0];
    const sliderBlock = hireInfo  && hireInfo.slider && hireInfo.slider.map((item: any, key: any) => (
          <a key={key} className="slider_card" href={item.onClick}>
            <WebpImage className="slider_image" webpSrc={item.webpImageUrl} src={item.image} alt="logo"/>
            <div className="card_text">{item.text}</div>
        </a>
      ));

    const elements = <div className="hire_card">
    <div className="header_wrap">
      <div className="card_title">{hireInfo.header}</div>
      <a className="card_link" href={hireInfo.onClick}>{props.knowMoreText}</a>
    </div>
    <div className="card_subtitle">{hireInfo.SubHeader}</div>
    <div className="slider_wrapper">
        {sliderBlock}
    </div>
    </div>;


    return (
        <React.Fragment>
            <CardWrap bgColor={props.bgColor} hireInfo={props.hireInfo} padding={props.padding} knowMoreText={props.knowMoreText}>
                {elements}
            </CardWrap>
        </React.Fragment>
    );
}
