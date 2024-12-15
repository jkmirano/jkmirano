import React from "react";
import SmoothScrollButton from "../../SmoothScrollButton";
import { useBurgerState } from "../../../state/hooks/useBurgerState";

const Logo = ({ smoothScroll = true, cssClassNames = "" }) => {
  const { setClick } = useBurgerState();

  const handleLogoClick = (event) => {
    if (smoothScroll) {
      setClick(false);
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
