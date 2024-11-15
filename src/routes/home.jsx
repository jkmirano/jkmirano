import React from "react";
import Banner from "../components/Banner";
import TechSkills from "../components/TechSkills";
import About from "../components/About";

const home = () => {
  return (
    <div className="text-center font-montserrat">
      <Banner />

      <div className="relative z-10">
        <About />
        <TechSkills />
      </div>
    </div>
  );
};

export default home;
