import * as React from "react";
import styled from "styled-components";

interface IMenuIconProps {
    color: string;
    size: string;
    isIconClicked?: boolean;
    clickHandler: () => void;
}

const StyledDiv = styled.div<IMenuIconProps>`
  font-size: ${ ({size}) => size };
  position: relative;
  display: inline-block;
  width: 2em;
  height: 2em;
  cursor: pointer;
`;

const StyledSpan = styled.span<IMenuIconProps>`
  position: absolute;
  top: 50%;
  left: 0;
  display: block;
  width: 100%;
  height: 0.2em;
  margin-top: -0.1em;
  background-color: ${ ({color}) => color };
  transition: background-color 0.3s;

  &::before,
  &::after {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${ ({color}) => color };
    content: '';
    transition: transform 0.3s;
  }

  ${ ({isIconClicked}) => !isIconClicked ? `&::before {
    transform: translateY(-0.5em);
  }

  &::after {
    transform: translateY(0.5em);
  }` : `
  &::before {
	transform: translateY(-0.36em) translateX(-0.65em) rotate(-45deg) scaleX(0.6);
  }

  &::after {
	transform: translateY(0.36em) translateX(-0.65em) rotate(45deg) scaleX(0.6);
  }` }
`;

export default class HamburgerIcon extends React.Component<IMenuIconProps, {isIconClicked: boolean}> {
    public static defaultProps = {
        color: "#fff",
        size: "1em",
    };
    constructor(props: IMenuIconProps) {
        super(props);
        this.state = {
            isIconClicked: false,
        };
    }
    public menuClickHandler = () => {
        this.setState((prevState) => ({
            isIconClicked: !prevState.isIconClicked,
        }));
        this.props.clickHandler();
    }
    public render() {
        return (
            <StyledDiv {...this.props} onClick={this.menuClickHandler}>
                <StyledSpan {...this.props} isIconClicked={this.state.isIconClicked} />
            </StyledDiv>
        );
    }
}
