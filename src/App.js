import React from "react";
import Analytics from "./components/Analytics";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Price from "./components/Price";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Price />
    </div>
  );
}

export default App;
