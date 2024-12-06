import React from "react";
import Logo from "../Logo";
import NavList from "./NavList";
import { RecoilRoot } from "recoil";

const NavMenu = ({ cssClassNames }) => {
  return (
    <div className={cssClassNames}>
      <RecoilRoot>
        <Logo
          smoothScroll={false}
          cssClassNames={`block p-4 mb-10`}
        />
        <NavList />
      </RecoilRoot>
    </div>
  );
};

export default NavMenu;
