import React, {Component} from "react";
import styled from "styled-components";
import "../../fonts/iconfont.css";
import "../../fonts/iconfont.woff2";

export interface ICheckBoxProps {
  preferCheckBoxPropState?: boolean;
  checkboxState?: boolean;
  checkboxType?: string;
  handleSelection?: () => void;
  handleUnSelection?: () => void;
  radius?: number;
  width?: number;
  height?: number;
  background?: string;
  border?: string;
  customCheckBoxClass?: boolean;
  checkedClass?: string;
  uncheckClass?: string;
}

export interface ICheckBoxState {
  checked?: boolean;
}

const GlobalCheckbox = styled.span`
  position: relative;
`;

const SwitchLabel = styled.label<ICheckBoxProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border-radius: ${(props) => props.radius}px;
  background: #bebebe;
  cursor: pointer;

  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #fff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;

const SwitchInput = styled.input<ICheckBoxProps>`
  opacity: 0;
  z-index: 1;

  &:checked + ${SwitchLabel} {
    background: ${(props) => props.background};

    ::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: ${(props) => props.width ? props.width - 20 : null}px;
      transition: 0.2s;
    }
  }
`;

const DefaultCheckbox = styled.label<ICheckBoxProps>`
  &::before {
    content: " ";
    display: inline-block;
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    background-color: ${(props) => props.background};
    border: solid 1px ${(props) => props.border};
    border-radius: ${(props) => props.radius}px;
    cursor: pointer;
  }
`;

const DefaultSelectedCheckbox = styled.label<ICheckBoxProps>`
  font-size: ${(props) => props.width}px;
  color: ${(props) => props.border};
`;

export class CheckBox extends Component<ICheckBoxProps, ICheckBoxState> {
  constructor(props: ICheckBoxProps) {
    super(props);
    this.state = {
      checked: this.props.checkboxState,
    };
  }

  public handleClick = () => {
    if (!this.props.preferCheckBoxPropState) {
      this.setState((prevState) => ({
        checked: !prevState.checked,
      }));
    }
    const finalCheckBoxState = this.props.preferCheckBoxPropState
      ? this.props.checkboxState
      : this.state.checked;
    if (finalCheckBoxState) {
      if (this.props.handleSelection) {
        this.props.handleSelection();
      }
    } else {
      if (this.props.handleUnSelection) {
        this.props.handleUnSelection();
      }
    }
  }

  public selectedCheckbox = (
    checkboxType: any,
    checkboxState: any,
    checkboxStyle: any ,
    checkboxPropState: any ,
    preferCheckBoxPropState: any) => {
    const finalCheckBoxState = preferCheckBoxPropState ? checkboxPropState : checkboxState;
    switch (checkboxType) {
      case "DEFAULT_CHECKBOX": return finalCheckBoxState ?
        <DefaultSelectedCheckbox
          width={checkboxStyle.width}
          background={checkboxStyle.background}
          border={checkboxStyle.border}
          className={`icon ${ checkboxStyle.customCheckBoxClass ? checkboxStyle.checkedClass : "icon-checkedbox"}`}
          onClick={this.handleClick}
        />
        : <DefaultCheckbox
          width={checkboxStyle.width}
          height={checkboxStyle.height}
          radius={checkboxStyle.radius}
          background={checkboxStyle.background}
          border={checkboxStyle.border}
          className={`${ checkboxStyle.customCheckBoxClass && checkboxStyle.uncheckClass}`}
          onClick={this.handleClick}
        />
        ;

      case "SWITCH_CHECKBOX": return finalCheckBoxState ?
        <React.Fragment>
          <SwitchInput
            id="checkbox"
            type="checkbox"
            width={checkboxStyle.width}
            background={checkboxStyle.background}
            onClick={this.handleClick}
            checked={finalCheckBoxState}
          />
          <SwitchLabel
            htmlFor="checkbox"
            width={checkboxStyle.width}
            height={checkboxStyle.height}
            radius={checkboxStyle.radius}
          />
        </React.Fragment>
        : <React.Fragment>
          <SwitchInput
            id="checkbox"
            type="checkbox"
            width={checkboxStyle.width}
            background={checkboxStyle.background}
            onClick={this.handleClick}
            checked={finalCheckBoxState}
          />
          <SwitchLabel
            htmlFor="checkbox"
            width={checkboxStyle.width}
            height={checkboxStyle.height}
            radius={checkboxStyle.radius}
          />
        </React.Fragment>
        ;
    }
  }

  public render() {
    const checkboxType: any = this.props.checkboxType;
    const preferCheckBoxPropState: any = this.props.preferCheckBoxPropState;
    const checkboxStyle: any = {
      radius: this.props.radius,
      background: this.props.background,
      width: this.props.width,
      height: this.props.height,
      border: this.props.border,
      customCheckBoxClass: this.props.customCheckBoxClass,
      checkedClass: this.props.checkedClass,
      uncheckClass: this.props.uncheckClass,
    };

    return (
      <GlobalCheckbox>
        {this.selectedCheckbox(checkboxType,
          this.state.checked,
          { ...checkboxStyle } ,
          this.props.checkboxState ,
          preferCheckBoxPropState)}
      </GlobalCheckbox>
    );
  }
}
