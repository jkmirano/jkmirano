import React from "react";
import { useRecoilState } from "recoil";
import { burgerClicked } from "./layoutAtoms";

const BurgerBtn = () => {
  const [clicked, setClicked] = useRecoilState(burgerClicked);

  return (
    <button
      className={`burger-btn w-7 h-6 flex flex-col justify-between items-center bg-transparent border-none cursor-pointer p-0 relative z-20 md:hidden`}
      type="button"
      onClick={() => setClicked(!clicked)}
    >
      <div
        className={`bg-teal-900 w-full h-1 transition-transform ${
          clicked ? "rotate-45 relative top-[9px]" : ""
        }`}
      ></div>
      <div
        className={`bg-teal-900 w-full h-1 transition-all ${
          clicked ? "opacity-0 -mr-[100px]" : ""
        }`}
      ></div>
      <div
        className={`bg-teal-900 w-full h-1 transition-transform ${
          clicked ? "-rotate-45 relative bottom-[11px]" : ""
        }`}
      ></div>
    </button>
  );
};

export default BurgerBtn;
