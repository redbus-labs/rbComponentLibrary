import * as React from "react";
import styled from "styled-components";

export interface IFaqs {
  index?: number;
  data?: any;
  handleChange?: any;
  autoid?: string;
}

const AccordionMainWrap = styled.section`
  padding-bottom: 1.5em;
  border-bottom: 1px solid #e3e3e3;
`;

const AccordionWrap = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.875em;
  color: #3e3e52;
  margin-top: 1.5em;
`;

const FaqIcon = styled.div`
  font-size: 1.3em;
  margin-left: 1em;
`;

const AnsWrap = styled.div`
  padding-top: 1.2em;
  line-height: 1.5;
  color: #7e7e8c;
  font-size: 0.8em;
`;

export const FaqAccordion: React.FunctionComponent<IFaqs> = ({ index, data, handleChange, autoid }) => {
  return (
    <AccordionMainWrap key={index}>
    <AccordionWrap>
      <>
        {index}.{data.name}
      </>
      <FaqIcon
        data-autoid={autoid}
        // tslint:disable-next-line: jsx-no-lambda
        onClick={() => handleChange(index && (index - 1))}
        className={`icon ${data.show ? "icon-faq_minus" : "icon-faq_plus"}`}
      />
    </AccordionWrap>
    {data.msgHtml && data.show && <AnsWrap dangerouslySetInnerHTML={{ __html: data.msgHtml }}/>}
    {!data.msgHtml && data.show && <AnsWrap>{data.msg}</AnsWrap>}
  </AccordionMainWrap>
  );
};
