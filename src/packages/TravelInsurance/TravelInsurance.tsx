import React, { Component } from "react";
import styled from "styled-components";

export interface IBenefitList {
  img?: string;
  title?: string;
  desc?: string;
}

export interface IRadioButtonProps {
  desc?: string;
  htmlfor?: string;
  id?: string;
  dataId?: string;
  dataIdBtn?: string;
  name?: string;
  value?: string;
}

export interface ITravelInsuranceProps {
  logo?: string;
  heading?: string;
  subHeading?: string;
  disClosureSheet?: string;
  disClosureLink?: string;
  benefitDetails?: IBenefitList[];
  radioItem?: IRadioButtonProps[];
  isOpen?: boolean;
  downArrowClass?: string;
  error?: string;
  note?: string;
  handleChange: (e: any) => void;
  defaultSelection?: any;
}

export interface ITravelCardState {
  isOpen?: boolean;
  defaultSelection?: any;
}

interface ITravelCardStyled {
  csDisplay?: boolean;
  csArrow?: boolean;
}

const InsuranceTop = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0.5rem 0;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
`;

const Head = styled.div`
  padding-left: 0.75rem;
`;

const Heading = styled.div`
  font-size: 1rem;
  color: #465986;
  font-weight: bold;
`;

const SubHeading = styled.div`
  font-size: 0.75rem;
  color: #465986;
  line-height: 1rem;
`;

const Container = styled.div`
  margin: 1rem 0 0 0;
  box-shadow: 0 0 4px 0 rgba(163, 163, 163, 0.5);
  position: relative;
  background: #fff;
  padding: 1rem 0 1rem 1rem;
`;

const InsuranceDiv = styled.div`
  margin: -1rem;
  padding: 0.75rem;
`;

const DisClosureSheet = styled.a<ITravelCardStyled>`
  text-decoration: none;
  color: #1034d9;
  font-size: 0.88rem;
  font-weight: bold;
  line-height: 1rem;
  padding: 1rem 0.5rem;
`;

const BenefitContainer = styled.div<ITravelCardStyled>`
  display: flex;
  align-items: flex-start;
  overflow-x: scroll;
  overflow-y: hidden;
  max-height: 9rem;
  padding-right: 1rem;

  ::-webkit-scrollbar {
    width: 0;
  }
`;

const BenefitDiv = styled.div`
  min-width: 9.5rem;
  height: 8.75rem;
  margin: 0 0.25rem;
  padding: 0.75rem;
  background-color: #fff5e5;
`;

const BenefitImage = styled.img`
  width: 2.875rem;
  height: 2.875rem;
`;

const BenefitTitleDiv = styled.div`
  color: #3e3e52;
  font-size: 0.875rem;
  line-height: 1.063rem;
`;

const BenefitPrice = styled.div`
  color: #3e3e52;
  font-size: 0.875rem;
  font-weight: bold;
  line-height: 1.063rem;
`;

const ViewHideData = styled.div<ITravelCardStyled>`
  display: ${(props) => props.csDisplay ? "inline" : "none"};
  transition: all 200ms ease;
  padding: 0 1rem 1rem 1rem;
`;

const ArrowClass = styled.div<ITravelCardStyled>`
  color: #3e3e52;
  align-self: start;
  transform: ${(props) => props.csArrow ? "rotate(0deg)" : "rotate(180deg)"};
  transition: all 200ms ease;
`;

const Wrapper = styled.div`
  height: auto;
  width: 100%;
  padding: 1rem 1rem 1rem 0.5rem;
  margin-right: 1rem;
`;

const RadioLabel = styled.label`
  display: block;
  position: relative;
  cursor: pointer;
  font-size: 0.88rem;
`;

const RadioMark = styled.span`
  position: absolute;
  top: 2px;
  left: 0;
  height: 18px;
  width: 18px;
  background-color: white;
  border-radius: 50%;
  border: 1px solid black;

  ::after {
    content: '';
    position: absolute;
    display: none;
    top: 2px;
    left: 2px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #d84e55;
  }
`;

const RadioButton = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;

  &:checked ~ ${RadioMark} {
    background-color: white;

    ::after {
      display: block;
    }
  }
`;

const ChoiceMsg = styled.div`
  margin-left: 2rem;
  line-height: 1.4em;
  font-size: 0.88rem;
`;

