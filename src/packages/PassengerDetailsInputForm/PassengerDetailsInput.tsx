import React from "react";
import styled from "styled-components";
import Input from "../InputBox";
import RadioButton, { IRadioButtonProps } from "../RadioButton";
import Checkbox, { ICheckBoxProps } from "../Checkbox";

export interface IBussinessDetails {
    gstinLabel: string;
    gstinPlaceholder: string;
    businessNameLabel: string;
    businessNamePlaceholder: string;
    businessAddressLabel: string;
    businessAddressPlaceholder: string;
    businessEmailLabel: string;
    businessEmailPlaceholder: string;
}

export interface IPassengerDetails {
    name: string;
    gender: string;
    age: string;
    seat: number;
}

export interface IPassengerDetailsInputProps {
    passengerTitle: string;
    seatLabel: string;
    nameLabel: string;
    namePlaceholder: string;
    genderLabel: string;
    ageLabel: string;
    agePlaceholder: string;
    radioButton: IRadioButtonProps;
    passengerDetails: IPassengerDetails[];
    bussinessBookingLabel: string;
    checkbox: ICheckBoxProps;
    businessDetails: IBussinessDetails;
}

const Container = styled.div`
  margin: 1rem 0 0 0;
  box-shadow: 0 0 4px 0 rgba(163, 163, 163, 0.5);
  position: relative;
  padding: 1rem;
  background: #fff;
  margin-bottom: 1rem;
`;

const PassengerContainer = styled.div`
  margin: 1rem 0 0 0;
  box-shadow: 0 0 4px 0 rgba(163, 163, 163, 0.5);
  position: relative;
  padding: 1rem;
  background-color: #fdfdfd;
  margin-bottom: 1rem;
`;
const BussinessContainer = styled.div`
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 3px;
  background-color: #fdfdfd;
  border: solid 1px #eaeaea;
`;
const BusinessCheckboxDiv = styled.div`
  font-size: 14px;
  text-align: left;
  color: #9b9b9b;
`;

const PassengerTitleDiv = styled.div`
  color: #9b9b9b;
  font-size: 0.875rem;
`;

const PassengerTitleSpan = styled.span`
  padding-right: 0.5rem;
  color: #9b9b9b;
  vertical-align: middle;
  display: inline-block;
`;
const PassengerSeatSpan = styled.span`
  display: inline-block;
  border-left: 2px solid #b2b2b2;
  padding-left: 0.5rem;
  text-align: left;
  vertical-align: middle;
`;
const PassengerSeatNoSpan = styled.span`
  display: block;
`;

const PassengerInputDiv = styled.div`
  margin: 1rem 0;
`;
const PassengerNameInputDiv = styled.div`
  margin-bottom: 1rem;
  > input { width: 94%; }
`;
const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  text-align: left;
  color: rgba(74, 74, 74, 0.86);
  margin-bottom: 0.3rem;
`;

const GenderAgeContainer = styled.div`
  width: 100%;
  height: 5em;
  margin-top: 1rem;
`;

const GenderDiv = styled.div`
  display: inline-block;
  width: 62%;
  height: 5rem;
  vertical-align: top;
  > div { width: 87%; }
`;
const GenderLabelDiv = styled.div`
  margin-bottom: 0.5rem;
`;
const GenderLabel = styled.div`
  font-size: 0.875rem;
  color: #6d6d6d;
`;
const AgeDiv = styled.div`
  width: 38%;
  display: inline-block;
  vertical-align: top;
  margin-top: -0.1rem;
`;
const AgeInputDiv = styled.div`
  margin-bottom: 1rem;

  > input {
    font-size: 0.9rem;
    margin: 6px 0 0;
    width: 83%;
  }
`;
const BussinessBookingSpan = styled.span`
  margin-left: 0.5rem;
`;
const BusinessInputDiv = styled.div`
  margin-top: 1rem;
`;
const BussinessDiv = styled.div`
  margin-bottom: 1rem;

  > input {
    border-radius: 3px;
    background-color: #fff;
    border: 1px solid #bababa;
    width: 93.5%;
    margin: 0.7rem 0 0.3rem 0;
  }
`;

const BussinessLabel = styled.label`
  display: block;
  font-size: 0.875rem;
  text-align: left;
  color: rgba(74, 74, 74, 0.86);
