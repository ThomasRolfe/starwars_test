import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

ReactDOM.hydrate(<App myCharacters={[]} />, document.getElementById("app"));
