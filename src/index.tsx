import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { store } from "./provider/store";
import { Provider } from "react-redux";
import "video-react/dist/video-react.css";
import "./coreui.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

serviceWorkerRegistration.unregister();
