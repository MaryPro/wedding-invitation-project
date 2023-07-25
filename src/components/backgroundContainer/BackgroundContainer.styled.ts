import styled from "styled-components";

export const Wrapper = styled.div`
  background-image: url(${process.env.PUBLIC_URL + "/image/bg.png"});
  background-size: contain;
  width: 100%;
  font-family: "UniNeueLight", serif;
  font-size: 16px;
  font-weight: 600;
`;

export const Background = styled.div`
  background-image: url(${process.env.PUBLIC_URL + "/image/back.png"});
  background-size: contain;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const WhiteContainer = styled.div`
  margin: 20px;
  background-color: rgba(255, 255, 255, 0.91);
  max-width: 550px;
  height: auto !important;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
