import React from "react";
import SmoothScrollButton from "../../../SmoothScrollButton";
import { useBurgerState } from "../../../../state/hooks/useBurgerState";

const NavItem = ({ navItemName, navTargetId, navItemLinkCssClasses }) => {
  const { setClick } = useBurgerState();

  return (
    <span onClick={() => setClick(false)}>
      <SmoothScrollButton
        btnName={navItemName}
        targetId={navTargetId}
        cssClasses={navItemLinkCssClasses}
      />
    </span>
  );
};

export default NavItem;
