import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Agoniae';
    src: local("Agoniae"), url("./fonts/Agoniae.ttf") format("truetype"), url('/fonts/Agoniae.woff') format('woff')

  }
  @font-face {
    font-family: 'UniNeueLight';
    src: url("./fonts/unineuelight.ttf") format("truetype");
  }
  @font-face {
    font-family: 'NexaScriptLight';
    src: url("./fonts/nexa-script-light.ttf") format("truetype");
  }
  @font-face {
    font-family: 'UniNeueHeavyItalic';
    src: url("./fonts/unineueheavy-italic.ttf") format("truetype");
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: serif;
  }
`;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
);
