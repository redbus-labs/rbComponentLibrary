import React, {FunctionComponent} from "react";
import styled, { keyframes } from "styled-components";

interface ISpinLoaderProps {
  color?: string;
  size?: string;
}

/*Thanks to @tobiasahlin at http://tobiasahlin.com/spinkit/ */
const rotateplane = keyframes`
  0% { transform: perspective(120px); }
  50% { transform: perspective(120px) rotateY(180deg); }
  100% { transform: perspective(120px) rotateY(180deg)  rotateX(180deg); }
`;

const StyledLoader = styled.div<ISpinLoaderProps>`
  width: ${ ({size}) => size };
  height: ${ ({size}) => size };
  background-color: ${ ({color}) => color };
  animation: ${rotateplane} 1.2s infinite ease-in-out;
`;

const StyledLoaderWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10000001;
`;

export const SpinLoader: FunctionComponent<ISpinLoaderProps> = (props) => {
    return (
        <StyledLoaderWrapper>
            <StyledLoader {...props} />
        </StyledLoaderWrapper>
    );
};

SpinLoader.defaultProps = {
    color: "#ea4c53",
    size: "40px",
};
