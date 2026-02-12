import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProivder } from "./ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProivder>
    <App/>
  </ThemeProivder>
)
