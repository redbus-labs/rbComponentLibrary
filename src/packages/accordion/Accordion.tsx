import React, { useState, useRef } from "react";
import styled from "styled-components";

export enum AccordionStatus {
  OPEN = 1,
  CLOSE,
}
export interface IAccordionProps {
  title: any;
  content: string;
  openIcon?: string;
  closeIcon?: string;
  initialStatus?: AccordionStatus;
  style?: IAccordionStyle;
}

export interface IAccordionStyle {
  headerColor?: string;
  headerBgColor?: string;
  headerPadding?: string; // increase the header size with this
  contentBgColor?: string;
  contentColor?: string;
}

const AccordionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button<IAccordionStyle>`
  background-color: ${ (props) => props.headerBgColor};
  color: ${ (props) => props.headerColor};
  cursor: pointer;
  padding: ${ (props) => props.headerPadding};
  display: flex;
  align-items: center;
  border: none;
  outline: none;
  transition: background-color 0.6s ease;

  &:hover,
  .active {
    background-color: ${ (props) => props.headerBgColor};
  }
`;

const AccordionPara =  styled.p`
  font-weight: 600;
  font-size: 14px;
  text-align: left;
`;

const AccordionSpan = styled.span`
  margin-left: auto;
`;

const AccordionContent = styled.div<IAccordionStyle>`
  background-color: ${ (props) => props.contentBgColor};
  color: ${ (props) => props.contentColor};
  overflow: auto;
  transition: max-height 0.6s ease;
`;

/* Style the accordion content text */
const AccordionText = styled.div`
  font-weight: 400;
  font-size: 14px;
  padding: 18px;
`;

export function Accordion(props: IAccordionProps) {

  const defaultStyle =  {
    headerColor: "#444",
    headerBgColor: "#eee",
    headerPadding: "0 18px",
    contentBgColor: "#fff",
    contentColor: "#000",
  };

  const {
    title,
    content,
    openIcon = "faq_plus",
    closeIcon = "faq_minus",
    initialStatus = AccordionStatus.CLOSE,
  } = props;

  const style = {...defaultStyle, ...props.style};
  // const getInitialState = status => status === AccordionStatus.CLOSE ?
  // {
  //   icon: openIcon,
  //   status: "",
  //   height: "0px",
  // }:
  // {
  //   icon: closeIcon,
  //   status: "active",
  //   height: `${contentDiv.current.scrollHeight}px`,
  // };

  // const initialState = getInitialState(initialStatus);

  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState(openIcon);

  const contentDiv = useRef(document.createElement("div"));

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive !== "active" ? `${contentDiv.current.scrollHeight}px` : "0px",
    );
    setRotateState(
      setActive === "active" ? openIcon : closeIcon,
    );
  }

  return (
    <AccordionContainer className="accordion__section">
      <Button className={`accordion ${setActive}`} onClick={toggleAccordion} {...style}>
        <AccordionPara className="accordion__title">{title}</AccordionPara>
        <AccordionSpan className={`icon icon-${setRotate}`}/>
        {/* <Chevron className={`${setRotate}`} width={10} fill={"#777"} /> */}
      </Button>
      <AccordionContent
        ref={contentDiv}
        style={{ maxHeight: `${setHeight}` }}
        className="accordion__content"
        {...style}
      >
      <AccordionText className="accordion__text">{props.content}</AccordionText>
      </AccordionContent>
    </AccordionContainer>
  );
}
