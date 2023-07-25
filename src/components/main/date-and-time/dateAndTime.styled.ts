import styled from "styled-components";

export const Wrapper = styled.div`
  text-align: center;
  margin-top: 15px;
  position: relative;
  font-family: "UniNeueLight", serif;
  font-weight: 600;
`;

export const CenterBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 5px 0;
`;

export const TextWithTopBottomBorder = styled.div`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledDate = styled.div`
  margin: 0 10px;
  font-size: 28px;
  font-weight: bold;
  //color: rgba(204, 126, 236, 0.4);
`;
