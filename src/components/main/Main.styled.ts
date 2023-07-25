import { styled, keyframes } from "styled-components";

const appearReverse = keyframes`
  from {
    opacity: 0;
    transform: scale(2);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const Wrapper = styled.div`
  background-image: url(${process.env.PUBLIC_URL + "/image/main.png"});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Names = styled.div`
  animation: ${appearReverse} 2s 1 cubic-bezier(0.215, 0.61, 0.355, 1) 0s
    backwards;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //display: grid;
  //justify-items: center;
  //grid-template-rows: 2fr 1fr 2fr;
  font-size: 17px;
  font-family: "Agoniae", serif;
  max-height: 300px;

  && .ampersand {
    margin-top: -25px;
    margin-bottom: -3px;
    line-height: 9vh;
  }
  && .name {
    margin: 0;
    font-size: 25px;
  }

  @media only screen and (min-width: 481px) {
    font-size: 20px;
    && .name {
      font-size: 30px;
    }
  }

  @media only screen and (min-width: 1025px) {
    font-size: 30px;
    && .name {
      font-size: 40px;
    }
  }
`;

export const Invite = styled.p`
  animation: ${appearReverse} 2s 1 cubic-bezier(0.215, 0.61, 0.355, 1) 0s
    backwards;
  font-family: "UniNeueLight", serif;
  font-size: 12px;
  margin-top: 30px;
  font-weight: 600;
`;
