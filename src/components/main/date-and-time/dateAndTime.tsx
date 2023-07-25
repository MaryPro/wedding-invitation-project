import React from "react";
import {
  CenterBlock,
  StyledDate,
  TextWithTopBottomBorder,
  Wrapper,
} from "./dateAndTime.styled";
// @ts-ignore
import EditSvg from "../icons/edit.svg";

const DateAndTime = () => {
  return (
    <Wrapper>
      <div>АВГУСТ</div>
      <CenterBlock>
        <TextWithTopBottomBorder>СУББОТА</TextWithTopBottomBorder>
        <StyledDate>26</StyledDate>
        <TextWithTopBottomBorder>17:00</TextWithTopBottomBorder>
      </CenterBlock>
      <div>2023</div>
    </Wrapper>
  );
};

export default DateAndTime;
