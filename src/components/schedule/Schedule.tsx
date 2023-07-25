import React from "react";
import { ScheduleGrid, TextBox, Title, Wrapper } from "./Schedule.styled";

const Schedule = () => {
  return (
    <Wrapper>
      <TextBox>
        <Title>Свадебное расписание</Title>
        <ScheduleGrid>
          <div>17 00</div>
          <div>Фуршет</div>
          <div>18 00</div>
          <div>Торжественная роспись</div>
          <div>19 00</div>
          <div>Банкет</div>
          <div>23 00</div>
          <div>Завершение праздника</div>
        </ScheduleGrid>
      </TextBox>
    </Wrapper>
  );
};

export default Schedule;
