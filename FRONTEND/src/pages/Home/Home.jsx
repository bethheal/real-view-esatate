// src/pages/Home/Home.jsx
import React from "react";
import Hero from "./Hero";
import Services from "./Services";
import Properties from "./Properties";
import FAQ from "./FAQ";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Properties />
      <FAQ />
      <Contact />
    </div>
  );
};

export default Home;
