import React from "react";
import { Wrapper } from "./Map.styled";

const Map = () => {
  return (
    <Wrapper>
      <iframe
        src="https://yandex.com/map-widget/v1/?um=constructor%3A27001b14726d1f84be8bbac3f4f0e420c451f13099f1af1e39f7802340a6719a&amp;source=constructor"
        width="100%"
        height="100%"
      ></iframe>
    </Wrapper>
  );
};

export default Map;
