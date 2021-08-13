import * as React from "react";
import styled from "styled-components";

export interface IProps {
    optionBackground?: any;
    radioimage?: any;
    title?: any;
    description?: any;
    itemId?: any;
    selectedId?: any;
    onRadioClick: (e?: any) => void;
}

const RadioOptionWrap = styled.div<IProps>`
  .option {
    display: flex;
    flex-direction: row;
    font-size: 0.88rem;
    border-radius: 0.19rem;
    border: solid 0.06rem #ddd;
    padding: 1em;

    .option_text {
      margin-left: 1em;
    }

    .option_description {
      font-size: 0.75rem;
      margin-left: 1em;
      margin-top: 0.5em;
    }
  }

  .option_selected {
    background: #f8f4f4;
    border: 1px solid #d84e55;
  }

  .or_text {
    text-align: center;
    margin: 1em;
  }
`;

/* tslint:disable max-line-length jsx-no-multiline-js*/
export function RadioOption(props: IProps) {
    // tslint:disable-next-line:no-shadowed-variable
    function onClickHandler(itemId: any) {
        props.onRadioClick(itemId);
    }

    const { itemId, optionBackground, title, description } = props;
    const isSelectedWrapper = optionBackground;
    const elements = <div className={isSelectedWrapper} onClick={onClickHandler.bind(itemId)}>
    {props.radioimage}
        {itemId === 1 ? <div className="option_text">{title}</div> :
            <div>
                <div className="option_text">{title}</div>
                <div className="option_description">{description}</div>
            </div>
    }
    </div>;

    return (
        <React.Fragment>
                <RadioOptionWrap onRadioClick={props.onRadioClick}>
                    {elements}
                </RadioOptionWrap>
            </React.Fragment>
    );
}
