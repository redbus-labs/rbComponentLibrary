import * as React from "react";
import styled from "styled-components";

export interface IProps {
    image?: any;
    title?: any;
    description?: any;
    bgColor?: any;
    borderRadius?: string;
    color?: string;
    padding?: string;
    buttonText?: string;
    buttonColor?: string;
    clickAction: (e?: any) => void;
}

const FeatureCardWrap = styled.div<IProps>`
  .covid_card {
    display: flex;
    flex-direction: row;
    background-color: ${(props) => props.bgColor};
    padding: ${(props) => props.padding};
    border: 1px solid #ded2cd;
    border-radius: ${(props) => props.borderRadius};
    color: ${(props) => props.color};
    margin-bottom: 0.5em;

    .audit_text {
      margin-left: 1.5em;
      font-size: 0.88em;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .header {
        font-weight: bold;
        margin-bottom: 1em;
      }

      .desc {
        margin-bottom: 1em;
      }
    }

    .audit_img {
      width: 3.38rem;
      height: 4.5rem;
      object-fit: contain;
    }

    .start_btn {
      background: ${(props) => props.buttonColor};
      color: #fff;
      padding: 0.5em 0.8em;
      align-self: flex-end;
      font-size: 0.75rem;
      line-height: 1em;
      font-weight: bold;
      letter-spacing: 0.85px;
      border-radius: 0.25rem;
      text-transform: uppercase;
    }
  }
`;

/* tslint:disable max-line-length jsx-no-multiline-js*/
export function FeatureCard(props: IProps) {
    const elements = <div className="covid_card">
        <div>
            <img className="audit_img" src={props.image} alt="image" />
        </div>
        <div className="audit_text">
            <div className="header">{props.title}</div>
            <div className="desc">{props.description}</div>
            <div className="start_btn" onClick={props.clickAction}>{props.buttonText}</div>
        </div>
    </div>;
    return (
        <React.Fragment>
            <FeatureCardWrap bgColor={props.bgColor} color={props.color} borderRadius={props.borderRadius} padding={props.padding} buttonColor={props.buttonColor} clickAction={props.clickAction}>
                {elements}
            </FeatureCardWrap>
        </React.Fragment>
    );
}