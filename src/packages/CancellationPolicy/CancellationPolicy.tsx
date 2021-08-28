import React, { FunctionComponent, Fragment } from "react";
import styled from "styled-components";

export interface ICancellationPolicy {
  header?: string;
  description?: string;
  page?: string;
  cancelPolicies?: any;
  tcpPromotionalText?: any;
  UnableToLoad?: any;
}

interface ICancelPolicy {
  csBackground?: string;
  csBorder?: string;
}

const ShrtPolicyWrapper = styled.div`
  height: 100vh;
  background: #fff;
  padding: 0 1em;
  display: flex;
  align-items: center;
`;

const ShrtCanpolicyHead = styled.div`
  color: #d84e55;
  font-size: 1em;
  line-height: 1.5;
  padding-bottom: 1.5em;
`;

const ShrtCanpolicyContent = styled.div`
  color: #3e3e52;
  font-size: 0.9em;
  line-height: 1.3;
`;

const HighlightPolicy = styled.tr<ICancelPolicy>`
  border: ${(props) => props.csBorder};
`;

const PolicyTd = styled.td<ICancelPolicy>`
  background: ${(props) => props.csBackground};
  border: 0.13em solid #ddd;
  font-size: 0.9em;
  color: #47475d;
  width: 70%;
  height: 3em;
  padding: 0.5em;
`;

const CanChargeContent = styled.td<ICancelPolicy>`
  background: ${(props) => props.csBackground};
  border: ${(props) => props.csBorder};
  font-size: 0.8em;
  color: #515069;
  text-align: center;
  width: 70%;
  height: 3em;
  padding: 0.5em;
`;

const PolicyWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const BusTicketHeader = styled.div`
  color: #465986;
  font-weight: bold;
  margin-bottom: 1em;
`;

const TcpBenifitCan = styled.div`
  padding: 0.5em 0 0;
  font-size: 0.9em;
  font-weight: 500;
  color: #38b87c;
  margin-bottom: 1em;
`;

const BorderTcpBenifit = styled.div`
  border-bottom: 1px solid #d4d4d4;
  margin-bottom: 1em;
`;

const PolicyTopText = styled.div`
  font-size: 0.9em;
  color: #3e3e52;
`;

const TimeDetailCancelnew = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1em;
  font-weight: bold;
  font-size: 0.9em;
`;

const CancelPolicyListWng = styled.ul`
  display: list-item;
  list-style-type: disc;
  color: #7e7e8c;
  font-size: 0.9em;
  padding: 0;
  margin-top: 1em;
`;

const CancelPolicyListElement = styled.li`
  margin: 1em 0;
`;

const PolicyTable = styled.table`
  margin-top: 1em;
  border-collapse: collapse;
  width: 100%;
`;

const CancelpolicyPage = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
`;

const PolicyListWrap = styled.div`
  margin: 1em;
`;

const CardBlock = styled.div`
  margin-top: 12px;
  margin-bottom: 12px;
  background-color: #fff;
  box-shadow: 1px 1px 4px #d4d4d4;
  padding: 12px;
`;

const TitleAddonsCan = styled.div`
  font-weight: 700;
  margin-top: 1em;
`;

export const CancellationPolicy: FunctionComponent<ICancellationPolicy> = (props: ICancellationPolicy) => {
  const {
    header,
    description,
    page,
    cancelPolicies,
    tcpPromotionalText,
    UnableToLoad,
  } = props;

  const CancellationPolicyHandler = () => {
    if (page === "openticket") {
      const { shrtLocale } = cancelPolicies;
      return (
        <ShrtPolicyWrapper>
          <div>
            <ShrtCanpolicyHead>{shrtLocale.cancelPolicy}</ShrtCanpolicyHead>
            <ShrtCanpolicyContent>{shrtLocale.cancelPolicyContent}</ShrtCanpolicyContent>
          </div>
        </ShrtPolicyWrapper>
      );
    } else {
      let content: any = [];
      let dom: any = [];
      if (cancelPolicies && cancelPolicies.tableData) {
        dom = (cancelPolicies.tableData.map((item: any, index: number) => {
          return <div key={index}>
            {item.additionItemHeading && <TitleAddonsCan>{item.additionItemHeading}</TitleAddonsCan>}
            <TimeDetailCancelnew>
              <div> {item.cancellation_charges_subHead} </div>
              <div> {item.cancellation_time_subHead} </div>
            </TimeDetailCancelnew>
            <PolicyTable>
              <tbody>
                {item.cancelPolicy.map((item2: any, index2: number) => (
                  item2.currentSlot ?
                    <HighlightPolicy
                      csBorder={item2.borderColor}
                      key={index2}
                    >
                      <PolicyTd csBackground={item2.backgroundColor1}>
                        {item2.cancellationString}
                      </PolicyTd>
                      <CanChargeContent
                        id="policy-row"
                        csBackground={item2.backgroundColor2}
                        csBorder={item2.borderColor}
                      >
                        <span>
                          <b>{item2.chargeExact + " (" + item2.chargePerc + ")"}</b>
                        </span>
                        <span>
                          {item2.cancellationPercentage ?
                            ("(" + item2.cancellationPercentage + ")") : ""}
                        </span>
                      </CanChargeContent>
                    </HighlightPolicy> :
                    <HighlightPolicy csBorder={item2.borderColor} key={index2} >
                      <PolicyTd csBackground={item2.backgroundColor1}>
                        {item2.cancellationString}
                      </PolicyTd>
                      <CanChargeContent
                        id="policy-row"
                        csBackground={item2.backgroundColor2}
                        csBorder={item2.borderColor}
                      >
                        <span>
                          <b>{item2.chargeExact + " (" + item2.chargePerc + ")"}</b>
                        </span>
                        <span>
                          {item2.cancellationPercentage ?
                            ("(" + item2.cancellationPercentage + ")") : ""}
                        </span>
                      </CanChargeContent>
                    </HighlightPolicy>
                ))}
              </tbody>
            </PolicyTable>

            <PolicyListWrap>
              {item.wngMsg && item.wngMsg ? <CancelPolicyListWng>
                {item.wngMsg && item.wngMsg.map((item3: any, key: number) => {
                  return <CancelPolicyListElement key={key}>{item3}</CancelPolicyListElement>;
                })}
              </CancelPolicyListWng> : null}
            </PolicyListWrap>
          </div>;
        }));

        content = (cancelPolicies && cancelPolicies.tableData ? <>
          <BusTicketHeader>{header}</BusTicketHeader>
          {tcpPromotionalText ?
            <TcpBenifitCan
            >{tcpPromotionalText}
            </TcpBenifitCan> : null}
          {tcpPromotionalText ? <BorderTcpBenifit /> : null}
          <PolicyTopText>
            {description}
          </PolicyTopText>
          {dom}
        </> : null);
      } else {
        content = <CardBlock>
          {UnableToLoad}
        </CardBlock>;
      }
      return <CancelpolicyPage> {content}
      </CancelpolicyPage>;
    }
  };

  return (
    <Fragment>
      {CancellationPolicyHandler()}
    </Fragment>
  );
};
