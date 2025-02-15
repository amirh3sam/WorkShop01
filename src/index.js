import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";  // Optional: Custom styles

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
} else {
  console.error("No root element found to render the app.");
}
