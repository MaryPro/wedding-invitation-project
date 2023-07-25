import React, { useEffect, useState } from "react";
import { TimeAfterBlock, TimeLeftBlock, Wrapper } from "./countdown.styled";

const Countdown = () => {
  const weddingDate = new Date(1693051200000);
  const [timeLeft, setTimeLeft] = useState<{
    weeks?: number;
    days?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
  }>({
    weeks: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [timeAfter, setTimeAfter] = useState<{ days?: number }>({ days: 0 });

  const calculateTime = () => {
    const difference = weddingDate.getTime() - new Date().getTime();
    let timeLeft = {};
    let timeAfter = {};

    if (difference > 0) {
      timeLeft = {
        weeks: Math.floor(difference / (1000 * 60 * 60 * 24 * 7)),
        days: Math.floor((difference / (1000 * 60 * 60 * 24)) % 7),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeAfter = {
        days: Math.abs(Math.floor(difference / (1000 * 60 * 60 * 24))),
      };
    }

    return { timeLeft, timeAfter };
  };

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTime().timeLeft);
      setTimeAfter(calculateTime().timeAfter);
    }, 1000);
  });

  return (
    <Wrapper>
      {Object.keys(timeAfter).length === 0 ? (
        <TimeLeftBlock>
          <div className="block">
            {timeLeft.weeks} <div className="text">недель</div>
          </div>
          <div className="block">
            {timeLeft.days} <div className="text">дней</div>
          </div>
          <div className="block">
            {timeLeft.hours} <div className="text">часов</div>
          </div>
          <div className="block">
            {timeLeft.minutes} <div className="text">минут</div>
          </div>
          <div className="block">
            {timeLeft.seconds} <div className="text">секунд</div>
          </div>
        </TimeLeftBlock>
      ) : (
        <TimeAfterBlock>
          {timeAfter.days} дней уже прошло со свадьбы
        </TimeAfterBlock>
      )}
    </Wrapper>
  );
};

export default Countdown;
