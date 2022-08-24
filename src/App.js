import { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Home from "./components/home/Home";

const App = () => {
  return (
    <div className="w-100">
      <Header />
      <Home />
    </div>
  );
};

export default App;
