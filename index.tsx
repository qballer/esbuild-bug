import { FlagsProvider } from "react-unleash-flags";
import React from "react";
import ReactDOM from "react-dom";
console.log("process.env.NODE_ENV", process.env.NODE_ENV);


ReactDOM.render(
  <FlagsProvider >
    <div>Hello world</div>
  </FlagsProvider>
,
  document.getElementById("root")
);
