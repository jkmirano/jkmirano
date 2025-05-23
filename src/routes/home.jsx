import React from "react";
import Header from "../components/layout/nav/user/Header";
import Banner from "../components/layout/home/Banner";
import About from "../components/layout/home/About";
import TechSkills from "../components/layout/home/TechSkills";
import Projects from "../components/layout/home/Projects";
import Experience from "../components/layout/home/Experience";
import Contact from "../components/layout/home/Contact";

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

          <Experience />
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default home;
