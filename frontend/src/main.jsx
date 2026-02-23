import React from "react"; // ✅ import React (safe for older JSX)
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
