import React, { Fragment, Component } from "react";
import styled from "styled-components";

export interface IRadioButtonProps {
  radioList?: any;
  radioButtonType?: string;
  width?: number;
  height?: number;
  color?: string;
  background?: string;
  border?: string;
  radioStateValue?: any;
  handleChange?: any;
}
export interface IRadioButtonState {

  radioStateValue: number;
}

const SliderRadioButton = styled.div<IRadioButtonProps>`
  position: relative;
  width: 100%;
  height: ${(props) => props.height}rem;
  background: ${(props) => props.background};
  border: 1px solid ${(props) => props.border};
  border-radius: 3px;
`;

const SliderRadioButtonLabel = styled.label<IRadioButtonProps>`
  font-weight: bold;
  position: relative;
  z-index: 2;
  float: left;
  width: 50%;
  line-height: ${(props) => props.height}rem;
  font-size: 0.9rem;
  color: ${(props) => props.color};
  text-align: center;
  cursor: pointer;
`;

const SliderSelector = styled.span<IRadioButtonProps>`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  display: block;
  width: 50%;
  height: ${(props) => props.height}rem;
  border-radius: 2px;
  background-color: ${(props) => props.color};
  transition: all 0.2s;
`;

const SliderRadioButtonInput = styled.input<IRadioButtonProps>`
  display: none;

  &:checked + ${SliderRadioButtonLabel} {
    transition: 0.2s;
    color: #fff;
    transition-property: color;
  }

  &:checked + .sliderButton0 ~ ${SliderSelector} {
    transform: translateX(0%);
  }

  &:checked + .sliderButton1 ~ ${SliderSelector} {
    transform: translateX(100%);
  }
`;

const CustomRadioLabel = styled.label<IRadioButtonProps>`
  display: block;
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  font-size: 20px;
  margin-bottom: 5px;
`;

const CustomRadioSpan = styled.span<IRadioButtonProps>`
  position: absolute;
  top: 2px;
  left: 0;
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  background-color: ${(props) => props.background};
  border-radius: 50%;
  border: 1px solid ${(props) => props.border};

  ::after {
    content: "";
    position: absolute;
    display: none;
    top: 6px;
    left: 6px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: white;
  }
`;

const CustomRadioInput = styled.input<IRadioButtonProps>`
  position: absolute;
  opacity: 0;
  cursor: pointer;

  &:checked ~ ${CustomRadioSpan} {
    background-color: ${(props) => props.color};

    ::after {
      display: block;
    }
  }
`;

const DefaultRadioContainer = styled.div<IRadioButtonProps>`
  margin-top: 5px;
`;

const DefaultRadioLabel = styled.label<IRadioButtonProps>`
  margin-left: 5px;
`;

const DefaultRadioInput = styled.input<IRadioButtonProps>`
  position: relative;
`;

export class RadioButton extends Component<IRadioButtonProps, IRadioButtonState> {
  public static defaultProps: Partial<IRadioButtonProps>;
  constructor(props: IRadioButtonProps) {
    super(props);
    this.state = {
      radioStateValue: this.props.radioStateValue,
    };
  }

  public handleChange = (event: any) => {
    this.setState({
      radioStateValue: parseInt(event.target.value, 10),
    });
    this.props.handleChange();

  }

  public selectList(radioButtonType: any, lists: any, style: any) {
    if (radioButtonType === "DEFAULT_RADIOBUTTON") {
      const radioButtons: any = (lists.length > 0) ?
        lists.map((list: any, index: number) =>
          <DefaultRadioContainer key={index}>
            <DefaultRadioInput
              type="radio"
              onChange={this.handleChange}
              id={"default" + index}
              name={list.name}
              value={list.value}
              checked={list.value === this.state.radioStateValue ? true : false}
            />
            <DefaultRadioLabel
              htmlFor={"default" + index}
            >
              {list.displayName}
            </DefaultRadioLabel>
          </DefaultRadioContainer>) : null;
      return radioButtons;
    } else if (radioButtonType === "CUSTOM_RADIOBUTTON") {
      const radioButtons: any = (lists.length > 0) ?
        lists.map((list: any, index: number) =>
          <CustomRadioLabel key={index} htmlFor={"custom" + index}>
            {list.displayName}
            <CustomRadioInput
              type="radio"
              id={"custom" + index}
              name={list.name}
              value={list.value}
              color={style.color}
              checked={list.value === this.state.radioStateValue ? true : false}
              onChange={this.handleChange}
            />
            <CustomRadioSpan
              width={style.width}
              height={style.height}
              background={style.background}
            />
          </CustomRadioLabel>) : null;
      return radioButtons;
    }
  }

  public selectedRadioButton = (radioButtontype: any, radioStyle: any, radioList: any) => {
    switch (radioButtontype) {
      case "DEFAULT_RADIOBUTTON": return <React.Fragment>
        {this.selectList(radioButtontype, radioList, radioStyle)}
      </React.Fragment>;
      case "SLIDER_RADIOBUTTON": return <SliderRadioButton
        width={radioStyle.width}
        background={radioStyle.background}
        height={radioStyle.height}
        border={radioStyle.border}
      >

        <SliderRadioButtonInput
          background={radioStyle.background}
          color={radioStyle.color}
          name={radioList[0].name}
          id="slider0"
          type="radio"
          value={radioList[0].value}
          defaultChecked={true}
          checked={radioList[0].value === this.state.radioStateValue ? true : false}
          onChange={this.handleChange}

        />

        <SliderRadioButtonLabel
          htmlFor="slider0"
          width={radioStyle.width}
          height={radioStyle.height}
          background={radioStyle.background}
          color={radioStyle.color}
          className="sliderButton0"
        >
          {radioList[0].displayName}
        </SliderRadioButtonLabel>

        <SliderRadioButtonInput
          background={radioStyle.background}
          color={radioStyle.color}
          name={radioList[1].name}
          id="slider1"
          type="radio"
          value={radioList[1].value}
          checked={radioList[1].value === this.state.radioStateValue ? true : false}
          onChange={this.handleChange}
        />

        <SliderRadioButtonLabel
          htmlFor="slider1"
          height={radioStyle.height}
          background={radioStyle.background}
          color={radioStyle.color}
          className="sliderButton1"
        >
          {radioList[1].displayName}
        </SliderRadioButtonLabel>

        <SliderSelector
          height={radioStyle.height}
          color={radioStyle.color}
        />
      </SliderRadioButton>;
      case "CUSTOM_RADIOBUTTON": return <React.Fragment>
        {this.selectList(radioButtontype, radioList, radioStyle)}
      </React.Fragment>;
    }
  }

  public render() {
    const { radioButtonType, radioList } = this.props;
    const RadioButtonStyle: any = {
      width: this.props.width,
      height: this.props.height,
      border: this.props.border,
      color: this.props.color,
      background: this.props.background,
    };

    return (
      <Fragment>
        {this.selectedRadioButton(radioButtonType, { ...RadioButtonStyle }, radioList)}
      </Fragment>
    );
  }
}

RadioButton.defaultProps = {
  radioButtonType: "SLIDER_RADIOBUTTON",
  width: 200,
  height: 32,
  color: "red",
  background: "white",
  border: "purple",
  radioList: [
    {
      displayName: "Yes",
      value: 1,
    },
    {
      displayName: "No",
      value: 2,
    },
  ],
};

export default RadioButton;
