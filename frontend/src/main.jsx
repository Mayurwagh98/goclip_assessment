import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";


export const usersUrl = `http://localhost:8000/api/users`;

export const candidatesUrl = `http://localhost:8000/api/candidates`

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
