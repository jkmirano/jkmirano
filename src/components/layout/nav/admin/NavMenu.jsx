import React from "react";
import Logo from "../Logo";
import NavList from "./NavList";

const NavMenu = ({ cssClassNames }) => {
  return (
    <div className={cssClassNames}>
      <Logo
        smoothScroll={false}
        cssClassNames={`block p-4 mb-10`}
      />
      <NavList />
    </div>
  );
};

export default NavMenu;
