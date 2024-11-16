import React, { useState, useEffect } from "react";
import SmoothScrollButton from "../SmoothScrollButton";

const Header = () => {
  const [visibleDiv, setVisibleDiv] = useState("");
  const [navVisible, setNavVisible] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const divs = document.querySelectorAll("div[id]");
    let closestDiv = null;
    let closestDistance = Infinity;

    if (scrollPosition > window.innerHeight - 10) {
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
      {navVisible && (
        <header className="bg-white font-montserrat drop-shadow-md flex flex-wrap justify-between items-center px-5 py-3 fixed top-0 left-0 right-0 z-20">
          <SmoothScrollButton
            btnName="JKMirano"
            targetId="top"
            cssClasses="font-bold text-cyan-900"
          />
          <nav>
            <ul className="flex flex-wrap items-center">
              <li className="mx-3">
                <SmoothScrollButton
                  btnName="About"
                  targetId="about"
                  cssClasses={`transition-all text-cyan-900 ${
                    visibleDiv === "about" ? "font-bold" : ""
                  }`}
                />
              </li>
              <li className="mx-3">
                <SmoothScrollButton
                  btnName="Tech &amp; Skills"
                  targetId="tech"
                  cssClasses={`transition-all text-cyan-900 ${
                    visibleDiv === "tech" ? "font-bold" : ""
                  }`}
                />
              </li>
              <li className="mx-3">
                <SmoothScrollButton
                  btnName="Projects"
                  targetId="projects"
                  cssClasses={`transition-all text-cyan-900 ${
                    visibleDiv === "projects" ? "font-bold" : ""
                  }`}
                />
              </li>
              <li className="mx-3">
                <SmoothScrollButton
                  btnName="Job History"
                  targetId="jobHistory"
                  cssClasses={`transition-all text-cyan-900 ${
                    visibleDiv === "jobHistory" ? "font-bold" : ""
                  }`}
                />
              </li>
              <li className="mx-3">
                <SmoothScrollButton
                  btnName="Contact"
                  targetId="contact"
                  cssClasses={`transition-all text-cyan-900 ${
                    visibleDiv === "contact" ? "font-bold" : ""
                  }`}
                />
              </li>
            </ul>
          </nav>
        </header>
      )}
    </>
  );
};

export default Header;
