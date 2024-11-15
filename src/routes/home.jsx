import React, { useState, useEffect } from "react";
import Banner from "../components/Banner";
import TechSkills from "../components/TechSkills";
import About from "../components/About";
import Header from "../components/layout/Header";

const home = () => {
  const [navVisible, setNavVisible] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > window.innerHeight - 10) {
      setNavVisible(true);
    } else {
      setNavVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="text-center font-montserrat">
      <div>
        {navVisible && <Header />}

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
