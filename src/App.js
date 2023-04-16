import "./App.css";
import React, { useState } from "react";
import { ReactDOM } from "react-dom";
import Title from "./components/Title";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import userContext from "./utils/userContext";

function App() {
  const [user, setUser] = useState({
    name: "Arvind Pandit",
    email: "arvindpandit9808@gmail.com",
  });
  return (
    <div className="bg-[#FFFFFF] font-sans">
      <userContext.Provider
        value={{
          user: user,
          setUser: setUser,
        }}
      >
        <Title />
        <Outlet />
        <Footer />
      </userContext.Provider>
    </div>
  );
}

export default App;
