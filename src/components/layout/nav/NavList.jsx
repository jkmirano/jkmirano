import React from "react";
import NavItem from "./NavItem";
import { useRecoilValue } from "recoil";
import { burgerClicked } from "./layoutAtoms";

const NavList = ({ visibleDiv }) => {
  const navItems = [
    {
      name: "About",
      targetId: "about",
      linkCssClasses: `transition-all text-cyan-900 ${
        visibleDiv === "about" ? "font-bold" : ""
      }`,
    },
    {
      name: "Tech & Skills",
      targetId: "tech",
      linkCssClasses: `transition-all text-cyan-900 ${
        visibleDiv === "tech" ? "font-bold" : ""
      }`,
    },
    {
      name: "Projects",
      targetId: "projects",
      linkCssClasses: `transition-all text-cyan-900 ${
        visibleDiv === "projects" ? "font-bold" : ""
      }`,
    },
    {
      name: "Job History",
      targetId: "jobHistory",
      linkCssClasses: `transition-all text-cyan-900 ${
        visibleDiv === "jobHistory" ? "font-bold" : ""
      }`,
    },
    {
      name: "Contact",
      targetId: "contact",
      linkCssClasses: `transition-all text-cyan-900 ${
        visibleDiv === "contact" ? "font-bold" : ""
      }`,
    },
  ];

  const burgerBtnClicked = useRecoilValue(burgerClicked);

  return (
    <nav>
      <ul
        className={`bg-white h-screen fixed flex-wrap flex-col justify-center items-center 
          -top-[100vh] left-0 right-0 transition-all flex md:bg-transparent md:h-auto md:static md:flex-row ${
            burgerBtnClicked
              ? "max-[767px]:z-10 max-[767px]:top-0 max-[767px]:opacity-100"
              : "max-[767px]:-z-10 max-[767px]:-top-[100vh] max-[767px]:opacity-0"
          }`}
      >
        {navItems.map((item, idx) => (
          <li
            className="text-xl my-2 md:text-base md:my-auto md:mx-3"
            key={`navItem-${idx}`}
          >
            <NavItem
              navItemName={item.name}
              navTargetId={item.targetId}
              navItemLinkCssClasses={item.linkCssClasses}
              keyIdx={idx}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavList;
