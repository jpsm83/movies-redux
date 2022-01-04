import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { store } from "../src/redux/store";
import { Provider } from "react-redux";
// import "./reset.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