const Note = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.88rem;
  line-height: 1.4rem;
  padding: 12px 16px;
  color: #3e3e52;
  background: #e9f0ff;
  border: 1px solid #3e76d8;
  margin-bottom: 0.75rem;
  border-radius: 4px;
`;

const Error = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.88rem;
  line-height: 1.4rem;
  padding: 12px 16px;
  color: #3e3e52;
  background: #fae5e5;
  border: 1px solid #ef595a;
  margin-bottom: 0.75rem;
  border-radius: 4px;
`;

const RadioDiv = styled.div`
  margin-bottom: 1rem;
`;

const Notification = styled.div`
  margin-right: 1rem;
`;

export class TravelInsurance extends Component<ITravelInsuranceProps, ITravelCardState> {
  public static defaultProps: ITravelInsuranceProps;

  constructor(props: ITravelInsuranceProps) {
    super(props);
    this.state = {
      isOpen: this.props.isOpen,
      defaultSelection: this.props.defaultSelection,
    };
  }

  smapleFunc = (value: any) => {
    console.log(value);
  }

  public render() {
    const {
      logo,
      heading,
      subHeading,
      benefitDetails,
      radioItem,
      disClosureSheet,
      disClosureLink,
      downArrowClass,
      error,
      note,
    } = this.props;

    const insuranceBenefitDetails = benefitDetails ? benefitDetails.map((benefit, idx) => (
      <BenefitDiv key={idx}>
        <div> <BenefitImage src={benefit.img} alt={"icon"} /></div>
        <BenefitPrice>{benefit.title}</BenefitPrice>
        <BenefitTitleDiv className="benefitDiv">{benefit.desc}</BenefitTitleDiv>
      </BenefitDiv>
    )) : null;

    const insuranceSelection = (event: any) => {
      this.setState({
        defaultSelection: event.target.id,
      });

      this.props.handleChange(event);
    };

    const radioList = radioItem ? radioItem.map((item, key) => (
      <RadioDiv key={key}>
        <RadioLabel htmlFor={item.id} data-autoid={item.dataId}>
          <RadioButton
            id={item.id}
            type="radio"
            name={item.name}
            value={item.value}
            onChange={insuranceSelection}
            data-autoid={item.dataIdBtn}
            checked={this.state.defaultSelection === item.id}
          />
          <RadioMark />
        </RadioLabel>
        <ChoiceMsg dangerouslySetInnerHTML={{ __html: item && item.desc ? item.desc : "" }} />
      </RadioDiv>
    )) : null;

    return (
      <Container>
        <Notification>
          {error && <Error> {error} </Error>}
          {note && <Note> {note} </Note>}
        </Notification>
        <InsuranceDiv>
          <InsuranceTop>
            <Top>
              <div> <img src={logo} /> </div>
              <Head>
                <Heading> {heading} </Heading>
                <SubHeading> {subHeading} </SubHeading>
              </Head>
            </Top>
            <ArrowClass csArrow={this.state.isOpen} onClick={this.handleClick} className={`${downArrowClass}`} />
          </InsuranceTop>
          <ViewHideData csDisplay={this.state.isOpen}>
            <BenefitContainer> {insuranceBenefitDetails} </BenefitContainer>
            <DisClosureSheet href={disClosureLink} target="_blank"> {disClosureSheet} </DisClosureSheet>
          </ViewHideData>
          <Wrapper>
            {radioList}
          </Wrapper>
        </InsuranceDiv>
      </Container>
    );
  }

  private handleClick = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  }
}

TravelInsurance.defaultProps = {
  logo: "./img-insurance.svg",
  heading: "Be Safe, Be Insured!",
  subHeading: "Avail benefits with travel insurance",
  disClosureSheet: "View Product Disclosure Sheet",
  disClosureLink: "/extended/en/",
  downArrowClass: "icon icon-up-arrow",
  isOpen: true,
  defaultSelection: "",
  handleChange: (e) => { },
  benefitDetails: [
    {
      img: "/insurance_img3.svg",
      desc: "Personal Accident",
      title: "Upto RM 60,000",
    },
  ],
  radioItem: [
    {
      desc: "Yes, Protect my trip at ₹ 36 ( 3 passengers), I agree to the Terms and Conditions",
      htmlfor: "insChoiceYes",
      id: "insuranceConfirm",
      dataId: "insuranceYesButton",
      dataIdBtn: "insuranceYesButton",
    },
  ],
};

export default TravelInsurance;