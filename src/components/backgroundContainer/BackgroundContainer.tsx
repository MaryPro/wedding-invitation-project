import React from "react";
import {
  Background,
  WhiteContainer,
  Wrapper,
} from "./BackgroundContainer.styled";

const BackgroundContainer: React.FC<{
  children: JSX.Element | JSX.Element[];
}> = ({ children }) => {
  return (
    <Wrapper>
      <Background>
        <WhiteContainer>{children}</WhiteContainer>
      </Background>
    </Wrapper>
  );
};

export default BackgroundContainer;
