import React from "react";
import Hero from "./components/Hero";
import { Navbar } from "./components/Navbar";
import ShopSection from "./components/ShopSection";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
    <ShopSection/>
      </main>

      <footer></footer>
    </>
  );
};

export default App;
