import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "./app";

let { characters } = context;

const html = ReactDOMServer.renderToString(<App myCharacters={characters} />);

dispatch(html);
