import React, { FunctionComponent } from "react";
import styled from "styled-components";

export interface IProceedComponentProps {
    locale?: any;
    finalAmt?: any;
    details?: any;
    conv_fee?: any;
    doneClick: (breakUp?: any) => void;
    expandicon?: string;
    minimiseicon?: string;
    custinfo?: boolean;
    showMask?: boolean;
    id?: any;
    seatImageDiv?: any;
}
interface IProceedComponentState {
    expandBreakUp?: boolean;
}
const ProceedWrap = styled.div`
  display: inline-flex;
  box-shadow: 0 -2px 4px 0 rgb(163 163 163 / 20%);
  width: 100%;
  z-index: 10001;
  background: white;
`;
const BreakUpSec = styled.div`
  width: 70%;
  margin: 0.5em 1em;
`;
const ProceedButton = styled.div`
  background: #d84e55;
  color: white;
  width: 30%;
  justify-content: center;
  display: flex;
  align-items: center;
`;
const AmountText = styled.span`
  font-weight: bold;
  padding-right: 0.5em;
`;
const AmountPart = styled.span`
  color: #d84e55;
  padding-right: 0.5em;
`;
const ConvinienceFee = styled.div`
  color: grey;
  font-size: 0.8em;
  margin-top: 0.5em;
`;
const ExpandedBreakup = styled.div`
  box-shadow: 0 -2px 4px 0 rgb(163 163 163 / 20%);
  width: 100%;
  font-size: 0.85em;
`;
const BreakUpItem = styled.div`
  padding: 0.75em 1em;
  line-height: 2em;
`;
const ProceedExpandWrap = styled.div<IProceedComponentProps>`
  bottom: 0;
  position: fixed;
  width: 100%;
  font-size: 0.95em;
  z-index: 10001;
  background: white;
  ${ ({showMask}) => showMask ? `background: rgba(87, 82, 82, 0.5); top: 0; left: 0; right: 0; bottom: 0;` : `` };
`;
const MinimiseIcon = styled.img``;
const ExpandIcon = styled.img``;

export class ProceedButtonComponent extends React.Component<IProceedComponentProps, IProceedComponentState> {
    public static defaultProps: IProceedComponentProps;
    constructor(props: IProceedComponentProps) {
        super(props);
        this.state = {
            expandBreakUp: false,
        };
    }
    public expandClick = () => {
        const value = !this.state.expandBreakUp;
        this.setState({
            expandBreakUp: value,
        });
    }
    public render() {
      const {
        locale,
        finalAmt,
        minimiseicon,
        expandicon,
        conv_fee,
        details,
        custinfo,
        showMask,
        seatImageDiv,
        id } = this.props;
        return (<ProceedExpandWrap id={id || null} {...this.props}>
                    {seatImageDiv}
                    {this.state.expandBreakUp && <ExpandedBreakup>
                        <BreakUpItem>
                            {details}
                        </BreakUpItem>
                    </ExpandedBreakup>}
                    <ProceedWrap>
                        <BreakUpSec>
                            <div>
                                <AmountText>{locale.conv_amount || "Amount:"}</AmountText>
                                <AmountPart>{finalAmt}</AmountPart>
                                <span  onClick={this.expandClick} >
                                    {this.state.expandBreakUp ?
                                        <MinimiseIcon src={minimiseicon} />
                                        : <ExpandIcon src={expandicon}/>
                                    }
                                </span>
                            </div>
                            <ConvinienceFee>
                                {(locale.conv_fee || "Convenience Fee") + " " + conv_fee + " " + (locale.conv_added || "added")}
                            </ConvinienceFee>
                        </BreakUpSec>
                        <ProceedButton
                          onClick={this.props.doneClick ? this.props.doneClick :
                            (breakUp) => this.props.doneClick(breakUp)}
                        >
                            {custinfo ? locale.conv_proceed || "PROCEED" : locale.conv_done || "DONE"}
                        </ProceedButton>
                    </ProceedWrap>
            </ProceedExpandWrap>);
    }
}
