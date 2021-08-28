import * as React from "react";
import styled from "styled-components";

interface INavProps {
  navText?: any;
  leftIconUrl?: string;
  rightIconUrl?: string;
  leftIconSize?: string;
  rightIconSize?: string;
  fontSize?: string;
  color?: string;
  isBold?: boolean;
  showBoxShadow?: boolean;
  showBottomBorder?: boolean;
  borderColor?: string;
  isSlideable?: boolean;
  slideContent?: string;
  slideIconUrl?: string;
  slideFontSize?: string;
  slideColor?: string;
  clickHandler?: () => void;
}

interface INavState {
    showSlideContent?: boolean;
}

interface IMappedStateProps extends INavProps, INavState {}

const StyledNavItem = styled.div<IMappedStateProps>`
  background-color: #fff;
  border-radius: 2px;
  padding: 1em 0.8em;
  position: relative;
  border: none;
  outline: none;
  color: ${ ({color}) => color };
  ${ ({showBoxShadow}) =>  showBoxShadow ? `box-shadow: 0 1px 4px #b1b1b1;` : `` }
  ${ ({showBottomBorder, borderColor, showSlideContent}) => showBottomBorder && !showSlideContent ?
  `border-bottom: 1px solid ${borderColor};` : `` }
`;

const IconImg1 = styled.img<INavProps>`
  width: ${ ({leftIconSize}) => leftIconSize };
  height: ${ ({leftIconSize}) => leftIconSize };
  display: inline-block;
  margin-right: 0.8em;
  vertical-align: top;
`;

const IconImg2 = styled.img<INavProps>`
  width: ${ ({rightIconSize}) => rightIconSize };
  height: ${ ({rightIconSize}) => rightIconSize };
  display: inline-block;
  position: absolute;
  right: 0.8em;
  top: 50%;
  transform: translateY(-50%);
`;

const NavText = styled.div<INavProps>`
  font-size: ${ ({fontSize}) => fontSize };
  display: inline-block;
  text-align: left;
  padding-right: 3em;
  font-weight: ${ ({isBold}) => isBold ? `bold` : `normal` };
`;

const StyledSlideContentWrapper = styled.div<IMappedStateProps>`
  color: ${ ({slideColor}) => slideColor };
  font-size: ${ ({slideFontSize}) => slideFontSize };
  transition: all 0.5s;
  max-height: ${ ({showSlideContent}) => showSlideContent ? `500px` : `0` };
  overflow: hidden;
  opacity: ${ ({showSlideContent}) => showSlideContent ? `1` : `0` };
`;

const StyledSlideContent = styled.div`
  padding: 0.8em 1.3em 0.8em 0;
`;

/* tslint:disable max-line-length*/
export class NavItem extends React.Component<INavProps, INavState> {
    public static defaultProps: INavProps;
    constructor(props: INavProps) {
        super(props);
        this.state = {
            showSlideContent: false,
        };
    }
    public onclickHandler = () => {
        if (this.props.isSlideable && this.props.slideContent) {
            this.setState((prevState) => ({
                showSlideContent: !prevState.showSlideContent,
            }));
        } else {
            // tslint:disable-next-line: no-unused-expression
            this.props.clickHandler && this.props.clickHandler();
        }
    }
    public render() {
        return (
            /* tslint:disable jsx-no-multiline-js*/
            <React.Fragment>
                <StyledNavItem onClick={this.onclickHandler} {...this.props} showSlideContent={this.state.showSlideContent}>
                    {this.props.leftIconUrl && <IconImg1 src={this.props.leftIconUrl} {...this.props} />}
                    <NavText {...this.props}>{this.props.navText}</NavText>
                    {this.props.rightIconUrl && <IconImg2 src={!this.state.showSlideContent ? this.props.rightIconUrl : this.props.slideIconUrl} {...this.props} />}
                </StyledNavItem>
                {this.props.isSlideable && <StyledSlideContentWrapper {...this.props} showSlideContent={this.state.showSlideContent}>
                    <StyledSlideContent>
                        {this.props.slideContent}
                    </StyledSlideContent>
                </StyledSlideContentWrapper>}
            </React.Fragment>
        );
    }
}

NavItem.defaultProps = {
    navText: "Default Text",
    leftIconUrl: "",
    rightIconUrl: "",
    leftIconSize: "1.8em",
    rightIconSize: "0.85em",
    fontSize: "1em",
    isBold: false,
    color: "#000",
    showBoxShadow: true,
    showBottomBorder: false,
    borderColor: "#f0f1f2",
    isSlideable: false,
    slideContent: "",
    slideIconUrl: "",
    slideFontSize: "0.75em",
    slideColor: "#7e7e8c",
};
