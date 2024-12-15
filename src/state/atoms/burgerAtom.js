import { atom } from "recoil";

const burgerClickedState = atom({
  key: "burgerClicked",
  default: false,
});

export { burgerClickedState };
