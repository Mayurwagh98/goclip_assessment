import React, { useEffect, useContext } from "react";
import AllRoutes from "./components/AllRoutes";
import { Navbar } from "./components/Navbar";
import "./styles/App.css";
import { Toaster } from "react-hot-toast";
import { Context, usersUrl } from "./main";
import axios from "axios";

const App = () => {
  const {
    isAuthenticated,
    setIsAuthenticated,
    setUser,
    localToken,
    setLoading,
  } = useContext(Context);
  useEffect(() => {
    setLoading(true);
    let config = {
      headers: {
        authorization: `Bearer ${localToken}`,
      },
    };
    axios
      .get(`${usersUrl}/myprofile`, config)
      .then((res) => {
        // console.log(res.data.user);
        setUser(res.data.user);
        setIsAuthenticated(true);
        setLoading(false);
      })
      .catch((e) => {
        setUser({});
        setIsAuthenticated(false);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar />
      <Toaster />
      <AllRoutes />
    </>
  );
};

export default App;
