import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

ReactDOM.render(<App />, document.getElementById("root"));

//serviceWorkerRegistration.register();
