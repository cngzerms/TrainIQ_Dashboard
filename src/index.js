import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DataProvider } from "./context";
import reportWebVitals from "./reportWebVitals";
import 'antd/dist/reset.css'
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <DataProvider>
    <App />
  </DataProvider>
);

reportWebVitals();
