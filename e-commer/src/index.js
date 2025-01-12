// src/index.js
import React from "react";
import ReactDOM from "react-dom/client"; // ReactDOM.createRoot'ı kullanmak için 'react-dom/client' eklenmeli
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
