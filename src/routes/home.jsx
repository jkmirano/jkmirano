import React from "react";
import Header from "../components/layout/nav/Header";
import Banner from "../components/layout/home/Banner";
import About from "../components/layout/home/About";
import TechSkills from "../components/layout/home/TechSkills";
import Projects from "../components/layout/home/Projects";

const home = () => {
  return (
    <div className="text-center font-montserrat">
      <div>
        <Header />
        <Banner />

        <div className="relative z-10">
          <About />
          <TechSkills />

          {/* @TODO Coming Soon */}
          {/* <Projects /> */}
        </div>
      </div>
    </div>
  );
};

export default home;
