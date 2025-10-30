/* eslint-disable */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// src/index.js
const resizeObserverErr = /ResizeObserver loop limit exceeded/;
const resizeObserverErr2 = /ResizeObserver loop completed with undelivered notifications/;

window.addEventListener("error", (e) => {
  if (resizeObserverErr.test(e.message) || resizeObserverErr2.test(e.message)) {
    e.stopImmediatePropagation();
  }
});

window.addEventListener("unhandledrejection", (e) => {
  if (resizeObserverErr.test(e.reason?.message) || resizeObserverErr2.test(e.reason?.message)) {
    e.stopImmediatePropagation();
  }
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
