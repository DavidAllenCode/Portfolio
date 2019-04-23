import React from "react";
import ReactDOM from "react-dom";
import WebFont from "webfontloader";
import "../src/styles/css/style.css";
import Router from "./components/Router/Router";

WebFont.load({
  google: {
    families: ["Open Sans:300,400,600,700", "sans-serif"]
  }
});

ReactDOM.render(<Router />, document.getElementById("davidAllen"));
