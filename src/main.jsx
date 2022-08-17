import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { getStore } from "./redux/configStore";
import "bootstrap/dist/css/bootstrap.min.css";

const store = getStore();
window.store = store;

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
