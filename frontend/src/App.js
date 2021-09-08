import "./App.css";
import React from "react";
import HeroSection from "./Hero/HeroSection";
import Footer from "./Hero/Footer";
import HeaderBar from "./Hero/HeaderBar";

// import HeaderNav from "./vercel/HeaderNav";
// import MyGradient from "./vercel/MyGradient";

const App = () => {
  return (
    <div>
      {/* <HeaderNav />
      <MyGradient /> */}

      <HeaderBar />
      <HeroSection />
      <Footer />
    </div>
  );
};

export default App;
