import React from "react";
import { guestList } from "./guest-list";
import BackgroundContainer from "../backgroundContainer/BackgroundContainer";
import { AgoniaeText, Photo, Text, Title } from "./Invitation.styled";
import '../../fonts/Agoniae.ttf';

const Invitation = () => {
  const searchParams = new URLSearchParams(document.location.search);
  const guestName: any = searchParams.get("guest");
  return (
    <BackgroundContainer>
      <Title>
        {guestList.has(guestName)
          ? guestList.get(guestName).title
          : "Дорогой Гость!"}
      </Title>
      <Text>
        {guestList.has(guestName)
          ? guestList.get(guestName).text
          : `С большой радостью приглашаем вас на наш первый семейный праздник - нашу свадьбу!
    Мы очень хотим, чтобы в этот день с нами рядом были наши самые близкие люди.
    Будем ждать вас 26 августа 2023 года в 17:00 в Лофт-пространстве Manolo, по адресу просп. Ленина, 50А.`}
      </Text>
      <Photo src={`${process.env.PUBLIC_URL + "/image/photo.jpg"}`} />
      <AgoniaeText>Ваши Жених и Невеста</AgoniaeText>
    </BackgroundContainer>
  );
};

export default Invitation;
