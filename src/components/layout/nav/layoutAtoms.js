import { atom } from "recoil";

const burgerClicked = atom({
  key: "burgerClicked",
  default: false,
});

export { burgerClicked };
