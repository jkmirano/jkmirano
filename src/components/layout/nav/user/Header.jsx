import React, { useState, useEffect } from "react";
import NavList from "./NavList";
import BurgerBtn from "./BurgerBtn";
import { RecoilRoot } from "recoil";
import Logo from "../Logo";

const Header = () => {
  const [visibleDiv, setVisibleDiv] = useState("");
  const [navVisible, setNavVisible] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const divs = document.querySelectorAll("div[id]");
    let closestDiv = null;
    let closestDistance = Infinity;

    if (scrollPosition > 40) {
      setNavVisible(true);
    } else {
      setNavVisible(false);
    }

    divs.forEach((div) => {
      // Get the top position of the div relative to the viewport
      const rect = div.getBoundingClientRect();
      const distance = Math.abs(rect.top); // Calculate the distance from the top of the viewport

      // Find the div that is closest to the top of the screen
      if (distance < closestDistance) {
        closestDistance = distance;
        closestDiv = div;
      }
    });

    // If there's a div currently in view, log its ID
    if (closestDiv) setVisibleDiv(closestDiv.id);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`font-montserrat drop-shadow-md flex flex-wrap justify-between items-center px-5 py-3 fixed top-0 left-0 right-0 z-20 transition-colors ${
          navVisible ? "bg-white opacity-100" : "bg-transparent opacity-0"
        }`}
      >
        <RecoilRoot>
          <Logo />
          <NavList visibleDiv={visibleDiv} />
          <BurgerBtn />
        </RecoilRoot>
      </header>
    </>
  );
};

export default Header;
