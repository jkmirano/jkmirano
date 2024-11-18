import React from "react";
import SmoothScrollButton from "../../SmoothScrollButton";
import { useRecoilState } from "recoil";
import { burgerClicked } from "./layoutAtoms";

const NavItem = ({ navItemName, navTargetId, navItemLinkCssClasses }) => {
  const [clicked, setClicked] = useRecoilState(burgerClicked);

  return (
    <span onClick={() => setClicked(false)}>
      <SmoothScrollButton
        btnName={navItemName}
        targetId={navTargetId}
        cssClasses={navItemLinkCssClasses}
      />
    </span>
  );
};

export default NavItem;
