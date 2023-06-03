import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

export const usersUrl = `http://localhost:8000/api/users`;

export const candidatesUrl = `http://localhost:8000/api/candidates`;

export const Context = createContext({ isAuthenticated: false });
const ContextWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  let [user, setUser] = useState({});
  let [loading, setLoading] = useState(false);
  let localToken = JSON.parse(localStorage.getItem("token"));

  return (
    <Context.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        localToken,
        user,
        setUser,
        loading,
        setLoading,
      }}
    >
      <App />
    </Context.Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ContextWrapper />
  </BrowserRouter>
);
