import styled from "styled-components";

export const Wrapper = styled.div`
  text-align: center;
  margin-top: 80px;
  position: absolute;
  bottom: 40px;
  background: rgba(255, 255, 255, 0.8);
  font-size: 25px;
  font-family: NexaScriptLight, serif;

  && .text {
    font-size: 15px;
  }

  && .block {
    margin: 0 10px;
  }
`;

export const TimeLeftBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;

export const TimeAfterBlock = styled.div``;
