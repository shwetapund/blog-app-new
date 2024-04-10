import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
import ThemeProvider from "./components/ThemeProvider.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Provider store={store}>
      <ThemeProvider>
       <App />
      </ThemeProvider>

    </Provider>
  </>
);