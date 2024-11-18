import React from "react";
import SmoothScrollButton from "../../SmoothScrollButton";
import { useRecoilState } from "recoil";
import { burgerClicked } from "./layoutAtoms";

const Logo = () => {
  const [burgerBtnClicked, setBurgerBtnClicked] = useRecoilState(burgerClicked);

  return (
    <span onClick={() => setBurgerBtnClicked(false)}>
      <SmoothScrollButton
        btnName="JKMirano"
        targetId="top"
        cssClasses="font-bold text-cyan-900 relative z-20"
      />
    </span>
  );
};

export default Logo;
