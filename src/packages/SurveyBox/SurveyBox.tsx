import * as React from "react";
import styled from "styled-components";

export interface IProps {
  image?: any;
  questionObj?: any;
  selected?: boolean;
  onCheckBoxClick: (e?: any) => void;
}

const SurveyBoxWrap = styled.div<IProps>`
  .survey_block {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 2em;
    margin-left: 1em;
  }

  .survey_image_wrapper {
    width: 6.88rem;
    height: 4.63rem;
    border-radius: 0.25rem;
    border: solid 0.06rem #ddd;
    z-index: 30;
    padding: 3px;
    position: relative;
  }

  .survey_item_checkbox {
    z-index: 100;
    position: absolute;
    left: 5.6rem;
  }

  .survey_image {
    width: 5rem;
    height: 4.25rem;
    object-fit: contain;
  }

  .survey_question {
    font-size: 0.88rem;
    margin-top: 0.7rem;
    margin-bottom: 0.7em;
  }

  .checkbox_icon {
    height: 1em;
    width: 1em;
    color: #d84e55;
  }

  .active_background {
    background-color: #f8f4f4;
  }

  .survey_content {
    width: 8em;
    margin-right: 1.5em;
    margin-bottom: 2em;
  }

  .disabled {
    opacity: 0.3;
    pointer-events: none;
  }
`;

/* tslint:disable max-line-length jsx-no-multiline-js*/
export function SurveyBox(props: IProps) {
  // tslint:disable-next-line:no-shadowed-variable
  function onClickHandler(question: any) {
    props.onCheckBoxClick(question);
  }

  const question = props.questionObj;
  const active = (props.selected) ? true : false;
  const isActiveClass = (active) ? "activeClass" : "inactiveClass";

  const elements = <div className={"input-ctrl survey_content " + isActiveClass} onClick={onClickHandler.bind(question)}>
    <div className={active ? "survey_image_wrapper active_background" : "survey_image_wrapper"}>
      <img className="survey_image" src={question.ImageUrl} alt="" />
      <label>
        {props.image}
      </label>
    </div>
    <div className="survey_question">{question.QuestionLabel}</div>
  </div >;

  return (
    <React.Fragment>
      <SurveyBoxWrap image={props.image} onCheckBoxClick={props.onCheckBoxClick}>
        {elements}
      </SurveyBoxWrap>
    </React.Fragment>
  );
}
