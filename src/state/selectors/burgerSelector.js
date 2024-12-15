import { selector } from "recoil";
import { burgerClickedState } from "../atoms/burgerAtom";

export const isBurgerClickedSelector = selector({
  key: "isBurgerClicked",
  get: ({ get }) => {
    const burgerClicked = get(burgerClickedState);
    return burgerClicked;
  },
});
