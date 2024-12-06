import React from "react";
import SmoothScrollButton from "../../SmoothScrollButton";
import { useRecoilState } from "recoil";
import { burgerClicked } from "./user/layoutAtoms";

const Logo = ({ smoothScroll = true, cssClassNames = "" }) => {
  const [burgerBtnClicked, setBurgerBtnClicked] = useRecoilState(burgerClicked);

  const handleLogoClick = (event) => {
    if (smoothScroll) {
      setBurgerBtnClicked(false);
    } else {
      event.stopPropagation();
    }
  };

  return (
    <span
      className={cssClassNames}
      onClick={handleLogoClick}
    >
      <SmoothScrollButton
        btnName="JKMirano"
        targetId="top"
        cssClasses="font-bold text-cyan-900 relative z-20"
      />
    </span>
  );
};

export default Logo;
