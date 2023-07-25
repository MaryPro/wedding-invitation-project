import React from "react";
import Main from "./components/main/Main";
import { Wrapper } from "./App.styled";
import Invitation from "./components/invitation/Invitation";
import Schedule from "./components/schedule/Schedule";
import Map from "./components/map/Map";
import Details from "./components/details/Details";

function App() {
  return (
    <Wrapper>
      <Main />
      <Invitation />
      <Details />
      <Schedule />
      <Map />
    </Wrapper>
  );
}

export default App;
