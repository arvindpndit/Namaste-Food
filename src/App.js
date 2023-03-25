import "./App.css";
import React from "react";
import { ReactDOM } from "react-dom";
import Title from "./components/Title";
import Body from "./components/Body";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <Title/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
