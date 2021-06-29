import "./App.css";
import React from "react";
import HeroSection from "./mycomponents.js/HeroSection";
import Footer from "./mycomponents.js/Footer";
import HeaderBar from "./mycomponents.js/HeaderBar";
const App = () => {
  return (
    <div>
      <HeaderBar />
      <HeroSection />
      <Footer />
    </div>
  );
};

export default App;
