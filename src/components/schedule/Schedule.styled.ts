import styled from "styled-components";

export const Wrapper = styled.div`
  background-image: url(${process.env.PUBLIC_URL + "/image/bb.png"});
  //background-size: contain;
  //background-repeat: no-repeat;
  //background-position: center;
  background-position: 50% 50%;
  background-size: cover;
  //height: 100vh;
  width: 100%;
`;
export const TextBox = styled.div`
  background: rgba(245, 245, 245, 0.5);
  //padding-bottom: 15px;
  font-family: "UniNeueLight", serif;
  //width: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px;
  font-weight: 600;
`;

export const ScheduleGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  gap: 20px 50px;
  margin-top: 20px;
`;

export const Title = styled.div`
  font-family: Agoniae, serif;
  font-size: 25px;
  text-align: center;
`;
