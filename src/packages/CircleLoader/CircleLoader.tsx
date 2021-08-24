import * as React from "react";
import styled from "styled-components";
import "./circleLoader.css";

interface ILoaderProps {
    showMask?: boolean;
    fontSize?: string;
    enlargeLoader?: boolean;
}

const StyledWrapper = styled.div<ILoaderProps>`
  width: ${ ({fontSize}) => fontSize ? fontSize : `100%`};
  height: ${ ({fontSize}) => fontSize ? fontSize : `100vh`};
  ${ ({showMask}) => showMask ? `width: 100%; height: 100vh;` : ``}
`;

const StyledLoader = styled.div<ILoaderProps>`
  width: ${ ({fontSize}) => fontSize ? fontSize : `100%`};
  height: ${ ({fontSize}) => fontSize ? fontSize : `100%`};
  ${ ({showMask}) => showMask ? `width: 100%; height: 100%; position: fixed; background: rgba(204, 204, 204, 0.7);` :
  `position: absolute; background: rgba(204, 204, 204, 0);`}
  z-index: 1000;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

/* tslint:disable max-line-length jsx-no-multiline-js*/
export const CircleLoader: React.FunctionComponent<ILoaderProps> = ({showMask, fontSize, enlargeLoader}) => {
    return (
        <StyledWrapper showMask={showMask} fontSize={fontSize}>
            <StyledLoader showMask={showMask} fontSize={fontSize}>
                {!enlargeLoader ? <div className="g-loader-anm">
                    <svg className="circular-anm" viewBox="25 25 50 50" transform-origin="center center">
                        <circle id="loaderCircle" className="path-anm" cx="50" cy="50" r="20" fill="none" strokeWidth="4" strokeMiterlimit="10" />
                        <animate xlinkHref="#loaderCircle" attributeName="stroke-dasharray" values="1, 200;89, 200;89, 200" begin="0s" dur="1.5s" repeatCount="indefinite"/>
                        <animate xlinkHref="#loaderCircle" attributeName="stroke-dashoffset" values="0;-35;-124" begin="0s" dur="1.5s" repeatCount="indefinite"/>
                    </svg>
                </div> :
                <div className="g-loader-anm g-loader-new">
                    <svg className="circular-anm" viewBox="0 0 80 80" transform-origin="center center">
                        <circle id="loaderCircle" className="path-anm" cx="50%" cy="50%" r="25" fill="none" strokeWidth="4" strokeMiterlimit="10" />
                        <animate xlinkHref="#loaderCircle" attributeName="stroke-dasharray" values="1, 200;89, 200;89, 200" begin="0s" dur="1.5s" repeatCount="indefinite"/>
                        <animate xlinkHref="#loaderCircle" attributeName="stroke-dashoffset" values="0;-35;-124" begin="0s" dur="1.5s" repeatCount="indefinite"/>
                    </svg>
                </div>}
        </StyledLoader>
      </StyledWrapper>
    );
};

CircleLoader.defaultProps = {
    showMask: false,
    enlargeLoader: false,
};
