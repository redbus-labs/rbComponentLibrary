import * as React from "react";
import styled, { keyframes } from "styled-components";

interface ILoader {
    loaderColor?: string;
}
interface IBounce {
    loaderColor?: string;
}

const LoaderWrapper = styled.div`
  height: 32px;
`;

const Spinner = styled.div`
  margin: auto;
  width: 70px;
  text-align: center;
  margin-bottom: 0;
  background: transparent;
  padding: 0.7em 0;
`;

const BounceDelay = keyframes`
  0%,
  80%,
  100% {
    transform: scale(0);
  }

  40% {
    transform: scale(1);
  }
`;

const Bounce = styled.span<IBounce>`
  width: 12px;
  height: 12px;
  background-color: ${({ loaderColor }) => (loaderColor ? loaderColor : "#0f43a3")};
  border-radius: 100%;
  display: inline-block;
  animation: ${BounceDelay} 1.4s infinite ease-in-out both;

  &:nth-child(1) {
    animation-delay: -0.32s;
  }

  &:nth-child(2) {
    animation-delay: -0.16s;
  }
`;

export const Loader = (props: ILoader) => {
    const { loaderColor } = props;
    return (
        <LoaderWrapper>
            <Spinner>
                <Bounce loaderColor={loaderColor}/>
                <Bounce loaderColor={loaderColor}/>
                <Bounce loaderColor={loaderColor}/>
            </Spinner>
        </LoaderWrapper>
    );
};

Loader.defaultProps = {};
export default Loader;