`;
const defaultHandler = () => {
};

export const PassengerDetailsInput = (props: IPassengerDetailsInputProps) => {
    const {
        passengerTitle,
        seatLabel,
        nameLabel,
        namePlaceholder,
        genderLabel,
        ageLabel,
        agePlaceholder,
        radioButton,
        passengerDetails,
        bussinessBookingLabel,
        checkbox,
        businessDetails,
    } = props;

    const {
        handleSelection = defaultHandler,
        handleUnSelection = defaultHandler,
    } = checkbox;

    const [showBussinessInput, setBussinessInput] = React.useState(false);

    const passengerDetailsInput = passengerDetails.map((passenger, index) => (
        <PassengerContainer key={index}>
            <div >
                <PassengerTitleDiv>
                    <PassengerTitleSpan>{passengerTitle} {index + 1}</PassengerTitleSpan>
                    <PassengerSeatSpan>
                        <PassengerSeatNoSpan>{seatLabel} {passenger.seat}</PassengerSeatNoSpan>
                    </PassengerSeatSpan>
                </PassengerTitleDiv>
            </div>
            <PassengerInputDiv>

                <PassengerNameInputDiv>
                    <Label>{nameLabel}</Label>
                    <Input
                        placeholder={passenger.name ? passenger.name : namePlaceholder}
                    />
                </PassengerNameInputDiv>
                <GenderAgeContainer>
                    <GenderDiv>

                        <GenderLabelDiv>
                            <GenderLabel>{genderLabel}</GenderLabel>
                        </GenderLabelDiv>
                        <RadioButton
                            radioList={radioButton.radioList[index]}
                            radioButtonType={radioButton.radioButtonType}
                            height={radioButton.height}
                            width={radioButton.width}
                            color={radioButton.color}
                            background={radioButton.background}
                            border={radioButton.border}
                            radioStateValue={radioButton.radioStateValue}
                            handleChange={radioButton.handleChange}
                        />
                    </GenderDiv>
                    <AgeDiv>
                        <AgeInputDiv>
                            <Label>{ageLabel}</Label>
                            <Input
                                placeholder={passenger.age ? passenger.age : agePlaceholder}
                            />
                        </AgeInputDiv>
                    </AgeDiv>
                </GenderAgeContainer>
            </PassengerInputDiv>
        </PassengerContainer>
    ));
    const handleSelect = () => {
        setBussinessInput(false);
        handleSelection();
    };
    const handleUnselect = () => {
        setBussinessInput(true);
        handleUnSelection();
    };

    const bussinessDetailsInput = (showBussinessInput) ?
        <BusinessInputDiv>
            <BussinessDiv>
                <BussinessLabel>{businessDetails.gstinLabel}</BussinessLabel>
                <Input
                    placeholder={businessDetails.gstinPlaceholder}
                />
            </BussinessDiv>
            <BussinessDiv>
                <BussinessLabel>{businessDetails.businessNameLabel}</BussinessLabel>
                <Input
                    placeholder={businessDetails.businessNamePlaceholder}
                />
            </BussinessDiv>
            <BussinessDiv>
                <BussinessLabel>{businessDetails.businessAddressLabel}</BussinessLabel>
                <Input
                    placeholder={businessDetails.businessAddressPlaceholder}
                />
            </BussinessDiv>
            <BussinessDiv>
                <BussinessLabel>{businessDetails.businessEmailLabel}</BussinessLabel>
                <Input
                    placeholder={businessDetails.businessEmailPlaceholder}
                />
            </BussinessDiv>
        </BusinessInputDiv>
        : "";
    return (
        <Container>
            {passengerDetailsInput}
            <BussinessContainer>
                <BusinessCheckboxDiv>
                    <Label>
                        <Checkbox
                            checkboxType={checkbox.checkboxType}
                            checkboxState={checkbox.checkboxState}
                            radius={checkbox.radius}
                            width={checkbox.width}
                            height={checkbox.height}
                            handleSelection={handleSelect}
                            handleUnSelection={handleUnselect}
                        />
                        <BussinessBookingSpan> {bussinessBookingLabel}</BussinessBookingSpan>
                    </Label>
                </BusinessCheckboxDiv>
                {bussinessDetailsInput}
            </BussinessContainer>
        </Container>
    );
};
PassengerDetailsInput.defaultProps = {
    passengerTitle: "passenger",
    seatLabel: "Seat",
    nameLabel: "Name",
    namePlaceholder: "Enter your name",
    genderLabel: "Gender",
    ageLabel: "Age",
    agePlaceholder: "Enter age",
    radioButton: {
        radioList: [
            [
                {
                    displayName: "Male",
                    value: 1,
                    name: "passenger2",
                },
                {
                    displayName: "Female",
                    value: 2,
                    name: "passenger2",
                },
            ],
        ],
        type: "SLIDER_RADIOBUTTON",
        height: 2.4,
        width: 50,
        color: "#4f91d9",
        background: "#fff",
        border: "#4f91d9",
        radioStateValue: 1,
    },
    passengerDetails: [
        {
            name: "",
            age: "",
            gender: "Male",
            seat: 12,
        },
    ],
    checkbox: {
        checkboxType: "DEFAULT_CHECKBOX",
        checkboxState: false,
        radius: 2,
        height: 15,
        width: 15,
    },
    bussinessBookingLabel: "I am booking tickets for business travel",
    businessDetails: {
        gstinLabel: "GSTIN",
        gstinPlaceholder: "GSTIN",
        businessNameLabel: "Business Name",
        businessNamePlaceholder: "Business Name",
        businessAddressLabel: "Business Address",
        businessAddressPlaceholder: "Business Address",
        businessEmailLabel: "Business Email",
        businessEmailPlaceholder: "Business Email",
    },
};
export default PassengerDetailsInput;
