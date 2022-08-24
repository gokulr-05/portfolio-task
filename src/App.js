import { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";

const App = () => {
  return (
    <div className="w-100">
      <Header />
      <Home />
      <About />
      {/* <Skills /> */}
    </div>
  );
};

export default App;
