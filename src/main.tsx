import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ScrollToTop from "./components/scrollToTop";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename="/MCC-Rebuild">
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
