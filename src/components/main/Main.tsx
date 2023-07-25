import React from "react";
import { Invite, Names, Wrapper } from "./Main.styled";
import DateAndTime from "./date-and-time/dateAndTime";
import Countdown from "./countdown/countdown";

const Main = () => {
  return (
    <Wrapper>
      <Names>
        <div className="name">Арсений</div>
        <div className="ampersand">&</div>
        <div className="name">Мария</div>
      </Names>

      <Invite>ПРИГЛАШАЕМ ОТМЕТИТЬ НАШУ СВАДЬБУ</Invite>
      <DateAndTime />
      <Countdown />
    </Wrapper>
  );
};

export default Main;
