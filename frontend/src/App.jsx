import React from "react";
import AllRoutes from "./components/AllRoutes";
import { Navbar } from "./components/Navbar";
import "./styles/App.css";

const App = () => {
  return (
    <>
      <Navbar />
      <AllRoutes />
    </>
  );
};

export default App;
