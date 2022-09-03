import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AppState from "./Context/AppState";
import {BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppState>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AppState>
);
