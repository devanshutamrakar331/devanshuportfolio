import React from "react";
import { useState } from "react";
import "./App.css";
import Hero2 from "./Components/Hero2";
import Hero3 from "./Components/Hero3";
import Hero4 from "./Components/Hero4";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import SimpleMap from "./Components/SimpleMap";
import { ReviewContext } from "./context/reviewContext";
import { ThemeContext } from "./context/themeContext";
import Navbar from "./Components/Navbar";
const App = () => {
  const [theme, setTheme] = useState("light");
  const [arr, setArr] = useState([]);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ReviewContext.Provider value={{ arr, setArr }}>
        <div className="main">
          <Navbar />
          <Hero />
          <Hero2 />
          <Hero3 />
          <Hero4 />
          <SimpleMap />
          <Footer />
        </div>
      </ReviewContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
