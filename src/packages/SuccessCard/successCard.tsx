import * as React from "react";
import styled from "styled-components";

export interface IProps {
    image?: any;
    amount?: string;
    message?: string;
}

const SuccessCardWrap = styled.div<IProps>`
  .feedback_success {
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    align-items: center;
    text-align: center;

    .success_icon {
      width: 6.25rem;
      height: 6.25rem;
      object-fit: contain;
      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    .main_text {
      font-size: 1rem;
      margin: 2em 1em;
    }
  }
`;

/* tslint:disable max-line-length jsx-no-multiline-js*/
export function SuccessCard(props: IProps) {

    const elements = <div className="feedback_success">
            <img className="success_icon" src={props.image} />
            <div className="main_text"> <span className="bold_font">₹{props.amount}</span> {props.message}</div>
        </div>;

    return (
        <React.Fragment>
            <SuccessCardWrap image={props.image}>
                {elements}
            </SuccessCardWrap>
        </React.Fragment>
    );
}
