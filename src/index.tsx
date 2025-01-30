import React from "react";
import ReactDOMClient from "react-dom/client";
import App from "./page/App";
import { Provider } from "react-redux";
import { store } from "./services/store/store";
import "./index.scss";

const root = ReactDOMClient.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
