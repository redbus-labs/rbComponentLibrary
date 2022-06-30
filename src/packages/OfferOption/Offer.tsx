import * as React from "react";
import styled from "styled-components";
import { Loader } from "../dotsLoader/loader";

interface IData {
  Value: number;
  Message: string;
  Response: string;
  OType: string;
}

interface ICashBackData {
  Value: number;
  Message: string;
  Response: string;
  OType: string;
}

interface IOfferResponse {
  status: string;
  codetype: string;
  data: IData;
  cashBackData: ICashBackData[];
  IsCashBackOffer: boolean;
}

export interface IOfferProps {
  offerResponse?: IOfferResponse;
  offerImg?: any;
  arrow?: string;
  offerCode: string;
  closeImg?: string;
  offerCodeChange: (offerCode: any) => void;
  applyOffer: (offerCode: any) => void;
  isExpanded?: boolean;
  onArrowClick?: () => void;
  locale: any;
  appliedOffer: string;
  showOnlyInput: boolean;
  isOfferLoading: boolean;
}

const Container = styled.div<any>`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.background};
  padding: 1.3em;
`;

const HeadDiv = styled.div`
  display: flex;
  color: #465986;

  .left {
    margin-left: 1em;
  }
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;

  .down-arrow {
    transform: rotate(90deg);
    height: 1em;
    width: 1em;
  }

  .up-arrow {
    transform: rotate(270deg);
    height: 1em;
    width: 1em;
  }
`;

const InputDiv = styled.div`
  color: #3e3e52;
  text-transform: uppercase;
  display: flex;
  height: 32px;
  border-bottom: solid 1px #747f8d;
`;

const InputOne = styled.input`
  width: 100%;
  border: none;
  background: transparent;
  text-transform: uppercase;
  outline: none;
`;

const Button = styled.button`
  background-color: #465986;
  color: #fff;
  width: 80px;
  letter-spacing: 0.7px;
  text-transform: uppercase;
  font-weight: 700;
  border-radius: 4px;
  height: 34px;
  border: none;
  outline: none;
`;

const Msg = styled.div`
  font-size: 0.8em;
  padding: 0.4em;

  .red {
    color: #ed000c;
  }

  .green {
    color: #096300;
  }
`;

const ExpandedDiv = styled.div`
  margin-top: 1.5em;
`;

export class Offer extends React.Component<IOfferProps> {
  public static defaultProps: IOfferProps;
  constructor(props: IOfferProps) {
    super(props);
    this.toggleExpand = this.toggleExpand.bind(this);
    this.applyBtnClick = this.applyBtnClick.bind(this);
    this.closeBtnClick = this.closeBtnClick.bind(this);
    this.offerCodeChange = this.offerCodeChange.bind(this);
  }

  public render() {
    const { offerResponse, offerImg, offerCode, closeImg, locale,
      appliedOffer
    } = this.props;
    let data;
    if (offerResponse) {
      const cashBackData = offerResponse.cashBackData[0];
      data =
        offerResponse.IsCashBackOffer && offerResponse.data.OType !== "5"
          ? cashBackData
          : offerResponse.data;
    }
    const isSuccess = offerResponse
      ? offerResponse.status === "200" && data && data.Response === "SUCCESS"
      : false;
    const msgClass = isSuccess ? "green" : "red";
    const closeImgDiv = (
      <div className={closeImg} onClick={this.closeBtnClick} />
    );
    const applyButton = (
      <Button onClick={this.applyBtnClick}>{locale.apply || "Apply"}</Button>
    );

    const expandedSection = (
      <ExpandedDiv>
        <InputDiv>
          <InputOne
            placeholder={locale.enterCouponCode || "Enter coupon code"}
            onChange={this.offerCodeChange}
            value={this.props.offerCode}
          />
          {this.props.isOfferLoading ? <Loader /> :
            (appliedOffer === offerCode && offerCode.length ? closeImgDiv : applyButton)
          }
        </InputDiv>
        {offerResponse && data ? (
          <Msg>
            <div className={msgClass}>{data.Message}</div>
          </Msg>
        ) : (
          []
        )}
      </ExpandedDiv>
    );

    return (
      <React.Fragment>
        <Container
          background={this.props.showOnlyInput ? "#ffffff" : "#f8f4f4"}
        >
          {!this.props.showOnlyInput ? (
            <TopBar onClick={this.props.onArrowClick}>
              <HeadDiv>
                <div>{offerImg}</div>
                <div className="left">
                  {locale.do_you_have_offer_code ||
                    "Do you have an offer code?"}
                </div>
              </HeadDiv>
              <div
                className={
                  this.props.isExpanded ? "arrow up-arrow" : "arrow down-arrow"
                }
              >
                <div className={this.props.arrow} />
              </div>
            </TopBar>
          ) : null}
          {this.props.isExpanded || this.props.showOnlyInput
            ? expandedSection
            : []}
        </Container>
      </React.Fragment>
    );
  }

  private toggleExpand() {
    if (this.props.onArrowClick) {
      this.props.onArrowClick();
    }
  }

  private applyBtnClick() {
    this.props.applyOffer(this.props.offerCode);
  }

  private closeBtnClick() {
    this.props.applyOffer("");
  }

  private offerCodeChange(e: any) {
    this.props.offerCodeChange(e.target.value);
  }
}


Offer.defaultProps = {
  offerResponse: {
    status: "200",
    codetype: "DISCOUNT_CASHBACK_OFFER",
    data: {
      Value: 100,
      Message: "You have availed a discount of Rs 100. And Rs 50 will be credited in your Wallet post journey.",
      Response: "SUCCESS",
      OType: "5",
    },
    cashBackData: [
      {
        Value: 50,
        Message: "You have availed a discount of Rs 100. And Rs 50 will be credited in your Wallet.",
        Response: "SUCCESS",
        OType: "2",
      },
    ],
    IsCashBackOffer: true,
  },
  offerImg: <img src="/staff_masks.png" />,
  arrow: "",
  offerCode: "TESTING",
  closeImg: "/cancel-grey.svg",
  offerCodeChange: (offerCode) => { },
  applyOffer: (offerCode) => { },
  isExpanded: false,
  onArrowClick: () => { },
  locale: {},
  appliedOffer: "",
  showOnlyInput: false,
  isOfferLoading: false,
};