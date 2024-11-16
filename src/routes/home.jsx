import React from "react";
import Banner from "../components/Banner";
import TechSkills from "../components/TechSkills";
import About from "../components/About";
import Header from "../components/layout/Header";

const home = () => {
  return (
    <div className="text-center font-montserrat">
      <div>
        <Header />
        <Banner />

        <div className="relative z-10">
          <About />
          <TechSkills />
        </div>
      </div>
    </div>
  );
};

export default home;
