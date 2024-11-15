import React from "react";

const Header = () => {
  return (
    <header className="bg-white flex flex-wrap justify-between items-center px-5 py-3 fixed top-0 left-0 right-0 z-20 transition-all">
      <a
        className="font-bold"
        href="#top"
      >
        JKMirano
      </a>
      <nav>
        <ul className="flex flex-wrap items-center">
          <li className="mx-3">
            <a href="#about">About</a>
          </li>
          <li className="mx-3">
            <a href="#tech">Tech &amp; Skills</a>
          </li>
          <li className="mx-3">
            <a href="#project">Projects</a>
          </li>
          <li className="mx-3">
            <a href="#jobHistory">Job History</a>
          </li>
          <li className="mx-3">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
