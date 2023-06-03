import React from "react";
import AllRoutes from "./components/AllRoutes";
import { Navbar } from "./components/Navbar";
import "./styles/App.css";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Navbar />
      <Toaster />
      <AllRoutes />
    </>
  );
};

export default App;
