import "./App.css";
import React from "react";
import { ReactDOM } from "react-dom";
import Title from "./components/Title";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="bg-[#FFFFFF] font-sans">
      <Title />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
